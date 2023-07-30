import { mongooseConnect } from "@/components/lib/mongoose";
import { Order } from "@/components/models/Order";
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
import { buffer } from 'micro';

export const config = {
  api: {
    bodyParser: false
  }
}

export default async function handler(req, res) {
  await mongooseConnect();

  const sig = req.headers['stripe-signature'];
  const reqBuffer = await buffer(req)

  let event;

  try {
    event = stripe.webhooks.constructEvent(reqBuffer, sig, process.env.STRIPE_ENDPOINT_SECRET);
  } catch (err) {
    res.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }

  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed':
      const checkoutCompleted = event.data.object;
      const orderId = checkoutCompleted.metadata.orderId;

      if(checkoutCompleted.payment_status === "paid" && orderId) {
        await Order.findByIdAndUpdate(orderId, {
          status: "paid"
        })
      }

      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  res.status(200).send('order updated');
} 

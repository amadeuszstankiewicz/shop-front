import { mongooseConnect } from "@/components/lib/mongoose";
import { Order } from "@/components/models/Order";
import { Product } from "@/components/models/Product";
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if(req.method !== 'POST') {
    res.json('Only POST request are accepted.')
    return;
  }

  const {first_name, last_name, email, country, city, postal_code, address, products} = req.body;

  await mongooseConnect();
  const realProductIds = [...new Set(products.split(','))];
  const realProductsData = await Product.find({_id:realProductIds})

  let orderProducts = [];
  for(const productId of realProductIds) {
    const realProductData = realProductsData.find(product => product._id.toString() === productId)
    const realQuantity = products.split(',').filter(p => p === productId)?.length || 0

    if(realQuantity > 0 && realProductData) {
        orderProducts.push({
            quantity: realQuantity,
            price_data: {
                currency: 'USD',
                product_data: {
                    name: realProductData.title
                },
                unit_amount: realProductData.price * 100
            }
        })
    }
  }

  const order = await Order.create({
    orderProducts,
    firstName: first_name,
    lastName: last_name,
    email,
    country,
    city,
    postalCode: postal_code,
    address,
    status: "pending",
  })

  const stripeSession = await stripe.checkout.sessions.create({
    line_items: orderProducts,
    mode: 'payment',
    customer_email: email,
    success_url: process.env.HOME_URL + '/thanks-for-shopping',
    cancel_url: process.env.HOME_URL + '/cart?payment=fail',
    metadata: { orderId: order._id.toString() }
  })


  res.json({
    url: stripeSession.url
  })
}

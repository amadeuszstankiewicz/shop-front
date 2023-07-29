import { mongooseConnect } from "@/components/lib/mongoose";
import { Product } from "@/components/models/Product";

export default async function handler(req, res) {
  await mongooseConnect();
  const cartProductIds = req.body.cartIds;
  res.json(await Product.find({_id:cartProductIds}));
}

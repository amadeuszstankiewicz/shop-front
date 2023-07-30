import { mongooseConnect } from "@/components/lib/mongoose";
import { Product } from "@/components/models/Product";

export default async function handler(req, res) {
  await mongooseConnect();
  const sort = req.body.sort;
  const category = req.body.category;

  console.log(sort, category)

  let query = {};
  if (category) {
    if(category !== 'Choose a category') {
      query.category = category;
    }
  }

  let sortOptions = {};
  if (sort) {
    const [field, order] = sort.split('_');
    sortOptions[field] = order === 'asc' ? 1 : -1;
  }
  
  try {
    const products = await Product
      .find(query)
      .sort(sortOptions)
      .exec();

    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Something went wrong' });
  }
}

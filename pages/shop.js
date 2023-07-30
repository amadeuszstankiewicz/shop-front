import Header from "@/components/Header";
import Filters from "@/components/shop/Filters";
import ShopItems from "@/components/shop/ShopItems";
import ShopHero from "@/components/shop/ShopHero";
import Footer from "@/components/Footer";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Product } from "@/components/models/Product";
import { mongooseConnect } from "@/components/lib/mongoose";
import { Category } from "@/components/models/Category";
import { useState } from "react";
import axios from "axios";


export default function Shop({products, categories}) {
  const [loadedProducts, setLoadedProducts] = useState(products)

  async function sortShop(sort, category) {
    await axios.post('/api/shop', {sort, category})
      .then(res => {
        setLoadedProducts(res.data)
      })
  };

  return (
    <div className="relative overflow-hidden min-h-screen">
      <Header />
      <ShopHero />
      <Filters 
        categories={categories}
        onSortChange={sortShop}
        />
      <ShopItems products={loadedProducts}/>
      <Footer />
      <ToastContainer 
        newestOnTop={true}
        />
    </div>
  )
}

export async function getServerSideProps() {

  await mongooseConnect();
  const products = await Product.find()
    .limit(20)

  const categories = await Category.find()
    .limit(20)

  return {
    props: { 
      products: JSON.parse( JSON.stringify( products ) ),
      categories: JSON.parse( JSON.stringify( categories ) )
    }
  }
}
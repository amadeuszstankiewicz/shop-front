import Header from "@/components/Header";
import Filters from "@/components/shop/Filters";
import ShopItems from "@/components/shop/ShopItems";
import ShopHero from "@/components/shop/ShopHero";
import Footer from "@/components/Footer";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Product } from "@/components/models/Product";
import { mongooseConnect } from "@/components/lib/mongoose";

export default function Shop({products}) {

    return (
        <div className="relative overflow-hidden min-h-screen">
            <Header />
            <ShopHero />
            <Filters />
            <ShopItems products={products}/>
            <Footer />
            <ToastContainer 
                newestOnTop={true}/>
        </div>
    )
}

export async function getServerSideProps() {

  await mongooseConnect();
  const products = await Product.find()
    .limit(20)

  return {
    props: { 
        products: JSON.parse( JSON.stringify( products ) ) 
    }
  }
}
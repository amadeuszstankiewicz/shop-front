import FeaturedProducts from "@/components/FeaturedProducts";
import FigureInfo from "@/components/FigureInfo";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { mongooseConnect } from "@/components/lib/mongoose";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Product } from "@/components/models/Product";
import Head from "next/head";

export default function Home({ latestProducts }) {

  return (
    <div className="relative overflow-hidden">
      <Head>
        <title>Fantasy Figurines</title>
      </Head>
      <Header />
      <Hero />
      <FigureInfo />
      <FeaturedProducts products={latestProducts} />
      <Footer />
      <ToastContainer 
        newestOnTop={true}/>
    </div>
  );
}


export async function getServerSideProps() {

  await mongooseConnect();
  const latestProducts = await Product.find()
    .sort({ createdAt: -1 })
    .limit(10)

  return {
    props: { latestProducts: JSON.parse( JSON.stringify( latestProducts ) ) }
  }
}
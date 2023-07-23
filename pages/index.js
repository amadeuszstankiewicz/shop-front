import FeaturedProducts from "@/components/FeaturedProducts";
import FigureInfo from "@/components/FigureInfo";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <Header />
      <Hero />
      <FigureInfo />
      <FeaturedProducts />
      <Footer />
      <ToastContainer 
        newestOnTop={true}/>
    </div>
  );
}
import Header from "@/components/Header";
import Filters from "@/components/shop/Filters";
import ShopItems from "@/components/shop/ShopItems";
import ShopHero from "@/components/shop/ShopHero";
import Footer from "@/components/Footer";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Shop() {

    return (
        <div className="relative overflow-hidden min-h-screen">
            <Header />
            <ShopHero />
            <Filters />
            <ShopItems />
            <Footer />
            <ToastContainer 
                newestOnTop={true}/>
        </div>
    )
}
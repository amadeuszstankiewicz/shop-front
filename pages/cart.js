import Header from "@/components/Header";
import CartHero from "@/components/cart/CartHero";
import CartContent from "@/components/cart/CartContent";
import Footer from "@/components/Footer";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Head from "next/head";

export default function Cart() {

    return (
        <div className="relative overflow-hidden min-h-screen">
            <Head>
                <title>Fantasy Figurines - Cart</title>
            </Head>
            <Header />
            <CartHero />
            <CartContent />
            <Footer />
            <ToastContainer 
                newestOnTop={true}/>
        </div>
    )
}

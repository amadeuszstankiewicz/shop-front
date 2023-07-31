import Header from "@/components/Header";
import CartHero from "@/components/cart/CartHero";
import CartContent from "@/components/cart/CartContent";
import Footer from "@/components/Footer";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";
import { CartContext } from "@/components/contexts/CartContext";
import { useContext } from "react";
import Link from "next/link";
import Head from "next/head";

export default function Cart() {
    const { clearCart } = useContext(CartContext)

    useEffect(() => {
        clearCart()
    }, [])

    return (
        <div className="relative overflow-hidden min-h-screen">
            <Head>
                <title>Fantasy Figurines - Thanks for shopping!</title>
            </Head>
            <Header />
            <div className="relative min-h-[180px] flex items-center justify-center mt-[68px]">
                <div className="absolute w-full h-[180px] overflow-hidden z-0">
                    <img src="/images/typ/background.jpg" className="absolute w-full h-auto min-h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"  alt=""/>
                </div>
                <h1 className="text-white z-10 h-fit py-8 text-5xl font-bold text-center custom-text-shadow">
                    Thanks for shopping!
                </h1>
            </div>
            <div className="relative container mx-auto my-5 min-h-[calc(100vh-248px)]">
                <div className="bg-white rounded p-5 mx-auto max-w-[720px] text-center">
                    <h2 className="h-fit py-8 text-2xl font-bold text-center">Did you forget something?</h2>
                    
                    <Link href={'/shop'}
                        className="rounded-full w-fit bg-cyan-500 text-white py-2 px-6 font-bold transition ease-linear hover:bg-cyan-400">
                            Go to shop
                    </Link>
                </div>
            </div>
            <Footer />
            <ToastContainer 
                newestOnTop={true}/>
        </div>
    )
}

import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "./contexts/CartContext";

export default function Header() {
    const {cartProducts} = useContext(CartContext)

    return (
        <div className="absolute w-screen h-fit z-50">
            <header className="container mx-auto">
                <nav className="text-white flex justify-between py-5 px-5 text-xl font-bold">
                    <div className="flex gap-8">
                        <Link href={'/'} className="custom-text-shadow">Home</Link>
                        <Link href={'/shop'} className="custom-text-shadow">Shop</Link>
                    </div>
                    
                    <div className="flex gap-8">
                        {/*
                        <Link href={'/account'} className="custom-text-shadow">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </Link>
                        */}
                        <Link href={'/cart'} className="relative custom-text-shadow">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>
                            {
                                cartProducts?.length > 0 ? (
                                    <div className="absolute top-[-5px] left-[-5px] font text-sm bg-cyan-500 px-1.5 w-5 h-5 rounded-3xl flex justify-center items-center">
                                        {cartProducts.length}
                                    </div>
                                ) : (
                                    null
                                )
                            }
                        </Link>
                    </div>
                </nav>
            </header>
        </div>
    )
}
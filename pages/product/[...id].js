import { mongooseConnect } from "@/components/lib/mongoose";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Product } from "@/components/models/Product";
import { useContext } from "react";
import { CartContext } from "@/components/contexts/CartContext";
import Link from "next/link";
import DecorationImage from "@/components/utils/DecorationImage";
import { useEffect } from "react";
import { useState } from "react";

function getRandomElementFromArray(array) {
    if (!Array.isArray(array) || array.length === 0) {
      return null;
    }
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

export default function ProductPage({product}) {
    const { addProduct } = useContext(CartContext);


    const decorationElements = ['amulet_1.png', 'amulet_2.png', 'amulet_3.png', 'amulet_4.png',
                                'axe_1.png', 'axe_2.png', 'helmet_1.png', 'potion_1.png',
                                'shield_1.png', 'shield_2.png'];

    const [decorationDisplayArray, setDecorationDisplayArray] = useState([])

    useEffect(() => {
        let displayArray = []

        for(let i=0; i<4; i++) {
            displayArray.push( getRandomElementFromArray(decorationElements.filter(item => !displayArray.includes(item))) )
        }
        setDecorationDisplayArray(displayArray)
    }, [])



    function addToCart(e) {
        e.preventDefault();

        addProduct(product._id)

        toast.success(<Link href={'/cart'}><strong>{product.title}</strong> successfully added to cart!</Link>, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        })
    }

    return (
        <div className="relative overflow-hidden min-h-screen">
            <Header />

            <div className="relative container mx-auto py-5 mt-[68px] min-h-[calc(100vh-148px)]">
                <h1 className="text-4xl text-white font-bold text-center">{product?.title}</h1>

                <div className="flex flex-wrap my-5">
                    <div className="w-full p-5 sm:w-1/2">
                        <img 
                            className="max-h-[500px] w-auto rounded-lg mx-auto transition ease-linear group-hover:scale-110" 
                            src={`${product.images[0]}`} 
                            alt=""
                        />
                    </div>
                    <div className="w-full p-5 sm:w-1/2">
                        <div className="relative h-fit bg-zinc-300 p-5 text-black rounded-lg drop-shadow-xl">
                            {product.description}
                            <div className="flex mt-4 justify-center items-center gap-3">
                                <div className="text-2xl font-bold">
                                    {product.price}$
                                </div>
                                <button 
                                    className="flex gap-2 items-center rounded-full bg-cyan-500 text-white py-2 px-6 font-bold transition ease-linear hover:bg-cyan-400"
                                    onClick={(event) => addToCart(event)}>
                                    BUY
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                    </svg>

                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                
                {
                    decorationDisplayArray.length > 0 ? (
                        <>
                            <DecorationImage
                            x={15} y={15} 
                            w={150} h={150} 
                            z={-1}
                            content={decorationDisplayArray[0]}
                            />
                            <DecorationImage
                                x={95} y={85} 
                                w={150} h={150} 
                                z={-1}
                                content={decorationDisplayArray[1]}
                                />
                            <DecorationImage
                                x={45} y={65} 
                                w={150} h={150} 
                                z={-1}
                                content={decorationDisplayArray[2]}
                                />
                            <DecorationImage
                                x={85} y={9} 
                                w={150} h={150} 
                                z={-1}
                                content={decorationDisplayArray[3]}
                                />
                        </>
                    ) : (
                        null
                    )
                }
            </div>


            <Footer />
            <ToastContainer 
                newestOnTop={true}/>
        </div>
    )
}


export async function getServerSideProps( context ) {
    await mongooseConnect();

    const { id } = context.query 
    const product = await Product.findById(id)

    return {
        props: { product: JSON.parse( JSON.stringify( product ) ) }
    }
}
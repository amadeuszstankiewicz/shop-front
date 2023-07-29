import { toast } from 'react-toastify';
import Link from "next/link";
import { useContext } from 'react';
import { CartContext } from './contexts/CartContext';

export default function ProductBrick({product}) {
    const { addProduct } = useContext(CartContext);

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

    if(!product) {
        return;
    }

    return (
        <div className="bg-white rounded-md m-5 flex flex-col align-center group">
            <Link href={`/product/${product._id}`} className="flex flex-col align-center group">
                <img 
                    className="max-w-screen h-auto p-5 transition ease-linear group-hover:scale-110" 
                    src="/images/hero-bg.png" 
                />

                <div className="text-center text-xl font-bold">
                    {product.title}
                </div>
                <div className="text-center font-bold">
                    {product.price}$
                </div>
                <button 
                    className="flex gap-2 items-center rounded-full bg-cyan-500 text-white py-2 px-6 font-bold mx-auto transition ease-linear my-4 hover:bg-cyan-400"
                    onClick={(event) => addToCart(event)}>
                    BUY
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>

                </button>
            </Link>
        </div>
    )
}
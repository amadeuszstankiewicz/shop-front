import { useState } from 'react';
import { toast } from 'react-toastify';
import Link from "next/link";

export default function ProductBrick() {
    const [id, setId] = useState('dq78gd78qhbwyiugd889qw78d');
    const [title, setTitle] = useState('Product title');
    const [price, setPrice] = useState(121.12);


    function addToCart(e) {
        e.preventDefault();
        console.log('add to cart')

        toast.success(`${title} successfully added to cart!`, {
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
        <Link href={`/product/${id}`}>
            <div className="bg-white rounded-md m-5 flex flex-col align-center group">
                <img 
                    className="max-w-screen h-auto p-5 transition ease-linear group-hover:scale-110" 
                    src="/images/hero-bg.png" 
                />

                <div className="text-center text-xl font-bold">
                    {title}
                </div>
                <div className="text-center font-bold">
                    {price}$
                </div>
                <button 
                    className="rounded-full bg-cyan-500 text-white py-2 px-6 font-bold mx-auto transition ease-linear my-4 hover:bg-cyan-400"
                    onClick={(event) => addToCart(event)}>
                    BUY
                </button>
            </div>
        </Link>
    )
}
import { useContext, useEffect, useState } from "react"
import { CartContext } from "../contexts/CartContext"
import axios from "axios"
import Link from "next/link"
import { toast } from "react-toastify"
import { useRouter } from "next/router"

export default function CartContent() {
    const {cartProducts, addProduct, removeProduct} = useContext(CartContext)

    const router = useRouter()

    const [products, setProducts] = useState(null)
    const [totalCart, setTotalCart] = useState(0)

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [address, setAddress] = useState('');

    const [placeOrderLoader, setPlaceOrderLoader] = useState(false)

    useEffect(() => {
        if(cartProducts.length > 0) {
            axios.post('/api/cart', {cartIds: cartProducts})
                .then(res => {
                    setProducts(res.data)
        
                    if(res.data) {
                        let total = 0
                        for(const product_id of cartProducts) {
                            const price = res.data.find(product => product._id === product_id)?.price || 0;
                            total += price;
                        }
                        setTotalCart(total)
                    }
                })
        } else {
            setProducts([])
        }
    }, [cartProducts])

    function addToCart(title, id) {
        addProduct(id)
        
        toast.success(<Link href={'/cart'}><strong>{title}</strong> successfully added to cart!</Link>, {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        })
    }

    function removeFromCart(title, id) {
        removeProduct(id)
        console.log('remove', id)
        
        toast.info(<Link href={'/cart'}><strong>{title}</strong> successfully removed from cart.</Link>, {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        })
    }

    async function placeOrder() {

        setPlaceOrderLoader(true)
        const res = await axios.post('/api/checkout', {
            first_name: firstName, 
            last_name: lastName, 
            email, 
            country, 
            city, 
            postal_code: postalCode, 
            address, 
            products: cartProducts.join(',')
        })
        setPlaceOrderLoader(false)

        if(res.data.url) {
            window.location = res.data.url;
        }
    }

    return (
        <div className="relative container mx-auto my-5 min-h-[calc(100vh-248px)]">
            {
                router?.query?.payment === 'fail' ? (
                    <div className="w-full">
                        <div className="bg-white rounded p-5 w-fit flex gap-3 font-bold text-red-600 mx-auto mb-5 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                            </svg>
                            Payment failed!
                        </div>
                    </div>
                ) : (
                    null
                )
            }
            <div className="flex gap-5 flex-wrap">
                <div className="grow bg-white rounded p-5">
                    <h2 className="text-2xl font-bold my-5">Cart products</h2>
                    
                    {
                        products === null ? (
                            <div className="relative w-24 h-24 overflow-hidden rounded flex justify-center items-center">
                                <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                </svg>
                            </div>
                        ) : (
                            products.length > 0 ? (
                                <>
                                    <table className="min-w-full text-left text-sm font-light">
                                        <thead
                                            className="border-b bg-white font-medium">
                                            <tr>
                                                <th scope="col" className="px-2 py-4">PRODUCT</th>
                                                <th scope="col" className="px-2 py-4">NAME</th>
                                                <th scope="col" className="px-2 py-4">QUANTITY</th>
                                                <th scope="col" className="px-2 py-4">PRICE</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {products.map(product => (
                                            <tr key={product._id} className="">
                                                <td className="w-24 h-24 px-2 py-3">
                                                    <Link href={`/product/${product._id}`}>
                                                        <img src={product.images[0]} className="rounded" alt="" />
                                                    </Link>
                                                </td>
                                                <td className="px-2 font-bold">
                                                    <Link href={`/product/${product._id}`}>
                                                        {product.title}
                                                    </Link>
                                                </td>
                                                <td className="px-2 font-bold">
                                                    <div className="flex gap-1 items-center h-full">
                                                        <button 
                                                            onClick={() => removeFromCart(product.title, product._id)} 
                                                            className="text-red-600 transition ease-linear hover:text-red-400">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                            </svg>
                                                        </button>
                                                        <span>
                                                            {cartProducts.filter(x => x==product._id).length}
                                                        </span>
                                                        <button 
                                                            onClick={() => addToCart(product.title, product._id)} 
                                                            className="text-green-600 transition ease-linear hover:text-green-400">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </td>
                                                <td className="px-2 font-bold">
                                                    {(product.price * cartProducts.filter(x => x==product._id).length).toFixed(2)}$
                                                </td>
                                            </tr>
                                        ))}
                                        <tr className="border-t">
                                            <td></td>
                                            <td className="px-2 font-bold">Total</td>
                                            <td></td>
                                            <td className="py-5 px-2 font-bold">{(totalCart).toFixed(2)}$</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </>
                            ) : (
                                <div className="flex flex-wrap gap-3 items-center">
                                    <div className="font-bold">
                                    Cart is empty 
                                    </div>
                                    <Link href={'/shop'}
                                        className="rounded-full w-fit bg-cyan-500 text-white py-2 px-6 font-bold transition ease-linear my-4 hover:bg-cyan-400">
                                            Go to shop
                                    </Link>
                                </div>
                            )
                        )
                    }
                </div>
                {
                    cartProducts.length > 0 ? (
                        <div className="grow-0 w-full bg-white rounded p-5 lg:w-[420px]">
                            <h2 className="text-2xl font-bold my-5">Payment data</h2>

                            <div className="text-red-500 font-bold text-sm">This is a test site, do not give your real data.</div>

                            <div className="form flex flex-col gap-2">
                                <input 
                                    type="text" name="first_name" placeholder="First name*"
                                    className="bg-slate-100 w-full rounded p-2 border-solid border-2 border-slate-300"
                                    value={firstName}
                                    onChange={e => setFirstName(e.target.value)}
                                    />
                                <input 
                                    type="text" name="last_name" placeholder="Last name*"
                                    className="bg-slate-100 w-full rounded p-2 border-solid border-2 border-slate-300"
                                    value={lastName}
                                    onChange={e => setLastName(e.target.value)}
                                    />
                                <input 
                                    type="text" name="email" placeholder="Email*"
                                    className="bg-slate-100 w-full rounded p-2 border-solid border-2 border-slate-300"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    />
                                <input 
                                    type="text" name="country" placeholder="Country*"
                                    className="bg-slate-100 w-full rounded p-2 border-solid border-2 border-slate-300"
                                    value={country}
                                    onChange={e => setCountry(e.target.value)}
                                    />
                                <input 
                                    type="text" name="city" placeholder="City*"
                                    className="bg-slate-100 w-full rounded p-2 border-solid border-2 border-slate-300"
                                    value={city}
                                    onChange={e => setCity(e.target.value)}
                                    />
                                <input 
                                    type="text" name="postal_code" placeholder="Postal*"
                                    className="bg-slate-100 w-full rounded p-2 border-solid border-2 border-slate-300"
                                    value={postalCode}
                                    onChange={e => setPostalCode(e.target.value)}
                                    />
                                <input 
                                    type="text" name="address" placeholder="Street Address*"
                                    className="bg-slate-100 w-full rounded p-2 border-solid border-2 border-slate-300"
                                    value={address}
                                    onChange={e => setAddress(e.target.value)}
                                    />
                                
                                <input type="hidden" name="products" value={cartProducts.join(',')} />
                                
                                <div className="text-blue-500 font-bold text-sm">
                                    <p>You can use test credit card data:</p>
                                    <p>Card number: 4242 4242 4242 4242</p>
                                    <p>Card ends: 12/29</p>
                                    <p>Card CVC: 123</p>
                                </div>
                                <button 
                                    className="flex gap-2 items-center rounded-full bg-green-600 text-white py-2 px-6 font-bold mx-auto transition ease-linear my-4 hover:bg-green-500"
                                    onClick={placeOrder}
                                    disabled={placeOrderLoader}
                                    >
                                    {
                                        placeOrderLoader ? (
                                            <svg aria-hidden="true" className="w-6 h-6 mx-7 text-gray-200 animate-spin fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                            </svg>
                                        ) : (
                                            <>
                                                Place order
                                            </>
                                        )
                                    }
                                </button>
                                
                            </div>
                        </div>
                    ) : (
                        null
                    )
                }
            </div>
        </div>
    )
}
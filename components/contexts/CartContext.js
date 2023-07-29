import { useEffect } from "react";
import { useState } from "react";

const { createContext } = require("react");

export const CartContext = createContext({});

export function CartContextProvider({children}) {
    //local storage
    let realLocalStorage = null;
    let loadedProducts = [];
    if(typeof window !== "undefined") {
        realLocalStorage = window.localStorage

    }
    
    const [cartProducts, setCartProducts] = useState( loadedProducts )

    useEffect(() => {
        if( realLocalStorage && realLocalStorage.getItem('cart') ) {
            setCartProducts(JSON.parse(realLocalStorage.getItem('cart')))
        }
    }, [])

    useEffect(() => {
        if( cartProducts?.length > 0 ) {
            realLocalStorage.setItem('cart', JSON.stringify(cartProducts))
        }
    }, [cartProducts])

    function addProduct(productId) {
        setCartProducts(prev => [...prev, productId])
    }
    
    function removeProduct(productId) {
        setCartProducts(prev => {
            let indexToRemove = prev.indexOf(productId);
            if (indexToRemove !== -1) {
                return prev.filter((val,index) => index !== indexToRemove);
            }
            return prev
        })
    }

    function clearCart() {
        setCartProducts([])
    }

    return (
        <CartContext.Provider value={{cartProducts, setCartProducts, addProduct, removeProduct, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}
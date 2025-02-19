import {React, createContext, useState} from 'react';

const ShoppingCartContext = createContext()

const ShoppingCartProvider = ({children}) => {
    const [cart, setCart] = useState(0)
    const [count, setCount] = useState(0)

    const addProduct = (product) => {

    }

    const removeProduct = (productId) => {

    }

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )

}

export {ShoppingCartContext, ShoppingCartProvider};
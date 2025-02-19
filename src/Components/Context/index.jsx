import {React, createContext, useState} from 'react';

const ShoppingCartContext = createContext()

const ShoppingCartProvider = ({children}) => {
    const [cart, setCart] = useState()

    const addProduct = (product) => {

    }

    return (
        <ShoppingCartContext.Provider value={{}}>
            {children}
        </ShoppingCartContext.Provider>
    )

}

export {ShoppingCartContext, ShoppingCartProvider};
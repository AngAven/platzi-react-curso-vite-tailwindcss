import {createContext, useState} from 'react';

const ShoppingCartContext = createContext()

const ShoppingCartProvider = ({children}) => {
    // Shopping cart count
    const [count, setCount] = useState(0)
    // Product Detail Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)
    // Product Detail Show Product
    const [productToShow, setProductToShow] = useState({})
    // Sopping Cart products
    const [cartProducts, setCartProducts] = useState([])

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )

}

export {ShoppingCartContext, ShoppingCartProvider};
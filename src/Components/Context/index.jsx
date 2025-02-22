import {createContext, useEffect, useState} from 'react';
import axios from "axios";

const ShoppingCartContext = createContext()

// eslint-disable-next-line react/prop-types
const ShoppingCartProvider = ({children}) => {
    // Product Detail Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)
    // Checkout side menu
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)
    // Product Detail Show Product
    const [productToShow, setProductToShow] = useState({})
    // Sopping Cart products
    const [cartProducts, setCartProducts] = useState([])
    // Shopping Cart My Order
    const [order, setOrder] = useState([])
    // Get Products
    const [items, setItems] = useState([])
    // Get products by title
    const [searchByTitle, setSearchByTitle] = useState()

    useEffect(() => {
        (async () => {
            const data = await axios
                .get('https://api.escuelajs.co/api/v1/products')
                .then(({data}) => data)
                .catch((e) => console.log('error', e))
            setItems(data)
        })()
    }, [])

    return (<ShoppingCartContext.Provider value={{
        isProductDetailOpen,
        openProductDetail,
        closeProductDetail,
        isCheckoutSideMenuOpen,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
        order,
        setOrder,
        items,
        setItems,
        searchByTitle,
        setSearchByTitle
    }}>
        {children}
    </ShoppingCartContext.Provider>)

}

export {ShoppingCartContext, ShoppingCartProvider};
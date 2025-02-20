import {createContext, useState} from 'react';

const ShoppingCartContext = createContext()

// eslint-disable-next-line react/prop-types
const ShoppingCartProvider = ({children}) => {
    // Product Detail Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)
    // Checkout side menu
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    const openCheckoutSideMenu = ()=> setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = ()=> setIsCheckoutSideMenuOpen(false)
    // Product Detail Show Product
    const [productToShow, setProductToShow] = useState({})
    // Sopping Cart products
    const [cartProducts, setCartProducts] = useState([])

    return (
        <ShoppingCartContext.Provider value={{
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
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )

}

export {ShoppingCartContext, ShoppingCartProvider};
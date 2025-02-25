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
    const [filteredItems, setFilteredItems] = useState([])
    // Get products by title
    const [searchByTitle, setSearchByTitle] = useState('')
    // Get products by category
    const [searchByCategory, setSearchByCategory] = useState('')

    useEffect(() => {
        (async () => {
            const data = await axios
                .get('https://api.escuelajs.co/api/v1/products')
                .then(({data}) => data)
                .catch((e) => console.log('error', e))
            setItems(data)
        })()
    }, [])

    const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item
            ?.title
            ?.toLowerCase()
            ?.includes(searchByTitle?.toLowerCase())
        )
    }

    const filteredItemsByCategory = (items, searchByCategory) => {
        return items?.filter(item => item
            ?.category
            ?.name
            ?.toLowerCase()
            ?.includes(searchByCategory?.toLowerCase())
        )
    }

    const filterBy = (type, items, searchByTitle, searchByCategory) => {
        if (type === 'BY_TILE') return filteredItemsByTitle(items, searchByTitle)

        if (type === 'BY_CATEGORY') return filteredItemsByCategory(items, searchByCategory)

        if (type === 'BY_TITLE_AND_CATEGORY') {
            // const firstFilter = filteredItemsByCategory(items, searchByCategory)
            // const secondFilter = filteredItemsByTitle(firstFilter, searchByTitle)
            return filteredItemsByCategory(items, searchByCategory).filter(item => item
                ?.title
                ?.toLowerCase()
                ?.includes(searchByTitle?.toLowerCase())
            )
        }

        if (!type) return items
    }

    useEffect(() => {
        if (searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchByTitle, searchByCategory))
        if (searchByTitle && !searchByCategory) setFilteredItems(filterBy('BY_TILE', items, searchByTitle, searchByCategory))
        if (!searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_CATEGORY', items, searchByTitle, searchByCategory))
        if (!searchByTitle && !searchByCategory) setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory))
    }, [items, searchByTitle, searchByCategory])

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
        setSearchByTitle,
        filteredItems,
        searchByCategory,
        setSearchByCategory,
    }}>
        {children}
    </ShoppingCartContext.Provider>)

}

export {ShoppingCartContext, ShoppingCartProvider};
import {XMarkIcon} from "@heroicons/react/24/outline/index.js";
import {useContext} from "react";
import {ShoppingCartContext} from "../Context/index.jsx";
import {OrderCard} from "../OrderCard/index.jsx";
import {totalPrice} from "../utils/index.js";
import './styles.css'

const CheckoutSideMenu = () => {

    const {
        cartProducts,
        setCartProducts,
        isCheckoutSideMenuOpen,
        closeCheckoutSideMenu,
        order,
        setOrder,
    } = useContext(ShoppingCartContext)

    const closeDetail = () => {
        if (isCheckoutSideMenuOpen) {
            closeCheckoutSideMenu()
        }
    }

    const handleChechout = () => {
        const orderTAdd = {
            date: Date.now(),
            products: cartProducts,
            totalProducts: cartProducts.length,
            totalPrice: totalPrice(cartProducts),
        }

        setOrder([...order, orderTAdd])
        setCartProducts([])
    }

    return (
        <aside
            className={`
            ${isCheckoutSideMenuOpen ? 'flex' : 'hidden'}
            product-detail flex-col fixed right-0 bg-white border border-black rounded
            checkout-side-menu
            `}
        >
            <div className={'flex justify-between items-center'}>
                <h2 className={'font-medium text-xl p-2'}>My Order</h2>
                <XMarkIcon
                    onClick={() => closeDetail()}
                    className={'w-8 cursor-pointer'}
                />
            </div>

            <div className={'checkout-side-menu order-card px-6 overflow-y-scroll'}>
                {cartProducts.map((item) => {
                    return <OrderCard
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        imageURL={item.images}
                    />
                })}
            </div>

            <div className={'px-6 mb-6'}>
                <p className={'flex justify-between items-center mb-2'}>
                    <span className={'font-light text-2xl'}>Total</span>
                    <span className={'font-medium text-2xl'}>${totalPrice(cartProducts)}</span>
                </p>
                <button
                    className={'bg-black py-3 text-white w-full rounded-lg'}
                    onClick={() => handleChechout()}
                >
                    Checkout
                </button>

            </div>
        </aside>
    );
};

export {CheckoutSideMenu};
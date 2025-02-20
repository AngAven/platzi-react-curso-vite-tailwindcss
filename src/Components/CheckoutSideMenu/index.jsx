import {XMarkIcon} from "@heroicons/react/24/outline/index.js";
import {useContext} from "react";
import {ShoppingCartContext} from "../Context/index.jsx";
import {OrderCard} from "../OrderCard/index.jsx";
import {totalPrice} from "../utils/index.js";
import './styles.css'

const CheckoutSideMenu = () => {

    const {
        cartProducts,
        isCheckoutSideMenuOpen,
        closeCheckoutSideMenu,
    } = useContext(ShoppingCartContext)

    const closeDetail = () => {
        if (isCheckoutSideMenuOpen) {
            closeCheckoutSideMenu()
        }
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

            <div className={'tyu px-6 overflow-y-scroll'}>
                {cartProducts.map((item)=> {
                    return <OrderCard
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        imageURL={item.images}
                    />
                })}
            </div>

            <div
                className={'px-6 '}
            >
                <p className={'absolute bottom-0 left-0 w-full bg-indigo-400 text-white z-10 shadow-[0px_-4px_20px_0px_#7c87ff]'}>
                    <div className={'flex justify-around'}>
                    <span className={'font-medium text-2xl'}>Total</span>
                    <span className={'font-medium text-2xl'}>${totalPrice(cartProducts)}</span>
                    </div>
                </p>

            </div>
        </aside>
    );
};

export {CheckoutSideMenu};
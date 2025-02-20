import {XMarkIcon} from "@heroicons/react/24/outline/index.js";
import {useContext} from "react";
import {ShoppingCartContext} from "../Context/index.jsx";
import './styles.css'


const CheckoutSideMenu = () => {
    // const notFoundImage = 'https://images.unsplash.com/photo-1609743522653-52354461eb27?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    const {
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
        </aside>
    );
};

export {CheckoutSideMenu};
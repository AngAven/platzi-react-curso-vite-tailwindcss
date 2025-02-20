import {XMarkIcon} from "@heroicons/react/24/outline/index.js";
import {useContext} from "react";
import {ShoppingCartContext} from "../Context/index.jsx";
import {OrderCard} from "../OrderCard/index.jsx";
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

            <div className={'px-6'}>
                {cartProducts.map((item)=> {
                    return <OrderCard
                        key={item.id}
                        title={item.title}
                        price={item.price}
                        imageURL={item.images}
                    />
                })}
            </div>
        </aside>
    );
};

export {CheckoutSideMenu};
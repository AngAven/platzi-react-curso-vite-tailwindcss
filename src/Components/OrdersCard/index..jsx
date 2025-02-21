import {XMarkIcon} from "@heroicons/react/24/outline/index.js";
import {useContext} from "react";
import {ShoppingCartContext} from "../Context/index.jsx";

// eslint-disable-next-line react/prop-types
const OrdersCard = ({title, imageURL, totalPrice, totoalProducts}) => {
    const imageNotFound = 'https://unsplash.com/photos/grayscale-photo-of-box-robot-on-table-ZnLprInKM7s'
    const {
        cartProducts,
        setCartProducts
    } = useContext(ShoppingCartContext)

    return (
        <div className={'flex justify-between items-center mb-3 overscroll-y-auto border-black'}>
            <p>
                <span>{date}</span>
                <span>{totalProducts}</span>
                <span>{totalPrice}</span>
            </p>
        </div>
    );
};

export {OrdersCard};
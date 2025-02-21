import {useContext} from "react";
import {ShoppingCartContext} from "../Context/index.jsx";

// eslint-disable-next-line react/prop-types
const OrdersCard = ({date, totalPrice, totalProducts}) => {
    // const {} = useContext(ShoppingCartContext)

    return (
        <div className={'flex justify-between items-center mb-3 overscroll-y-auto border-black'}>
            <p>
                <span>date: {new Date(date).toLocaleDateString()}</span>
                <span>Products: {totalProducts}</span>
                <span>Total price: {totalPrice}</span>
            </p>
        </div>
    );
};

export {OrdersCard};
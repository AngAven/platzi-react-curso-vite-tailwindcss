import {XMarkIcon} from "@heroicons/react/24/outline/index.js";
import {useContext} from "react";
import {ShoppingCartContext} from "../Context/index.jsx";

const OrderCard = ({id, title, imageURL, price }) => {
    const imageNotFound = 'https://unsplash.com/photos/grayscale-photo-of-box-robot-on-table-ZnLprInKM7s'
    const {
        cartProducts,
        setCartProducts
    } = useContext(ShoppingCartContext)

    const removeItemFromShoppingCart = (productID)=>{
        const filterCart = cartProducts.filter(item => item.id !== productID)
        setCartProducts(filterCart)
    }

    return (
        <div
            className={'flex justify-between items-center mb-3 overscroll-y-auto'}
        >
            <div className={'flex items-center gap-2 '}>
                <figure className={'w-20 h-20'}>
                    <img
                        className={'w-full h-full rounded-lg object-cover'}
                        src={imageURL ? imageURL[0] : imageNotFound}
                        alt={title}
                    />
                </figure>
                <p className={'text-sm font-light'}>
                    {title}
                </p>
            </div>
            <div
                className={'flex items-center gap-2 '}>
                <p className={'text-lg font-medium'}>
                    {price}
                </p>
                <XMarkIcon
                    onClick={removeItemFromShoppingCart}
                    className={'h-6 w-6 text-black cursor-pointer'}
                />
            </div>
        </div>
    );
};

export {OrderCard};
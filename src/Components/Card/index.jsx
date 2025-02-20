import {useContext} from 'react';
import {ShoppingCartContext} from '../Context'
import {PlusIcon} from "@heroicons/react/24/outline";
import {CheckIcon} from "@heroicons/react/24/outline";

// eslint-disable-next-line react/prop-types
const Card = ({product, title, price, category, image}) => {
    const  {
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        openProductDetail,
        setProductToShow,
        cartProducts,
        setCartProducts,
        closeProductDetail
    } = useContext(ShoppingCartContext)

    const icons = {
        add: () => <PlusIcon />,
        added: () =>  <CheckIcon/>
    }

    const showProduct = () => {
        setProductToShow(product)
        closeCheckoutSideMenu()
        openProductDetail()
    }

    const addProductsToCart = (e) => {
        e.stopPropagation()
        closeProductDetail()
        setCartProducts([...cartProducts, product])
        openCheckoutSideMenu()
    }

    const contRenderIcon = () => {
        const isInCard = cartProducts.filter(item => item.id === product.id).length > 0

        if (isInCard) {
            return (
                <div
                    onClick={(e) => e.stopPropagation()}
                    className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1 z-0'
                >
                    {icons.added()}
                </div>
            )
        } else {
            return (
                <div
                    className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'
                    onClick={(e) => addProductsToCart(e)}
                >
                    {icons.add()}
                </div>
            )
        }
    }

    return (
        <div
            onClick={showProduct}
            className='bg-white cursor-pointer w-56 h-60'
        >
            <figure
                className='relative mb-2 w-full h-4/5 cursor-pointer'
            >
                <span
                    className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'
                >{category}</span>
                <img
                    src={image}
                    alt=""
                    className={'w-full h-full object-cover rounded-lg'}
                />
                {contRenderIcon()}
            </figure>
            <p className='flex justify-between'>
                <span className='text-sm font-ligth'>{title}</span>
                <span className='text-lg font-ligth'>{price}</span>
            </p>
        </div>
    )
}

export {Card};
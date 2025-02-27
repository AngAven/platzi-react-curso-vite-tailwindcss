import './styles.css'
import {XMarkIcon} from '@heroicons/react/24/outline'
import {ShoppingCartContext} from "../Context/index.jsx";
import {useContext} from "react";

const ProductDetail = () => {
    const notFoundImage = 'https://images.unsplash.com/photo-1609743522653-52354461eb27?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    const {
        isProductDetailOpen,
        closeProductDetail,
        productToShow,
        setProductToShow,
    } = useContext(ShoppingCartContext)

    const closeDetail = () => {
        if (isProductDetailOpen) {
            setProductToShow({})
            closeProductDetail()
        }
    }

    return (
        <aside
            className={`
            ${isProductDetailOpen ? 'flex' : 'hidden'}
            product-detail flex-col fixed right-0 bg-white border border-black rounded
            `}
        >
            <div className={'flex justify-between items-center'}>
                <h2 className={'font-medium text-xl p-2'}>Detail</h2>
                <XMarkIcon
                    onClick={() => closeDetail()}
                    className={'w-8 cursor-pointer'}
                />
            </div>

            <figure
                className={'px-6'}
            >
                <img
                    className={'w-full h-full rounded-lg'}
                    src={productToShow.images ? productToShow.images[0] : notFoundImage}
                    alt={productToShow.title}
                />
            </figure>
            <p
                className={'flex flex-col p-6'}
            >
                <span className={'font-medium text-2xl'}>${productToShow.price}</span>
                <span className={'font-medium text-md mb-2'}>{productToShow.title}</span>
                <span className={'font-light text-sm'}>{productToShow.description}</span>
            </p>
        </aside>
    )
}
export {ProductDetail};
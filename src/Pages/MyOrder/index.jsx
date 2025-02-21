import {useContext} from "react";
import {Layout} from "../../Components/Layout/index.jsx";
import {OrderCard} from "../../Components/OrderCard/index.jsx";
import {ShoppingCartContext} from "../../Components/Context/index.jsx";
import {Link} from "react-router-dom";
import {ChevronLeftIcon} from "@heroicons/react/24/solid/index.js";

const MyOrder = () => {
    const {order} = useContext(ShoppingCartContext)
    const currentPath = window.location.pathname
    let orderId = currentPath.split("/").slice(-1)[0]

    if (orderId === 'last') {
        orderId = order?.length - 1
    }

    return (
        <Layout>
            <div className={'flex items-center justify-center w-80 relative mb-6'}>
                <Link to={'/my-orders'}
                      className={'absolute left-0 '}
                >
                    <ChevronLeftIcon
                        className={'h-6 w-6 text-black cursor-pointer'}
                    />
                </Link>
                <h1>My Order</h1>
            </div>

            <div className={'flex flex-col w-80'}>
                {order?.[orderId]?.products.map((product) => {
                    return <OrderCard
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        imageURL={product.images}
                    />
                })}
            </div>
        </Layout>
    );
};

export {MyOrder};
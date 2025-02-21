import {useContext} from "react";
import {Link} from "react-router-dom";
import {ShoppingCartContext} from "../../Components/Context/index.jsx";
import {Layout} from "../../Components/Layout/index.jsx";
import {OrdersCard} from "../../Components/OrdersCard/index..jsx";
import {ChevronLeftIcon} from "@heroicons/react/24/solid/index.js";

const MyOrders = () => {
    const {order} = useContext(ShoppingCartContext)

    return (
        <Layout>
            <div className={'flex justify-between'}>
                <ChevronLeftIcon className={'h-6 w-6 text-black cursor-pointer'}/>
                <h1>My Orders</h1>
            </div>
            {order.map(order => {
                return (
                    <Link to={`/my-orders/${order.id}`} key={order.id}>
                        <OrdersCard
                            key={order.id}
                            totalPrice={order.totalPrice}
                            totalProducts={order.totalProducts}
                        />
                    </Link>
                )

            })}

        </Layout>
    );
};

export {MyOrders};
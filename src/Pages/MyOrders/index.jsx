import {useContext} from "react";
import {Link} from "react-router-dom";
import {ShoppingCartContext} from "../../Components/Context/index.jsx";
import {ChevronLeftIcon} from "@heroicons/react/24/solid/index.js";
import {Layout} from "../../Components/Layout/index.jsx";
import {OrdersCard} from "../../Components/OrdersCard/index..jsx";

const MyOrders = () => {
    const {order} = useContext(ShoppingCartContext)

    return (
        <Layout>
            <div className={'flex items-center justify-center w-80 relative'}>
                <h1>My Orders</h1>
            </div>
            {order.map((item, index) => {
                return (
                    <Link to={`/my-orders/${index}`} key={index}>
                        <OrdersCard
                            key={index}
                            date={item.date}
                            totalPrice={item.totalPrice}
                            totalProducts={item.totalProducts}
                        />
                    </Link>
                )

            })}

        </Layout>
    );
};

export {MyOrders};
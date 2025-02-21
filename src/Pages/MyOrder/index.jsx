import {useContext} from "react";
import {Layout} from "../../Components/Layout/index.jsx";
import {OrderCard} from "../../Components/OrderCard/index.jsx";
import {ShoppingCartContext} from "../../Components/Context/index.jsx";

const MyOrder = () => {
    const {order} = useContext(ShoppingCartContext)
    return (
        <Layout>
            <p>My last order</p>

            <div className={'checkout-side-menu order-card px-6 overflow-y-scroll'}>
                {order?.slice(-1)[0].products.map((item) => {
                    return <OrderCard
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        imageURL={item.images}
                    />
                })}
            </div>
        </Layout>
    );
};

export {MyOrder};
import {useContext} from "react";
import {Layout} from "../../Components/Layout/index.jsx";
import {OrderCard} from "../../Components/OrderCard/index.jsx";
import {ShoppingCartContext} from "../../Components/Context/index.jsx";

const MyOrder = () => {
    const {order} = useContext(ShoppingCartContext)
    return (
        <Layout>
            <p>My last order</p>

            <div className={'flex flex-col w-80'}>
                {order?.slice(-1)[0].products.map((product) => {
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
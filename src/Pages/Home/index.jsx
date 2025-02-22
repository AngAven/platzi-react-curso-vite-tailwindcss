import {useContext} from "react";
import {Layout} from "../../Components/Layout/index.jsx";
import {Card} from "../../Components/Card/index.jsx";
import {ProductDetail} from "../../Components/ProductDetail/index.jsx";
import {ShoppingCartContext} from "../../Components/Context/index.jsx";


const Home = () => {
    const {
        items,
    } = useContext(ShoppingCartContext)

    return (
        <Layout>
            <p className={'text-2xl mb-2'}>HOME</p>
            <div className={'grid gap-4 grid-cols-4 w-full max-w-screen-lg'}>
            {items?.map((item) => (
                <Card
                    key={item.id}
                    title={item.title}
                    price={item.price}
                    category={item.category.name}
                    image={item.images[0]}
                    product={item}
                />
            ))}
            </div>
            <ProductDetail/>
        </Layout>
    );
};

export {Home};
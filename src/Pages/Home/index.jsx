import {useEffect, useState} from "react";
import axios from "axios";
import {Layout} from "../../Components/Layout/index.jsx";
import {Card} from "../../Components/Card/index.jsx";
import {ProductDetail} from "../../Components/ProductDetail/index.jsx";


const Home = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        (async () => {
            const data = await axios
                .get('https://api.escuelajs.co/api/v1/products?offset=0&limit=16')
                .then(({data}) => data)
                .catch((e) => console.log('error', e))
            setItems(data)
        })()
    }, [])

    return (
        <Layout>
            <p
                className={'text-2xl mb-2'}
            >HOME</p>
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
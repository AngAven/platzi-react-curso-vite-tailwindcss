import {useEffect, useState} from "react";
import {Layout} from "../../Components/Layout/index.jsx";
import {Card} from "../../Components/Card/index.jsx";
import axios from "axios";


const Home = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        (async () => {
            const data = await axios
                .get('https://api.escuelajs.co/api/v1/products')
                .then(({data}) => data)
                .catch((e) => console.log('error', e))
            setItems(data)
        })()
    }, [])

    return (
        <Layout>
            <p>HOME</p>
            <div className={'grid gap-4 grid-cols-4 w-full max-w-screen-lg'}>
            {items?.map((item) => (
                <Card
                    key={item.id}
                    title={item.title}
                    price={item.price}
                    category={item.category.name}
                    image={item.images[0]}
                />
            ))}
            </div>
        </Layout>
    );
};

export {Home};
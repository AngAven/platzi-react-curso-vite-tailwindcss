import {useContext} from "react";
import {Layout} from "../../Components/Layout/index.jsx";
import {Card} from "../../Components/Card/index.jsx";
import {ProductDetail} from "../../Components/ProductDetail/index.jsx";
import {ShoppingCartContext} from "../../Components/Context/index.jsx";


const Home = () => {
    const {
        searchByTitle,
        setSearchByTitle,
        filteredItems,
    } = useContext(ShoppingCartContext)

    const search = (e) => {
        const searchVale = e.target.value
        setSearchByTitle(searchVale)
    }

    const renderView = () => {
        if (filteredItems?.length > 0) {
            return (
                filteredItems?.map((item) => (
                    <Card
                        key={item.id}
                        title={item.title}
                        price={item.price}
                        category={item.category.name}
                        image={item.images[0]}
                        product={item}
                    />
                ))
            )
        } else {
            return (<div>No items</div>)
        }
    }

    return (
        <Layout>
            <div className={'flex items.center justify-center relative w-80 mb-4'}>
                <h1 className={'font-medium text-xl'}>Exclusive Products</h1>
            </div>
            <input type="text" placeholder={'Search...'}
                   className={'rounded-lg border-black border-2 mb-4 p-4 w-80 focus:outline-none'}
                   onChange={(e) => search(e)}
                   value={searchByTitle}
            />
            <div className={'grid gap-4 grid-cols-4 w-full max-w-screen-lg'}>
                {
                    renderView()
                }
            </div>
            <ProductDetail/>
        </Layout>
    );
};

export {Home};
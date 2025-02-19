import {useRoutes, BrowserRouter} from "react-router-dom";
import {ShoppingCartProvider} from "../../Components/Context/index.jsx";
import {Home} from "../Home/index.jsx";
import {MyOrder} from "../MyOrder/index.jsx";
import {MyOrders} from "../MyOrders/index.jsx";
import {SignIn} from "../SignIn/index.jsx";
import {NotFound} from "../NotFound/index.jsx";
import {MyAccount} from "../MyAccount"
import {NavBar} from "../../Components/NavBar";
import './App.css'

const AppRoutes = () => {
    let routes = useRoutes([
        {path: "/", element: <Home/>,},
        {path: "/my-orders", element: <MyOrders/>},
        {path: "/my-account", element: <MyAccount/>},
        {path: "/sign-in", element: <SignIn/>},
        {path: "/my-order", element: <MyOrder/>},
        {path: "/*", element: <NotFound/>},
    ])

    return routes
}

function App() {
    return (
        <ShoppingCartProvider>
            <BrowserRouter>
                <AppRoutes/>
                <NavBar/>
            </BrowserRouter>
        </ShoppingCartProvider>
    )
}

export {App}

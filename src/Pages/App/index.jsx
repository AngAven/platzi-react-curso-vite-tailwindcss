import {BrowserRouter, useRoutes} from "react-router-dom";
import {ShoppingCartProvider} from "../../Components/Context/index.jsx";
import {Home} from "../Home/index.jsx";
import {MyOrder} from "../MyOrder/index.jsx";
import {MyOrders} from "../MyOrders/index.jsx";
import {SignIn} from "../SignIn/index.jsx";
import {NotFound} from "../NotFound/index.jsx";
import {MyAccount} from "../MyAccount"
import {NavBar} from "../../Components/NavBar";
import {CheckoutSideMenu} from "../../Components/CheckoutSideMenu/index.jsx";
import './App.css'

const AppRoutes = () => {
    return useRoutes([
        {path: "/", element: <Home/>,},
        {path: "/sign-in", element: <SignIn/>},
        {path: "/my-account", element: <MyAccount/>},
        {path: "/my-order", element: <MyOrder/>},
        {path: "/my-orders", element: <MyOrders/>},
        {path: "/my-orders/last", element: <MyOrder/>},
        {path: "/my-orders/:id", element: <MyOrder/>},
        {path: "/*", element: <NotFound/>},
    ])
}

function App() {
    return (
        <ShoppingCartProvider>
            <BrowserRouter>
                <AppRoutes/>
                <NavBar/>
                <CheckoutSideMenu/>
            </BrowserRouter>
        </ShoppingCartProvider>
    )
}

export {App}

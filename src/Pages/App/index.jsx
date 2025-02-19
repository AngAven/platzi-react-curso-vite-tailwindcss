import {Home} from "../Home/index.jsx";
import {MyOrder} from "../MyOrder/index.jsx";
import {MyOrders} from "../MyOrders/index.jsx";
import {SignIn} from "../SignIn/index.jsx";
import {NotFound} from "../NotFound/index.jsx";
import {MyAccount} from "../MyAccount"

import './App.css'

function App() {
  return (
      <>
          <div className='bg-blue-500'>
              <Home/>
              <MyAccount/>
              <MyOrder/>
              <MyOrders/>
              <SignIn/>
              <NotFound/>
          </div>
      </>
  )
}

export {App}

import React from 'react'
import { Routes as AllRoutes, Route } from 'react-router-dom';
import Login from '../pages/login/Login';
import Signup from '../pages/signup/Signup';
import Checkout from '../pages/checkout/Checkout';
import MyOrders from '../pages/myOrders/MyOrders';
import Receipt from '../pages/receipt/Receipt';
import NotFound from '../pages/notFound/NotFound';
import Success from '../pages/success/Success';
import Home from '../pages/home/Home';


// return (
//         <div>Routes</div>
//   )

function Routes () {
// const Routes = () => {
        return (
                <AllRoutes>
                        <Route path='/' element={<Home />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/signup' element={<Signup />} />
                        <Route path='/checkout' element={<Checkout />} />
                        <Route path='/my-orders' element={<MyOrders />} />
                        <Route path='/receipt/:orderId' element={<Receipt />} />
                        <Route path='/congratulations' element={<Success />} />
                        <Route path='*' element={<NotFound />} />
                </AllRoutes>
        )
}
        // }

export default Routes
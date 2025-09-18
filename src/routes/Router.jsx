import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../components/Layout'
import Home from '../pages/Home'
import ProductDetail from '../pages/ProductDetail'
import Cart from '../pages/Cart'
import Login from '../pages/auth/Login'
import Signup from '../pages/auth/Signup'

function Router({ value }) {
   console.log(value)
   return (
      <BrowserRouter>
         <Routes>
            <Route path='/' element={<Layout />}>
               <Route index element={<Home />} />
               <Route path='products/:productId' element={<ProductDetail />} />
               <Route path='cart' element={<Cart />} />
            </Route>
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
         </Routes>
      </BrowserRouter>
   )
}

export default Router

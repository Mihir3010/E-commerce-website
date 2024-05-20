import React from 'react';
import { Routes , Route, Navigate } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute.js';


import AddProduct from '../Admin_pannel/AddProduct.jsx';
 


import Home from '../Components/pages/Home'
import Shop from '../Components/pages/Shop'
import Cart from '../Components/pages/Cart'
import Product from '../Components/pages/Product'
import Checkout from '../Components/pages/Checkout'
import Login from '../Components/pages/Login'
import Signup from '../Components/pages/Signup'
import Offers from '../Components/pages/Offers'
import About from '../Components/pages/About';
import Contact from '../Components/pages/Contact_us.jsx';
import Dass from '../Admin_pannel/Dass.jsx';
import AllsProduct from '../Admin_pannel/AllsProduct.jsx';
import Users from '../Admin_pannel/Users.jsx';
import Check from "../Components/pages/Check.jsx"
import Succes from '../Components/pages/Succes.jsx';
import { Payment } from '../Components/pages/Payment.jsx';









const Routers = () => {
  return <Routes>
    <Route path="/" element={<Navigate to='home'/>} /> 
    <Route path='home' element={<Home/>} />
    <Route path='shop' element={<Shop/>} />
    <Route path='Offers' element={<Offers/>} />
    <Route path='About' element={<About/>} />
    <Route path='Contact' element={<Contact/>} />
    <Route path='shop/:id' element={<Product/>} />
    <Route path='Cart' element={<Cart/>} />
    <Route path='/dass' element={<Dass/>} />
    <Route path='Payment/succes' element={<Succes/>} />
    <Route path='Payment' element={<Payment/>} />

    <Route path='/*' element={<ProtectedRoute/>}>
    <Route path='dass/all-product' element={<AllsProduct/>} />
    <Route path='dass/add-product' element={<AddProduct/>} />
    <Route path='dass/users' element={<Users/>} />
    <Route path='Check' element={<Check/>} />
    
   
    

      </Route>

 

    <Route
            path='/Checkout' element={<ProtectedRoute>
      
      <Checkout/>
     

      </ProtectedRoute>
      }
       
       />
  
    <Route path='Checkout' element={<Checkout/>} />
    <Route path='Login' element={<Login/>} />
    <Route path='Signup' element={<Signup/>} />
  </Routes> 
}

export default Routers
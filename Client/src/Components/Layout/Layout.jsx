import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Routers from '../../routers/Routers'
import AdminNav from  "../../Admin_pannel/AdminNav"
import {useLocation}  from "react-router";


const Layout = () => {

 const loaction = useLocation()

  return (
   
    <>

  { 
      loaction.pathname.startsWith("/dass") ? <AdminNav/>: <Header/>
      
    }

   
    <div> 
       <Routers/>
    </div>
    <Footer />
    </>
  )
}

export default Layout

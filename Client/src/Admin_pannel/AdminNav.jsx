import React from 'react'
import {Container, Row,Col} from "reactstrap"
import { NavLink } from 'reactstrap'
import '../Styles/admin-nav.css'

import { updateCurrentUser } from 'firebase/auth'


const admin_nav = [
{
  display:"Dashboard",
   path:"/Dass.jsx"
},
{
  display:"All-Product",
   path:"/allsproduct"
},
{
  display:"orders",
   path:"/orders.jsx"
},
{
  display:"User",
   path:"/Users.jsx"
},

]
   
const AdminNav = () => {

 
  return (
  <>  
  <header className='admin_header'>
<div className="admin_nav_top">
   <Container>
    <Row> 
      <Col>
      </Col>
    </Row>

    <div className="admin_nav_wrapper-top">
    <div className="logo">
      <h2>
        Motif Interior
      </h2>

    </div>
     <div className="search_box">
      <input type="text" placeholder='search.....'  />
      <span><i class="ri-search-line"></i></span>
     </div>
      <div className="admin_nav-top-right">
        <span><i class="ri-notification-3-line"></i></span>
        <span> <i class="ri-settings-2-line"></i></span>
        <img src= { updateCurrentUser.PhotoUrl} alt="" />
      </div>
      

      </div>
    
   </Container>
</div>

  </header>


  <section className="admin_menu p-0">
    <Container> 
      <Row>
        <div className="admin_navigation">
          <ul className='admin_menu-list'>
            {
               admin_nav.map((item, index) =>(
                <li className='admin_menu-item' key={index}>
                <NavLink to ={item.path} className= {navClass=>navClass.isActive ? "admin_menu-active" :""}
                 >{item.display}</NavLink>
                </li>
               ))
            }
          </ul>
        </div>
        <Col>
        
        </Col>
      </Row>
    </Container>
  </section>
  
  </>
  )
}

export default AdminNav

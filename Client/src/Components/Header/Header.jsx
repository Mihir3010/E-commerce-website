import React , { useRef,useEffect } from 'react';   
import { NavLink, useNavigate } from 'react-router-dom';
import './Header.css'
import {  useSelector } from 'react-redux';
import{ Container, Row } from "reactstrap";
import useAuth from "../../custom-hooks/useAuth"
import { Link } from 'react-router-dom';
import { motion }  from 'framer-motion';
import userIcon from "../../assets/images/userIcon.png"
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase.config';
import {toast} from "react-toastify"


const nav_links =[
    {
    path:'home',
    display:'Home'
    },
    {
        path:'shop',
        display:'Shop'
        },
        {
            path:'cart',
            display:'Cart'
            },
            {
                path:'offers',
                display:'Offers'
                },
            {
                path:'about',
                display:'About'
                },
                {
                    path:'Contact',
                    display:'Contact-Us'
                    },
]
const Header = () => {

    const headerRef = useRef(null)
    const navigate = useNavigate()
    const {currentUser} = useAuth()
    const profileActionRef = useRef(null)
   
    
    const totalQuantity = useSelector(state=> state.cart.totalQuantity)

    const menuRef = useRef(null)
    const stickyHeaderFunc = ()=>{
        window.addEventListener( 'scroll', ()=>{
            if(document.body.scrollTop > 80 || document.documentElement.scrollTop>80)
            {
                 headerRef.current.classList.add('sticky_header')
            } else{
                 headerRef.current.classList.remove('sticky_header')
            }
        })
    }
    const logout =()=>{
        signOut(auth).then(()=>{
            toast.success("Loggedout")
            navigate('/home')
    })
         .catch((error)=>{
           toast.error("Error Occured!")
         })
    }
    useEffect(()=>{
         stickyHeaderFunc()
         return ()=> window.removeEventListener("scroll" , stickyHeaderFunc);
    });
  
     const menuToggle = ()=> menuRef.current.classList.toggle('active_menu')
    
        const navigateToCart =()=>{
                navigate('Cart')
        }
        const navigateToLogin =()=>{
                navigate('/login')
        }
    
     const toggleProfileActions = ()=> profileActionRef.current.classList.toggle('profile_actions')


  return <header className="header" ref={headerRef}>
        <Container>
            <Row>
                <div className="nav_wrapper">
                   <div className="logo">
                   
                        <h1 className='head'>
                            Motif Intirior
                        </h1>
                    
                    </div>
                   
                   <div className="navigation" ref={menuRef} onClick={menuToggle}>
                    <ul className="menu">
   
                    
                        {nav_links.map((item , index)=>(
                            <li className="nav_item" key={index}>
                                
                          <NavLink to={item.path} className={(navClass)=> 
                          navClass.isActive ? 'nav_active':''} > {item.display}</NavLink>
                        </li>
                            
                         ))}

                    </ul>
                   </div>
                  <div className="nav_icons">
 
                    <span className='fav_icon'>
                        <i class="ri-heart-line"></i>
                        <span className="badge">1</span>
                        </span>
                    <span className='cart_icon' onClick={navigateToCart}>
                    <i class="ri-shopping-bag-3-line"></i>
                    <span className="badge">{totalQuantity}</span>
                    </span>

                     <div className='profile'>
                     <span  onClick={navigateToLogin}></span>
                     <motion.img whileTap={{scale:1.2}} src= {currentUser ? currentUser.photoURL : userIcon } alt=""
                       onClick={toggleProfileActions} />
                       
                        
                                 
                             <div className="profile_actions" ref={profileActionRef} onClick={toggleProfileActions}>
                                {
                                     currentUser ? <span onClick={logout}> 
                                        Logout 
                                     </span> :(
                                     <div className='d-flex align-items-center justify-content-center flex-column'>
                                         <Link to ='/signup' > Signup</Link>
                                         <Link to ='/Login' > Login</Link>
                                        
                                        <Link to ="/dass"> dashboard </Link>
                                        
                                         
                                     </div>
                                )}
                             </div>
                        </div>
                    

                        <div className="mobile_menu">
                    <span onClick={menuToggle}>
                    <i class="ri-menu-line"></i>
                    </span>
                   </div>
                   </div>
                  
               </div>
            </Row>
        </Container>
  </header>
   
  
}

export default Header

import React from 'react'
import '../../Styles/cart.css';
import Helmet from '../../Components/Helmet/Helmet';
import CommonSection from '../../Components/UI/CommonSection'
import { Container,Row , Col } from 'reactstrap';

import { motion }  from 'framer-motion';

import {  useSelector } from 'react-redux/es/hooks/useSelector';
import {cartActions} from "../../redux/slices/cartslice"
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';



const Cart = () => {
 
   
  const cartItems = useSelector(state => state.cart.cartItems);
  const totalAmount = useSelector(state=>state.cart.totalAmount)


  return(
   <Helmet title='Cart'>
    <CommonSection title= 'Shopping cart'/>
<section>
    <Container> 
      <Row> 
        <Col lg='9'>
            { 
              
              cartItems.length ===0? <h2 className=' fs-3 text-center '>No item  added to cart</h2>:(

           <table className="table bordered">
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>Qty</th>
                <th >Deleted</th>
              </tr>
            </thead>
            <tbody>
              {
                 cartItems.map((item,index)=>
                 ( 
                 <Tr item={item} key={index}/>
                 ))
              }
            </tbody>

           </table>
)}
            </Col>
        <Col  lg="3">
          
        <div>
          <h6 className='d-flex align-items-center justify-content-between p-2'>
            SubTotal
            <span className='fs-3 fw-bold pb-3'>
              ${totalAmount}
            </span>
            
          </h6>
          
        </div>
        <p className='fs-6 mt-2'>Taxes and shipping will calculate in cheakout page </p>
        
        <div>
         

          <button className="buy_btn w-90">
          
            <Link to = '/Check'> Checkout  </Link>
          </button>

         
         

          <button className="buy_btn w-80 mt-3" >
            <Link to ='/shop'> Continue Shopping </Link>
          </button>
        </div>


            </Col>
        
       
      </Row>
      </Container> 
      </section>

  </Helmet>
  )
}

const Tr = ({item})=> {

  const dispatch = useDispatch ()
  
  const deleteProduct = ()=>{ 
    dispatch(cartActions.deleteItem(item.id))
  }

   return   <tr>
   <td><img src={item.imgUrl} alt=""  /></td>
   <td>{item.productName}</td>
   <td>${item.price}</td>
   <td>{item.quantity}px</td>
   <td><motion.i whileTap={{scale:1.2}} onClick={deleteProduct}  class="ri-delete-bin-line"></motion.i></td>
 </tr>
}

export default Cart;

import React, { useState } from 'react'
import { Container,Row , Col , Form , FormGroup} from 'reactstrap';
import Helmet from '../Helmet/Helmet';
import CommonSection from '../UI/CommonSection';
import '../../Styles/Checkout.css'
import {useSelector} from "react-redux";
import { Link } from 'react-router-dom';



const Checkout = () => {
  
const [name , setName] = useState()
const [email , setEmail]= useState()
const [number, setNumber]= useState()
const [Address , setAddress] =useState()
const [city , setCity] = useState()
const [postalcode , setPostalcode]=useState()

 const totalQty = useSelector(state=> state.cart.totalQuantity)
 const totalAmount = useSelector(state=>state.cart.totalAmount)

 


  return (
    <Helmet title = "Checkout">
    <CommonSection title ="Checkout" />
    <section>
      <Container>
        <Row> 
          <Col lg='8'> 
          <h6 className='mb-4 fw-bold'>Billing Information</h6>
          <Form className='billing_form'>
            <FormGroup className="form_group">
              <input type='text' placeholder='Enter Your Name' value={name} onChange={e=> setName (e.target.value)}/>
            </FormGroup>

            <FormGroup className="form_group">
              <input type='email' placeholder='Enter Your email' value={email} onChange={e=> setEmail (e.target.value)}/>
            </FormGroup>

            <FormGroup className="form_group">
              <input type='text' placeholder='Enter Phone Number'value={number} onChange={e=> setNumber (e.target.value)}/>
            </FormGroup>

            <FormGroup className="form_group">
              <input type='text' placeholder='Street Address' value={Address} onChange={e=> setAddress (e.target.value)}/>
            </FormGroup>

            <FormGroup className="form_group">
              <input type='text' placeholder='City'value={city} onChange={e=> setCity (e.target.value)}/>
            </FormGroup>

            <FormGroup className="form_group">
              <input type='text' placeholder='Postal Code' value={postalcode} onChange={e=> setPostalcode (e.target.value)}/>
            </FormGroup>

           


          </Form>

          </Col>
          <Col lg = '4'>
            <div className="checkout_cart">
              <h6> Total Qty : <span> {totalQty} Items</span> </h6>
              <h6> SubTotal : <span>$ {totalAmount} </span> </h6>
              <h6><span>Shipping: <br/> Free Shipping</span> <span> $0 </span> </h6>
              
              <h4> Toal Cost : <span>${totalAmount}</span></h4>
             

             
                   <button className='buy_btn auth_btn w-100 '> 
               <Link to = '/Payment'> Place an order  </Link>
               </button>

                </div>
                
          </Col>
        </Row>
      </Container>
    </section>
    </Helmet>
  );
};

export default Checkout

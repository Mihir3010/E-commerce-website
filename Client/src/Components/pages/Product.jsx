import React,{useState , useRef,useEffect } from 'react';
import { Container, Row , Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import Helmet from '../Helmet/Helmet';
import CommonSection from '../UI/CommonSection';
import '../../Styles/Product.css';
import { motion } from 'framer-motion';
import Productlist from "../UI/Productlist";
import { useDispatch } from 'react-redux';
import {toast} from "react-toastify";
import { cartActions } from '../../redux/slices/cartslice';
import { db } from '../../firebase.config';
import {doc,getDoc} from "firebase/firestore"
import useGetData from '../../custom-hooks/useGetData'; 

const Product = () => {

const [product , setProduct] = useState({})
const [tab , setTab] = useState('desc');
const reviewUser = useRef('')
const reviewMsg = useRef ('')
const dispatch = useDispatch()
const {data} = useGetData('products')
const products = data.filter(item=>item.category === "sofa")


const [rating,setRating] = useState(null)
 
 
 const {id} =useParams()

const docRef = doc(db, 'products' ,id)
useEffect(()=>{
  const getProduct = async()=>{
  const docsnap = await getDoc(docRef)
  if(docsnap.exists()){
    setProduct(docsnap.data())
  } else {
     console.log("no product")
  }
}
getProduct()
// eslint-disable-next-line react-hooks/exhaustive-deps
},[])

 const {imgUrl, productName, price,description, shortDesc,category} = product;

  const relatedProducts = products.filter(item=>item.category===category)

  const  submitHandler =(e)=>{
    e.preventDefault()
    const reviewUserName = reviewUser.current.value;
    const reviewUserMsg = reviewMsg.current.value ;
  


    const reviewObj = {
              userName:reviewUserName,
              text:reviewUserMsg,
               rating,

    };
    console.log(reviewObj)
    toast.success('Review Submit')
  }

      const addToCart = ()=> {
         dispatch(cartActions.addItem ({
         id,
         image:imgUrl,
         productName,
         price,
          } ))

            toast.success('Product added successfully')

      };
      useEffect(()=>{
         window.scrollTo(0,0);

      },[product]
      );


  return <Helmet title ={productName}>
     <CommonSection  title ={productName} />
     <section>
      <Container> 
        <Row>
          <Col lg="6"> <img src= {imgUrl} alt="" /></Col>
          <Col lg="6"> 
          <div className="product_detail">
            <h2> {productName}</h2>
            <div className="product_rating d-flex align-items-center gap-5 mb-3">
              <div>
                <span>
                <i class="ri-star-fill"></i>
                </span>
                <span>
                <i class="ri-star-fill"></i>
                </span>
                <span>
                <i class="ri-star-fill"></i>
                </span>
                <span>
                <i class="ri-star-fill"></i>
                </span>
                <span>
                <i class="ri-star-half-line"></i>
                </span>
              </div>

              <p>
                {/* (<span>{avgRating} </span>rating) */}
                </p>
            </div>
           <div className='d-flex align-items-center'>
           <span className='product_price'>  $   {price}   </span>
           <span className='p-3' >Category : {category}</span>
           </div>
            <p className='mt-3'>{shortDesc}</p>
            <motion.button  whileTap={{scale:1.3}}
             className="buy_btn" onClick={addToCart}>Add to Cart</motion.button>
              
           

          </div>
          
          </Col>
          
          
        </Row>
      </Container>
     </section>
     <section> 
       <Container> 
        <Row>
           <Col lg="12"> 
           <div className="tab_wrapper d-flex align-items-center gap-5">
            <h6 className={`${tab==='desc' ? 'active_tab' : ""}`}
            onClick={()=> setTab('desc')}> Description</h6>
            <h6 className={`${tab==='rev' ? 'active_tab' : ""}`}
            onClick={()=> setTab('rev')}>
               {/* Reviews ({reviews.length}) */}
               </h6>
           </div>

          {
             tab==='desc' ?  <div className="tab_content mt-5">
             <p> {description}</p>
           </div> :( <div className='product_review mt-5'> 
           <div className="review_wrapper ">
            {/* <ul>
              {
                 reviews.map((item,index)=>(
                  <li key={index} className='mb-4'>
                    <h6>mihir panchal</h6><span>{item.rating} (Rating)</span>
                  <p>{item.text}</p>
                  
                  </li>
                 )
                 )
              }
            </ul> */}

            <div className="review_form">
              <h4>Leave your experience</h4>
                <form action=""onSubmit={submitHandler}>
                  <div className="form_group">
                    <input type='text' placeholder='Enter name' ref={reviewUser} required />
                  </div>
                  <div className="form_group d-flex align-items-center gap-5 rating_group ">
                    <motion.span whileTap={{scale:1.2}} onClick={()=> setRating(1)}>
                      1 <i class="ri-star-s-fill"></i>
                    </motion.span>
                    <motion.span whileTap={{scale:1.2}} onClick={()=> setRating(2)}>
                      2 <i class="ri-star-s-fill"></i>
                      </motion.span>
                    <motion.span whileTap={{scale:1.2}} onClick={()=> setRating(3)}>
                      3 <i class="ri-star-s-fill"></i>
                      </motion.span>
                    <motion.span whileTap={{scale:1.2}} onClick={()=> setRating(4)}>
                      4 <i class="ri-star-s-fill"></i>
                      </motion.span>
                    <motion.span whileTap={{scale:1.2}} onClick={()=> setRating(5)}>
                      5 <i class="ri-star-s-fill"></i>
                      </motion.span>

                  </div>
                  <div className="form_group">
                    <textarea ref={reviewMsg} rows={4} input type='text' placeholder='Review msg' required/>
                  </div>
                  <motion.button whileTap={{scale:1.2}} type='submit' className='buy_btn'>submit </motion.button>
                </form>

            </div>
           </div>
           
            </div>
           )
          }
           
           </Col>
           <Col lg='12' className='mt-4' >
           <h2 className='related_title'>You might also Like   </h2> 
           </Col>
           <Productlist data={relatedProducts} />
        </Row>
       </Container>
     </section>
      
  </Helmet>
}

export default Product

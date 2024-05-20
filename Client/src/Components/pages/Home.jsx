import React , {useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Helmet from '../Helmet/Helmet';
import { Container,Row, Col,  } from 'reactstrap';
import hero from '../../assets/images/hero-img.png';
import "../../Styles/Home.css";
import { motion } from 'framer-motion';

import Services from '../../Services/Services';
import Productlist from '../UI/Productlist';
import counterImg from "../../assets/images/counter-timer-img.png"
import Clock from '../UI/Clock';

import useGetData from '../../custom-hooks/useGetData';
import banner8 from "../../assets/images/banner-8.png"
import banner9 from "../../assets/images/banner-9.png"





const Home = () => {

  const {data: products,loading }= useGetData("products")

   

  const [trending_product, setTrending_product] = useState([]);
  const [bestSales_product, setBestSales_product] = useState([]);
  const [sofaProducts , setSofaProduct] = useState([])
  const [tableProducts , setTableProduct] = useState([])
  
  const year = new Date().getFullYear();

  useEffect(()=>{
  const filteredTrendingProducts = products.filter(item=> item.category ==='sofa'
  );


  const filteredBestSalesProducts = products.filter(item=> item.category ==='chairs'
  );
  const filteredSofaProducts = products.filter(item=> item.category ==='table'
  );
  const filteredTableProducts = products.filter(item=> item.category ==='lamp' 
  );


  setTrending_product(filteredTrendingProducts);
  setBestSales_product (filteredBestSalesProducts); 
  setSofaProduct (filteredSofaProducts); 
  setTableProduct (filteredTableProducts); 


}, [products] );

  return <Helmet title = {"Home"}>

   <section className="hero_section">
    <Container>
      <Row>
        <Col lg='6' md='6'>
          <div className="hero_content">
            <p className="hero_subtitle">Trending product in {year}

            </p>
            <h2>Make Your interior More Minimallistic & Modern  </h2>
            <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus nihil mollitia laudantium maxime unde, iste placeat repellat voluptates rem? Error.</p>
            <motion.button whileTap={{Scale:1.2}}
            className="buy_btn"> <Link to='/shop'>Shop Now </Link></motion.button>

            
          </div>
        </Col>

        <Col lg ="6" md="6">
          <div className="hero_img">
            <img src= {hero} alt="" />
          </div>
        </Col>

      </Row>
    </Container>
   </section>
 
 <Services/>
 <section className='trending_product gap-0 '>
  <Container>
    <Row>
      <Col lg='12' className='text-center'>
        <h2 className='section_title'>Trending Product </h2>

      </Col>
       
      {
         loading ? ( 
          <h5 className='fw-bold'> Loading..... </h5>
        ) : ( <Productlist data={trending_product}/>
      )}
      
    
    </Row>
    </Container>
 </section>
 <section className="best_sales">
  <Container>
  <Row>
      <Col lg='12' className='text-center'>
        <h2 className='section_title'>Best Sales </h2>

      </Col>
      {
         loading ? ( 
          <h5 className='fw-bold'> Loading..... </h5>
        ) : ( <Productlist data={bestSales_product}/>
      )}
      
      
      
    
    </Row>
  </Container>
 </section>
   <section className="timer_count">
    <Container>
      <Row>
        <Col lg='6' md='12'> 

      <div className="clock_top-content">
        <h4 className='text-white fs-6 mb-2'> 
          Limited Offers
        </h4>
        <h3 className='text-white fs-5 mb-3'>
          Quality Armmchair
        </h3>

      </div>

        <Clock />
        <motion.button whileTap={{scale:1.2}} className="buy_btn store_btn" >Visit Store </motion.button>
        </Col>
        <Col lg='6' md='6' className='text-end counter_img'>
          <img src= {counterImg} alt="" />
           </Col>
        

         


        
        </Row>
    </Container>
    </section>

  <section className="new_arrivals mb-5 ">
    <Container>
      <Row> 
        <Col lg="12" className='text-center mb-5 object-fit'>
          <h2 className='section_title'>
            New Arrivals </h2> 
        </Col>
        {
         loading ? ( 
          <h5 className='fw-bold'> Loading..... </h5>
        ) : (  <Productlist data={sofaProducts} />
      )}
       {
         loading ? ( 
          <h5 className='fw-bold'> Loading..... </h5>
        ) : ( <Productlist data={tableProducts} />
      )}
     
      
      </Row>
      </Container>
  </section>
    <section className="banner">
    <div class="banner-area pb-70">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-12">
                        <div class="banner-wrap mb-30" >
                            <a href="product-details.html"><img src= {banner8} alt=""/></a>
                            <div class="banner-content-6">
                                <h2>New Furniture </h2>
                                <h3 className='hm3'>Up To 30% Off</h3>
                                <button className="btn-5" >
                               <Link to ='/shop'> Shop Now </Link>
                               </button>

                                
                            </div>
                           
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-12">
                        <div class="banner-wrap mb-30" >
                            <a href="product-details.html"><img src= {banner9} alt=""/></a>
                            <div class="banner-content-6">
                                <h2>Old Furniture </h2>
                                <h3 className='hm3'>Up To 60% Off</h3>
                                <button className="btn-5" >
                               <Link to ='/shop'> Shop Now </Link>
                               </button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

  </Helmet>;
     
 
}

export default Home 

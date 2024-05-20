import React from 'react'
import { Container,Row ,Col } from 'reactstrap'
import Helmet from '../Helmet/Helmet'
import CommonSection from '../UI/CommonSection'
import "../../Styles/offers.css"
import blog1 from "../../assets/images/blog1.png"
import blog2 from "../../assets/images/blog2.png"
import blog3 from "../../assets/images/blog3.png"
import { Link } from 'react-router-dom'



const Offers = () => {
  return (
    <Helmet title='OFFER PAGE'>
    <CommonSection title= 'OFFER PAGE  '/>
<section>
    <Container> 
      <Row> 
        <Col>
          <h3 className='text-center align-item-center'>OFFER PAGE</h3>
          <div class="blog-area pt-100 pb-100">
            <div class="container">
                <div class="row pt-3">
                 


                    <div class="col-lg-4 col-md-6 pt-5">
                        <div class="blog-wrap mb-50" data-aos="fade-up" data-aos-delay="200">
                            <div class="blog-img-date-wrap mb-25">
                                <div class="blog-img">
                                    <a href="blog-details.html">
                                      <img src= {blog2} alt=""/></a>
                                </div>
                                
                            </div>
                            <div class="blog-content">
                                <div class="blog-meta">
                                    
                                </div>
                                <h3><a href="blog-details.html">Summer Colletion Furniture.</a></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipi elit, sed do eiusmod tempor incididunt ut labo et dolore magna aliqua.</p>
                                <div class="blog-btn-2 btn-hover">
                                <button className="buy_btn mt-1" >
                               <Link to ='/shop'> Shop Now </Link>
                               </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 pt-5">
                        <div class="blog-wrap mb-50" data-aos="fade-up" data-aos-delay="400">
                            <div class="blog-img-date-wrap mb-25">
                                <div class="blog-img">
                                    <a href="blog-details.html">
                                      <img src= {blog1} alt=""/></a>
                                </div>
                               
                            </div>
                            <div class="blog-content">
                                <div class="blog-meta">
                                    
                                </div>
                                <h3><a href="blog-details.html">Old Wooden Furniture.</a></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipi elit, sed do eiusmod tempor incididunt ut labo et dolore magna aliqua.</p>
                                <div class="blog-btn-2 btn-hover">
                                <button className="buy_btn mt-1" >
                               <Link to ='/shop'> Shop Now </Link>
                               </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 pt-5">
                        <div class="blog-wrap mb-50">
                            <div class="blog-img-date-wrap mb-25">
                                <div class="blog-img">
                                    <a href="blog-details.html">
                                      <img src= {blog3} alt=""/></a>
                                </div>
                                
                            </div>
                            <div class="blog-content">
                                <div class="blog-meta">
                                    
                                </div>
                                <h3><a href="blog-details.html">Winter Home Decore.</a></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipi elit, sed do eiusmod tempor incididunt ut labo et dolore magna aliqua.</p>
                                <div class="blog-btn-2 btn-hover">
                                <button className="buy_btn mt-1" >
                               <Link to ='/shop'> Shop Now </Link>
                               </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 pt-5">
                        <div class="blog-wrap mb-50" data-aos="fade-up" data-aos-delay="200">
                            <div class="blog-img-date-wrap mb-25">
                                <div class="blog-img">
                                    <a href="blog-details.html">
                                      <img src= {blog2} alt=""/></a>
                                </div>

                            </div>
                            <div class="blog-content">
                                <div class="blog-meta">
                                    
                                </div>
                                <h3><a href="blog-details.html">Work Place Decore .</a></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipi elit, sed do eiusmod tempor incididunt ut labo et dolore magna aliqua.</p>
                                <div class="blog-btn-2 btn-hover">
                                <button className="buy_btn mt-1" >
                               <Link to ='/shop'> Shop Now </Link>
                               </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 pt-5">
                        <div class="blog-wrap mb-50" data-aos="fade-up" data-aos-delay="400">
                            <div class="blog-img-date-wrap mb-25">
                                <div class="blog-img">
                                    <a href="blog-details.html">
                                      <img src= {blog1} alt=""/></a>
                                </div>
                                
                            </div>
                            <div class="blog-content">
                                <div class="blog-meta">
                                    
                                </div>
                                <h3><a href="blog-details.html">Design Based on your style</a></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipi elit, sed do eiusmod tempor incididunt ut labo et dolore magna aliqua.</p>
                                <div class="blog-btn-2 btn-hover">
                                <button className="buy_btn mt-1" >
                               <Link to ='/shop'> Shop Now </Link>
                               </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 pt-5">
                        <div class="blog-wrap mb-50">
                            <div class="blog-img-date-wrap mb-25">
                                <div class="blog-img">
                                    <a href="blog-details.html">
                                      <img src= {blog3} alt=""/></a>
                                </div>
                               
                            </div>
                            <div class="blog-content">
                                <div class="blog-meta">
                                    
                                </div>
                                <h3><a href="blog-details.html">Making your home so beautiful with our decore.</a></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipi elit, sed do eiusmod tempor incididunt ut labo et dolore magna aliqua.</p>
                                <div class="blog-btn-2 btn-hover">
                                <button className="buy_btn mt-1" >
                               <Link to ='/shop'> Shop Now </Link>
                               </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        


            </Col>
        
       
      </Row>
      </Container> 
      </section>

  </Helmet>
  )
}

export default Offers

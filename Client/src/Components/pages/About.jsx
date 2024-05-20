import React from 'react'
import { Container,Row ,Col } from 'reactstrap'
import Helmet from '../Helmet/Helmet'
import CommonSection from '../UI/CommonSection'
import '../../Styles/aboutus.css'
import bg from '../../assets/images/bg-4.png'
import about from "../../assets/images/about.png"
import team1 from "../../assets/images/team-1.png"
import team2 from "../../assets/images/team-2.png"
import team3 from "../../assets/images/team-3.png"
import team4 from "../../assets/images/team4.png"



const About = () => {
  return (
    <Helmet title='About '>
    <CommonSection title= 'About-us  '/>
<section>
    <Container> 
      <Row> 
        <Col>
         
          <div className="about-us-area pt-100 pb-100">
        <div className="container pt-5 mt-5">
          <div className="row align-items-center flex-row-reverse">
            <div className="col-lg-6">
              <div className="about-content text-center">
                <h2>Furniture</h2>
                <h1 >Best Furniture</h1>
                <p >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incidi ut labore et dolore magna aliqua. Ut
                  enim ad minim venia quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                  in reprehenderit
                </p>
                <p className="mrg-inc" data-aos="fade-up" data-aos-delay="500">
                  in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                  in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <div
                  className="btn-style-3 btn-hover"
                  
                >
                  <a className="btn border" href="#/"
                    >Shop Now</a
                  >
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-img" >
                <img src= {about} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="banner-area pb-100">
    
        <div  className="bg-img pt-3"
          
         
        > 
        
          <div className="container">
            <div className="banner-content-5 banner-content-5-static">
             
              
              
                
              </div>
            </div>
          </div>
        </div>
 

      <div className="container">
          <div className="row">
          
            <div className="col-lg-3 col-md-3 col-sm-6 col-6">
           
           
              <div
                className="single-funfact text-center mb-30"
               
              >
                <img src= {bg} alt=''  width="1350px" className=' justify-content-center pt-5'/>
                <div className="funfact-img">
                
                </div>
               
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6 col-6 pt-5">
              <div
                className="single-funfact text-center mb-30"
                
              >
                <div className="funfact-img pt-1">
                  <img src="assets/images/icon-img/award.png"  className='p-4'  alt="" />
                </div>
                <h2 className="count">90</h2>
                <span>Award Winning</span>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6 col-6 pt-5">
              <div
                className="single-funfact text-center mb-30"
                
              >
                <div className="funfact-img ">
                  <img src="assets/images/icon-img/item.png"className='p-4' alt="" />
                </div>
                <h2 className="count">230</h2>
                <span>Totel Items</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-6 pt-5">
              <div
                className="single-funfact text-center mb-30 mrgn-none"
                
              >
                <div className="funfact-img pt-4">
                  <img src="assets/images/icon-img/cup.png" alt="" />
                </div>
                <h2 className="count">350</h2>
                <span>Cups of Coffee</span>
              </div>
            </div>
          </div>
        </div>
      


      

      <div class="team-area pt-100 pb-70">
        <div class="container">
          <div
            class="section-title-2 st-border-center text-center mb-75"
            data-aos="fade-up"
            data-aos-delay="200"
          >
           
          </div>
         
          <section id="team " class="team section-bg pt-5">
  <div class="container " >

    <div class="section-title">
      <h2> Our Team</h2>
     
    </div>

    <div class="row">

      <div class="col-lg-6" data-aos="zoom-in" data-aos-delay="100">
        <div class="member d-flex align-items-start">
          <div class="pic"><img src= {team4} class="img-fluid" alt=""/></div>
          <div class="member-info">
            <h4>Walter White</h4>
            <span>Chief Executive Officer</span>
            <p>Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>
            <div class="social">
             
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-6 mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="200">
        <div class="member d-flex align-items-start">
          <div class="pic"><img src= {team1} class="img-fluid" alt=""/></div>
          <div class="member-info">
            <h4>Sam Jhonson</h4>
            <span>Product Manager</span>
            <p>Aut maiores voluptates amet et quis praesentium qui senda para</p>
            <div class="social">
             
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-6 mt-4" data-aos="zoom-in" data-aos-delay="300">
        <div class="member d-flex align-items-start">
          <div class="pic"><img src= {team3} class="img-fluid" alt=""/></div>
          <div class="member-info">
            <h4>William Anderson</h4>
            <span>CTO</span>
            <p>Quisquam facilis cum velit laborum corrupti fuga rerum quia</p>
            <div class="social">
             
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-6 mt-4" data-aos="zoom-in" data-aos-delay="400">
        <div class="member d-flex align-items-start">
          <div class="pic"><img src= {team2}class="img-fluid" alt=""/></div>
          <div class="member-info">
            <h4>Amanda Jepson</h4>
            <span>Accountant</span>
            <p>Dolorum tempora officiis odit laborum officiis et et accusamus</p>
            <div class="social">
             
            </div>
          </div>
        </div>
      </div>

    </div>

  </div>
</section>
          </div>
        </div>
      
        


            </Col>
        
       
      </Row>
      </Container> 
      </section>

  </Helmet>
  )
}

export default About

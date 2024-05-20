import React from 'react'
import { Container,Row ,Col , Form , FormGroup } from 'reactstrap'
import Helmet from '../Helmet/Helmet'
import CommonSection from '../UI/CommonSection'
import "../../Styles/contact.css"

const Contact_us = () => {
  return (
    <Helmet title='Contact-us '>
    <CommonSection title= 'Contact-us  '/>
<section>
    <Container> 
      <Row> 
        <Col>
          <h3 className='text-center align-item-center mb-5 '>Our Outlet Address! Please Visit Us. </h3>
       
          <div className="row pt-5">
                    <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                        <div className="contact-us-info-wrap mb-30" data-aos="fade-up" data-aos-delay="200">
                            <div className="contact-us-info-title">
                                <h3>BD Shop</h3>
                            </div>
                            <div className="contact-us-info">
                                <p>365 Old BD Road, Uttra Shop Bd</p>
                                <span>Call us: +01-234567</span>
                            </div>
                            <div className="contact-us-info">
                                <p>Assistance hours: Monday – Friday</p>
                                <span>9 am to 8 pm </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                        <div className="contact-us-info-wrap mb-30" data-aos="fade-up" data-aos-delay="400">
                            <div className="contact-us-info-title">
                                <h3>USA Shop</h3>
                            </div>
                            <div className="contact-us-info">
                                <p>97, Old Avenue, Rd No 17, USA 1213</p>
                                <span>Call us: +01-234567</span>
                            </div>
                            <div className="contact-us-info">
                                <p>Assistance hours: Monday – Friday</p>
                                <span>9 am to 8 pm </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                        <div className="contact-us-info-wrap mb-30" data-aos="fade-up" data-aos-delay="600">
                            <div className="contact-us-info-title">
                                <h3>UK Shop</h3>
                            </div>
                            <div className="contact-us-info">
                                <p>House-33, Road-22, Block-Z, UK 129</p>
                                <span>Call us: +01-234567</span>
                            </div>
                            <div className="contact-us-info">
                                <p>Assistance hours: Monday – Friday</p>
                                <span>9 am to 8 pm </span>
                            </div>
                        </div>
                    </div>
                </div>
 <section className='pt-5'> 
 <Col  md={12}>

     <h5 className='mb-4 pt-5 fw-bold text-center '> Contact with Us </h5>
                <Form className='billing_form'>
            <FormGroup className="form_group">
              <input type='text' placeholder='Enter Your Name' />
            </FormGroup>

            <FormGroup className="form_group">
              <input type='email' placeholder='Enter Your email'/>
            </FormGroup>

            <FormGroup className="form_group">
              <textarea input type='text' rows={4} placeholder='Enter Your Message' required/>
              
            </FormGroup>

            <button className='buy_btn w-90 ' >Submit</button>

          
           


          </Form>
          </Col>
          </section>




               
     
            


            </Col>
        
       
      </Row>
      </Container> 
      </section>

  </Helmet>
  )
}

export default Contact_us;

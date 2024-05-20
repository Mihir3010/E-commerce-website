import React from 'react'
import './Footer.css'
import { Container ,Row ,Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'

const Footer = () => {

  const year = new Date().getFullYear()
  return <footer className="footer">
    <Container> 
      <Row>
      <Col lg='4'> 
      <div className="logo">
        <h1 className='head'> 
         Motif Intirior
          </h1>
        </div>
        <p className='footer_text mt-4'>Lorem ipsum dolor sit, amet consectetur 
          adipisicing elit. Iusto consectetur 
        pariatur deleniti numquam beatae, atque
         similique repellat?
         Quibusdam, magnam accusantium.</p>
         </Col>
      <Col lg='3'>
      <div className="footer_quick-link">
      <h4 className='quick_link-title ps-5'>Top category</h4>
        <ListGroup > 
          <ListGroupItem className='ps-5 border-0'> 
            <Link to ='#'>Chair </Link> 
          </ListGroupItem>

          <ListGroupItem className='ps-5 border-0'> 
            <Link to ='#'>Sofa </Link> 
          </ListGroupItem>

          <ListGroupItem className='ps-5 border-0'> 
            <Link to ='#'> Table </Link> 
          </ListGroupItem>

          <ListGroupItem className='ps-5 border-0'> 
            <Link to ='#'> Lamps </Link> 
          </ListGroupItem>


        </ListGroup>

      </div>
      </Col>

      <Col lg='2'> 
      <div className="footer_quick-link">
      <h4 className='quick_link-title'>Useful Links</h4>
        <ListGroup > 
          <ListGroupItem className='ps-0 border-0'> 
            <Link to ='#'>Shop </Link> 
          </ListGroupItem>

          <ListGroupItem className='ps-0 border-0'> 
            <Link to ='#'>Cart </Link> 
          </ListGroupItem>

          <ListGroupItem className='ps-0 border-0'> 
            <Link to ='#'> Login </Link> 
          </ListGroupItem>

          <ListGroupItem className='ps-0 border-0'> 
            <Link to ='#'> Privecy Policy </Link> 
          </ListGroupItem>


        </ListGroup>

      </div>
      </Col>

      <Col lg='3'> 
      <div className="footer_quick-link">
        <h4 className='quick_link-title'>Contact</h4>
        <ListGroup  className='footer_contact'> 
          <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2' > 
           <span> <i class="ri-map-pin-line"></i></span>
           <p>123, Lorem ipsum dolor sit amet.</p>
          </ListGroupItem>

          <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'> 
          <span> <i class="ri-map-pin-line"></i></span>
          <p>+8822556699</p>
          </ListGroupItem>

          <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'> 
          <i class="ri-mail-line"></i>
          <p>exmaple123@gmail.com</p> 
          </ListGroupItem>

          


        </ListGroup>

      </div>
      </Col>

    <Col lg='12'>
      <p className="footer_copyright">
        copyright {year} developed by Mihir Panchal All rights reserved.. </p> 

    </Col>

      </Row>
    </Container>
  </footer> 
}

export default Footer

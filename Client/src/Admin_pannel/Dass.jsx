import React from 'react'
import { Container,Row,Col } from 'reactstrap'
import "../Styles/dass.css"
import useGetData from '../custom-hooks/useGetData'

const Dass = () => {

  const {data: products} = useGetData("products")
  const {data: Users} = useGetData("Users")

  return ( <section> 
    <Container> 
      <Row>
       <Col className="lg-3">
        <div className="revenue_box">
          <h5>Total Sales</h5>
          <span>$7890</span>
        </div>
       </Col>
       <Col className="lg-3">
       <div className="order_box">
          <h5>Orders</h5>
          <span>80</span>
        </div>
       </Col>
       <Col className="lg-3">
       <div className="products_box">
          <h5>Total product</h5>
          <span>{products.length}</span>
        </div>
       </Col>
       <Col className="lg-3">
       <div className="users_box">
          <h5>Total Client</h5>
          <span>{Users.length}</span>
        </div>

        
       </Col>
       <Col lg="12"> 
       <div className="dass pt-0">
        <h3 className='d-flex align-items-center justify-content-between p-2 '> Selling Product Table</h3>
       <table className="table bordered mt-4">
            <thead>
              <tr>
                <th>Name</th>
                <th>Date</th>
                <th>OrderId</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
               <tr className='mt-2'>
                <td>John</td>
                <td>05/05/2024</td>
                <td>f58hh475</td>
                <td>999</td>
                <td>5</td>
                <td className='bad'>deliverd</td>
               </tr>
            </tbody>
            <tbody>
               <tr>
                <td>Alex</td>
                <td>06/05/2024</td>
                <td>mb5689e</td>
                <td>589</td>
                <td>4</td>
                <td className='boad'>pending</td>
               </tr>
            </tbody>
            <tbody>
               <tr>
                <td>wilson</td>
                <td>08/05/2024</td>
                <td>pf4785ed</td>
                <td>230</td>
                <td>3</td>
                <td className='boad'>pending</td>
               </tr>
            </tbody>
            <tbody>
               <tr>
                <td>Lucas</td>
                <td>12/05/2024</td>
                <td>fe5689d5</td>
                <td>870</td>
                <td>4</td>
                <td className='bad'>deliverd</td>
               </tr>
            </tbody>

           </table>
           </div>
       </Col>
      </Row>
    </Container>
  </section>
  )
}

export default Dass

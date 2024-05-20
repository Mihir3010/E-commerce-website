// import './app.css'
import { useSelector } from "react-redux";
import {Col} from "reactstrap"

import '../../Styles/Payment.css'
export function Payment() {


  const totalQty = useSelector(state=> state.cart.totalQuantity)
  const totalAmount = useSelector(state=>state.cart.totalAmount)


  const paymentHandler = async (event) => {

    const amount = totalAmount*100;
    const currency = 'INR';
    const receiptId = '1234567890';

    const response = await fetch('http://localhost:5030/order',
     {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        amount,
        currency,
        receipt: receiptId
      })
      
    })

    const order = await response.json();
    console.log('order', order);


    var option = {
      key:"",
      amount,
      currency,
      name:"motif Interioir",
      description: "Test Transaction",
      image:"https://i.ibb.co/5Y3m33n/test.png",
      order_id:order.id,
      handler: async function(response) {
        
        const body = {...response,}

        const validateResponse = await fetch('http://localhost:5030/validate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)

        })

        const jsonResponse = await validateResponse.json();

        console.log('jsonResponse', jsonResponse);
        
      },
      prefill: {
        name: "mihir panchal", 
        email: "mihir@example.com",
        contact: "9000000000", 
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    }

    // eslint-disable-next-line no-undef
    var rzp1 = new Razorpay(option);
    rzp1.on("payment.failed", function(response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    })

    rzp1.open();
    event.preventDefault();
}
  


return (
  
  <>
  
  <div className="main">
  <Col lg = '5'>
    <h4 className="text-center justify-content-center align-content-center pt-5"> Payment </h4>
            <div className="checkout_cart">
              <h6> Total Qty : <span> {totalQty} Items</span> </h6>
              <h6> SubTotal : <span>$ {totalAmount} </span> </h6>
              <h6><span>Shipping: <br/> Free Shipping</span> <span> $0 </span> </h6>
              
              <h4> Toal Cost : <span>${totalAmount}</span></h4>
                   <button onClick={paymentHandler} className='buy_btn auth_btn w-100 '> 
                Pay Now 
               </button>

                </div>
                
          </Col>
          </div>
  
 </>
)
}
import React ,{useState}from 'react'
import Helmet from '../Helmet/Helmet'
import {Container, Row ,Col, Form,FormGroup} from 'reactstrap';
import { Link } from 'react-router-dom';
import '../../Styles/login.css'
import logo from  "../../assets/images/logo.png"
import {createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../../firebase.config';
import {toast} from "react-toastify";
import {ref,uploadBytesResumable, getDownloadURL} from "firebase/storage"
import { storage } from '../../firebase.config';
import {setDoc, doc} from "firebase/firestore"
import { db } from '../../firebase.config';
import {useNavigate} from "react-router-dom"



const Signup = () => {
   const  [username , setUsername] = useState("")
   const [email , setEmail] = useState("");
   const [password , setPassword] = useState("");
   const [file , setFile] = useState(null)
   const [loading , setLoading]= useState(false)

   const navigate = useNavigate()

  const signup = async (e) =>{
     e.preventDefault()
   

     try{



      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      const storageRef = ref(storage,`image/${Date.now() + username }`)
      const uploadTask = uploadBytesResumable(storageRef ,file )
     uploadTask.on((error)=>{
       toast.error(error.message)
     },()=>{
       getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL)=>{
       
        await  updateProfile(user,{
           displayName:username,
           photoURL:downloadURL,


         })

await setDoc(doc(db,"users", user.uid),{
   uid:user.uid,
   displayName:username,
   email,
   photoURL:downloadURL,


})

       })
     })

       setLoading(false)
       toast.success("Account Created ")
       navigate('/login')


      const user = userCredential.user;
       
       toast.success("resigistration succes")
       console.log(user);
     }
   
      catch(error){
        setLoading(false)
         toast.error("somthing went wrong")
      }
  }
 

  return (
     <Helmet title="Signup">
      <section> 
        <Container> 
          <Row>
             {
               loading ? <Col lg="12" className="text-center" ><h5 className='fw-bold'>Loading.....</h5></Col> :
               <Col lg= "6" className="m-auto text-center">
               <img src= {logo} height="50px" alt="" />
                 <h3 className='fw-bold mb-4 pt-4'>Signup</h3>
                
                 <Form className="auth_form" onSubmit={signup} > 
                 <FormGroup className= "form_group">
                     <input type="text" placeholder='Username' value={username} onChange={e=> setUsername (e.target.value)}/> 
                   </FormGroup>
                   <FormGroup className= "form_group">
                     <input type="email"   placeholder='Enter your email' value={email} onChange={e=> setEmail (e.target.value)}/> 
                   </FormGroup>
                   <FormGroup className= "form_group">
                     <input type="password"  placeholder='Enter your password' value={password} onChange={e=> setPassword (e.target.value)}/> 
                   </FormGroup>
                   <FormGroup className= "form_group">
                     <input type="file"  onChange={e=> setFile (e.target.files[0])}/> 
                   </FormGroup>
                   <button type='submit' className="buy_btn auth_btn">Create an Account</button>
                   <p>Already have an account ? {""}
                    <Link to ="/Login"> Login </Link></p>
                 </Form>
               
               </Col>
             }
          </Row>
        </Container>
      </section>
     </Helmet>
  )
}

export default Signup;
import  { useEffect, useState } from 'react'
import {db} from "../firebase.config"
import { collection, onSnapshot } from "firebase/firestore";


const useGetData = collectionName =>{
     const [data, setdata]= useState([]);
     const collectionRef = collection(db,collectionName);
     const [loading, setloading] = useState(true)


useEffect(()=>{
     const getData = async ()=>{
          // firebase realtime data update

          await onSnapshot(collectionRef, (snapshot)=>{
               setdata(snapshot.docs.map((doc)=>({...doc.data(), id:doc.id})));
               setloading(false)
                
          })
        
        
     }
     getData();
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [] );


  return {data, loading};
}

export default useGetData;

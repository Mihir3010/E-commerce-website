import React from 'react'
import ProductCard from './ProductCard';
const Productlist = ({data}) => {
  return ( <>
  {
     data.map(item=>(
          <ProductCard item={item} key={indexedDB}/>
          
     ))
  }
   
       
        
    </>
      
  );
    
  
};

export default Productlist;

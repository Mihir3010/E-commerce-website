
import React,{useState} from "react";
import CommonSection from '../UI/CommonSection';
import Helmet from "../../Components/Helmet/Helmet";
import '../../Styles/shop.css';
import { Container,Row ,Col } from 'react-bootstrap';
import products from "../../assets/data/products";
import Productslist from "../../Components/UI/Productlist";


const Shop = () => {

   const [productsData , setProductsData ]= useState(products);

    const handleFilter = (e)=>{
      const filterValue = e.target.value;
      if(filterValue === "sofa"){
        const filteredProducts = products.filter(
          (item)=>item.category==='sofa')
          
        setProductsData(filteredProducts);
       
    }
    if(filterValue === "chairs"){
      const filteredProducts = products.filter(
        (item)=>item.category==='chairs')
        
      setProductsData(filteredProducts);
    }
    if(filterValue === "table"){
      const filteredProducts = products.filter(
        (item)=>item.category==='table')
        
      setProductsData(filteredProducts);
    }
    if(filterValue === "lamp"){
      const filteredProducts = products.filter(
        (item)=>item.category==='lamp')
        
      setProductsData(filteredProducts);
    }
  }
 
   const handleSearch = e =>{
     const searchTerm = e.target.value
     const SearchedProducts = products.filter(item => item.productName.toLowerCase().includes(searchTerm.toLowerCase()));

    setProductsData(SearchedProducts)
    

       }





  return <Helmet title='Shop'>
    <CommonSection title="Products"/>
   
    <section>
      <Container>
        <Row>
          <Col lg='3' md='3'>
            <div className="filter_widget">
              <select onChange={handleFilter}>
              <option >Filter by category</option>
                <option value="sofa">Sofa</option>
                <option value="chairs">Chair</option>
                <option value="table">Table</option>
                <option value="lamp">Lamps</option>
              </select>
            </div>
             </Col>
          <Col lg='3' md='3'>
          <div className="filter_widget">
              <select>
              <option >Sort by</option>
                <option value="Acsending">Acsending</option>
                <option value="Desecending">Desecending</option>
                
              </select>
            </div> </Col>
            {/* <Col lg='3' md='2'>
          <div className="filter_widget">
              <select>
              <option >Sort by</option>
                <option value="Acsending">ing</option>
                <option value="Desecending">ding</option>
                
              </select>
            </div> </Col> */}
          <Col lg='5' md='4'>
            <div className="search_box ">
              <input type='text' placeholder='search.....' onChange={handleSearch} />
              <span> <i class="ri-search-line"></i>  </span>
            </div>
             </Col>

          
        </Row>
      </Container>
    </section>
    <section className="pt-0"> 
      <Container>
        <Row> 
         {
           productsData.length === 0? <h1 className="text-center fs-4"> No Products are found !!</h1>
           :<Productslist data={productsData}/> 
         }
        </Row>
      </Container>
    </section>
  
  </Helmet>
}

export default Shop

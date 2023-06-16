import React, { useEffect, useState } from "react";
import SingleProducts from "./SingleProducts";
import axios from 'axios'

const Products = () => {
  const [products, setProducts] = useState();
  const [load , setLoad] = useState(true);
  const [Categories ,setCategories]= useState([]);
  const [currentcategories,setcurrentcategories]= useState([])
  const[btncategories , settbncategories]= useState([])

  const getCategories = async () => {
    const response = await axios.get("https://dummyjson.com/products/categories")
    console.log(response.data);
    setCategories(response.data)

  }


  const getProducts = async () => {
    // let response = await fetch("https://dummyjson.com/products");
    // let productDetails = await response.json();
    let response = await axios.get("https://dummyjson.com/products");
    setProducts(response.data.products)
    
    setLoad(false)
    // setProducts(productDetails.products);
    // console.log(products);
  };


  const fetchProductsBycat = async (category)=>{
    setcurrentcategories(category)
    settbncategories(category)
    let response = await axios.get(`https://dummyjson.com/products/category/${category}`);
    setProducts(response.data.products)

  }




  useEffect(() => {
    getProducts();
    getCategories();
  },[]);
  return (
    <>
    <div>
      {
      Categories.map((category,index) => {
        return <button key={index} className={`${category==btncategories ? "btnactive":""}` } onClick={()=>fetchProductsBycat(category)}> {category}</button>
      })
      }
    </div>
    <div class="gallery-content">
      {load? 
        <h3>Loading </h3>
        :
        products.map((product, index) => {
          return <SingleProducts key={index}   product={product} />;
        })}
    </div>
      
    </>
  );
};

export default Products;

import React, { useEffect, useState } from 'react';
import Cards from '../components/Card';
import axios from 'axios'

const ViewProducts = () => {

  const [products, setProducts] = useState([])

    useEffect(()=>{
       const getData = async() =>{
          const response = await axios.get('http://localhost:8000/api/products/products')
          setProducts(response.data)
       }
       getData()
    })
  return (
    <div style={{ width: '30%', margin: 'auto' }}>
      
      {
        products && products.map((product)=> <Cards key={product._id} product={product} /> )
      }
    </div>
  );
};

export default ViewProducts;

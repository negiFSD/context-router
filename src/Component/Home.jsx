import React, { useEffect, useState } from 'react'
import SingleCompo from './SingleCompo';
import jsonData from './data'



function    Home( {cart, setCart}) {
  const [product, setProduct]=useState([])
  // const [cart, setCart]= useState([])

//   useEffect(()=>{fetch('https://fakestoreapi.com/products?limit=20')
// .then(res=>res.json())
// .then(json=>setProduct(json))}, [])

useEffect(()=>{
setProduct(jsonData)
},[])
// console.log(product);


  return (
    <div className='home'>
      {product.map((prod)=>(<SingleCompo key={prod.id} prod={prod} cart={cart} setCart={setCart}/>))}
    </div>
  )
}

export default Home

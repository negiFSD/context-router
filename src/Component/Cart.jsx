import React, {useState, useEffect, useContext } from "react";
import { cartContext } from "../Context";
import SingleCompo from "./SingleCompo";

function Cart() {
/* here below, we are destructuring values of context provider */
  const{cartState}= useContext(cartContext); 

  const[CarttotalPrice, setTotalPrice]= useState()  
  
  // Below code is to get the total amount of the cart
  useEffect(()=>{
  setTotalPrice( cartState.reduce((acc, curr)=>acc + curr.price, 0))
  },[cartState])
 
  return (
    <div className="cart">
      <h1>My Cart</h1>
      <p>Total :{CarttotalPrice}</p>
      <div className="classProduct">
     
      </div>
      <div>
      {cartState.map((prod)=>(<SingleCompo prod={prod} key={prod.id} />))}
      </div>  
    </div>
  );
}

export default Cart;

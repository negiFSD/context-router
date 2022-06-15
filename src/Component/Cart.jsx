import React from "react";
import SingleCompo from "./SingleCompo";

function Cart({cart, setCart}) {
  console.log(cart)
  return (
    <div className="cart">
      <h1>My Cart</h1>
      <p>Total : 100</p>
      <div className="classProduct">
     
      </div>
      <div>
      {cart.map((prod)=>(<SingleCompo prod={prod} cart={cart} setCart={setCart}/>))}
      </div>  
    </div>
  );
}

export default Cart;

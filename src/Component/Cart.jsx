import React from "react";
import SingleCompo from "./SingleCompo";

function Cart({cart, setCart}) {
  console.log(cart.length)
  return (
    <div className="cart">
      <h1>My Cart</h1>
      <p>Total :{cart.length}</p>
      <div className="classProduct">
     
      </div>
      <div>
      {cart.map((prod)=>(<SingleCompo prod={prod} key={prod.id} cart={cart}  setCart={setCart}/>))}
      </div>  
    </div>
  );
}

export default Cart;

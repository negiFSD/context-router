import React from "react";

function SingleCompo({ prod, cart, setCart }) {
  return (
    <div className="homecompo" key={prod.id}>
      <img src={prod.image} alt="random_Image" />
      <p> {prod.title}</p>
      <span> Price : Rs {prod.price}</span>

      {cart.includes(prod)?( <button onClick={()=>{
          setCart(cart.filter((c)=>c.id !==prod.id))
      }}>remove from cart</button>):( <button
        onClick={() => {
          setCart([...cart, prod]); }}>
        add
      </button>)}
     
     

      {/* <button onClick={()=>{
          setCart(cart.filter((c)=>c.id !==prod.id))
      }}>remove from cart</button> */}
    </div>
  );
}

export default SingleCompo;

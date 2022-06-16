import React, { useContext } from "react";
import { cartContext } from "../Context";

function SingleCompo({ prod }) {
  const{cartState, setCartState} = useContext(cartContext)

  return (
    <div className="homecompo" key={prod.id}>
      <img src={prod.image} alt="random_Image" />
      <p> {prod.title}</p>
      <span> Price : Rs {prod.price}</span>
      

{/*  ----------  Below code is responsible for add and remove item from cart and home ---------- */}
{/*  ---------- instead of :- cartState.includes(prod) we can also use cartState.length>0 */}
      { cartState.includes(prod)?( <button onClick={()=>{
          setCartState(cartState.filter((c)=>c.id !==prod.id))
      }}>remove from cart</button>):( <button
        onClick={() => {
          setCartState([...cartState, prod]); }}>
        add
      </button>)}
     

      {/* <button onClick={()=>{
          setCart(cart.filter((c)=>c.id !==prod.id))
      }}>remove from cart</button> */}
    </div>
  );
}

export default SingleCompo;

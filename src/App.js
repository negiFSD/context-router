import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Component/Header';
import Home from './Component/Home.jsx'
import Cart from './Component/Cart.jsx'
import { useState } from 'react';

function App() {  
  const [cart, setCart]= useState([])
  console.log(typeof(cart));
  
  return (
    <BrowserRouter>
     <Header></Header>  
     <div className='App'>
       <Routes>
         <Route path='/' element={<Home cart={cart} setCart={setCart}></Home>}/>
         <Route path='cart' element={<Cart cart={cart} setCart={setCart}></Cart>}/>
           
       </Routes>
     </div>
    </BrowserRouter>
  );
}

export default App;

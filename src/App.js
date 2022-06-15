import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Component/Header';
import Home from './Component/Home.jsx'
import Cart from './Component/Cart.jsx'

function App() {  
  return (
    <BrowserRouter>
     <Header></Header>  
     <div className='App'>
       <Routes>
         <Route path='/' element={<Home></Home>}/>
         <Route path='cart' element={<Cart/>}/>
           
       </Routes>
     </div>
    </BrowserRouter>
  );
}

export default App;

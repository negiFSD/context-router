import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { cartContext } from '../Context'


const Header = () => {
  const{cartState} =   useContext(cartContext)
  return (
    <div className='header'>
        <h1>This App is created using context API along with react router</h1>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='cart'>Cart ({cartState.length})</Link></li>
        </ul>
    </div>
  )
}

export default Header
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
        <h1>This App is created using context API along with react router</h1>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='cart'>Cart</Link></li>
        </ul>
    </div>
  )
}

export default Header
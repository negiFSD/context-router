 import React, {  createContext, useState } from 'react'
 export const cartContext =  createContext()

 
 function Context({children}) {

     const [cartState, setCartState]=useState([])

   return (
     <cartContext.Provider value={{cartState, setCartState}}>
        { children}         
     </cartContext.Provider>
   )
 }
 // after this now wrep app.js inside index.js with the file name so that context provides is implimented and is available to all child component
 export default Context
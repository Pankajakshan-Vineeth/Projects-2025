import React, { createContext, useState } from 'react'
import all_product from '../Components/assets/all_product'



export const ShopContext = createContext(null);

  //Empty cart 

const getDefaultCart  = ()=>{

  let cart = {};
  for (let i = 0; i < all_product.length; i++) {
    cart[all_product[i].id] = 0;
  }
  return cart;
}

const ShopContextProvider = (props)=>{

  const [cartItems, setCartItems] = useState(getDefaultCart());


  const addToCart = (itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    console.log(cartItems)
  }

  
  const removeFromCart = (itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
  }

  const ContextValue = {all_product,cartItems,addToCart,removeFromCart};


  return(
    <ShopContext.Provider value = {ContextValue}>
      {props.children}
    </ShopContext.Provider>

  )
}

export default ShopContextProvider

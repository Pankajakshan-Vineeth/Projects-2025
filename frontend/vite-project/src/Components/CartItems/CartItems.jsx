import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../assets/cart_cross_icon.png'


const CartItems = () => {

    const { all_product, cartItems, removeFromCart } = useContext(ShopContext)

  return (
    <div className='cartitems'>
      <div className="cartitem-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr/>

      {all_product.map((e) => {
       if (cartItems[e.id] > 0) 
    {
    return <div key={e.id}>
           <div className="cartitems-format">
          <img src={e.image} alt='' className='carticon-product-icon'/>
          <p>{e.name}</p>
          <p>${e.new_price}</p>
          <button className='cartitems-quantity'>{cartItems[e.id]}</button>
          <p>${e.new_price * cartItems[e.id]}</p>
          <img src={remove_icon} onClick={() => removeFromCart(e.id)} alt="remove" />
        </div>
      </div>
    
  }
  return null

})}

    </div>
  )
}

export default CartItems

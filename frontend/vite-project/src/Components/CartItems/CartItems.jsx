import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../assets/cart_cross_icon.png';

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);

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

      <hr />

      {all_product.map((product) => (
        cartItems[product.id] > 0 && (
          <div key={product.id} className="cartitems-format cartitem-format-main ">
            <img src={product.image} alt={product.name} className='carticon-product-icon' />
            <p>{product.name}</p>
            <p>${product.new_price}</p>
            <button className='cartitems-quantity'>{cartItems[product.id]}</button>
            <p>${product.new_price * cartItems[product.id]}</p>
            <img 
              src={remove_icon} 
              alt="remove" 
              onClick={() => removeFromCart(product.id)} 
              className='cart-remove-icon'
            />
                <hr />
  
          </div>
          
        )
      ))}

      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Total</h1>
          <div>
            <div className="cartitems-total-item">
              <p>subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr/>
            <div className="cartitem-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr/>
            <div className="cartitem-total-item">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>   
          </div>
        <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="cartitem-promobox">
            <input type="text" placeholder='promo code'/>
            <button>Submit</button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default CartItems;

import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../assets/star_icon.png'
import star_dull_icon from '../assets/star_dull_icon.png'
import BreadCrums from '../BreadCrums/BreadCrums'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {

    const {product} = props;
    const {addToCart} = useContext(ShopContext)

    if (!product) {
        return <div>Loading...</div>
    }

  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className='productdisplay-img'>
                 <img className = 'productdisplay-main-img' src={product.image} alt="" />
            </div>
        </div>

        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-price">
                <div className="productdisplay-right-price-old">
                    ${product.old_price}
                </div>
                <div className="productdisplay-right-price-new">
                    ${product.new_price}
                </div>
            </div>

            <div className="productdisplay-right-description">
                Keep it simple, keep it cool and keep it sporty with the Zippered Full-Zip Men's Jacket. 
                Complete with a full zip and subtle branding
            </div>

            <div className="productdisplay-right-size">
                <h3>Select size</h3>
                <div className='productdisplay-right-sizes'>
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <p className='productdisplay-right-category'><span>Category:</span> Women, T-Shirt, Crop Top</p>
            <p className='productdisplay-right-category'><span>Tags:</span> Modern, Latest</p>

        </div>
    </div>
  )
}

export default ProductDisplay

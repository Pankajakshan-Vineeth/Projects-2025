import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/assets/dropdown_icon.png'
import Item from '../Components/Items/Items'
const ShopCategory = (props) => {

  const {all_product} = useContext(ShopContext)
  return (
    <div className='shop-category'>
      <img className='shop-category-banner' src={props.banner} alt="" />

    <div className="shopcategory-indexSort">
      <p>
        <span>Showing 1-12
        </span> Out of 36 products
      </p>
      <div className="shopcategory-sort">
       sort by <img src={dropdown_icon} alt="" />
      </div>
    </div>
    <div className="shopcategory-products">
      {all_product.filter(item=>props.category===item.category)
      .map((item,i)=>(
           <Item 
          key={i} 
              id={item.id} 
              name={item.name} 
              image={item.image} 
              new_price={item.new_price} 
              old_price={item.old_price}
          />
      ))}
    </div>
    <div className="shop-category-loadmore">
      Explore more
    </div>
    </div>
  )
}

export default ShopCategory

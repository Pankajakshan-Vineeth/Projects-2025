import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import BreadCrums from '../Components/BreadCrums/BreadCrums';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

const Product = () => {

  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();

  const product = all_product.find((e) => e.id === Number(productId))

  console.log("All Products:", all_product);
  console.log("Product ID:", productId);
  console.log("Selected Product:", product);

  if (!product) {
    return <div>Loading Product...</div>
  }

  return (
    <div>
      <BreadCrums product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox/>
      <RelatedProducts/>
    </div>
  )
}

export default Product

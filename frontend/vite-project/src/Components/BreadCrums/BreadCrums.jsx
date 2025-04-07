import arrow_icon from '../assets/breadcrum_arrow.png'
import './BreadCrums.css'


const BreadCrums = (props) => {
    const { product } = props;
  
    if (!product) {
      return <div>Loading...</div>;
    }
  
    return (
      <div className='breadcrum'>
        HOME <img src={arrow_icon} alt="" />
        SHOP <img src={arrow_icon} alt="" />
        {product.category} <img src={arrow_icon} alt="" />
        {product.name}
      </div>
    );
  };
  
  export default BreadCrums;
  
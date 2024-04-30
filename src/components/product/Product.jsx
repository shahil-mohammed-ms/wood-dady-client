import React, { useState } from 'react';
import './index.css';
import ActiveLastBreadcrumb from '../../common/breadCrums/breadCrums';

function Product() {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className='Product'>
      <div style={{height:'60px',display:'flex',alignItems:'center',width:'100%',justifyContent:'center'}}>
      <ActiveLastBreadcrumb/>

      </div>
      <div className="proSub">
        <div className="imgFrame">
          <img src='/gallery/products/p1.jpg' alt='Product' />
        </div>

        <div className="proContents">
          
        <h2 className='ftitle' >Furniture name</h2>  
     <p > <span className='fpr' >Rs:7000</span>
      <span className='fdpr' >3500</span> 
     <span  className='dcnt'> 50% off</span>  </p>

     <div style={{display:'flex',alignItems:'center',gap:'20px'}}>
     <p className='qtyn' style={{fontSize:'22px'}} >Quantity: </p>
     <div className="quantity-counter">
      <button className="quantity-button" onClick={decrementQuantity}>-</button>
      <span className="quantity">{quantity}</span>
      <button className="quantity-button" onClick={incrementQuantity}>+</button>
    </div>
     </div>

     <div className="button-container">
      <button className="add-to-cart-button">Add to Cart</button>
      <button className="add-to-wishlist-button">Add to Wishlist</button>
    </div>
    

        </div>
      </div>
    </div>
  );
}

export default Product;

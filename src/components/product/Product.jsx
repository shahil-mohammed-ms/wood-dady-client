import React from 'react';
import './index.css';
import ActiveLastBreadcrumb from '../../common/breadCrums/breadCrums';

function Product() {
  return (
    <div className='Product'>
      <div style={{paddingLeft:'15%',height:'60px',display:'flex',alignItems:'center',width:'100%',}}>
      <ActiveLastBreadcrumb/>

      </div>
      <div className="proSub">
        <div className="imgFrame">
          <img src='/gallery/products/p1.jpg' alt='Product' />
        </div>
        <div className="proContents">
          
     

        </div>
      </div>
    </div>
  );
}

export default Product;

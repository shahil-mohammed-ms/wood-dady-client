import React from 'react';
import ProductCard from './productCard';
import './index.css';

function ProductList() {
  return (
    <div className='ProductsBox'>
      <div className="Title">
        <h1>Featured Products</h1>
      </div>
      <div className="ProductList"> {/* Updated class name */}
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}

export default ProductList;

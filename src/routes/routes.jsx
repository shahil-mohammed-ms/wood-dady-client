import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from '../pages/home/Home';
import ProductPage from '../pages/product/Product';

function routes() {
  return (
   <>
     <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    <Routes>
    <Route path="/product" element={<ProductPage />} />
  </Routes>
   </>
  
   
  )
}

export default routes
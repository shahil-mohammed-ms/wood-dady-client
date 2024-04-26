import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from '../pages/home/Home';

function routes() {
  return (
   
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
   
  )
}

export default routes
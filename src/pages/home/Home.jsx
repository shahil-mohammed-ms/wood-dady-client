import React from 'react'
import Header from '../../layouts/header'
import Banner from '../../components/banner/banner'
import Service from '../../components/service-sec/service'
import ProductList from '../../components/productList/productList'

function Home() {
  return (
    <div>
      <Header/>
      <Banner/>
      <Service/>
      <ProductList/>


      </div>
  )
}

export default Home
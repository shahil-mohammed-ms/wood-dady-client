import React from 'react'
import Header from '../../layouts/header'
import Banner from '../../components/banner/banner'
import Service from '../../components/service-sec/service'
import ProductList from '../../components/productList/productList'
import Footer from '../../layouts/footer'
import OfferSale from '../../components/offerSale/offerSale'
import ContentSection from '../../components/contentSection/contentSection'

function Home() {
  return (
    <div>
      <Header/>
      <Banner/>
      <ContentSection/>
      <OfferSale/>
      <ProductList/>


      <Service/>
      <Footer/>


      </div>
  )
}

export default Home
import React from 'react'
import Header from '../../layouts/header'
import PageTitleBox from '../../common/pageTitleBox/PageTitleBox'
import AboutSec from '../../components/aboutSec/AboutSec'
import OfferSale from '../../components/offerSale/offerSale'
import Footer from '../../layouts/footer'
import HistorySec from '../../components/historySec/HistorySec'
import ContactSec from '../../components/contactSec/contactSec'

function AboutPage() {
  return (
    <div>
      <Header/>
      <PageTitleBox title={'ABOUT US'}/> 
      <AboutSec/>
      <OfferSale/>
      <HistorySec/>
      <ContactSec/>


      <Footer/>

    </div>
  )
}

export default AboutPage
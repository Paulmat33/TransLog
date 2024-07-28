import React from 'react'
import Header from '../../Components/Header/Header'
import Abouthero from '../../Components/Abouthero/Abouthero';
import Aboutus from '../../Components/Aboutus/Aboutus'
import Services from '../../Components/Services/Services';
import Expert from '../../Components/Expert/Expert'
import Testimonial from '../../Components/Testimonial/Testimonial';
import Pricing from '../../Components/Pricing/Pricing';
import FQA from '../../Components/FQA/FQA'
import Footer from '../../Components/Footer/Footer'

const About = () => {
  return (
    <div>
      <Header/>
      <Abouthero/>
      <Aboutus/>
      <Services/>
      <Expert/>
      <Testimonial/>
      <Pricing/>
      <FQA/>
      <Footer/>
    </div>
  )
}

export default About

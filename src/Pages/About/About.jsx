import React from 'react'
import Abouthero from '../../Components/Abouthero/Abouthero';
import Aboutus from '../../Components/Aboutus/Aboutus'
import Services from '../../Components/Services/Services';
import Expert from '../../Components/Expert/Expert'
import Testimonial from '../../Components/Testimonial/Testimonial';
import Pricing from '../../Components/Pricing/Pricing';
import FQA from '../../Components/FQA/FQA'

const About = () => {
  return (
    <div>
      <Abouthero/>
      <Aboutus/>
      <Services/>
      <Expert/>
      <Testimonial/>
      <Pricing/>
      <FQA/>
    </div>
  )
}

export default About

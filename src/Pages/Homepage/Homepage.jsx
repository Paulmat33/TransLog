import Hero from '../../Components/Hero/Hero'
import SectionA from '../../Components/SectionA/SectionA'
import Delivery from '../../Components/Delivery/Delivery'
import Transporting from '../../Components/Transporting/Transporting'
import Testimonial from '../../Components/Testimonial/Testimonial'
import Product from '../../Components/Product/Product'
import Expert from '../../Components/Expert/Expert'
import Contact from '../../Components/Contact/Contact'

const Homepage = () => {
  return (
    <div>
      <Hero/>
      <SectionA/>
      <Delivery/>
      <Transporting/>
      <Testimonial/>
      <Product/>
      <Expert/>
      <Contact/>
    </div>
  )
}

export default Homepage

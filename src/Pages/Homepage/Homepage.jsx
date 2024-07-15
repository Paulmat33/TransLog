import Hero from '../../Components/Hero/Hero'
import SectionA from '../../Components/SectionA/SectionA'
import Delivery from '../../Components/Delivery/Delivery'
import Transporting from '../../Components/Transporting/Transporting'
import Testimonial from '../../Components/Testimonial/Testimonial'
import Product from '../../Components/Product/Product'

const Homepage = () => {
  return (
    <div>
      <Hero/>
      <SectionA/>
      <Delivery/>
      <Transporting/>
      <Testimonial/>
      <Product/>
    </div>
  )
}

export default Homepage

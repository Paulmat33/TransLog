import Hero from '../../Components/Hero/Hero'
import SectionA from '../../Components/SectionA/SectionA'
import Delivery from '../../Components/Delivery/Delivery'
import Transporting from '../../Components/Transporting/Transporting'
import Testimonial from '../../Components/Testimonial/Testimonial'
import Product from '../../Components/Product/Product'
import Expert from '../../Components/Expert/Expert'
import Contact from '../../Components/Contact/Contact'
import Blog from '../../Components/Blog/Blog'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'

const Homepage = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <SectionA/>
      <Delivery/>
      <Transporting/>
      <Testimonial/>
      <Product/>
      <Expert/>
      <Contact/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default Homepage

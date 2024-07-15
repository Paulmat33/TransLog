import './Product.css'
import bigairplane from '../../assets/bigairplane.png'
import packageicon from '../../assets/packageIcon.png'

const Product = () => {
  return (
    <div className='product-sec'>
      <img src={bigairplane} alt=''/>
      <div className='opportunity container'>
        <h3>Why Choose Us</h3>
        <h1>We create opportunity to reach potential</h1>
        <p>Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. </p>
      </div>

      <div className='package-icon container'>
        <div className='package-icon'>
        <img src={packageicon} alt=''/>
        <p className='safe'>Safe Package</p>
        </div>


      </div>

      
    </div>
  )
}

export default Product

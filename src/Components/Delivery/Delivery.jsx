import './Delivery.css';
import box from '../../assets/boxicon.png'
import airplane from '../../assets/airplane.png';

const Delivery = () => {
  return (
    <div className='delivery container'>
      <div className='empty-div'></div>
      <div className='why-us'>
      <h4>Why Us</h4>
      <h1>We provide full range global logistics solution</h1>
      <p>Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. <br/><br/><br/>

Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
      </div>

      <div className='box'>
        <img src={box} alt=""/><span> Delivery on Time</span>
      </div>
      <div className='box'>
        <img src={box} alt=""/><span> Optimized Travel Cost</span>
        </div>
      
    </div>
  )
}

export default Delivery

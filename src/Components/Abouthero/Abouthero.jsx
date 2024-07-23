import './Abouthero.css'
import Twitter from '../../assets/Twitter.png'
import Facebook from '../../assets/Facebook.png'
import Linkdin from '../../assets/Linkdin.png'


const Abouthero = () => {
  return (
    <div className='abouthero container'>
      <div className="nav">
        <nav>
          <li className="left-border">Home</li>
          <li className="left-border">About</li>
          <li className="left-border">Pages</li>
          <li className="left-border">Project</li>
          <li className="left-border">Contact</li>
        </nav>
        <div className="social-icon1">
          <img src={Twitter} alt="" />
          <img src={Facebook} alt="" />
          <img src={Linkdin} alt="" />
        </div>
        <button className="btn5"> Request Quote</button>
      </div>
      <div className='about'>
      <h4>About Us</h4>
      <h1>About Our Logistics</h1>
      </div>
    </div>
  )
}
export default Abouthero

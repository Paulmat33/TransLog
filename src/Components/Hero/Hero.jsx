import './Hero.css'
import logistics from '../../assets/logistics.png'


const Hero = () => {
  return (
      <div className="hero-area container">
        <img src={logistics} alt="" className="logistics"/>
        <h1>Your Gateway <br/>
        to any Destination <br/>in the World</h1>

        <p>In augue ligula, feugiat ut nulla consequat. Ut est lacus, molestie in arcu <br/> no, iaculis vehicula ipsum. Nunc faucibus, nisl id dapibus finibus, enim <br/> diam interdum nulla, sed laoreet risus lectus.</p>
        <button className='explore'>Explore More</button>
      </div>
    
  )
}

export default Hero

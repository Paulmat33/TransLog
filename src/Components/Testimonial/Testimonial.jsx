import './Testimonial.css'
import rightarrow from '../../assets/rightarrow.png'
import leftarrow from '../../assets/leftarrow.png'
import Kathleen from '../../assets/Kathleen.png'
import  John from '../../assets/John.png'
import  dot from '../../assets/dot.png'
import  Star from '../../assets/Star.png'





const Testimonial = () => {
  return (
    <div className='container'>
      <div className='testimonial'>
      <div className='testimonial-1'>
        <h2>Testimonial</h2>
        <h1>What Our Customer Says</h1>
      </div>
      <div className='arrow'>
        <img src={leftarrow} alt=""/>
        <img src={rightarrow} alt=""/>
      </div>
      </div>

      <div className='testimonial-2'>
        <div className='image-1'>
        <img src={Kathleen} alt=""/>
        <div className='kath-smith'>
          <h3>Kathleen Smith</h3>
          <p>Fuel Company</p>
        </div>
        <div className='dot'>
          <img src={dot} alt=''/>
        </div>
        </div>

        <div className='testimonial-text'>
          <p>Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
        </div>
        <img src={Star} alt=''/>
      </div>

      <div className='testimonial-3'>
        <div className='image-1'>
        <img src={John} alt=""/>
        <div className='kath-smith'>
          <h3>John Martins</h3>
          <p>Restoration Company</p>
        </div>
        <div className='dot'>
          <img src={dot} alt=''/>
        </div>
        </div>

        <div className='testimonial-text'>
          <p>Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
        </div>
        <img src={Star} alt=''/>
      </div>
      
    </div>
  )
}

export default Testimonial

import './Expert.css'
import expert1 from '../../assets/expert-1.png'
import expert2 from '../../assets/expert-2.png'
import expert3 from '../../assets/expert-3.png'


const Expert = () => {
  return (
    <div className='expert-team container'>
      <div className='team'>
        <h3 className='tran'>The Transporters</h3>
        <h1>Meet Expert Team</h1>
      </div>

      <div className='expert'>
        <img src={expert1} alt=''/>
        <img src={expert2} alt=''/>
        <img src={expert3} alt=''/>

      </div>
      
    </div>
  )
}

export default Expert

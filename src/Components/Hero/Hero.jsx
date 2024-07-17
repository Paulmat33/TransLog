import "./Hero.css";
import Twitter from '../../assets/Twitter.png'
import Facebook from '../../assets/Facebook.png'
import Linkdin from '../../assets/Linkdin.png'

const Hero = () => {
  return (
    <div className="hero-area">
      <div className="nav container">
        <nav>
          <li className="current1">Home</li>
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

      <div className="container">
      <h2>Logistics & Supply Chain Distribution</h2>
      <h1>
        Your Gateway <br />
        to any Destination <br />
        in the World
      </h1>

      <p>
        In augue ligula, feugiat ut nulla consequat. Ut est lacus, molestie in
        arcu <br /> no, iaculis vehicula ipsum. Nunc faucibus, nisl id dapibus
        finibus, enim <br /> diam interdum nulla, sed laoreet risus lectus.
      </p>
      <button className="explore">Explore More</button>
      </div>
    </div>
  );
};

export default Hero;

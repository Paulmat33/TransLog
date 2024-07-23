import "./Aboutus.css";
import Truckpics from "../../assets/Truckpics-1.png";

const Aboutus = () => {
  return (
    <div className="about-us">
      <div>
        <img src={Truckpics} alt="" className="truck-pics-1" />
      </div>

      <div className="about-us-section">
        <div className="about-section1">
          <h5>About Us</h5>
          <h1>Our Company Overview</h1>
          <p>Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition.</p>
        </div>
        <div className="approach">
          <div className="our-approach">
            <div className="our-approach1">
              <h2>Our Approach</h2>
            </div>

            <div className="our-approach2">
              <h2>Our Approach</h2>
            </div>

            <div className="our-approach2">
              <h2>Our Approach</h2>
            </div>
          </div>
          <p className="our-approach-text">Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem quia voluptassit.</p>
        <button className="learn-more">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;

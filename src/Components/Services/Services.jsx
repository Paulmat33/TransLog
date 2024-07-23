import "./Services.css";
import Seaicon from "../../assets/Icon-1.png";
import Airicon from "../../assets/Icon-3.png";
import Project from "../../assets/Project-Icon.png";
import Custormericon from "../../assets/Customer-clerance.png";
import Projecticon from "../../assets/Icon-5.png";
import Warehouseicon from "../../assets/Icon-2.png";

const Services = () => {
  return (
    <div className="services-section container">
      <div className="services-section-heading">
        <h3>What We Do</h3>
        <h1>Our Logistics Services</h1>
      </div>

      <div className="logic-display">
        <div className="logistics-section">
          <img src={Seaicon} alt="" />
          <h2>Sea Transport Services</h2>
          <p>
            Following the quality of our service thus having gained trust of our
            many clients.
          </p>
        </div>

        <div className="logistics-section">
          <img src={Warehouseicon} alt="" />
          <h2>Warehousing Services</h2>
          <p>
            Following the quality of our service thus having gained trust of our
            many clients.
          </p>
        </div>

        <div className="logistics-section">
          <img src={Airicon} alt="" />
          <h2>Sea Transport Services</h2>
          <p>
            Following the quality of our service thus having gained trust of our
            many clients.
          </p>
        </div>
      </div>
      <div className="logic-display">
        <div className="logistics-section">
          <img src={Project} alt="" />
          <h2>Sea Transport Services</h2>
          <p>
            Following the quality of our service thus having gained trust of our
            many clients.
          </p>
        </div>

        <div className="logistics-section">
          <img src={Projecticon} alt="" />
          <h2>Sea Transport Services</h2>
          <p>
            Following the quality of our service thus having gained trust of our
            many clients.
          </p>
        </div>

        <div className="logistics-section">
          <img src={Custormericon} alt="" />
          <h2>Sea Transport Services</h2>
          <p>
            Following the quality of our service thus having gained trust of our
            many clients.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;

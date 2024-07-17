import "./SectionA.css";
import seaicon from "../../assets/sea-icon.png";
import wearhouseicon from "../../assets/warehouse-icon.png";
import airfirght from "../../assets/air-icon.png";
import truck from "../../assets/truck-icon.png";


const SectionA = () => {
  return (
    <div className=" what-we-do container">
      <div className="safe-reliable">
        <h4>What We Do</h4>
        <h2>Safe & Reliable Cargo Solutions</h2>
      </div>

      <div className="service-A">
        <div className="services">
          <div className="services-icon">
            <img src={seaicon} alt="" />
            <div className="cargo-info">
              <h3>Sea Transport Services</h3>
              <p>
                Following the quality of our service thus having gained trust of
                our many clients.
              </p>
            </div>
          </div>
        </div>

         <div className="services">
          <div className="services-icon">
            <img src={wearhouseicon} alt="" />
            <div className="cargo-info">
              <h3>Sea Transport Services</h3>
              <p>
                Following the quality of our service thus having gained trust of
                our many clients.
              </p>
            </div>
          </div>
        </div>
      </div>

       <div className="service-A">
        <div className="services">
          <div className="services-icon">
            <img src={airfirght} alt="" />
            <div className="cargo-info">
              <h3>Sea Transport Services</h3>
              <p>
                Following the quality of our service thus having gained trust of
                our many clients.
              </p>
            </div>
          </div>
        </div>

        <div className="services">
          <div className="services-icon">
            <img src={truck} alt="" />
            <div className="cargo-info">
              <h3>Sea Transport Services</h3>
              <p>
                Following the quality of our service thus having gained trust of
                our many clients.
              </p>
            </div>
          </div>
        </div> 
       </div> 
    </div>
  );
};

export default SectionA;

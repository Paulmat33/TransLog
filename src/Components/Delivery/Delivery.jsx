import "./Delivery.css";
import box from "../../assets/boxicon.png";
import airplane from "../../assets/airplane.png";
import color from '../../assets/smallcolor.png';

const Delivery = () => {
  return (
    <div className="delivery ">
      <div className="empty-div"></div>
      <div className="why-us container">
        <h4>Why Us</h4>
        <h1>We provide full range global logistics solution</h1>
        <p>
          Leverage agile frameworks to provide a robust synopsis for strategy
          foster collaborative thinking to further the overall value
          proposition. <br />
          <br />
          Organically grow the holistic world view of disruptive innovation via
          workplace diversity and empowerment.
        </p>

        <div className="box">
          <img src={box} alt="" />
          <span> Delivery on Time</span>
        </div>
        <div className="box">
          <img src={box} alt="" />
          <span> Optimized Travel Cost</span>
        </div>
      </div>

      <div className="airplane">
        <img src={airplane} alt="image" />
      </div>
      <div className="delivery-packages">
        <div className="deli-package">
        <p>1294 <img src={color}/><span>Delivery Packages</span></p>
        </div>
        <div className="satified">
          <p >3595 <img src={color}/><span>Satified Client</span></p>
        </div>
      </div>
    </div>
  );
};

export default Delivery;

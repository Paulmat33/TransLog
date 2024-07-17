import "./Header.css";
import logo from "../../assets/Logo.png";
import Phone from "../../assets/Phone-icon.png";
import Email from "../../assets/Email-icon.png";
import Time from "../../assets/Time-icon.png";
import Twitter from "../../assets/Twitter.png";
import Linkdin from "../../assets/Linkdin.png";
import Facebook from "../../assets/Facebook.png";

const Header = () => {
  return (
    <div className="header container">
      <div className="logo">
        <img src={logo} alt="" />
      </div>

      <div className="icon">
        <div className="header-2">
          <img src={Time} alt="" />
          <p>
            Mon - Sat 9.00 - 18.00
            <br /> Sunday Closed
          </p>
        </div>

        <div className="header-2">
          <img src={Email} alt="" />
          <p>Email contact@logistics.com</p>
        </div>

        <div className="header-2">
          <img src={Phone} alt="" />
          <p>
            Call Us <br />
            (00) 112 365 489
          </p>
        </div>

      </div>
    </div>
  );
};

export default Header;

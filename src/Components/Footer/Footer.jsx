import "./Footer.css";
import Footerpics from "../../assets/Footerpics.png";
import logo from "../../assets/Logo.png";
import Mail from "../../assets/Email-icon.png";
import Phone from "../../assets/Phone-icon.png";
import Facebook from "../../assets/Facebook.png";
import Twitter from "../../assets/Twitter.png";
import Linkdin from "../../assets/Linkdin.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footimg">
        <img src={Footerpics} alt="" />
      </div>
      <div className="color-div"></div>
      <div className="foot container">
        <img src={logo} alt="" />

        <div className="footer-text">
          <p>
            Leverage agile frameworks to provide a robust synopsis for strategy
            collaborative thinking to further the overall value proposition.
          </p>

          <div className="footer-mail">
            <img src={Mail} alt="" />
            <p>Email contact@logistics.com</p>
          </div>
          <div className="footer-mail">
            <img src={Phone} alt="" />
            <p>
              Call Us <br />
              (00) 112 365 489
            </p>
          </div>
        </div>
      </div>

      <div className="page">
        <div>
          <div className="page-col">
            <h3>Pages</h3>
          </div>

          <div className="page-text">
            <p>About Us</p>
            <p>Our Team</p>
            <p>Our Project</p>
            <p>Pricing</p>
            <p>Contact</p>
          </div>
        </div>

        <div>
          <div className="page-col">
            <h3>Utility</h3>
          </div>

          <div className="page-text">
            <p>Style Guide</p>
            <p>Changelog</p>
            <p>Licenses</p>
            <p>Protected</p>
            <p>Not Found</p>
          </div>
        </div>

        <div>
          <div className="page-col">
            <h3>Subscribe</h3>
          </div>

          <div className="page-text">
            <input type="email" placeholder="Email here*" required />
            <div className="footer-social-icon">
              <button className="btn4">Send Now</button>
              <img src={Linkdin} alt="" />
              <img src={Twitter} alt="" />
              <img src={Facebook} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="copy-right">
        <p>Copyright © TransitFlow | Designed by VictorFlow - Powered by Webflow.</p>
        <div className="copy-right2">
          <p>Style Guide</p>
          <p>Licenses</p>
          <p>Changelog</p>
          <p>Password</p>
        </div>

      </div>
    </div>
  );
};

export default Footer;

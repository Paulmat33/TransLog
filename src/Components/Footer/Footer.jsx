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
      <div className="footer-flex-div">
        <div className="color-div"></div>

        <div className="footer-color-div">
          <div className="foot container">
            <img src={logo} alt="" />

            <div className="footer-text">
              <div className="agile-text">
                <p>
                  Leverage agile frameworks to provide a robust synopsis for
                  strategy collaborative thinking to further the overall value
                  proposition.
                </p>
              </div>

              <div className="footer-mail">
                <div>
                  <img src={Mail} alt="" />
                </div>
                <div>
                  <p>
                    Email <br />
                    Contact@logistics.com
                  </p>
                </div>
              </div>

              <div className="footer-mail">
                <div>
                  <img src={Phone} alt="" />
                </div>
                <div>
                  <p>
                    Call Us <br />
                    (00) 112 365 489
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="color-div2"></div>
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
                  <div>
                    <button className="btn4">Send Now</button>
                  </div>
                  <div className="icon-display">
                    <div>
                      <img src={Linkdin} alt="" />
                    </div>
                    <div>
                      <img src={Twitter} alt="" />
                    </div>
                    <div>
                      <img src={Facebook} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="copy-right">
        <p>
          Copyright © TransitFlow | Designed by VictorFlow - Powered by Webflow.
        </p>
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

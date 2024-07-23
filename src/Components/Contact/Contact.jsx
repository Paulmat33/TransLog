import "./Contact.css";
import Email from "../../assets/Email-icon.png";
import Phone from "../../assets/Phone-icon.png";
import Time from "../../assets/Time-icon.png";
import Client1 from "../../assets/Client1.png";
import Client2 from "../../assets/Client2.png";

const Contact = () => {
  return (
    <div className="contact-info container">
      <div className="form-display">
        <div>
          <h4>Contact</h4>
          <h1>Get in touch with us</h1>
          <p>
            Leverage agile frameworks to provide a robust synopsis for strategy
            foster collaborative thinking to further the overall value.
          </p>
          <div className="contact-us">
            <div className="contact-2">
              <img src={Email} alt="" />
              <p>Email contact@logistics.com</p>
            </div>
          </div>

          <div className="contact-2">
            <img src={Phone} alt="" />
            <p>
              Call Us <br />
              (00) 112 365 489
            </p>
          </div>

          <div className="contact-2">
            <img src={Time} alt="" />
            <p>
              Mon - Sat 9.00 - 18.00
              <br /> Sunday Closed
            </p>
          </div>
        </div>

        <form>
          <div className="formname-display">
            <div className="formname">
              <input type="text" placeholder="Your name*" required />
            </div>

            <div className="formname">
              <input type="email" placeholder="Email address*" required />
            </div>
          </div>
          <div className="formname-display">
            <div className="formname">
              <input type="number" placeholder="Phone Number*" required  className="input"/>
            </div>

            <div className="formname">
              <input type="text" placeholder="City*" required />
            </div>
          </div>

          <div className="formname message">
            <textarea
              type="text"
              placeholder="Your Message*"
              id=""
              required
            ></textarea>
          </div>
          <button className="send-btn">Submit Message</button>
        </form>
      </div>

      <div className="pics">
        <img src={Client1} alt="" />
        <img src={Client2} alt="" />
      </div>
    </div>
  );
};

export default Contact;

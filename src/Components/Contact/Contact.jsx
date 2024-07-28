import React from "react";
import "./Contact.css";
import Email from "../../assets/Email-icon.png";
import Phone from "../../assets/Phone-icon.png";
import Time from "../../assets/Time-icon.png";
import Client1 from "../../assets/Client1.png";
import Client2 from "../../assets/Client2.png";

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "4903665b-bab1-49e7-b02a-6582e0972ac6");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

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

        <form onSubmit={onSubmit}>
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
        <span>{result}</span>
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

import "./Product.css";
import bigairplane from "../../assets/bigairplane.png";
import packageicon from "../../assets/packageIcon.png";

const Product = () => {
  return (
    <div className="product-sec">
      <img src={bigairplane} alt="" />

      <div className="opportunity container">
        <div className="leverage">
          <h3>Why Choose Us</h3>
          <h1>We create opportunity to reach potential</h1>
          <p>
            Leverage agile frameworks to provide a robust synopsis for strategy
            foster collaborative thinking to further the overall value
            proposition.
          </p>
        </div>

        <div className="package-icon">
          <div>
            <div className="package">
              <img src={packageicon} alt="" />
              <span>Safe Package</span>
            </div>

            <div className="package">
              <img src={packageicon} alt="" />
              <span>Global Tracking</span>
            </div>

            <div className="package">
              <img src={packageicon} alt="" />
              <span>In Time Delivery</span>
            </div>
          </div>

          <div>
            <div className="package">
              <img src={packageicon} alt="" />
              <span>Ship Everyware</span>
            </div>

            <div className="package">
              <img src={packageicon} alt="" />
              <span>24/7 Support</span>
            </div>

            <div className="package">
              <img src={packageicon} alt="" />
              <span>Transparant Pricing</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Product;

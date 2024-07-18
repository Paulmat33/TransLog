import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Transporting.css";
import roadtrans from "../../assets/roadtrans.png";
import truck1 from "../../assets/1.png";
import truck2 from "../../assets/2.png";
import truck3 from "../../assets/4.png";
import truck4 from "../../assets/5.png";

const Transporting = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div className="transporting">
      <h1>Transporting Across The World</h1>

      <div className="roadtrans">
        
          <Slider {...settings}>
            <div>
              <img src={roadtrans} alt="" />
            </div>
            <div>
              <img src={truck1} alt="" />
            </div>
            <div>
              <img src={truck2} alt="" />
            </div>
            <div>
              <img src={truck3} alt="" />
            </div>
            <div>
              <img src={truck4} alt="" />
            </div>
          </Slider>
      </div>
      <div className="empty2">
      <button className="btn2">More Work</button>

      </div>
    </div>
  );
};

export default Transporting;

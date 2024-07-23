import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonial.css";
import rightarrow from "../../assets/rightarrow.png";
import leftarrow from "../../assets/leftarrow.png";
import Kathleen from "../../assets/Kathleen.png";
import John from "../../assets/John.png";
import dot from "../../assets/dot.png";
import Star from "../../assets/Star.png";
import { useRef } from "react";

const Testimonial = () => {
    const slider = useRef();
    let tx = 0;

    const slideForward = ()=> {
      if(tx > -50){
        tx -= 25;
      }
      slider.current.style.transform = `translateX(${tx}%)`
    }
    const slideBackward =() =>{
      if(tx < 0){
        tx += 25;
      }
      slider.current.style.transform = `translateX(${tx}%)`
    }
  return (
    <div className="container">
      <div className="testimonial">
        <div className="testimonial-1">
          <h2>Testimonial</h2>
          <h1>What Our Customer Says</h1>
        </div>
        <div className="arrow">
          <img src={leftarrow} alt=""  onClick={slideBackward}/>
          <img src={rightarrow} alt="" onClick={slideForward} />
        </div>
      </div>

      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={Kathleen} alt="" />
                <div className="kath-smith">
                  <h3>Kathleen Smith</h3>
                  <span>Fuel Company</span>
                </div>
                <div className="dot">
                  <img src={dot} alt="" />
                </div>
              </div>
              <p className="testimonial-text">
                Leverage agile frameworks to provide a robust synopsis for
                strategy foster collaborative thinking to further the overall
                value proposition. Organically grow the holistic world view of
                disruptive innovation via workplace diversity and empowerment.
              </p>
              <img src={Star} alt="" />
            </div>
          </li>
          <li>
            <div className="slide testimonial-3">
              <div className="user-info">
                <img src={John} alt="" />
                <div className="john-martin">
                  <h3>John Martin</h3>
                  <span>Restoration Company</span>
                </div>
                <div className="dot">
                  <img src={dot} alt="" />
                </div>
              </div>
              <p className="testimonial-text-leve">
                Leverage agile frameworks to provide a robust synopsis for
                strategy foster collaborative thinking to further the overall
                value proposition. Organically grow the holistic world view of
                disruptive innovation via workplace diversity and empowerment.
              </p>
              <img src={Star} alt="" />
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={Kathleen} alt="" />
                <div className="kath-smith">
                  <h3>Kathleen Smith</h3>
                  <span>Fuel Company</span>
                </div>
                <div className="dot">
                  <img src={dot} alt="" />
                </div>
              </div>
              <p className="testimonial-text">
                Leverage agile frameworks to provide a robust synopsis for
                strategy foster collaborative thinking to further the overall
                value proposition. Organically grow the holistic world view of
                disruptive innovation via workplace diversity and empowerment.
              </p>
              <img src={Star} alt="" />
            </div>
          </li>

          <li>
            <div className="slide testimonial-3">
              <div className="user-info">
                <img src={John} alt="" />
                <div className="john-martin">
                  <h3>John Martin</h3>
                  <span>Restoration Company</span>
                </div>
                <div className="dot">
                  <img src={dot} alt="" />
                </div>
              </div>
              <p className="testimonial-text-leve">
                Leverage agile frameworks to provide a robust synopsis for
                strategy foster collaborative thinking to further the overall
                value proposition. Organically grow the holistic world view of
                disruptive innovation via workplace diversity and empowerment.
              </p>
              <img src={Star} alt="" />
            </div>
          </li>

        </ul>
      </div>
    </div>
  );
};

export default Testimonial;

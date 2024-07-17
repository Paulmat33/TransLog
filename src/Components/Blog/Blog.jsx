import "./Blog.css";
import Blogpics1 from "../../assets/Blogpics1.png";
import Blogpics2 from "../../assets/Blogpics2.png";
import Blogpics3 from "../../assets/Blogpics3.png";
import Date1 from "../../assets/Date1.png";
import Date2 from "../../assets/Date2.png";
import Date3 from "../../assets/Date3.png";

const Blog = () => {
  return (
    <div className=" blog container">
      <div className="blog-1">
        <h3 className="blog-2">Our Blog</h3>
        <h1>Our Latest News</h1>
      </div>

      <div>
        <div>
          <img src={Blogpics1} alt="" className="blogpics" />
          <img src={Date1} alt="" />
        </div>

        <div className="inland-text">
          <div className="inland-div">
            <p className="inland">
              Inland freight a worthy solution for your business
            </p>
            <p className="dedicated">
              We are dedicated in creating added value for our customers by
              implementing modern technology in our work.
            </p>
            <li>Urgent transport solutions</li>
            <li>Reliable & experienced staffs</li>
            <li>Urgent transport solutions</li>
            <li>Reliable & experienced staffs</li>
          </div>
        </div>

        <div>
          <img src={Blogpics2} alt="" className="blogpics" />
          <img src={Date2} alt="" />
        </div>

        <div className="inland-text">
          <div className="inland-div">
            <p className="inland inland2">
            How technology can help redraw the supply chain map
            </p>
            <p className="dedicated dedicated2">
              We are dedicated in creating added value for our customers by
              implementing modern technology in our work.
            </p>
            <li>Urgent transport solutions</li>
            <li>Reliable & experienced staffs</li>
            <li>Urgent transport solutions</li>
            <li>Reliable & experienced staffs</li>
          </div>
        </div>

        <div>
          <img src={Blogpics3} alt=""/>
          <img src={Date3} alt="" />
        </div>

        <div className="inland-text">
          <div className="inland-div">
            <p className="inland">
            Five things you should have ready for your broker
            </p>
            <p className="dedicated">
              We are dedicated in creating added value for our customers by
              implementing modern technology in our work.
            </p>
            <li>Urgent transport solutions</li>
            <li>Reliable & experienced staffs</li>
            <li>Urgent transport solutions</li>
            <li>Reliable & experienced staffs</li>
          </div>
        </div>
      </div>
        <button className="btn1">More Blog</button>
    </div>
  );
};

export default Blog;

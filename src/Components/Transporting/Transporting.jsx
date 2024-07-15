import "./Transporting.css";
import roadtrans from "../../assets/roadtrans.png";

const Transporting = () => {
  return (
    <div className="transporting">
      <h1>Transporting Across The World</h1>
      <div className="roadtrans">
        <img src={roadtrans} alt="" />
        <div className="empty2"></div>
      <button className="btn2">More Work</button>
      </div>
    </div>
  );
};

export default Transporting;

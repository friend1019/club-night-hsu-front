import truckImg from "../img/푸드트럭.png";
import "../css/Food.css";
import 지도 from "../img/지도.png";
import Footer from "./Footer";

const Food = () => {
  return (
    <div className="food-container">
        <h2>푸드트럭의 정보를 확인하세요</h2>
        <img src={지도} alt="map-img" className="map-img" />
        <div className="truck-img">
          <img src={truckImg} alt="푸드트럭" />
        </div>
        <Footer/>
    </div>
  );
};

export default Food;
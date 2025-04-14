import truckImg from "../img/푸드트럭.png";
import "../css/Food.css";
import 지도 from "../img/지도.png";

const Food = () => {
  return (
    <div className="food-container">
        <h2>푸드트럭의 정보를 확인하세요</h2>
        <img src={지도} alt="map-img" className="map-img" />
        <div className="truck-img">
          <img src={truckImg} alt="푸드트럭" />
        </div>
    </div>
  );
};

export default Food;

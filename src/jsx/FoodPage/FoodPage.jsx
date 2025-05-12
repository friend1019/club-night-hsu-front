import "../../css/FoodPage/Food.css";
import 지도 from "../../img/지도.png";
import Footer from "../Footer";
import TruckSlider from "./TruckSlider";

const Food = () => {
  return (
    <div>
      <div className="food-container">
        <h2>푸드트럭의 정보를 확인하세요</h2>
        <div className="food-info">
          <img src={지도} alt="map-img" className="map-img" />
          <TruckSlider />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Food;

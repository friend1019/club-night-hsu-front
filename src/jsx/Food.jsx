import truckImg from "../img/푸드트럭.png";

const Food = () => {
  return (
    <div className="food-container">
        <h2>푸드트럭의 정보를 확인하세요</h2>
      <div className="truck-img">
        <img src={truckImg} alt="푸드트럭" />
      </div>
    </div>
  );
};

export default Food;

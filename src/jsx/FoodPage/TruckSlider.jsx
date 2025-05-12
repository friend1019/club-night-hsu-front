import { useState } from "react";
import { motion } from "framer-motion";
import FoodList from "./FoodList";
import 트럭 from "../../img/트럭.png";
import "../../css/FoodPage/TruckSlider.css"
import "../../css/font.css"




const TruckSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const foodItem = FoodList[currentIndex];

  const nextTruck = () => {
    if (isSliding) return;
    setIsSliding(true);
    setTimeout(() => {
      setIsSliding(false);
      setCurrentIndex((prev) => (prev + 1) % FoodList.length);
    }, 100);
  };

  return (
    <>
      <div className="truck-info">
        <motion.div
          className="truck-img"
          key={currentIndex}
          initial={{ x: "-200%" }}
          animate={{ x: 0 }}
          transition={{ duration: 1.0 }}
        >
          <img src={트럭} alt="truck" className="truck-image" />
          <div className="food-overlay">
            <div className="food-item">
              <div className="food-image-container">
                <img
                  src={foodItem.foodImg}
                  alt={foodItem.foodName}
                  className="food-img"
                />
              </div>
              <div className="food-details">
                <div className="food-header" style={{fontFamily:"Tenada"}}>
                  <img
                    src={foodItem.foodLogo}
                    alt={foodItem.foodName}
                    className="food-logo left-logo"
                  />
                  <h3>{foodItem.foodName}</h3>
                  <img
                    src={foodItem.foodLogo}
                    alt={foodItem.foodName}
                    className="food-logo right-logo"
                  />
                </div>
                <div className="menu-list">
                  {foodItem.menuList.map((menuItem, index) => (
                    <div key={index} className="menu-item">
                      <p>{menuItem.menu}</p>
                      <span className="dots"></span>
                      <p className="cost">{menuItem.cost}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <hr style={{ border: "none", height: "1px", backgroundColor: "black", margin: "10px auto", maxWidth:"500px", width:"100%" }} />
      {/* 화살표 */}
      <div className="slide-buttons">
        <button onClick={nextTruck} className="next-button"style={{fontFamily:"Tenada"}}><p>다음 푸드트럭 보기</p></button>
      </div>
    </>
  );
};

export default TruckSlider;

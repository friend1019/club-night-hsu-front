import React, { useState } from "react";
import { motion } from "framer-motion"; // framer-motion 사용
import "../css/Food.css";
import 지도 from "../img/지도.png";
import Footer from "./Footer";
import FoodList from "./FoodList"; 
import 트럭 from "../img/트럭.png";

const Food = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false); // 슬라이드 애니메이션 상태

  const foodItem = FoodList[currentIndex];

  // 다음 트럭으로 이동하는 함수
  const nextTruck = () => {
    if (isSliding) return; // 슬라이딩 중 클릭 방지
    setIsSliding(true);
    setTimeout(() => {
      setIsSliding(false);
      if (currentIndex < FoodList.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex(0);  // 마지막 트럭에서 처음으로 돌아가기
      }
    }, 100);  // 애니메이션 시간
  };

  // 이전 트럭으로 이동하는 함수
  const prevTruck = () => {
    if (isSliding) return; // 슬라이딩 중 클릭 방지
    setIsSliding(true);
    setTimeout(() => {
      setIsSliding(false);
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      } else {
        setCurrentIndex(FoodList.length - 1);  // 첫 트럭에서 마지막으로 돌아가기
      }
    }, 100);  // 애니메이션 시간
  };

  return (
    <div>
      <div className="food-container">
        <h2>푸드트럭의 정보를 확인하세요</h2>
        <div className="food-info">
          <img src={지도} alt="map-img" className="map-img" />
          <div className="truck-info">
            <motion.div
              className="truck-img"
              key={currentIndex} // key를 currentIndex로 설정하여 트럭이 바뀔 때마다 새로운 트럭을 렌더링
              initial={{ x: "-200%" }}  // 트럭이 처음에 화면 밖에서 시작 (오른쪽에서 시작)
              animate={{ x: 0 }}  // 트럭이 0 위치로 슬라이드 (화면 안으로)
              transition={{ duration: 1.0 }} // 슬라이드 시간
            >
              <img src={트럭} alt={트럭} className="truck-image" />
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
                    <div className="food-header">
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
                          <span className="dots"></span> {/* 점선 부분 */}
                          <p className="cost">{menuItem.cost}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 슬라이드 화살표 */}
        <div className="slide-buttons">
          <button onClick={prevTruck} className="prev-button">
            ◀
          </button>
          <h4>푸드트럭 더보기</h4>
          <button onClick={nextTruck} className="next-button">
            ▶
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Food;

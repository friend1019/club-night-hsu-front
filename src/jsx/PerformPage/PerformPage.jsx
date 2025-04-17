import React, { useState } from "react";
import Footer from "../Footer";
import PerformImg from "../../img/메인이미지2-2.png";
import "../../css/Perform.css";
import performList from "./PerformContent";
import PerformCard from "./PerformCard"; // ✅ 추가된 부분
import "../../css/font.css";

const Perform = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);

  return (
    <div className="perform-page">
      <div className="image-wrapper">
        <img src={PerformImg} alt="perform-img" className="perform-image" />

        <div className="button-wrapper">
          {performList.map((item, idx) => (
            <button style={{fontFamily:"Tenada"}}
              key={idx}
              onClick={() => setSelectedIdx(idx)}
              className={`
                ${selectedIdx === idx ? "active" : ""}
                ${idx === 0 ? "special-button1" : ""}
                ${idx === performList.length - 1 ? "special-button2" : ""}
              `}
            >
              {item.clubName}
            </button>
          ))}
        </div>
      </div>

      <div className="perform-list">
        <PerformCard club={performList[selectedIdx]} />
      </div>

      <Footer />
    </div>
  );
};

export default Perform;

import React, { useState } from "react";
import Footer from "../Footer";
import PerformImg from "../../img/메인이미지2-2.png";
import "../../css/Perform.css";
import performList from "./PerformContent";
import PerformCard from "./PerformCard"; 
import { motion, AnimatePresence } from "framer-motion"; // framer-motion import
import "../../css/font.css";

const Perform = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);

  return (
    <div className="perform-page">
      <div className="image-wrapper">
        <img src={PerformImg} alt="perform-img" className="perform-image" />

        <div className="button-wrapper">
          {performList.map((item, idx) => (
            <button
              style={{ fontFamily: "Tenada" }}
              key={idx}
              onClick={() => setSelectedIdx(idx)}
              className={`${
                selectedIdx === idx ? "active" : ""
              } ${idx === 0 ? "special-button1" : ""} ${
                idx === performList.length - 1 ? "special-button2" : ""
              }`}
            >
              {item.clubName}
            </button>
          ))}
        </div>
      </div>

      <div className="perform-list">
        {/* PerformCard에 framer-motion 적용 */}
        <AnimatePresence>
          <motion.div
            key={selectedIdx} // 트랜지션 효과를 위해 key를 선택된 인덱스로 설정
            initial={{ opacity: 0, x: 0 }} // 처음에 카드가 보이지 않도록 설정
            animate={{ opacity: 1, x: 0 }} // 애니메이션이 끝날 때 카드가 중앙에 위치하도록 설정
            transition={{ duration: 1.0 }} // 애니메이션 지속 시간 설정
          >
            <PerformCard club={performList[selectedIdx]} />
          </motion.div>
        </AnimatePresence>
      </div>

      <Footer />
    </div>
  );
};

export default Perform;

import React, { useState } from "react";
import Footer from "./Footer";
import PerformImg from "../img/메인이미지2.png";
import "../css/Perform.css";
import performList from "./PerformList";

const Perform = () => {
  const [selectedIdx, setSelectedIdx] = useState(0); // 초기: 첫번째 공연

  return (
    <div className="perform-page">
      <div className="image-wrapper">
        <img src={PerformImg} alt="perform-img" className="perform-image" />

        <div className="button-wrapper">
          {performList.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedIdx(idx)}
              //양 끝 버튼만 테두리가 달라서 따로 잡아줘서 모양 바꿈꿈
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
        <div className="perform-card">
          <div className="card-title">{performList[selectedIdx].clubName}</div>

          <p>{performList[selectedIdx].desc}</p>
          <hr />

          <ul>
            {performList[selectedIdx].songList.map((song, idx) => (
              <li key={idx}>
                <div className="song-line">🎵 {song.title}</div>
                <span className="singer">{song.singer}</span>
              </li>
            ))}
          </ul>

          <hr />
          <p>
            {performList[selectedIdx].leader}
            <br />
            {performList[selectedIdx].leader2}
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Perform;

import React from "react";
import LikeButton from "./LikeButton";
import "../../css/Perform.css";
import 선 from "../../img/선.png";
import 별 from "../../img/별.svg";
import "../../css/font.css";
// import 왼쪽작은원 from "../../img/왼쪽작은원";
// import 오른쪽원 from "../../img/오른쪽원.png";
// import 왼쪽큰원 from "../../img/왼쪽큰원.png";

const PerformCard = ({ club }) => {
  return (
    <div className="perform-card">
      <div className="card-header">
        <div className="card-title-wrapper">
          {/* 장식용 도형들 */}
          <span className="decor left-big"></span>
          <span className="decor left-small"></span>
          <img src={별} alt="별" className="star-icon" />
          <span className="decor right-circle"></span>

          <div className="card-title"><p style={{fontFamily:"Tenada", fontSize:"14px", marginBottom:"6px"}}>{club.clubName}</p></div>
        </div>

        <LikeButton clubName={club.clubName} />
      </div>

      <p>{club.desc}</p>

      <img src={선} alt="decorated-line" className="decorated-line-image" />

      <ul>
        {club.songList.map((song, idx) => (
          <li key={idx}>
            <div className="song-line">🎵 {song.title}</div>
            <span className="singer">{song.singer}</span>
          </li>
        ))}
      </ul>

      <img src={선} alt="decorated-line" className="decorated-line-image" />

      <p>
        {club.leader}
        <br />
        {club.leader2}
      </p>
    </div>
  );
};

export default PerformCard;

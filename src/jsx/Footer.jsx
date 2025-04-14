import React from "react";
import "../css/Footer.css"; // css 연결
import insta from "../img/instagram.png";
import 푸터로고 from "../img/푸터로고.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-left">
        <img src={푸터로고} alt="footer-logo" className="footer-logo" />

        <div className="footer-members">
          <div>
            <div className="footer-role">프론트엔드</div>
            <div>이재형</div>
            <div>황승재</div>
          </div>
          <div>
            <div className="footer-role">백엔드</div>
            <div>공원재</div>
            <div>신동윤</div>
            <div>조성건</div>
          </div>
          <div>
            <div className="footer-role">디자인</div>
            <div>문지원</div>
            <div>주예원</div>
          </div>
        </div>
      </div>

      <div className="footer-right">
        <div className="footer-role">FOLLOW US</div>
        <div className="footer-icons">
          <img src={insta} alt="insta" />
          <img src={insta} alt="insta" />
        </div>
      </div>
    </div>
  );
};

export default Footer;

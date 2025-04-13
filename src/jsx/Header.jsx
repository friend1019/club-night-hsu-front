import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../img/logo.png";

const Header = () => {
  const navigate = useNavigate();

  return (
    // 전체 헤더 영역 (가로 풀)
    <div
      style={{
        width: "100%",
        backgroundColor: "white",
        borderBottom: "1px solid #ddd",
      }}
    >
      {/* 가운데 정렬된 내용 */}
      <div
        style={{
          maxWidth: "430px",
          width: "100%",
          height: "63.97px",
          margin: "0 auto",
          padding: "10px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxSizing: "border-box",
        }}
      >
        {/* 로고 */}
        <img
          src={logo}
          alt="logo"
          onClick={() => navigate("/")}
          style={{
            width: "46px",
            height: "40px",
            cursor: "pointer",
            position: "relative",
            top: "5px", // 살짝 위로 이동
          }}
        />

        {/* 메뉴 */}
        <div
          style={{
            display: "flex",
            gap: "35px",
            fontSize: "13px",
            fontWeight: "bold",
            cursor: "pointer",
            position: "relative",
            top: "5px",
          }}
        >
          <div onClick={() => navigate("/perform")}>동아리소개</div>
          <div onClick={() => navigate("/food")}>푸드트럭</div>
        </div>
      </div>
    </div>
  );
};

export default Header;

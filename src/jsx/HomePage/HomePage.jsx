import { useState } from "react";
import Footer from "../Footer";
import ChatBox from "./ChatBox";
import Ticket from "./Ticket";
import MainImg from "../../img/메인이미지.png";
import "../../css/HomePage/Home.css";

const Home = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleTickets = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="home-page">
      {/* 메인 이미지 */}
      <div className="mainImg">
        <img src={MainImg} alt="main" />
      </div>

      <div className="cheer-title-box">
      {/* 응원 메시지 제목 */}
      <h2 className="cheer-title">응원의 메시지를 남겨주세요 !</h2>
      <h5 className="chat-caution">인당 메세지 제한은 5개입니다</h5>
      </div>

      {/* 채팅 */}
      <ChatBox />

      {/* 공연 순서 */}
      <div className="performance-title">공연순서</div>
      <Ticket isExpanded={isExpanded} onToggle={handleToggleTickets} />

      {/* 푸터 */}
      <Footer />
    </div>
  );
};

export default Home;

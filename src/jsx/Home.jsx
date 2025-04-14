import { useState, useRef, useEffect } from "react";
import { db } from "../firebase";
import {
  collection,
  addDoc,
  serverTimestamp,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import Footer from "./Footer";
import MainImg from "../img/mainImg.png";
import TicketImg from "../img/티켓2.png"; // 티켓 이미지 임포트
import "../css/Home.css";
import { ticketContent } from "./TicketContent";

const Home = () => {
  const [isExpanded, setIsExpanded] = useState(false); // 티켓 펼침 상태
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const bottomRef = useRef(null);

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const newMessages = snapshot.docs.map((doc) => doc.data());
      setMessages(newMessages);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input) return;

    const message = input;
    setInput("");

    await addDoc(collection(db, "messages"), {
      name: "익명",
      text: message,
      timestamp: serverTimestamp(),
    });
  };

  // 카드 뭉치 클릭 시 펼치기/숨기기
  const handleToggleTickets = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="home-page">
      <div className="mainImg">
        <img src={MainImg} alt="main" />
      </div>

      <h2 className="cheer-title">응원의 메시지를 남겨주세요 !</h2>

      <div className="chat-box">
        <div className="chat-messages">
          {messages.map((msg, idx) => (
            <div key={idx} className="chat-message right">
              {msg.text}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        <div className="chat-input-box">
          <input
            type="text"
            placeholder="메시지를 입력하세요."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button className="send-btn" onClick={handleSend}>
            📩
          </button>
        </div>
      </div>

      {/* "공연순서" 텍스트 추가 */}
      <div className="performance-title">공연순서</div>

      {/* 티켓을 클릭하면 펼쳐짐 */}
      <div
        className={`ticket-list ${isExpanded ? "expanded" : ""}`} // 펼쳐진 상태에서만 애니메이션 추가
        onClick={handleToggleTickets} // 카드 뭉치 클릭 시 펼치기/숨기기
        style={{
          height: isExpanded ? "auto" : "120px", // 펼쳐지면 자동 높이로 늘어남
          paddingBottom: isExpanded ? "30px" : "0", // 펼쳐지면 추가 여백
          transition: "height 1.0s ease, padding-bottom 1.0s ease", // 부드러운 애니메이션
        }}
      >
        {ticketContent.map((ticket, idx) => (
          <div
            className="ticket-container"
            key={idx}
            style={{
              transform: isExpanded
                ? `translateY(${idx * -1}px)` // 펼쳐지면 아래로 간격을 두고 펼쳐짐
                : `translateY(${idx * -60}px)`, // 초기에는 살짝 겹쳐짐 (각 카드가 조금씩 다르게 이동)
              transition: "transform 0.6s ease, opacity 0.6s ease", // 애니메이션 적용
            }}
          >
            <img src={TicketImg} alt="Ticket" className="ticket-image" />
            <div className="ticket-info">
              <div className="performance-name">{ticket.name}</div>
              <div className="performance-time">
                <span className="time-text">TIME</span>
                <span className="time-number">{ticket.time}</span>
              </div>
              <div className="performance-number">{ticket.number}</div>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Home;

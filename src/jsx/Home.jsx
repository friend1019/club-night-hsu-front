import { useRef, useEffect, useState } from "react";
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
import TicketImg from "../img/티켓.png"; // 티켓 이미지 임포트
import "../css/Home.css";

const Home = () => {
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

      {/* 여러 티켓을 나열 */}
      <div className="ticket-list">
        {[...Array(7)].map((_, idx) => (
          <div className="ticket-container" key={idx}>
            <img src={TicketImg} alt="Ticket" className="ticket-image" />
            <div className="ticket-info">
              <div className="performance-name">무혼</div>
              <div className="performance-time">
                <span className="time-text">TIME</span>
                <span className="time-number">12:00</span>
              </div>
              <div className="performance-number">{idx + 1}</div>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Home;

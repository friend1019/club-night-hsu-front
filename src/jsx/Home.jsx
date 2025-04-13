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
import "../css/Home.css";

const Home = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const bottomRef = useRef(null); // 스크롤 이동용 ref

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const newMessages = snapshot.docs.map((doc) => doc.data());
      setMessages(newMessages);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    // 새 메시지 추가시 자동 스크롤
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input) return;

    const message = input; // 입력값 미리 저장
    setInput(""); // 바로 비우기

    await addDoc(collection(db, "messages"), {
      name: "익명",
      text: message, // 저장할 땐 위에서 복사한 값 사용
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

      <Footer />
    </div>
  );
};

export default Home;

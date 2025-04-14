import { useRef, useEffect, useState } from "react";
import { db } from "../firebase";
// Firebase Firestore에서 필요한 기능들 임포트
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
  // 입력값을 상태로 관리 (채팅창에 입력한 메시지)
  const [input, setInput] = useState("");
  // Firestore에서 받아온 메시지들을 상태로 관리
  const [messages, setMessages] = useState([]);
  // 스크롤을 자동으로 내려주는 역할을 하는 ref
  const bottomRef = useRef(null);

  // 컴포넌트가 렌더링될 때 한 번 실행되는 useEffect
  useEffect(() => {
    // Firestore에서 메시지 컬렉션을 가져오고, timestamp 기준으로 정렬
    const q = query(collection(db, "messages"), orderBy("timestamp"));
    
    // 메시지 컬렉션이 변경될 때마다 실시간으로 데이터를 받아오기 위한 함수
    const unsubscribe = onSnapshot(q, (snapshot) => {
      // 받아온 메시지를 배열로 변환하고 상태를 업데이트
      const newMessages = snapshot.docs.map((doc) => doc.data());
      setMessages(newMessages);
    });

    // 컴포넌트가 언마운트될 때 구독을 해제
    return () => unsubscribe();
  }, []);

  // 메시지가 추가될 때마다 자동으로 스크롤을 맨 아래로 내리기 위한 useEffect
  useEffect(() => {
    // 메시지 추가 후, 스크롤을 자동으로 맨 아래로 내림
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // 메시지 전송 처리 함수
  const handleSend = async () => {
    if (!input) return; // 입력값이 없으면 보내지 않음

    const message = input; // 입력한 메시지 저장
    setInput(""); // 메시지를 보낸 후 입력창 비우기

    // Firebase에 새 메시지를 저장
    await addDoc(collection(db, "messages"), {
      name: "익명", // 이름은 "익명"으로 설정
      text: message, // 저장할 메시지 텍스트
      timestamp: serverTimestamp(), // Firestore 서버 타임스탬프 사용
    });
  };

  return (
    <div className="home-page">
      {/* 메인 이미지 표시 */}
      <div className="mainImg">
        <img src={MainImg} alt="main" />
      </div>

      {/* 응원 메시지 제목 */}
      <h2 className="cheer-title">응원의 메시지를 남겨주세요 !</h2>

      {/* 채팅 박스 */}
      <div className="chat-box">
        {/* 채팅 메시지 영역 */}
        <div className="chat-messages">
          {messages.map((msg, idx) => (
            // 각 메시지를 출력하는 부분 (메시지 내용은 오른쪽 정렬)
            <div key={idx} className="chat-message right">
              {msg.text}
            </div>
          ))}
          {/* 메시지 목록이 끝나면 이 위치로 스크롤 */}
          <div ref={bottomRef} />
        </div>

        {/* 메시지 입력 창 */}
        <div className="chat-input-box">
          {/* 입력 창 */}
          <input
            type="text"
            placeholder="메시지를 입력하세요."
            value={input} // 상태 값이 입력창에 반영
            onChange={(e) => setInput(e.target.value)} // 입력값 변경 시 상태 업데이트
            onKeyDown={(e) => e.key === "Enter" && handleSend()} // Enter 키 눌렀을 때 메시지 전송
          />
          {/* 메시지 전송 버튼 */}
          <button className="send-btn" onClick={handleSend}>
            📩
          </button>
        </div>
      </div>

      {/* 푸터 컴포넌트 */}
      <Footer />
    </div>
  );
};

export default Home;

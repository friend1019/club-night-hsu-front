import { useState, useEffect, useRef } from "react";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  addDoc,
  serverTimestamp,
  where,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../firebase";
import "../../css/HomePage/ChatBox.css";

const ChatBox = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const bottomRef = useRef(null);

  // 브라우저마다 고유 익명 ID 생성 및 저장 (로컬스토리지에 저장함)
  useEffect(() => {
    if (!localStorage.getItem("anonId")) {
      const anonId = `anon_${Math.random().toString(36).substring(2, 10)}`;
      localStorage.setItem("anonId", anonId);
    }
  }, []);

  const anonId = localStorage.getItem("anonId");

  // 실시간 메시지 읽기
  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const newMessages = snapshot.docs.map((doc) => doc.data());
      setMessages(newMessages);
    });

    return () => unsubscribe();
  }, []);

  // 자동 스크롤
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // 메시지 전송 제한
  const handleSend = async () => {
    if (!input.trim()) return;
  
    // 전체 메시지 수 확인 (오래된 순)
    const allQuery = query(collection(db, "messages"), orderBy("timestamp"));
    const allSnapshot = await getDocs(allQuery);
  
    // 30개 초과 시 오래된 것부터 삭제
    if (allSnapshot.size >= 30) {
      const excess = allSnapshot.size - 29; // 새로 보낼 메시지 자리 남기기
      const oldMessages = allSnapshot.docs.slice(0, excess);
  
      for (const docSnap of oldMessages) {
        await deleteDoc(doc(db, "messages", docSnap.id));
      }
    }
  
    // 사용자별 최대 5개 메시지 제한
    const userQuery = query(collection(db, "messages"), where("anonId", "==", anonId));
    const userSnapshot = await getDocs(userQuery);
    if (userSnapshot.size >= 5) {
      alert("최대 5개의 메시지만 전송할 수 있습니다.");
      return;
    }
  
    // 새 메시지 추가
    await addDoc(collection(db, "messages"), {
      name: "익명",
      anonId,
      text: input,
      timestamp: serverTimestamp(),
    });
  
    setInput("");
  };
  

  return (
    <div className="chat-box">
      <div className="chat-messages">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`chat-message ${
              msg.anonId === anonId ? "right" : "left"
            }`}
          >
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
  );
};

export default ChatBox;

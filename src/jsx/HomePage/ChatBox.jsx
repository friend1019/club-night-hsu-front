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

    const q = query(collection(db, "messages"), where("anonId", "==", anonId));
    const snapshot = await getDocs(q);

    if (snapshot.size >= 5) {
      alert("최대 5개의 메시지만 전송할 수 있습니다.");
      return;
    }

    await addDoc(collection(db, "messages"), {
      name: "익명",
      anonId,
      text: input,
      timestamp: serverTimestamp(),
    });

    setInput("");
  };

  // // 오래된 메시지 삭제 (현재 24시간)
  // useEffect(() => {
  //   const deleteOldMessages = async () => {
  //     const cutoffTime = new Date().getTime() - 24 * 60 * 60 * 1000; // 24시간 전
  //     const q = query(
  //       collection(db, "messages"),
  //       where("timestamp", "<", new Date(cutoffTime))
  //     );
  //     const snapshot = await getDocs(q);

  //     snapshot.forEach(async (doc) => {
  //       await deleteDoc(doc.ref); // 오래된 메시지 삭제
  //     });
  //   };

  //   // 1시간마다 메시지 삭제 확인
  //   const intervalId = setInterval(deleteOldMessages, 60 * 60 * 1000);

  //   return () => clearInterval(intervalId);
  // }, []);

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

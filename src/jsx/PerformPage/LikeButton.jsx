import { useEffect, useState } from "react";
import { db } from "../../firebase";
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  onSnapshot,  // 실시간 업데이트를 위한 import
} from "firebase/firestore";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import "../../css/LikeButton.css";
import "../../css/font.css";

const LikeButton = ({ clubName }) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const anonId = localStorage.getItem("anonId");

  const docRef = doc(db, "likes", clubName); // 문서명 = clubName

  useEffect(() => {
    // Firestore 실시간 데이터 구독
    const unsubscribe = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        setLikeCount(data.count || 0);
        setLiked(data.users?.includes(anonId));
      } else {
        // 초기 데이터 설정
        setDoc(docRef, { count: 0, users: [] });
      }
    });

    // 컴포넌트가 unmount될 때 구독 취소
    return () => unsubscribe();
  }, [anonId, docRef]);

  const handleLike = async () => {
    const docSnap = await getDoc(docRef);
    if (!docSnap.exists()) return;

    const data = docSnap.data();

    if (data.users.includes(anonId)) {
      // 좋아요 취소
      await updateDoc(docRef, {
        count: data.count - 1,
        users: arrayRemove(anonId),
      });
      setLiked(false);
    } else {
      // 좋아요 추가
      await updateDoc(docRef, {
        count: data.count + 1,
        users: arrayUnion(anonId),
      });
      setLiked(true);
    }
  };

  return (
    <div className="like-button" onClick={handleLike}>
      {liked ? (
        <AiFillHeart className="heart-icon filled" />
      ) : (
        <AiOutlineHeart className="heart-icon" />
      )}
      <span><p style={{fontFamily:"Tenada", fontSize:"14px", marginBottom:"6px"}}>{likeCount}</p></span>
    </div>
  );
};

export default LikeButton;

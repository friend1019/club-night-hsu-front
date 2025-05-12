import { useEffect, useState } from "react"; // 리액트 훅 가져오기 (상태 관리, 사이드 이펙트 관리)
import { db } from "../../firebase"; // firebase 설정 파일에서 db 가져오기
import {
  doc,        // 특정 문서 객체
  getDoc,     // 문서 한 개 읽기
  setDoc,     // 문서 새로 생성
  updateDoc,  // 문서 수정
  arrayUnion, // 배열에 값 추가
  arrayRemove,// 배열에서 값 제거
  onSnapshot, // 실시간 데이터 업데이트 감지
} from "firebase/firestore";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"; // 하트 아이콘 가져오기
import "../../css/LikeButton.css"; // 좋아요 버튼용 CSS 불러오기
import "../../css/font.css";       // 폰트 설정 CSS 불러오기

// LikeButton 컴포넌트 정의 (clubName을 props로 받아옴)
const LikeButton = ({ clubName }) => {
  const [liked, setLiked] = useState(false); // 사용자가 현재 이 클럽을 좋아요 했는지 여부 상태
  const [likeCount, setLikeCount] = useState(0); // 좋아요 숫자 상태
  const anonId = localStorage.getItem("anonId"); // 로컬스토리지에서 사용자 익명 ID 가져오기

  const docRef = doc(db, "likes", clubName); 
  // Firestore의 "likes" 컬렉션에서 clubName 이름의 문서를 참조

  // 컴포넌트가 처음 렌더링될 때 Firestore 실시간 감지 시작
  useEffect(() => {
    const unsubscribe = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        // 문서가 존재하면
        const data = docSnap.data(); // 문서 데이터 가져오기
        setLikeCount(data.count || 0); // 좋아요 수 반영
        setLiked(data.users?.includes(anonId)); // 이 사용자가 좋아요를 눌렀는지 확인
      } else {
        // 문서가 없으면 초기화 (좋아요 수 0, users 배열 빈값)
        setDoc(docRef, { count: 0, users: [] });
      }
    });

    // 컴포넌트가 사라질 때(onUnmount) 실시간 감지 해제
    return () => unsubscribe();
  }, [anonId, docRef]);
  // 의존성 배열: anonId, docRef가 바뀌면 useEffect 다시 실행

  // 좋아요 버튼을 클릭했을 때 실행되는 함수
  const handleLike = async () => {
    const docSnap = await getDoc(docRef); // 문서 가져오기
    if (!docSnap.exists()) return; // 문서 없으면 그냥 종료

    const data = docSnap.data(); // 문서 데이터 가져오기

    if (data.users.includes(anonId)) {
      // 이미 좋아요를 누른 경우
      await updateDoc(docRef, {
        count: data.count - 1, // 좋아요 수 감소
        users: arrayRemove(anonId), // users 배열에서 이 사용자 제거
      });
      setLiked(false); // 좋아요 해제 상태로 변경
    } else {
      // 아직 좋아요 안 누른 경우
      await updateDoc(docRef, {
        count: data.count + 1, // 좋아요 수 증가
        users: arrayUnion(anonId), // users 배열에 이 사용자 추가
      });
      setLiked(true); // 좋아요 눌린 상태로 변경
    }
  };

  // 실제 화면에 표시될 부분 (JSX)
  return (
    <div className="like-button" onClick={handleLike}>
      {liked ? (
        // 좋아요 상태라면 빨간색 하트 표시
        <AiFillHeart className="heart-icon filled" />
      ) : (
        // 좋아요 상태가 아니면 빈 하트 표시
        <AiOutlineHeart className="heart-icon" />
      )}
      {/* 좋아요 수 표시 */}
      <span>
        <p style={{fontFamily:"Tenada", fontSize:"14px", marginBottom:"6px"}}>
          {likeCount}
        </p>
      </span>
    </div>
  );
};

// 이 파일에서 LikeButton 컴포넌트를 외부로 내보냅니다 (다른 파일에서도 사용 가능)
export default LikeButton;

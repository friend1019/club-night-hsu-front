import 타코야키1 from "../../img/타코야끼1.png";
// import 타코야키2 from "../../img/타코야끼2.png";
import 분식1 from "../../img/만두.png";
// import 분식2 from "../../img/분식2.png";
import 케밥1 from "../../img/케밥1.png";
// import 케밥2 from "../../img/케밥2.png";
import 아츄1 from "../../img/아츄.png";
// import 아츄2 from "../../img/아츄1.png";
import 닭강정 from "../../img/닭강정.png";
import 닭꼬치 from "../../img/닭꼬치.png";

// import 타코야키 from "../../img/타코야키2.png"
import 타코야키사진 from "../../img/타코야키사진.png";
import 닭강정사진 from "../../img/닭강정사진.png";
import 닭꼬치사진 from "../../img/닭꼬치사진.png";
import 아츄사진 from "../../img/아츄사진.png";
import 케밥사진 from "../../img/케밥사진.png";
import 분식사진 from "../../img/분식사진.png";





const FoodList=[
    {
        id: 1,
        foodLogo:타코야키1,
        foodImg:타코야키사진,
        foodName: "타코야키",
        menuList: [
          { menu: "타코야키 8알", cost: "5000원" },
          { menu: "회오리감자", cost: "5000원" },
        ],
      },
      {
        id: 2,
        foodLogo:분식1,
        foodImg:분식사진,
        foodName: "만두",
        menuList: [
          { menu: "고기만두, 김치만두, 갈비만두, 매운만두, 튀김만두(8개)", cost: "8000원" },
          { menu: "새우튀김(5개)", cost: "8500원" },
          { menu: "새우튀김만두셋트", cost: "10000원" },
          { menu: "옥수수, 고기, 김치 찐빵(5개)", cost: "8000원" },
        ],
      },
      {
        id: 3,
        foodLogo:케밥1,
        foodImg:케밥사진,
        foodName: "케밥",
        menuList: [
          { menu: "치킨 케밥", cost: "7000원" },
          { menu: "양고기 케밥", cost: "8000원" },

        ],
      },
      {
        id: 4,
        foodLogo:닭강정,
        foodImg:닭강정사진,
        foodName: "닭강정",
        menuList: [
          { menu: "슈프림, 와사비마요, 오리지널, 치즈, 어니언", cost: "" },
          { menu: "작은컵", cost: "10000원" },
          { menu: "큰컵", cost: "20000원" },
        ],
      },
      {
        id: 5,
        foodLogo:닭꼬치,
        foodImg:닭꼬치사진,
        foodName: "닭꼬치",
        menuList: [
          { menu: "소금구이", cost: "5000원" },
          { menu: "데리야끼", cost: "5000원" },
          { menu: "매운맛", cost: "5000원" },
        ],
      },
      {
        id: 6,
        foodLogo:아츄1,
        foodImg:아츄사진,
        foodName: "아이스크림츄러스",
        menuList: [
          { menu: "츄러스", cost: "4500원" },
          { menu: "아츄", cost: "6000원" },
          { menu: "오레오 치즈볼", cost: "7000원" },
        ],
      },
];
export default FoodList;
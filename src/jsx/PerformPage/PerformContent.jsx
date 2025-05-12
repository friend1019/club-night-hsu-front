const performContent = [
  {
    id: 1,
    clubName: "정음",
    desc: "한서대학교의 유일한 어쿠스틱 밴드 동아리 ‘정음’은 정서적 음악 이라는 뜻을 가지고 있으며, 함께 기타 치고 노래 부르다 보면 어느새 술자리에 앉아 있는, 음악과 사람, 낭만을 사랑하는 한서대 학생들의 모임입니다!",
    songList: [
      { title: "개화", singer: "서무진, 이완수, 박아영, 강준서, 윤인혁" },
      {
        title: "너라는 별",
        singer: "정휘은, 김민아, 한희선, 박아영, 김지희, 이의진",
      },
      {
        title: "운이 좋았지",
        singer: "이수진, 이완수, 강요셉, 정시원, 양선아",
      },
      {
        title: "이름이 맘에 든다는 이유만으로",
        singer: "이선아, 오지연, 김사랑, 이강훈, 김지희, 김윤직",
      },
      { title: "모르시나요", singer: "이해주, 박예담, 이강훈, 양선아" },
      {
        title: "옛 친구에게",
        singer: "이주원, 김민아, 서무진, 강요셉, 강준서, 오준호",
      },
    ],
    leader: "회장:이주원",
  },
  {
    id: 2,
    clubName: "SHADOW",
    desc: "1992년에 설립되어 한서대학교와 역사를 함께해온 전통 있는 한서대의 유일무이한 락밴드 동아리, SHADOW입니다. 락을 기반으로 다양한 음악을 선보이며, 열정과 재능을 무대 위에서 마음껏 펼치는 곳! 선후배가 서로 멘토가 되어 음악으로 소통하고 함께 성장하는 SHADOW의 무대, 지금 시작합니다!",
    songList: [
      { title: "New Divide", singer: "정균영, 김민주, 김현경, 신예진, 정광문" },
      {
        title: "Stand Up!",
        singer: "윤예지, 최재원, 김현경, 오채은, 조용주, 김서진",
      },
      { title: "Material Girl", singer: "신윤서, 최재원, 오채은, 이훈희" },
      {
        title: "Addiction",
        singer: "윤미녕, 김도형, 박준서, 강지만, 조용우, 조용주",
      },
      {
        title: "HONEY (ARE U COMING?)",
        singer: "박진성, 박준서, 이용승, 신수림, 조용우",
      },
      { title: "역광(逆光)", singer: "최아영, 박성진, 김성진, 김수영, 정광문" },
      {
        title: "맨정신(SOBER)",
        singer: "박진성, 김민주, 신수림, 이재혁, 경일현, 조민근",
      },
    ],
    leader: "회장:정광문",
  },
  {
    id: 3,
    clubName: "무혼",
    desc: "무척 고마워, 혼자 있지 않게 해줘서.. 한서대 밴드부 무혼의 뜻입니다. 바로 이순간 여러분과 함께할 수 있음에 감사하며, 무혼만의 감성으로 무대를 가득 채워줄 예정입니다. 다 함께, 무혼과의 시간을 마음껏 즐겨주세요!",
    songList: [
      {
        title: "알루미늄",
        singer: "이병훈, 유성훈, 김도윤, 장교준, 조여빈, 신윤서",
      },
      {
        title: "Find me!",
        singer: "국새론, 장교준, 김용범, 이현서, 김도윤, 배온유",
      },
      {
        title: "오늘이야",
        singer: "정민교, 마예원, 신윤서, 이채린, 조여빈, 김용범, 정하영",
      },
      {
        title: "오늘만 I love you",
        singer: "이효범, 배온유, 정민준, 장교준, 조여빈, 신윤서",
      },
      { title: "Hi Bully", singer: "오지현, 유성훈, 김도윤, 장교준, 이현서" },
      {
        title: "오빠라고 불러다오",
        singer: "이현서, 유성훈, 장교준, 조여빈, 한은상, 조주형",
      },
    ],
    leader: "회장:유성훈",
  },
  {
    id: 4,
    clubName: "발라더",
    desc: "목소리만으로 무대를 채우는 보컬동아리 발라더!!",
    songList: [
      { title: "바라봐줘요", singer: "이채연" },
      { title: "청혼", singer: "정승화, 한성욱" },
      { title: "사랑보다 깊은 상처", singer: "정승화, 길민정" },
      { title: "circular op.2", singer: "이승진" },
      { title: "모르시나요", singer: "한성욱" },
      { title: "있어줄래", singer: "김준광, 최정우" },
    ],
    leader: "회장:길민정",
  },
  {
    id: 5,
    clubName: "2MANYMC",
    desc: "한서대 유일무이 힙합동아리 2MANYMC!",
    songList: [
      { title: "Not like us", singer: "바르후스바디후 바르스벌드(진태형)" },
      { title: "Sun goes down", singer: "박현준" },
      { title: "작업", singer: "문해용" },
      { title: "꼴통", singer: "김동혁, 박현준" },
      { title: "Gear2", singer: "전승빈" },
      { title: "On fire", singer: "서수오, 문해용" },
      { title: "Jet Lag", singer: "김단후, 김동혁" },
      { title: "Love me", singer: "김태휘, 백웅일" },
      { title: "요즘것들", singer: "전승빈, 문해용, 최예지, 박현준" },
      {
        title: "위하여",
        singer: "최예지, 김단후, 백현빈, 김동혁, 서수오, 박지민",
      },
    ],
    leader: "회장:박현준",
  },
  {
    id: 6,
    clubName: "REFRESH",
    desc: "저희 한서대학교 치어리딩 동아리 Refresh는 신나는 곡과 함께 점점 고조되는 분위기로 공연을 보여드릴 예정입니다! 저희와 함께 무대를 편하고 즐겁게 즐겨주시면 감사하겠습니다",
    songList: [
      { title: "나의 히어로 아카데미아 OST", singer: "김지원 오나현 이소은 박하은 최연우 이종현 최시은" },
      { title: "Not Alone 오프닝", singer: "김지원 최시은 박선영 윤민정 최하린 최연우 김나연 외 3명" },
      { title: "투혼가", singer: "김지원 오나현 이소은 박하은 윤민정 최하린 최연우 김나연 외 2명" },
      { title: "나는나비", singer: "김지원 오나현 이소은 최연우 박선영 윤민정 이은정 안진서" },
      { title: "작은별", singer: "김지원 오나현 이소은 최시은 박하은 최연우 이은정" },
      { title: "i love it", singer: "김지원 오나현 박하은 최시은 최하린 이은정 장정원" },
      { title: "이게무슨일이야", singer: "김지원 오나현 박하은 최시은 최하린 이은정 장정원" },
      { title: "예술이야", singer: "이소은 박하은 윤민정 이종현 장정원 안진서 최하린 외 3명" },
      { title: "그대에게", singer: "이소은 박선영 최시은 윤민정 이은정 안진서 김나연 외 4명" },
    ],
    leader: "회장:김지원",
    leader2:
      "",
  },
  {
    id: 7,
    clubName: "SHAKE",
    desc: "저희는 댄스를 사랑하는 사람들이 모여 함께 춤을 배우고 즐기는 한서대의 유일무이 댄스동아리 SHAKE 입니다 오늘 무대를 위한 동아리부원들의 노력을 함께 즐겨주시면 감사하겠습니다 많은 호응 부탁드립니다 !!",
    songList: [
      { title: "How Sweet", singer: "조수민, 김하연, 전은지, 조유리, 박서영" },
      { title: "Body", singer: "한서진, 류다올, 최연서, 김나연" },
      { title: "Get Loud", singer: "이지우, 조성윤, 조선경, 이예은" },
      {
        title: "하츠투하츠",
        singer:
          "한서진, 풍효진, 이지우, 김가현, 이시은 외 3명",
      },
      { title: "힙합", singer: "조수민, 김하연, 박보성, 전은지, 조유리" },
      { title: "Rumor", singer: "이시은, 김영지, 이예은, 조선경, 풍효진" },
      {
        title: "걸스",
        singer: "박채연, 김가현, 류다올, 남채린, 박서현, 조유리, 임영주",
      },
      {
        title: "Chk Chk Boom",
        singer:
          "조성윤, 박보성, 김소정, 조수민, 김시윤, 정시우 외 2명",
      },
      { title: "Bitch better", singer: "이지우, 조성윤, 최연서, 김가현" },
      {
        title: "오늘만 I love you",
        singer: "박채연, 김하영, 전은지, 정시우, 장준기, 김나연",
      },
      { title: "Igloo + Bad News", singer: "원세진, 한서진, 류다올, 장한비" },
      {
        title: "Like Jennie + Mantra",
        singer: "박채연, 최연서, 김하영, 김소정, 임영주, 전은지, 이예은",
      },
    ],
    leader: "회장:박채연",
  },
  // 다른 동아리 데이터 추가 가능
];

export default performContent;

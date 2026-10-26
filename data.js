/* ============================================================
   온더훅 팬게임 - 데이터 파일 (여기만 고치면 됩니다)
   ------------------------------------------------------------
   version : 내용을 크게 바꾸면 숫자를 올리세요 (저장된 진행이 초기화되고 새 내용 적용)
   avatar  : 프로필 이미지. 링크("https://...") 또는 저장소 경로("img/doui.png"). 비우면 물고기 아이콘
   scriptFile : TXT 대화 스크립트 경로 (문법은 scripts/hansegye.txt 맨 위 설명 참고)
   group   : "fav"(즐겨찾기) / "guest"(게스트)
   history : 처음부터 들어 있는 대화 [["them","상대 말"],["me","내 말"]]
   unread  : 안 읽은 수 표시 (생략하면 script 첫 노드의 them 줄 수)

   [script] 대화 스크립트 = 노드(장면)들의 연결
     script: { start: "시작노드이름", nodes: { 노드이름: {...}, ... } }

   노드에 쓸 수 있는 것 (위에서 아래 순서로 진행)
     them   : ["말1","말2"]  캐릭터가 차례로 보내는 말 (방에 들어가면 먼저 말을 걺)
     auto   : "문장"        플레이어 답장이 자동으로 입력됨
     choices: [{text:"선택지", next:"노드이름"}, ...]   플레이어 선택지
               (say:"..." 를 넣으면 버튼 글자와 다른 문장이 전송됨)
     next   : "노드이름"    선택지 없이 다음 노드로 자동 이동
     (choices도 next도 없으면 그 대화는 거기서 끝)
   ============================================================ */
window.GAME_DATA = {
  version: 7,

  /* 구분선이 나온 뒤 다음 대사까지 기다리는 시간 (1000 = 1초) */
  dividerWait: 5000,

  /* 호감도 창 기본값. 캐릭터의 affinity에 적은 항목이 우선합니다.
     level: 채움 0~100 / color: 채움 색 / dot: 꼬리 위 회색 점 / title: [대괄호] 문구 / desc: 아래 설명(줄바꿈은 \n) */
  affinityDefault: { level: 100, color: "#ef9090", dot: true, title: "좋아하는 사람" },

  me: { name: "주인공", status: "♪", avatar: "img/me.png" },

  characters: [
    {
      id: "hansegye", name: "한세계", group: "fav", status: "삶에 도파민이 없어",
      avatar: "img/hansegye.png",
      scriptFile: "scripts/hansegye.txt",        // ← 대화는 이 txt 파일에서 읽어옴
      affinity: { level: 25, color: "#55c4b4", dot: false, title: "스레기의 그녀" },
    },
    { id: "panda", name: "성솔", group: "fav", status: "🐼",
      avatar: "img/panda.png",
      history: [["them", "카페 갈 거지? 미리 주문할게 자기야~"]], unread: 0,
      affinity: { level: 30, color: "#55c4b4", title: "어라…" } },
    {
      id: "agi", name: "최신", group: "fav", status: "The Godest & Godess",
      avatar: "img/agi.png",
      history: [["them", "마녀, 육체는 건강하게 보존하고 있는가?"]], unread: 0,
      affinity: { title: "『The Godess』" },
    },
    {
      id: "unknown", name: ",", avatar: "img/com.png", group: "fav", status: "",
      history: [["me","즐겜"],["them","엉"],["me","뭐하세요?"],["them","겜"],["me","모바일요?"],["them","엉"],["me","머해여"],["them","폰"]],
      unread: 0,
      affinity: { title: "?" },
    },
    { id: "momoi", name: "모모이 하루오", group: "fav", status: "韓国! 4649 ヽ(*°∀°*)ﾉ",
      avatar: "img/momoi.png",
      history: [["them", "괜찮습니까?"]], unread: 0,
      affinity: { title: "첫사랑" } },
    { id: "sunwoo", name: "선우서래", group: "fav", status: "온톡 안 봐요",
      avatar: "img/sunwoo.png",
      history: [["them", "뭐 하세요?"]], unread: 0,
      affinity: { title: "썸" } },
    { id: "sregi", name: "스레기", group: "fav", status: "와 마라탕 존맛탱구",
      avatar: "img/sregi.png",
      history: [["them", "아 싫어 내 거니까 그럼 이만 생일축하해 뿅"]], unread: 0,
      affinity: { title: "좋아해" } },
    { id: "doui", name: "도위", group: "fav", status: "언제나",
      avatar: "img/doui.png",
      history: [["them", "나 말고 죽순"]], unread: 0,
      affinity: { title: "좋아하는 사람" } },
  ],

  /* 추천 친구 탭. 추가(+)하면 친구 목록 addAs 그룹에 들어가고, script가 있으면 먼저 말을 겁니다 */
  recommended: [
    { id: "r1", name: "먐", addAs: "guest", avatar: "https://pbs.twimg.com/profile_images/2079463856422977536/F3hwtP32_400x400.jpg",
      affinity: { title: "최신애호단" } },
    { id: "r2", name: "유공", addAs: "guest", avatar: "https://pbs.twimg.com/profile_images/2106990308647227392/F6522-lQ_400x400.jpg",
      affinity: { title: "중2병애호단" } },
    { id: "r3", name: "산타", addAs: "guest", avatar: "https://pbs.twimg.com/profile_images/2063136617192415232/H-KfWPWH_400x400.jpg",
      affinity: { title: "도위애호단" } }, 
    { id: "r4", name: "롱", addAs: "guest", avatar: "https://pbs.twimg.com/profile_images/2109652633489465344/kVDA9jBX_400x400.jpg",
      affinity: { title: "죽순군과 판다양~" } },
    { id: "r5", name: "월척", addAs: "guest", avatar: "https://pbs.twimg.com/profile_images/2112034127382028289/bC5cIjBe_400x400.jpg",
      affinity: { title: "도위유기하기모임" } },
    { id: "r6", name: "이오", addAs: "guest", avatar: "https://pbs.twimg.com/profile_images/2109255822434009088/XErWaTeN_400x400.jpg",
      affinity: { title: "도위유기하기모임" } },
    { id: "r7", name: "풀", addAs: "guest", avatar: "https://pbs.twimg.com/profile_images/1914738569882882048/cnnZil-H_400x400.png",
      affinity: { title: "오리애호단" } },
    { id: "r8", name: "정온", addAs: "guest", avatar: "https://pbs.twimg.com/profile_images/2111687017612587008/bp8_t9yv_400x400.jpg",
      affinity: { title: "아헤 화이팅!" } },
    { id: "r9", name: "열이", addAs: "guest", avatar: "https://pbs.twimg.com/profile_images/2108631037156982784/Fbjrjm5g_400x400.jpg",
      affinity: { title: "열이단 파이팅!!" } },
   { id: "r10", name: "기사", addAs: "guest", avatar: "https://pbs.twimg.com/profile_images/2114268208362586112/igTakOB9_400x400.jpg",
      affinity: { title: "너네도 국민수를 앓아봐야돼 여동생들아" } }
  ],

  /* 쪽지 탭 */
  mail: [
    { from: "세계의 한마디", text: "안녕하세요… 제 팬게임 재밌게 즐겨주세요. 짬날때마다 업데이트합니다... 좋은 하루 되세요... 최신화이팅!", read: false },
  ],
};

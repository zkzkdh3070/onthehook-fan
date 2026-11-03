/* ============================================================
   데이터 파일
   ------------------------------------------------------------
   avatar  : 프로필 이미지 링크("https://...") 또는 저장소 경로("img/doui.png"). 비우면 물고기 아이콘
   scriptFile : TXT 대화 스크립트 경로 (scripts/hansegye.txt 맨 위 설명 참고)
   group   : "fav"(즐겨찾기) / "guest"(게스트)
   history : 처음부터 들어 있는 대화
   ============================================================ */
window.GAME_DATA = {
  version: 8,
  dividerWait: 5000,

  /* 호감도 창 기본값. 단계별 호칭은 캐릭터 affinity.stages에서 설정합니다.
     팝업 문구에는 {이름}, {주인공이름}, {호감도}를 사용할 수 있습니다. */
  affinityDefault: { level: 100, color: "#ef9090", dot: true, title: "좋아하는 사람" },
  affinityToast: "{이름}님은 {주인공이름}님을 [{호감도}]라고 생각하고 있습니다.",
  clearToast: "[{이름}]의 공략이 완료 되었습니다.",

  me: { name: "주인공", status: "♪", avatar: "img/me.png" },

  characters: [
    {
      id: "hansegye", name: "한세계", group: "fav", status: "삶에 도파민이 없어",
      avatar: "img/hansegye.png",
      scriptFile: "scripts/hansegye.txt",        // ← 대화는 이 txt 파일에서 읽어옴
      affinity: { level: 15, color: "#55c4b4", dot: false, title: "스레기의 그녀",
        stages: [ 
          { from: 30, title: "귀찮긴 해도…" },
           { from: 50, title: "일단은 친구?" },
          { from: 65, title: "언니라고 부를래~" },
          { from: 80, title: "나는 안돼?" },
          { from: 100, title: "헤헷, 이미 늦었다구?" },
        ],
      },
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
    { id: "unknown", name: ",", avatar: "img/com.png", group: "fav", status: "",
      history: [["me","즐겜"]], unread: 0, affinity: { title: "?" },},
    { id: "momoi", name: "모모이 하루오", group: "fav", status: "韓国! 4649 ヽ(*°∀°*)ﾉ",
      avatar: "img/momoi.png",
      history: [["them", "괜찮습니까?"]], unread: 0,
      affinity: { title: "첫사랑" } },
    { id: "sunwoo", name: "선우서래", group: "fav", status: "답장X",
      avatar: "img/sunwoo.png",
      history: [["them", "언니 일하러 감 빠이"]], unread: 0,
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

  /* 추천 친구 탭.*/
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
    { from: "세계의 한마디", text: "안녕하세요… 제 팬게임 재밌게 즐겨주세요. 짬날때마다 업데이트합니다... 좋은 하루 되세요... 최신 화이팅! 해당 틀을 사용하는 트친이 있다면 세계의 한마디 속 최신 화이팅!은 남겨주시길...", read: false },
  ],
};

/* ============================================================
   온더훅 팬게임 - 데이터 파일 (여기만 고치면 됩니다)
   ------------------------------------------------------------
   version : 내용을 크게 바꾸면 숫자를 올리세요 (저장된 진행이 초기화되고 새 내용 적용)
   avatar  : 이미지 경로 (예: "img/doui.png"). 비우면 물고기 아이콘
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
  version: 2,

  me: { name: "시윤", avatar: "", status: "♪" },

  characters: [
    {
      id: "doui", name: "도위", avatar: "", group: "fav", status: "언제나",
      script: {
        start: "s1",
        nodes: {
          s1: { them: ["일어났어?"],
                choices: [{ text: "아침 먹었어요?", next: "eat" }, { text: "뭐해요?", next: "eat2" }] },
          eat:  { them: ["아침 먹는 중", "주인공은 뭐해?"],
                  choices: [{ text: "저도 먹으려구요", next: "end" }, { text: "그냥 누워있어요", next: "end" }] },
          // auto : 플레이어 답장이 자동 입력되는 예시
          eat2: { them: ["아침 먹는 중", "주인공은 뭐해?"], auto: "저는 그냥 누워있어요", next: "end" },
          end:  { them: ["그렇구나. 맛있게 먹어"] },
        },
      },
    },
    {
      id: "agi", name: "아기 신이♡", avatar: "", group: "fav", status: "The Godest & Godess",
      history: [["them", "오늘은 하늘을 더럽히는 공기의 흐름이.."]],
      script: {
        start: "s1",
        nodes: {
          s1: { them: ["오늘도 하늘이 아름답군", "그대는 무엇을 하고 있나"],
                choices: [{ text: "하늘 보고 있어요", next: "a" }, { text: "미세먼지 심한데요?", next: "b" }] },
          a: { them: ["후후, 역시 통하는군"] },
          b: { them: ["...그것은 하늘의 시련일 뿐"] },
        },
      },
    },
    {
      id: "unknown", name: ",", avatar: "", group: "fav", status: "",
      history: [["me","즐겜"],["them","엉"],["me","뭐하세요?"],["them","겜"],["me","모바일요?"],["them","엉"],["me","머해여"],["them","폰"]],
      unread: 0,
    },
    { id: "momoi", name: "모모이 하루오", avatar: "", group: "fav", status: "韓国! 4649 ヽ(*°∀°*)ﾉ",
      history: [["them", "괜찮습니까?"]], unread: 0 },
    { id: "sunwoo", name: "선우서래", avatar: "", group: "fav", status: "온톡 안 봐요",
      history: [["them", "뭐 하세요?"]], unread: 0 },
    { id: "sregi", name: "스레기", avatar: "", group: "fav", status: "와 마라탕 존맛탱구",
      history: [["them", "이번에 수학 잘 봤다.."]], unread: 0 },
  ],

  /* 추천 친구 탭. 추가(+)하면 친구 목록 addAs 그룹에 들어가고, script가 있으면 먼저 말을 겁니다 */
  recommended: [
    { id: "r1", name: "김미영팀장", avatar: "", addAs: "guest",
      script: { start: "s1", nodes: {
        s1: { them: ["고객님, 안녕하세요"], choices: [{ text: "누구세요?", next: "a" }, { text: "...", next: "a" }] },
        a: { them: ["김미영 팀장입니다^^"] } } } },
    { id: "r2", name: "리빙포인트", avatar: "", addAs: "guest" },
    { id: "r3", name: "버린물고기", avatar: "", addAs: "guest" },
    { id: "r4", name: "송도끼", avatar: "", addAs: "guest" },
    { id: "r5", name: "심리테스트", avatar: "", addAs: "guest" },
    { id: "r6", name: "연서복", avatar: "", addAs: "guest" },
    { id: "r7", name: "오뚝이", avatar: "", addAs: "guest" },
    { id: "r8", name: "오타맨", avatar: "", addAs: "guest" },
  ],

  /* 쪽지 탭 */
  mail: [
    { from: "운영자", text: "온더훅에 오신 것을 환영합니다! (팬 제작 비공식 게임)", read: false },
  ],
};

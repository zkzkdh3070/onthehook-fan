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
  version: 4,

  me: { name: "시윤", avatar: "", status: "♪" },

  characters: [
    {
      id: "hansegye", name: "한세계", avatar: "", group: "fav", status: "삶에 도파민이 없어",
      script: {
        start: "intro1",
        nodes: {
          intro1: { them: ["안녕하세요."] , next: "intro2" },
          intro2: { them: ["?", "누구?"], choices: [
            { text: "친구 추천 목록에 그쪽이 떠서요. 친구 추가 해봤어요.", next: "intro3" }
          ] },
          intro3: { meAuto: true, auto: "친구 추천 목록에 그쪽이 떠서요. 친구 추가 해봤어요.", them: ["어? 그래?", "음~", "아!", "너!", "걔가 조아…", "아", "아니다", "미안미안", "방금은 잊어줘", "이야 나 친구한테 들어서", "너 알고 있거든~", "아싸 새친구다 잘 부탁해~"], choices: [
            { text: "저도 잘 부탁해요.", next: "day1" }
          ] },
          day1: { them: ["{주인공이름} 머해~", "오늘 완전 햇빛 쨍쩅인데~"], choices: [
            { text: "그러게요", next: "sunny" },
            { text: "여긴 비오는데", next: "rainy" }
          ] },
          sunny: { auto: "날씨 좋다", them: ["세계는 오늘 뭐할거예요?"], next: "shared1" },
          rainy: { auto: "갑자기 비 엄청 와요.\n그쪽은 햇빛 나오나 보네.\n세계는 오늘 뭐할거예요?", next: "shared1" },
          shared1: { them: ["나? 나는 오늘 음~", "헐!"], next: "shared2" },
          shared2: { them: ["완전 아끼는 후배가 있는데", "걔가 지나가서~", "반응이 찰져서", "만난김에 놀려주고 와야지", "기다려라~", "나의 도파민이여~"], choices: [
            { text: "ㅋㅋ\n너무 괴롭히진 마세요.", next: "shared3" }
          ] },
          shared3: { them: ["웅~", "아라떠~"] }
        }
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

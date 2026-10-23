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
  version: 5,

  /* 호감도 기본값 (캐릭터에 affinity가 없을 때) */
  affinityDefault: { level: 25, title: "스레기의 그녀" },

  me: { name: "주인공", avatar: "", status: "♪" avatar: "https://media.discordapp.net/attachments/1557612618896773192/1563105571136208948/onthehook_20261023052237936.png?ex=6adc6b01&is=6adb1981&hm=467a38d2f9d4a783f8b0bb00d91d919d1d50b4a4592cb2b5a6e317d28863d991&=&format=webp&quality=lossless&width=863&height=1024", },

  characters: [
    {
      id: "hansegye", name: "한세계", group: "fav", status: "삶에 도파민이 없어",
      avatar: "https://media.discordapp.net/attachments/1557612618896773192/1563106327683661935/image.png?ex=6adc6bb5&is=6adb1a35&hm=881b0c0821d6a818ef4393dcc2c8a4a2f59a25ab72d815ab3f4fa69da464c5bf&=&format=webp&quality=lossless",                                // ← 프로필 이미지 링크(https://...) 또는 img/파일명
      scriptFile: "scripts/hansegye.txt",        // ← 대화는 이 txt 파일에서 읽어옴
      affinity: { level: 25, title: "스레기의 그녀" },   // 호감도 칸(0~100)과 정보창 문구
    },
    {
      id: "agi", name: "최신", avatar: "", group: "fav", status: "The Godest & Godess",
       avatar: "https://cdn.discordapp.com/attachments/1557612618896773192/1563105568682676275/onthehook_20261023052306403.png?ex=6adc6b00&is=6adb1980&hm=8adb401bd36c82e78afb0ac80543a32b1ae3dcffb5b4eb8db5c58780f242ff33&",
      history: [["them", "The Godest & Godess"]],
      script: {
        start: "s1",
        nodes: {
          s1: { them: ["마녀, 육체는 건강하게 보존하고 있는가?"],
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
     avatar: "https://cdn.discordapp.com/attachments/1557612618896773192/1563105569995497532/onthehook_20261023052257063.png?ex=6adc6b00&is=6adb1980&hm=e5c81ef0c7b0d99e015b33ecab5bf61176df93cd7830906899e81f57cdbd012c&",
      history: [["them", "괜찮습니까?"]], unread: 0 },
    { id: "sunwoo", name: "선우서래", avatar: "", group: "fav", status: "온톡 안 봐요",
     avatar: "https://media.discordapp.net/attachments/1557612618896773192/1563105569584447588/onthehook_20261023052300057.png?ex=6adc6b00&is=6adb1980&hm=853884c1a8436f8c3d696c437d20e6ed5e0a9cdd866a04052b79dc5111fe1f55&=&format=webp&quality=lossless&width=863&height=1024",
      history: [["them", "뭐 하세요?"]], unread: 0 },
    { id: "sregi", name: "스레기", avatar: "", group: "fav", status: "와 마라탕 존맛탱구",
     avatar: "https://media.discordapp.net/attachments/1557612618896773192/1563105569160691712/onthehook_20261023052303302.png?ex=6adc6b00&is=6adb1980&hm=ae1f237ea146b7f32a1c95315af80901ea7d1a109e912d908aa1592e721ff2a8&=&format=webp&quality=lossless&width=863&height=1024",
      history: [["them", "아 싫어 내 거니까 그럼 이만 생일축하해 뿅"]], unread: 0 },
         { id: "sregi", name: "도위", avatar: "", group: "fav", status: "언제나",
          avatar: "https://media.discordapp.net/attachments/1557612618896773192/1563105570347548753/onthehook_20261023052254106.png?ex=6adc6b01&is=6adb1981&hm=275024d99d1d791755cd5440f318173f2993737ee6bac7b643adef057e1125f7&=&format=webp&quality=lossless&width=863&height=1024",
      history: [["them", "나 말고 죽순"]], unread: 0 },
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

/*배경 이미지 랜덤넣기 */
// 배경 이미지을 넣을 위치 가져오기
let image = document.getElementsByClassName("bgimg");

// 이미지 배열만들기
let arr = [
  "image/1.jpg",
  "image/2.jpg",
  "image/3.jpg",
  "image/4.jpg",
  "image/5.jpg",
];

image.src = `image/${arr}`;

// 랜덤으로 이미지 돌리기
let img = Math.floor(Math.random() * arr.length);

// 날씨 api 받아오기
// 시간 만들기
// 시간대에 인사 달라지기
// 오늘 할 거 적기
// 명언 랜던나오게 하기
// todo 버튼 토글로 애니메이션
// todolist 만들기

let maxim = {
  saying: {
    person: [
      "다이애나 윈 존스",
      "마이클 케닌",
      "데이비드 앨런",
      "폴 보게",
      "장 폴 ",
    ],
    say: [
      "겨울은 끝나고 봄은 온다.",
      "봄은 꽃이 피는 계절이 아니라, 마음이 피는 계절이다.",
      "여름은 열정을, 가을은 성숙을, 겨울은 깊은 생각을 준다.",
      "가을은 자연이 가장 아름다운 옷을 입는 계절이다.",
      "겨울의 추위는 여름을 더욱 그리운 계절로 만든다.",
    ],
  },
};

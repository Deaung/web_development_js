// if(true) console.log("사실")// 실행문이 한줄이면{}를 생략 가능
// if(false) {
//   console.log("거짓")
// };// 실행문이 한줄이면{}를 생략 가능

// // 이상의 코드의 경우 잘 사용 안함
// //true -> false 로 바꿀 방법이 없음

// let open = true;

// if(open) console.log("안녕하세요");

// open = false;

// if(open) console.log("금일은 휴무입니다")

// 이상의 코드는 boolean 값을 변수에 대입하여 분기를 조절 할 수있음

//true 를 반환하는 코드 / false를 반환하는 코드 사용

// let n = 1;
// if(n > 0){
//   console.log("자연수임")
// }

// open = !open;

// if(open){
//   console.log("안녕하세요");
//   console.log("자리로 안내")
// }else{
//   console.log("영업종료")
// }

// //if절내의 조건식이 참이면 else는 실행되지 않는 true 거나 false 인 구조이기 때문에 else 뒤에는 조건식 없음

// if(a > b){
//   console.log("a가b보다 크다")
// }else if(a<b){
//   console.log("a보다 b가 크다")
// }else{
//   console.log("a와 b가 같다")
// }

// if문과 switch문으로 동일한 구조 코드 작성

const yoot = "도";

// if(yoot === "도"){
//   console.log("1칸 전진")
// }else if(yoot === "개"){
//   console.log("2칸 전진")
// }else if(yoot === "걸"){
//   console.log("3칸 전진")
// }else if(yoot === "윷"){
//   console.log("4칸 전진")
// }else{
//   console.log("5칸 전진")
// }

// 이상의 코드 switch 로 작성
// 해당 안하면 무효 출력

switch(yoot){
  case "도" : 
  console.log("한칸 전진");
  break;
  case "개" : console.log("두칸 전진");
  break;
  case "걸" : console.log("세칸 전진");
  break;
  case "윷" : console.log("네칸 전진");
  break;
  case "모" : console.log("다섯칸 전진");
  break;
  default:
    console.log("무효");
}

/*
  switch 문 주의점 str,number 도 오는것 가능

  그 값이 뭐에 해당하는가에 따라 case에 입력 가능

  case"도",case1 가능
  default 의 경우 아무 case에 해당 안할 때 

  switch문에서 case는 순서대로 실행되면서 검증
  break; 없으면 그 다음 case 까지 실행됨을 유의해야함
*/




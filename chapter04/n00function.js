// 함수 예제
// function countTo(to){ 
//   for(let i = 0; i<to+1; i++){
//     console.log(i);
//   }
// }

// countTo(5);

// 지역변수 개념 포함
// sumTo() 함수 정의
// sumTo(5)라 했을때
// 최종합 15 나오도록 정의 후 호출

// call2() 유형
function sumTo(to){
  let sum = 0;
  for( let i = 1; i < to + 1; i++){
    sum += i;
  }
  console.log(sum)
}
sumTo(5);

function add(x,y){
  return x+y;
}
//함수 호출 -- 이전에 작성한 함수와 호출 방법 다름
//이전과 다르게 console.log 를 통해 호출 가능
//함수 내에 console.log 실행문 없어서 
console.log(add(2,3))

console.log(
  add(add(6,7), add(8,9))
);
//이상의 코드는 add 함수를 3번 호출
// 6,7을 먼저 계산하고 8,9 계산 한뒤 가장 바깥쪽의 add 함수 실행

console.log(add(1,2)+3)

// 실행문이 한줄일때 
const multiply = (x, y) => x * y;

console.log(multiply(2,7))

// 실행문이 두줄 이상인 경우
const multiply2 = (x, y) => {
  console.log(`${x}와 ${y}를 곱합니다`) // 백틱(`)을 활용한 표현식
  console.log(`${x} X ${y} = ${x*y}`)
  return x*y;
}
console.log(multiply2(3,7))
// let num1, num2, num3, num4, num5, num6; //복수의 변수 선언

// num1 = Math.floor((Math.random()*45)+1);
// num2 = Math.floor((Math.random()*45)+1);
// num3 = Math.floor((Math.random()*45)+1);
// num4 = Math.floor((Math.random()*45)+1);
// num5 = Math.floor((Math.random()*45)+1);
// num6 = Math.floor((Math.random()*45)+1);

// while( num1 === num2){
//   num2 = Math.floor((Math.random()*45)+1);
// }


// console.log(num1, num2, num3, num4, num5, num6);

// let arr02 = [];
// //일단 선언 후 데이터 나중에 넣는 방식

// // 배열의 값 대입 방식 - 해당부분은 자바와 차이가 있기에 확인

// // 요소 추가 ->.push()
// arr02.push('사과');
// arr02.push('오렌지');
// arr02.push('바나나');
// arr02.push('키위');

// console.log(arr02);

// // 배열의 요소를 삭제 method -> .pop()

// console.log(arr02.pop());
// console.log(arr02);

// // 특정 index에 값 넣기

// arr02[1] = '딸기';
// console.log(arr02); // '오렌지'가 '딸기' 로 대체 되었음 index를 한칸씩 미루거나 하지는 않음

// 배열을 사용해 실질적으로 lotto 번호 생성기 구현예정

// 1. lottoArray 배열을 선언하고
// 2. 해당 배열 내에 1~45까지의 number값을 넣음
// 3. 그리고 .pop()해서 하나씩 뽑아 출력하면 어느정도 구현가능할듯?
// 빈 배열 만들고 1~45 넣기
let lottoArray = [];

for(let i = 0; i < 45; i++){
  lottoArray.push(i+1);
} 

// console.log(lottoArray);

// 저 위에서 고려한 방식은 기본적으로 1~45 까지의 int를 생성하는 방식 
// 이미 배열에 다 만든 상황
// Math.floor(Math.random())관련 코드의 사용처
// index number 산출시 사용

 
let index = Math.floor(Math.random()*45);

// 임의적으로 선택한 인덱스의 값
let num = lottoArray[index]
// 이상의 코드 사용시 배열에서의 특정 요소가 num에 저장됨

// lottoArray에서 num과 어울리는 값을 삭제

// 배열에서 특정한 요소 제거하기위한 메서드 필요 .splice()

// lottoArray.splice(index,1);

// console.log(num, lottoArray);

let lottoNumbers = [];

for(let i = 0; i < 6; i++){
  let index2 = Math.floor(Math.random()*lottoArray.length);
  // 45 안쓰는 이유는 리터럴 쓰기 지양
  let num2 = lottoArray[index2]

  lottoArray.splice(index2,1)
  lottoNumbers.push(num2)
}
// console.log(lottoNumbers)
// console.log(lottoArray)

// 이상에서의 코드가 java와 약간 차이가있지만 이전에 구현한것과 크게 차이 없음

// script.js에 코드 검증부분 넣을예정
let list = ['abc', 123, true, false, 'ABC'];

list.sort();
console.log(list); // [123, 'ABC', 'abc', false, true]순서로 나옴
// 결과값 확인시 숫자1이 가장 작고, t가 가장 크다고 정리가 됨
// .sort() 함수의 기본 정렬 방식은 -> 유니코드(Unicode)의 코드값을 기반으로 함

// 특징 : .sort()를 실행하게 되면 , 모든 문자열을 str 로 전환한 후 크기를 비교하여 정렬하고 원래의 자료형으로 변환하여 제시,-> 서로다른 자료형을 가진 list가 정렬 가능

// 이상의 특징 때문에 1,11,2 와 같은 방식으로 정렬이 이루어짐

// 이는 JS 뿐만 아닌 대부분의 프로그램에서 채택한 정렬 방식
// 숫자를 오름/내림 차순으로 정렬해야 할때는 다른 방식을 사용

// 숫자를 정렬하는 경우도 많기 때문에 sort() 함수는 비교함수(Comparator)를 argument로 받을 수 있음
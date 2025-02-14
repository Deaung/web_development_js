// console.log('Hello, JavaScript');
// // 주석

// // 길게 작성시에도 동일 ctrl + / 통해 주석

// let darkModeOn = true;
// const PI = 3.14159;
// index.html -> 개발자 도구를 통해 콘솔 확인 가능

// let a = 1;
// console.log(a);
// a = 2;  //java 에서 처음 선언과 재 대입 의 차이
// console.log(a);
// // 변수 b 를 선언해서 a에 대입
// let b = a;
// console.log(a,b); // 결과값 2 2     (,) 는 출력 되지 않음

//java 와의 차이점
// a = "안녕하세요"; // 2 인 a에 string 자료형 대입
// b = true;
// console.log(a,b)
//이상의 코드에서 자바스크립트/ 파이썬에서는 데이터의 종류를 구분하는데 있어 타 언어만큼 엄격한 기준이 있지 않음 
// const A = 5;
// console.log(A);
// A = 10; // n00hellojs.js:25 Uncaught TypeError: Assignment to constant variable. 라는 오류 발생 - 
// let c = 10; 동일한 변수 두번 선언했기 때문에 오류 발생
// let c =12

// let bool01 = true;
// let bool02 = false;

// console.log(bool01, bool02);// true false

// console.log(typeof bool01); // boolean false

// console.log(typeof z); // number

// const bool03 = 1 < 2;
// const bool04 = 1 > 2;

// console.log(bool03.bool04); // true false
// // 비교 연산의 결과값 산출시 많이 사용

// let bool05 = !true;
// let bool06 = !bool05;
// let bool07 = !bool06;

// console.log(bool05,bool06,bool07);

// let num1 = 10;
// let num2 = 3.14;

// console.log(typeof num1);
// console.log(typeof num2);

// // 사칙연산
// console.log(1 + 2);
// console.log(3 - num1);
// console.log(num1 * num2);
// console.log(num1 / num2);
// console.log(num1 % num2);

// const num3 = (num1 + num2) * 10;
// console.log(num3);

// const str01 = 'Hello';
// const str02 = "월드";

// console.log(typeof str01)
// console.log(typeof '1')

// let str01 = str01 + "World";
// console.log(str03);
// console.log(str02);
// str03 = str03 + "ㅇㅇ"
// console.log(str03);

// undefined / null

// let x;
// console.log(x, typeof x)
// // typeof 가 반환하는 값은 문자열
// console.log(x)
// console.log(typeof x)
// x = null;
// console.log(x , typeof x);
// null  'object'
//null 타입은 object 로 반환=?초기 설계 부실

//연산자 관련 수업
// const a= 1;
// const b = 1;
// const c = "1";
// const d = 2;

// console.log(a == b, a !=b); // true false
// console.log(a == c, a !=c); // true false
// console.log(a == d, a !=d); // 
// console.log(a === c, a !== c);

// console.log(a>b, a>=b, a<=b);
// console.log(a>d, a>=d, a<=d);

// const str01 = "ABC";
// const str02 = "DEF"

// console.log(str01 === "ABC");
// console.log(str02 > str02);
// 문자열의 경우 알파벳 순서상 뒤에 오는것을 더 크다고 판단함

//삼항 연산자
// let bool01 = true;
// let result = bool01 ? "참":"거짓";
// console.log(result); // 참으로 반환

// let num05 = 28;
// console.log(
//   "num05는 03의 배수가 " + (num05 % 3 === 0 ? "입니다":"아닙니다")
// );

// 객체 관련 수업
const person01 = {
  name:"김철수",
  age:25,
  address: "부산광역시 연제구",
  marride: false
};
console.log(typeof person01);
console.log(person01)
/* 
{name: '김철수', age: 25, address: '부산광역시 연제구', marride: false} <-원래 이거로 표기되어야 함
console.log 로 찍었더니 key 에 ""있는걸 보아 json 형태로 표기됨

{
  "name": "김철수",
  "age": 25,
  "address": "부산광역시 연제구",
  "marride": false
}*/
//# 1 마치 인스턴스 변수처럼
console.log(person01.name);
//#2 java 에서의 map 자료형과 같은 방식이라는 점에서
console.log(person01["name"]);
// 와 같은 방식으로 출력 가능

const person01Age = person01.age;
const typeOfMarried = typeof person01["marride"];

console.log(person01Age, typeOfMarried);

person01.job = "programmer";
person01["bloodtype"] = "O";

console.log(person01);
/*
address: "부산광역시 연제구"
age: 25
bloodtype: "O"
job: "programmer"
marride: false
name: "김철수"
*/

// 기존 프로퍼티 수정 방식
person01.age++;
person01["job"]="teacher";

console.log(person01);

// const로 작성한 객체 자체를 변환시도하면 오류 발생
// person01 = {} // 객체에 빈 값들을 재 대입
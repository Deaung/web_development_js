/**
 * 1부터 5까지 출력되는 반복문 작성
 */
// for (let i = 0; i < 5; i++){
//   console.log(i+1)
// }
// for (let i = 10; i > 0; i -= 2){
//   console.log(i)
// }
// Nested for loop 중첩 for 문

// for (let i = 2; i < 10; i++){
//   for(let j = 1; j < 10; j++)
//     console.log(i + " x "+ j +" = "+ (i*j))
// }

// for(let i = 0; i < 100; i++){
//   if(i % 3 === 0)continue;//i 가 3의 배수면 다음 반복문
//   if(i > 10)break;//i가 11이면 반복 종료
//   console.log(i)
// }

// const yourArray = ["김일","김이","김삼","김사"]

// for(const name of yourArray){
//   console.log(name)
// }

//이상의 코드에서 중요한 것은 향상된 for 문의 작성 때문에 배열처럼 다수의 데이터를 다루는 collection 에 해당하는 자료형은 변수 명을 복수형으로 짓는 편

//for (const name of names) 로 쓸 때 영어상 읽기가 편하기 때문

// const person03 = {
//   name : "김육",
//   age : 25,
//   married: false
// };
 
// for(const key in person03){
//   console.log(key, typeof key);
//   console.log(person03[key])
// }

// for of 문이 배열의 요소 반환에 해당한다면 for in 문은 키-값 쌍으로 이루어져 있는 객체에서 key를 순서대로 반환
//그렇기 때문에 value를 출력하기 위해 객체명[키이름]으로 작성할 필요 있음

// let a = 2;
// while(a < 9){
//   let num = 1;
//   while(num < 10){
//     console.log(`${a} x ${num} = ${a*num}');
//     num++;
//   }
//   a++;
// }

// while 문 에서의 continue / break 사용
// for(let i = 0; i < 100; i++){
//   if(i % 3 === 0)continue;//i 가 3의 배수면 다음 반복문
//   if(i > 10)break;//i가 11이면 반복 종료
//   console.log(i)
// }-- while 문 작성

// let a =0;
// while( a < 100){
//   const toPrint = a++;

//   if(toPrint % 3 === 0) continue;
//   if(toPrint > 10)break;

//   console.log(toPrint)
// }


// do - while 문
let b = 12;
do {
  console.log(b++);
}while(b<10){
  console.log(b)
}
//일반 while 문의 경우 조건식 확인 후 true 라면 실행하는 반면 do while문의 경우 일단 실행 한번 한 후 조건 확인함

//이상의 코드에서 b = 12 라면 일단 출력하고 while 문 조건에 맞지 않기에 반복문을 종료함.
//조건에 안맞아도 일단 실행
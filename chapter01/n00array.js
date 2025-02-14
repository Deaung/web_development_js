// const person01 = {
//   name:"김철수",
//   age:25,
//   address: "부산광역시 연제구",
//   marride: false
// };

// const myArray  = [true, 3.14, "hello", person01 ]

// console.log(myArray, myArray.length)
// // myarray.length -> java 기준 field에 해당 -> ()없음

// console.log(
//   myArray[0],
//   myArray[1],
//   myArray[2],
//   myArray[3]
)

/* 배열의 내부의 각 요소들의 자료형을 감안하는것이 중요 

java 배운 이후라 배열 선언시 int arr[]형태로 선언하기에 요소들의 자료형이 일치한다고 생각 하는 경우가 잦음

javascript는 각 요소마다 각자의 자료형을 가질 수 있기 때문에 생각 잘 해야함
하나의 배열에 여러개의 자료형 가능
*/
// myArray[1] *= 100;
// myArray[2] += " world"

// console.log(myArray[1]);
// console.log(myArray[2]);

// myArray.push(123);

// console.log(myArray)

// const popped1 = myArray.pop(); 
// // myArray.pop() 적용시 myArray에서는 123이 삭제됨, 그리고 삭제된 123을 popped라는 상수에 대입

// console.log(popped1)// 123 
// console.log(myArray)// 123이 빠진 myArray 배열

// 객체와 배열의 중첩 사용

const person02 = {
  name: "김일",
  age = 23,
  languages: ["Korean","English","Freanch"],
  education:{
    school:"백제대",
    major:["컴퓨터 공학", "영어교육"],
    graduated: true,
  },
};

console.log(person02.languages[2])
console.log(person02.education.graduated)
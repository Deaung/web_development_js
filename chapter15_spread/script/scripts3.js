let students = [
  { id :1, name:"김일", grade:85},
  { id :2, name:"김이", grade:100},
  { id :3, name:"김삼", grade:78},
  { id :4, name:"김사", grade:55},
  { id :5, name:"김오", grade:92},
  { id :6, name:"김육", grade:37},
];

//1. 성적 80점 이상만 추출
const topStudents = students.filter(topStudent => topStudent.grade >=80)
const topStudent = students.filter(function(topStudent){
  return topStudent.grade >= 80;
})
console.log(`성적우수 학생:`,topStudents);

console.log(`성적우수 학생: ${topStudents.map(topStudent => '${topStudent.name} (${topStudent.grade})').join(`, `)}`)





//2. 성적이 60점 미만인 학생만 추출
const lowStudents = students.filter(students => students.grade < 60)
const lowStudent = students.filter(function(lowStudent){
  return lowStudent.grade < 60;
})
console.log(`성적미흡 학생:${lowStudents} `)
console.log(`성적미흡 학생: `,lowStudents)
//3 이름이 "김"으로 시작하는 학생만 추출
const kimStudents = students.filter(kimStudent => kimStudent.name.startsWith("김"));
console.log(`김씨 학생: `, kimStudents)

// let numbers =[1,2,3,4,5];
// // 각 요소를 2배로 반환
// let doubleNumbers = numbers.map(num => num*2);
// console.log(numbers);       //[1,2,3,4,5]
// console.log(doubleNumbers);

// let fruits = ['apple','banana','cherry','durian']

// let upperCaseFruits = fruits.map(fruit => fruit.toUpperCase());
// console.log(upperCaseFruits)
let nums = [1,2,3,4,5]
// num는 [1,2,3,4,5] 의 각 element인 1,2,3,4,5에 해당
// index는 각 index 넘버인 01234에 해당
let result = nums.map((num, index) => `${index+1}번째 요소 : ${num}`);

console.log(result)
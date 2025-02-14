// Scope
// Local


// let comScore = 0;

// function onComputerShoot(){
//   console.log('함수 안', comScore)
// }

// onComputerShoot();

// console.log('함수 밖', comScore);

// 이상의 코드에서의 문제는 onComputerShoot 내에서는 comScore 라는 변수 없음에도 0라는 값이 출력됨

// function onComputerShoot(){
//   let comScore =0;

//   console.log('함수 안', comScore)
// }

// onComputerShoot();

// console.log('함수 밖', comScore);

// 그리고 이상의 코드는 오류 발생하는 것을 확인 가능
// 함수 내에 선언된 지역변수인 comScore을 main단계에서 확인 할 수 없기 때문에 

// 오브젝트 관련 수업
let dog = {
  name : '햎피',
  age : 5,
  gender : 'M',
  friends : ['나비', '삐삐', '엘리']
};
console.log(dog.friends)
console.log(dog.name)
console.log(dog.age)
console.log(dog.gender)
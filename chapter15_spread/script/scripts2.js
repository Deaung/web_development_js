// students 배열 선언 및 초기화
let students = [];
// 새로운 학생 추가하는 함수
function addStudent(name, age, gender, grade){
  const newStudent = {
    id : students.length+1,
    name,
    age,
    gender,
    grade,
  };

  // 원본 객체가 아닌 복사본 배열에 추가
  students = [...students, {...newStudent}];
  console.log(`학생추가 완료 : ${name}`)
}

// 학생 성적 업데이트

function updateGrade(studentId, newGrade){
  students = students.map(student => 
    student.id === studentId
    ? { ...student, grade: newGrade }// 해당 학생만 복사본으로 수정
    : student)
    console.log(`ID : ${studentId}학생 성적 업데이트 완료`)
}

// 전체 학생 목록 출력
function printStudents(){
  console.log("학생 목록: ")
  // foreach문 사용
  students.forEach(student => console.log(student));

  // for(let i = 0; i < students.length; i++){
  //   console.log(students[i]);
  // }
}
// 성적 우수 학생 거르는 함수 정의 예정
function getTopStudents (){
  const topStudnets = students.filter( students => students.grade >=80);
  console.log("우수학생 명단")
  // 반복문 및 foreach문 작성
  // for(let i = 0; i < topStudnets.length; i++){
  //   console.log(topStudnets[i])
  // }
  // topStudnets.forEach(student=>{
  //   console.log(`이름:${topStudnets.name}`)
  //   console.log(`성적:${topStudnets.grade}`)
  // });
  
  
  for(let i = 0; i < topStudnets.length; i++){
    console.log(`이름:${topStudnets[i].name}`)
    console.log(`성적:${topStudnets[i].grade}`)
  }
}

// 이상의 getTopStudents () 함수의 경우 출력 결과가 id 부터 성별 및 성적까지 전부 출력되기 때문에 가독성이 떨어지고, 이미 printStudents()를 통해 객체 출력하는 .foreach()를 통해 사용해봤기 때문에
// ex
// 이름 : 김일
// 성적 : 85점
// 으로 출력하려면 어캐할지 고민


addStudent("김일", 20, "남", 85);
addStudent("김이", 21, "여", 78);
addStudent("김삼", 22, "여", 100);
addStudent("김사", 23, "남", 55);
// 전체 학생 출력 1. 배열 통해서 2. 각 요소를 하나하나 풀어서 출력
console.log(students);
printStudents();

// 성적 우수 학생 필터링 함수 호출
getTopStudents();
// 성적 수정
updateGrade(2, 95);
// 성적 수정 후 출력
console.log(students);
printStudents();
// 수정 완
// 성적 우수 학생 필터링 함수 호출
getTopStudents();
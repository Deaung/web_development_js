// let boardInputDatas = {
//   id : 0,
//   title : '메모 제목',
//   content : '메모 내용',
//   writer : '작성자',
// };
// //빈 배열 생성
// let boardDatas = [];
// boardDatas.push(boardInputDatas);
// console.log(boardDatas);

// // 객체의 title value 값 수정
// boardInputDatas.title = '제목을 수정합니다.';

// console.log(boardDatas);
// let boardInputDatas = {
//   id : 0,
//   title : '메모 제목',
//   content : '메모 내용',
//   writer : '작성자',
// };
// //빈 배열 생성
// let boardDatas = [];
// // 방금 전 예시와 다른부분
// boardDatas.push({...boardInputDatas});

// // 객체의 title value 값 수정
// boardInputDatas.title = '스프레드 제목을 수정합니다.';

// boardDatas.push({...boardInputDatas});
// console.log(boardDatas);
// console.log(boardInputDatas);


let nestedObject = {
  id :1,
  data:{
    title: "메모제목",
  }
};

let copy = { ...nestedObject };

copy.data.title = "수정됨";
// 원본이 변경되었는지 확인하는 부분
console.log(nestedObject.data.title); // 수정됨(원본이 바뀜)
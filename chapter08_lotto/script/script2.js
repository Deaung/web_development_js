let lottoArray2 = [];

for( let i = 0 ; i < 45 ; i++ ) {
  lottoArray2.push(i+1);
}

lottoNumbers2 = [];

for (let i = 0 ; i < 6 ; i++) {
  let index2 = Math.floor(Math.random()*lottoArray2.length);


  let num2 = lottoArray2[index2];


  lottoArray2.splice(index2, 1);

  lottoNumbers2.push(num2);
} 
// console.log(lottoNumbers);
// console.log(lottoArray); -> 이제 브라우저에 찍히도록 수정 예정

// for ( let i = 0 ; i < 6 ; i++ ) {
//   document.write(lottoNumbers[i]);
// }

// document.write()내부에는 HTML 먹일 수 있었습니다.

// comparator정의
// 정석버전은 20250212.md에 있음
// 오름차순 관례적으로 작성하는 방법이 있음
// 내림차순 정렬하는 방법 고려 후 lottoNumbers2.sort(compare2); 작성해서 띄우기
// function compare(a, b){
//   return a-b;
// }

// lottoNumbers2.sort(compare);
// for ( let i = 0 ; i < 6 ; i++ ) {
//   document.write('<span class="ball">' + lottoNumbers2[i] + '</span>');
// }
// span 태그의 스타일 맥이기
function compare2(a, b){
  return b-a;
} // 내림차순으로 작성하는 방식

lottoNumbers2.sort(compare2);
for ( let i = 0 ; i < 6 ; i++ ) {
  document.write('<span class="ball">' + lottoNumbers2[i] + '</span>');
}
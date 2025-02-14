// 가위 버턴에 적용할 click hander

const SCISSORS = '가위';
const ROCK = '바위';
const PAPER = '보';

// 함수 정의
// function onScissorsClick(){  // 버튼 클릭 -> userInput prompt 필요 없음
//   let comInput;
//   let randomNum = Math.random;

//   if(randomNum < 0.33) comInput = SCISSORS;
//   else if(randomNum < 0.66) comInput = ROCK;
//   else comInput = PAPER;

//   if(comInput === SCISSORS){
//     alert(`컴퓨터 : ${comInput} - 컴퓨터와 비겼습니다`);
//   }else if(comInput === ROCK){
//     alert(`컴퓨터 : ${comInput} - 컴퓨터가 이겼습니다`);
//   }else{
//     alert(`컴퓨터 : ${comInput} - 컴퓨터를 이겼습니다`);
//   }
// }

// // onRockclick()
// // onPaperclick() 정의 후 index.html에 대입 후 최종 결론 내기
// function onRockclick(){ 
//   let comInput;
//   let randomNum = Math.random;

//   if(randomNum < 0.33) comInput = SCISSORS;
//   else if(randomNum < 0.66) comInput = ROCK;
//   else comInput = PAPER;

//   if(comInput === SCISSORS){
//     alert(`컴퓨터 : ${comInput} - 컴퓨터를 이겼습니다`);
//   }else if(comInput === ROCK){
//     alert(`컴퓨터 : ${comInput} - 컴퓨터와 비겼습니다`);
//   }else{
//     alert(`컴퓨터 : ${comInput} - 컴퓨터가 이겼습니다`);
//   }
// }


// function onPaperclick(){
//   let comInput;
//   let randomNum = Math.random;

//   if(randomNum < 0.33) comInput = SCISSORS;
//   else if(randomNum < 0.66) comInput = ROCK;
//   else comInput = PAPER;

//   if(comInput === SCISSORS){
//     alert(`컴퓨터 : ${comInput} - 컴퓨터가 이겼습니다`);
//   }else if(comInput === ROCK){
//     alert(`컴퓨터 : ${comInput} - 컴퓨터를 이겼습니다`);
//   }else{
//     alert(`컴퓨터 : ${comInput} - 컴퓨터와 비겼습니다`);
//   }
// }
// 위의 코드는 call1() 유형으로 각각 3개의 함수로 정의
// 아래 코드는 call2() 유형으로 하나의 함수로 통합
function onButtonClick(userInput){
  let comInput;
  let randomNum = Math.random;

  if(randomNum < 0.33) comInput = SCISSORS;
  else if(randomNum < 0.66) comInput = ROCK;
  else comInput = PAPER;

  //출력문 리팩토링
  let result = `컴퓨터 : ${comInput}`

  console.log(userInput)
  console.log(comInput)

  if(userInput != 'SCISSORS' && userInput != 'ROCK'&& userInput != 'PAPER'){
    console.log('제대로 입력하시오')
  }else{
    if (randomNumber<0.33){
      comInput = SCISSORS
    }else if(randomNumber<0.66){
      comInput = ROCK
    }else{
      comInput = PAPER 
    }
    console.log(comInput);
    if(userInput === 'SCISSORS'){
      if(comInput === 'SCISSORS'){
        result += '- 비김';
      }else if(comInput === 'ROCK'){
        result += '- 짐';
      }else{
        result += '- 이김';
      }
    }else if(userInput === 'ROCK'){
      if(comInput === 'SCISSORS'){
        result += '- 이김';
      }else if(comInput === 'ROCK'){
        result += '- 비김';
      }else{
        result += '- 짐';
      }
    }else{
      if(comInput === 'SCISSORS'){
        result += '- 짐';
      }else if(comInput === 'ROCK'){
        result += '- 이김';
      }else{
        result += '- 비김';
      }
    }
  }
}
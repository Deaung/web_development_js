// let userInput()

let comInput;
let randomNumber = Math.random();
const SISSORS = '가위';
const ROCK  = '바위';
const PAPER = '보';

// if (randomNumber<0.33){
//   comInput = 'SISSORS'
// }else if(randomNumber<0.66){
//   comInput = 'ROCK'
// }else{
//   comInput = 'PAPER'
// }
// console.log(comInput)

userInput = prompt('가위, 바위, 보')
console.log('사용자 입력 : '+userInput)

if(userInput != 'SISSORS'&& userInput != 'ROCK'&& userInput != 'PAPER'){
  console.log('제대로 입력하시오')
}else{
  if (randomNumber<0.33){
    comInput = SISSORS
  }else if(randomNumber<0.66){
    comInput = ROCK
  }else{
    comInput = PAPER 
  }
  console.log(comInput);
  // userInput을 기준으로 작성
  if(userInput === 'SISSORS'){
    if(comInput === 'SISSORS'){
      alert(`컴퓨터 : ${comInput} - 컴퓨터와 비겼습니다.`)
    }else if(comInput === 'ROCK'){
      alert(`컴퓨터 : ${comInput} - 컴퓨터가 이겼습니다.`)
    }else{
      alert(`컴퓨터 : ${comInput} - 컴퓨터를 이겼습니다.`)
    }
  }else if(userInput === 'ROCK'){
    if(comInput === 'SISSORS'){
      alert(`컴퓨터 : ${comInput} - 컴퓨터를 이겼습니다.`)
    }else if(comInput === 'ROCK'){
      alert(`컴퓨터 : ${comInput} - 컴퓨터와 비겼습니다.`)
    }else{
      alert(`컴퓨터 : ${comInput} - 컴퓨터가 이겼습니다.`)
    }
  }else{
    if(comInput === 'SISSORS'){
      alert(`컴퓨터 : ${comInput} - 컴퓨터가 이겼습니다.`)
    }else if(comInput === 'ROCK'){
      alert(`컴퓨터 : ${comInput} - 컴퓨터를 이겼습니다.`)
    }else{
      alert(`컴퓨터 : ${comInput} - 컴퓨터와 비겼습니다.`)
    }
  }
}

// 상수 활용하여 개선 ctrl + h 사용하여 같은 글 한번에 바꾸기

// switch 개선 안

if (randomNumber<0.33){
  comInput = SISSORS
}else if(randomNumber<0.66){
  comInput = ROCK
}else{
  comInput = PAPER 
}
console.log('컴퓨터 : '+comInput);

switch(userInput){
  case SISSORS:
    switch(comInput){
      case SISSORS:
        alert(`컴퓨터: ${comInput} - 컴퓨터와 비겼습니다.`)
      case ROCK:
        alert(`컴퓨터: ${comInput} - 컴퓨터가 이겼습니다.`)
      case PAPER:
        alert(`컴퓨터: ${comInput} - 컴퓨터를 이겼습니다.`)
        break;
    }
    break;
  case ROCK:
    switch(comInput){
      case SISSORS:
        alert(`컴퓨터: ${comInput} - 컴퓨터를 이겼습니다.`)
      case ROCK:
        alert(`컴퓨터: ${comInput} - 컴퓨터와 비겼습니다.`)
      case PAPER:
        alert(`컴퓨터: ${comInput} - 컴퓨터가 이겼습니다.`)
        break;
    }
    break;
  case PAPER:
    switch(comInput){
      case SISSORS:
        alert(`컴퓨터: ${comInput} - 컴퓨터가 이겼습니다.`)
      case ROCK:
        alert(`컴퓨터: ${comInput} - 컴퓨터를 이겼습니다.`)
      case PAPER:
        alert(`컴퓨터: ${comInput} - 컴퓨터와 비겼습니다.`)
        break;
    }
    break;
  default: alert('가위, 바위, 보 를 입력하시오');
}
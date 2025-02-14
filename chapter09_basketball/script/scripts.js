let comScore = 0;
let userScore = 0; 
// 컴퓨터 턴이면 내턴아님/ 내턴이면 컴퓨터 턴 아님
let isComputerTurn = true;
let shootLeft = 15;

function onComputerShoot(){
  // 삼항 연산자 응용 -Math.radom() 응용
  if(!isComputerTurn) return;

  let shootType = Math.random() < 0.5 ? 2 : 3;

  let textElement = document.getElementById('text');

  // 점수 총 합을 대입할 변수
  let comScoreElement = document.getElementById('computer-score');

  if (shootType === 2){
    if(Math.random() < 0.5){
      // 2점슛 1/2 확률 성공
      textElement.innerHTML = '컴퓨터가 2점슛을 성공했습니다 now-user';
      comScore += 2;
      comScoreElement.innerHTML = comScore;

    }else{
      textElement.innerHTML = '컴퓨터가 2점슛을 실패했습니다 now-user';
    }
  }else{
    if(Math.random() < 0.33){
      // 3점슛 1/3 확률 성공
      textElement.innerHTML = '컴퓨터가 3점슛을 성공했습니다 now-user';
      comScore += 3;
      comScoreElement.innerHTML = comScore;
    }else{
      textElement.innerHTML = '컴퓨터가 3점슛을 실패했습니다 now-user';
    }
  } 
  isComputerTurn = false; 

  let computerButtons = document.getElementsByClassName('btn-computer');

  for(let i = 0; i < computerButtons.length; i++){
    computerButtons[i].disabled = true;
  }
  let userButtons = document.getElementsByClassName('btn-user');

  for(let i = 0; i < userButtons.length; i++){
    userButtons[i].disabled = false;
  }
}

function onUserShoot(shootType){
  if(isComputerTurn) return;

  let textElement = document.getElementById('text'); //onComputerShoot에서도 지역변수로 선언
  let userScoreElement = document.getElementById('user-score');
  
  
  if (shootType === 2){
    if(Math.random() < 0.5){
      // 2점슛 1/2 확률 성공
      textElement.innerHTML = '2점슛을 성공했습니다. now-computer';
      userScore += 2;
      userScoreElement.innerHTML = userScore;

    }else{
      textElement.innerHTML = '2점슛을 실패했습니다. now-computer';
    }
  }else{
    if(Math.random() < 0.33){
      // 3점슛 1/3 확률 성공
      textElement.innerHTML = '3점슛을 성공했습니다. now-computer';
      userScore += 3;
      userScoreElement.innerHTML = userScore;
    }else{
      textElement.innerHTML = '3점슛을 실패했습니다. now-computer';
    }
  }  
  

  isComputerTurn = true;

  let computerButtons = document.getElementsByClassName('btn-computer');

  for(let i = 0; i < computerButtons.length; i++){
    computerButtons[i].disabled = false;
  }
  let userButtons = document.getElementsByClassName('btn-user');

  for(let i = 0; i < userButtons.length; i++){
    userButtons[i].disabled = true;
  }
  // onUserShoot()을 호출시에만 shootLeft가 -- 되어야함
  shootLeft --;
  
  let shootLeftElement = document.getElementById('shots-left');
  shootLeftElement.innerHTML = shootLeft;

  if(shootLeft === 0){
    if(userScore > comScore){
      textElement.innerHTML = '승리';
      alert('승리');
    }else if(userScore < comScore){
      textElement.innerHTML = '패배'
      alert('패배');
    }else{
      textElement.innerHTML = '무승부'
      alert('무승부');
    }
  }
}
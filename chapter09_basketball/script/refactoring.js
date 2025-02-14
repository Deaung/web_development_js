let comScore = 0;
let userScore = 0; 
let isComputerTurn = true;
let shootLeft = 15;

//여기의 리팩토링의 첫 단계를 진행 할 예정 -> 반복되지만 짧아서 대채 가능한것
function showText(s){
  let textElement = document.getElementById('text');

  textElement.innerHTML = s;//string의 축약어
}
function updateComScore(score){
  let comScoreElement = document.getElementById('computer-score');
  comScore += score;

  comScoreElement.innerHTML = comScore;
}
function updateUserScore(score){
  let userScoreElement = document.getElementById('user-score');

  userScore += score;
  userScoreElement.innerHTML = userScore;
}

function disableComButton(flag){
  let computerButtons = document.getElementsByClassName('btn-computer');
  
  for(let i = 0; i < computerButtons.length; i++){
    computerButtons[i].disabled = flag;
  }
}

function disablUserButton(flag){
  let userButtons = document.getElementsByClassName('btn-user');

  for(let i = 0; i < userButtons.length; i++){
    userButtons[i].disabled = flag;
  }
}

// 기능 구현 완료 후 리팩토링 적용부
function onComputerShoot(){
 
  if(!isComputerTurn) return;

  let shootType = Math.random() < 0.5 ? 2 : 3;

  if (shootType === 2){
    if(Math.random() < 0.5){
      showText('컴퓨터가 2점슛을 성공했습니다 now-user');

      updateComScore(2);

    }else{
      showText('컴퓨터가 2점슛을 실패했습니다 now-user');
    }
  }else{
    if(Math.random() < 0.33){    
      showText('컴퓨터가 3점슛을 성공했습니다 now-user');
      updateComScore(3);
    }else{
      showText('컴퓨터가 3점슛을 실패했습니다 now-user');
    }
  } 
  isComputerTurn = false;
  disableComButton(true);
  disablUserButton(false);
}

function onUserShoot(shootType){
  if(isComputerTurn) return;
  
  if (shootType === 2){
    if(Math.random() < 0.5){
    
      showText('2점슛을 성공했습니다. now-computer');
      updateUserScore(2)

    }else{
      showText('2점슛을 실패했습니다. now-computer');
    }
  }else{
    if(Math.random() < 0.33){

      showText('3점슛을 성공했습니다. now-computer');
      updateUserScore(3)
    }else{
      showText('3점슛을 실패했습니다. now-computer');
    }
  }  
  

  isComputerTurn = true;

  disableComButton(false);
  disablUserButton(true);


  shootLeft --;
  
  let shootLeftElement = document.getElementById('shots-left');
  shootLeftElement.innerHTML = shootLeft;

  if(shootLeft === 0){
    if(userScore > comScore){
      showText('승리');
      alert('승리');
    }else if(userScore < comScore){
      showText('패배')
      alert('패배');
    }else{
      showText('무승부')
      alert('무승부');
    }
    disableComButton(true);
    disablUserButton(true);
  }
}
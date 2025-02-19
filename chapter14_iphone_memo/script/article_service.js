let boardInputDatas = {
  id: 0, 
  title: "",
  content: "",
  writer: "",
};

function setInputsEvent(){
  const titleInput = document.querySelector('.main-article > input:nth-of-type(1)')
  const contentInput = document.querySelector('.main-article > textarea')
  const writerInput = document.querySelector('.main-article > input:nth-of-type(2)')
  titleInput.onkeyup = handleBoardInputChange;
  contentInput.onkeyup = handleBoardInputChange;
  writerInput.onkeyup = handleBoardInputChange;
}

function setButtonEvent(){
  const submitEvent = document.querySelector('.writer-submit-button')
  submitButton.onclick = handleSubmitOnClick;
}

function handleSubmitOnClick(){
  saveBoard();
  clear();
}

function handleBoardInputChange(){
  boardInputDatas={
    ...boardInputDatas,
    [e.target.name]:e.target.value,
  };
}

function saveBoard() {
  let boardDatas = !!localStorage.getItem('boardDatas')
  ? JSON.parse(localStorage.getItem('boardDatas'))
  :[];

  if(boardDatas.length > 0){
    boardInputDatas.id = boardDatas[boardDatas.length - 1].id+1; //index 갯수와 넘버의 차이
  }
  boardDatas = {
    ...boardDatas,
    boardInputDatas,
  }

  localStorage.setItem('boardDatas',JSON.stringify(boardDatas));

  alert('게시글 작성 완료')
  location.href = './list.html';
}

function clear(){
  const titleInput = document.querySelector('.main-article > input:nth-of-type(1)')
  const contentInput = document.querySelector('.main-article > textarea')
  const writerInput = document.querySelector('.main-article > input:nth-of-type(2)')
  const inputs = [ titleInput, contentInput, writerInput];
  inputs.forEach(input => input.value = "");

  boardInputDatas = {
    title: "",
    content: "",
    writer: "",
  };
}

setInputsEvent();
setButtonEvent();
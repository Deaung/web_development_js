/**
 * 프로그램의 정의
 * 
 * 1. 할 일 추가 : 로컬 스토리지에 새로운 데이터 추가
 * 2. 할 일 목록을 렌더링 : 로컬 스토리지에 저장된 데이터 있는 경우 불러옴
 * 3. 할 일 삭제 : 로컬 스토리지에 해당 데이터 삭제
 * 
 */
// 1. 할 일 목록을 저장할 빈 배열
let todos = [];

document.addEventListener('DOMContentLoaded', ()=>{
  //todos 데이터를 JSON 형태로 파싱 하고 값이 없으면 빈 배열 사용하도록 할 예정
  todos = JSON.parse(localStorage.getItem('todos')) || [];
  renderTodos(todos);
})

// 2. 할 일을 추가하는 함수
function addTodo(){
  const input = document.getElementById('todo-input');
  const newTodo = input.value.trim();

  if(newTodo) { // newTodo는 str 값 -> 값이 있기만 하면 true
    todos.push(newTodo);
    localStorage.setItem('todos',JSON.stringify(todos));
    renderTodos(todos);
    input.value = '';
  }
}
// 2에서 element가 추가되면 다시 1 파트의 addEvnetListener 동작하여 
// local storage 에서 해당요소 get해옴
function renderTodos(todos){
  const list = document.getElementById('todo-list')
  list.innerHTML  = '';

  todos.forEach((todo, index) => {
    const li = document.createElement('li');
    li.textContent = todo;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '삭제';

    //삭제 버튼은 renderTodos를 호출 했을 때 <li> 가 만들어지고 <button>이 만들어지기 때문에, 기능과 관련된 부분이 없음 ---renderTodos 이후 삭제 기능 구현 해야함

    // 외부에 구현 후 호출 해도 상관 없으나 매커니즘 설명을 위해 이 자리에 작성

    deleteBtn.onclick = () => removeTodo(index); // 버튼 클릭시 removeIndex함수 호출
    // argument로 index 받음 -> 특정요소만 삭제하는 버튼
    // deleteBtn.addEventListenr('click',removeTodo(index));와 동일함
    // deleteBtn.addEventListenr('click',function({
    //  삭제하는 구현부; 
    //})

    deleteBtn.classList.add('deleteBtn');

    li.appendChild(deleteBtn); // li > button
    list.appendChild(li); // ul > li
  });
}

// 3. 할 일 삭제하는 함수
function removeTodo(index){
  // 배열명.splice(삭제할 요소의 인덱스 넘버)
  todos.splice(index, 1); // 버튼이 눌러진 인덱스 넘버의 요소만 배열에서 삭제
  // 배열에서만 삭제?? --> 로컬스토리지에 남아있음 -> 다시 읽어오게 된다면 삭제 버튼 눌러서 배열에서 사라졌던 것이 다시 나옴
  localStorage.setItem('todos', JSON.stringify(todos))
  renderTodos(todos);
}
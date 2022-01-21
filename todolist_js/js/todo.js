const todoForm = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");
const todoInput = todoForm.querySelector("input");
let todos = [];

//로컬스토리지에 투두리스트 저장
function saveTodos() {
    //todos 로컬 스토리지에 업데이트
    //JSON.stringify가 리스트를 string으로 저장해줌
    localStorage.setItem("todos", JSON.stringify(todos));
}

//투두 Delete
function deleteTodo(event) {
    const li = event.target.parentElement.parentElement;
    //같은 id가 아닌 것만 찾아서 todos 업데이트
    todos = todos.filter((todo) => todo.id !== parseInt(li.id));
    //target li 지우기
    li.remove();
    //로컬 스토리지 업데이트
    saveTodos();
}

//투두 Update 못함 ㅠ.ㅠ
function updateTodo(event){
    const li = event.target.parentElement;
}

//투두 완료시 체크
function checkTodo(event){
    const li = event.target.parentElement.parentElement;
    //투두 text부분 가져옴
    const span = li.querySelector("span");
    //id가 같은 todo를 가져옴
    const todo = todos.filter((todo) => todo.id === parseInt(li.id));
    //line 클래스를 가지고 있다면 없애고 없다면 추가한다. (밑줄 긋기)
    if(span.classList.contains("line")){
        span.classList.remove("line");
        todo[0].line = false;
    }else {
        span.classList.add("line");
        todo[0].line = true;
    }
    //로컬 스토리지 line value 업데이트
    saveTodos();
}


//투두 생성 과정
function paintTodo(newTodo) {
    const li = document.createElement("li");
    //li의 id를 넣어주어 잘 찾을 수 있게 함
    li.id = newTodo.id;
    const check = document.createElement("button");
    const span = document.createElement("span");
    const div = document.createElement("div");
    const div2 = document.createElement("div");
    const deleteBtn = document.createElement("button");
    const updateBtn = document.createElement("button");
    check.innerText = "✔︎";
    deleteBtn.innerText = "X";
    updateBtn.innerText = "O";
    //li 밑에 div태그 두개를 자식으로 둔다
    li.appendChild(div);
    li.appendChild(div2);
    //div 밑에 check, span을 둔다.
    div.appendChild(check);
    div.appendChild(span);
    //div2 밑에 업데이트 버튼, 삭제 버튼을 둔다.
    div2.appendChild(updateBtn);
    div2.appendChild(deleteBtn);
    //클릭시 이벤트
    check.addEventListener("click", checkTodo);
    updateBtn.addEventListener("click",updateTodo);
    deleteBtn.addEventListener("click",deleteTodo);
    span.innerText = newTodo.text;
    //저장된 투두리스트를 갖고올 때 완료한 투두라면 밑줄을 그어준다.
    if(newTodo.line){
        span.classList.add("line");
    }
    todoList.appendChild(li);
}

// 투두 Create
function handleTodoSubmit(event) {
    //엔터시 새로고침 방지
    event.preventDefault();
    const newTodo = todoInput.value;
    //추가시 input value 사라지게
    todoInput.value = "";
    //로컬 스토리지에 넣어줄 오브젝트
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
        line: false,
    };
    todos.push(newTodoObj);
    //투두 생성
    paintTodo(newTodoObj);
    //로컬 스토리지 업데이트
    saveTodos();
}

//투두 등록
todoForm.addEventListener("submit",handleTodoSubmit);

//로컬스토리지에 저장했던 투두리스트, 이름 가져오기
const savedTodos = localStorage.getItem("todos");

//저장했던 투두리스트가 있다면 투두리스트 저장
if(savedTodos) {
    //JSON.parse로 string인 리스트를 다시 리스트로 만들어줌
    const parsedTodos = JSON.parse(savedTodos);
    //로컬스토리지에 저장했던 투두리스트 저장
    todos = parsedTodos;
    //저장했던 투두리스트 다시 하나씩 투두 생성하고 등록
    parsedTodos.forEach(paintTodo);
}

//저장했던 이름이 있다면 투두리스트 보여줌
if(saveUsername) {
    todoForm.classList.remove("hidden");
    todoList.classList.remove("hidden");
}
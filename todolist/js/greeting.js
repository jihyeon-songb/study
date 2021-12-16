const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

//이름 등록 과정
function onLoginSubmit(event) {
    //엔터 시 새로고침 방지
    event.preventDefault();
    //유저이름 변수 저장
    const username = loginInput.value;
    //로컬스토리지에 유저이름 저장
    localStorage.setItem(USERNAME_KEY, username);
    //이름 등록 폼 숨기기
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreetings(username);
}

//이름 보여주기
function paintGreetings(username){
    //메인 인사 텍스트 넣기
    greeting.innerText = `Hello, ${username}`;
    //메인 인사 보여주기
    greeting.classList.remove(HIDDEN_CLASSNAME);
    //투두 보여주기
    todoForm.classList.remove("hidden");
    todoList.classList.remove("hidden");
}

//로컬스토리지에 저장했던 이름 가져오기
const saveUsername = localStorage.getItem(USERNAME_KEY);

//저장했던 이름이 없다면 이름 등록, 있다면 이름 보여주기
if(saveUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
}else{
    paintGreetings(saveUsername);
}
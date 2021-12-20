const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    //두글자로 보일 수 있게 설정
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}
//처음부터 시간 보이게
getClock();
//1초가 지나면 시간 업데이트
setInterval(getClock, 1000);
const field = document.getElementById("field");
const footBall = document.getElementById("footBall");

field.addEventListener("click", (e) =>{
    let x = e.offsetX - 50;
    let y = e.offsetY - 50;

    if (x < 0) x = 0;
    if (y < 0) y = 0;
    if (x > field.clientWidth - 100) x = field.clientWidth - 100;
    if (y > field.clientHeight - 100) y = field.clientHeight - 100;

    footBall.style.left = x + "px";
    footBall.style.top = y + "px";
})
window.onload = function () {
    // let fieldParams = getComputedStyle(document.querySelector(".container"));
    let field = document.querySelector(".container");
    let fieldParams = field.getBoundingClientRect();
    let duck = document.querySelector("#duck");
    let counter = document.querySelector("#counter")
    let gameOver = document.querySelector("#game-over");
    
    function getRandoomCoors (min, max){
        return Math.floor(Math.random() * (max - min) + min);
    }
    field.addEventListener("click", setDuck);
    field.addEventListener("click", checkDuck);

    function setDuck () {
        let verticalPosition = getRandoomCoors(1, fieldParams.height);
        console.log(verticalPosition)
        let horizontalPosition = getRandoomCoors(1, fieldParams.width);
        duck.style.top = verticalPosition + "px";
        duck.style.left = horizontalPosition + "px";
    }

    function checkDuck (e) {
        let target = e.target;
        if (target.parentElement.id === "duck") {
            counter.innerHTML = parseInt(counter.innerHTML) + 1;
        } else {
            gameOver.classList.toggle("appear");
            counter.innerHTML = "0";
        }
    }
}    
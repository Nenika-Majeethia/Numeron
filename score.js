var urlParams = new URLSearchParams(window.location.search);

var score = urlParams.get("score");

var scoreboard = document.getElementById("score-board");

var playagain = document.getElementById("play-again-button");

scoreboard.innerHTML = score;

playagain.onclick=(evt)=>{
    location.href="./game.html";
}
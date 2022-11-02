const goku = document.querySelector(".goku");
const portal = document.querySelector(".portal");
const start = document.getElementById("start");
const btnStart = document.querySelector(".btnStart");
const gameBoard = document.querySelector(".game-board");
const modalGameOver = document.getElementById("modalgameover");




//adiciona e remove o pulo
const jump = () => {
    goku.classList.add("jump");

    setTimeout(() => {

        goku.classList.remove("jump");

    },500);

    //jumpSound.play();
};

// quando ocorre a colisão
const loop = setInterval(() =>{

    const portalPosition = portal.offsetLeft;
    const gokuPosition = +window.getComputedStyle(goku).bottom.replace("px","");
    if (portalPosition <= 120 && portalPosition> 0 && gokuPosition < 80){

// encerra a animação quando ocorre a colisão       
        portal.style.animation = " none";
        portal.style.left =`${portalPosition}px`;
        
        goku.style.animation = " none";
        goku.style.bottom =`${gokuPosition}px`;

// muda a imgem para o Ricky
        goku.src ="./images/ricky.gif";


        gameOver();

        clearInterval(loop);
       

    }

}, 10);
// evento de clicar e apertar tela
document.addEventListener("keydown", jump);
document.addEventListener("click", jump);

// toca o audio

const backgroundSound = new Audio();
backgroundSound.src ="./sounds/DragonballZ-Abertura.mp3";

const jumpSound = new Audio();
jumpSound.src = "./sounds/goku-pulando.mp3";

const gameOverSound = new Audio();
gameOverSound.src = "./sounds/gameover.mp3";



btnStart.addEventListener("click",function(){
  
    start.classList.remove("show");
    start.classList.add("hidden");
    gameBoard.classList.remove("hidden");
    gameBoard.classList.add("show");
    backgroundSound.play();

  });

// Fim de jogo
function gameOver() {
    modalGameOver.classList.remove("hidden");
    modalGameOver.classList.add("show");
    backgroundSound.pause();
    gameOverSound.play();

}


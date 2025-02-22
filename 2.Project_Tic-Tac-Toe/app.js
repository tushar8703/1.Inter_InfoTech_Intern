let GameSelc = document.querySelector(".GameSelc");
let selComputerBtn = document.querySelector(".computer");
let selFriendBtn = document.querySelector(".friend");
let selxBtn = document.querySelector("#x");
let seloBtn = document.querySelector("#o");
let gamePlayBtn = document.querySelector(".play");

let GameBody = document.querySelector(".GameBody")
let GameBox = document.querySelectorAll(".box");//game boxes
let PlayAgain = document.querySelector(".PlayAgain");//start button of the game
let ResetBtn = document.querySelector("#Resetbtn");//reset button of the game
let WinnerMgs = document.querySelector(".WinMgs");


const player = new Object ;
let Opponent ;



selComputerBtn.addEventListener("click", ()=>{
    Opponent = "computer" ; 
    
    BtnActivation(selFriendBtn,selComputerBtn);
    // playWithComputer();
});

selFriendBtn.addEventListener("click", ()=>{
    Opponent = "friend" ; 
    BtnActivation(selComputerBtn,selFriendBtn)
});

seloBtn.addEventListener("click", ()=>{
    player.man = " o";
    player.computer = "x";
    player.friend = "x";
    BtnActivation(selxBtn,seloBtn)
});

selxBtn.addEventListener("click", ()=>{
player.man = "x";
    player.computer = "o";
    player.friend = "o";
    BtnActivation(seloBtn,selxBtn)
    
});
// selection is complete

function BtnActivation(off,on)
{
    off.classList.remove("active");
    on.classList.add("active");
}

function gamePlay(){
    gamePlayBtn.addEventListener("click", ()=>{
        if(!Opponent){
            selComputerBtn.style.backgroundColor = "red";
            selFriendBtn.style.backgroundColor = "red";
            return;
        }
        
        if(!player.man){
            seloBtn.style.backgroundColor = "red";
            selxBtn.style.backgroundColor = "red";
            return;
        }

        // init(player,Opponent);
        GameSelc.style.display = "none";
        GameBody.style.display = "block";
    })
}


gamePlay();

let playerFirstX = true; //playerFirstX & playerSecoundO



function GameWinner() {
    const GameWinPattern =[
        [0, 1, 2],
        [0, 3, 6],
        [0, 4, 8],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6],
        [3, 4, 5],
        [6, 7, 8],
    ];

    for (let pattern of GameWinPattern) {
        let Position1 = GameBox[pattern[0]].innerText;
        let Position2 = GameBox[pattern[1]].innerText;
        let Position3 = GameBox[pattern[2]].innerText;x

        if (Position1 != "" && Position2 != "" && Position3 != "") {
            if (Position1 === Position2 && Position2 === Position3) {
                WinnerMgs.innerText = `Congratulation, Winner is ${Position1}`;
                WinnerMgs.style.display = "block";
                WinnerMgs.style.color = "green";
                
                for (let box of GameBox) {
                    box.disabled = true;
                }
            }
            }
        }
    }

function StartGame() {
    GameBox.forEach((box) => {

        box.addEventListener("click", () => {


            if (playerFirstX) {
                if(box.innerText ==""){
                box.innerHTML = "X";
                playerFirstX = false;
                }
            }
            else {
                if(box.innerText ==""){
                box.innerHTML = "O";
                playerFirstX = true
                }
            }
            box.disabled = false;
            // playWithComputer()
            GameWinner();
        });
    }) 
   
}

function ResetGame() {
    playerFirstX = true;
    for (let box of GameBox) {
        box.disabled = false;
        box.innerText = "";

    }
    WinnerMgs.style.display = "none";
}

PlayAgain.addEventListener("click", () => {
    GameSelc.style.display = "block";
    GameBody.style.display = "none";
})
StartGame();
PlayAgain.addEventListener("click", ResetGame);
ResetBtn.addEventListener("click", ResetGame);




// 
// 
// 
// 
// 
// 
let playerXIcon = "fas fa-times", playerOIcon = "far fa-circle", playerSign = "X", runBot = true;

function bot(){
    let array = [];
    if(runBot){
        playerSign = "O";
        // find the remaining boxes that has not been marked
        for (let i = 0; i < GameBox.length; i++) {
            if(GameBox[i].childElementCount == 0){
                array.push(i);
            }
        }
        // get random box from remaining tiles
        let randomBox = array[Math.floor(Math.random() * array.length)];
        if(array.length > 0){
            if(players.classList.contains("player")){ 
                playerSign = "X";
                GameBox[randomBox].innerHTML = `<i class="${playerXIcon}"></i>`;
                GameBox[randomBox].setAttribute("id", playerSign);
                players.classList.add("active"); 
            }
            else{
                GameBox[randomBox].innerHTML = `<i class="${playerOIcon}"></i>`;
                players.classList.remove("active");
                GameBox[randomBox].setAttribute("id", playerSign);
            }
            selectWinner();
        }
        GameBox[randomBox].style.pointerEvents = "none";
        playBoard.style.pointerEvents = "auto";
        playerSign = "X";        
    }
}
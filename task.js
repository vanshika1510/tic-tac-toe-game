var cells = document.querySelectorAll(".box");
var turn = "X";
var current_player = 'X';
var count=0;
//checking gamewin ccondition
var gameover=false
function gamewin() {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 29, 7, 0],
        [3, 4, 5, 29, 20, 0],
        [6, 7, 8, 29, 33, 0],
        [0, 3, 6, 16, 20, 90],
        [1, 4, 7, 29, 20, 90],
        [2, 5, 8, 43, 20, 90],
        [0, 4, 8, 30, 19, 45],
        [2, 4, 6, 30, 18, 135]
    ];
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText) && (boxtext[e[0]].innerText !== "") ){
            document.querySelector('.winner').innerText = boxtext[e[0]].innerText + " Won 🌝";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
            document.querySelector(".line").style.width = "40vw";
            gameover=true;
            
        }
        else if (count===9)
        {
            document.querySelector('.winner').innerText = "DRAW 🥲";
            gameover=true;
        }
    })
}

//adding event listener to every box

Array.from(cells).forEach(element => {

    let boxtext = element.querySelector('.boxtext');

    element.addEventListener('click', function () {
        
        
        
            // if game already played
            if (!gameover){
                // document.getElementsByClassName("winner")[0].innerText  = "Turn for " + turn;
                // adding the turn alternatively with condition if the box is empty
                if (boxtext.innerText === "") {
                    boxtext.innerText = turn;
                    turn = myturn();
                    document.querySelector(".winner").innerText = turn + " Turn";
                    count++;
                    gamewin();
            } 
        }
    })
});

// play again button
btn.addEventListener('click', function() {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn="X";
    gameover = false;
    count=0;
    document.querySelector(".winner").innerText = turn + " Turn";
    document.querySelector(".line").style.width="0px";
})

// changing the turns of X AND O
function myturn() {
    turn = turn === "X" ? "O" : "X";
    return turn;

}

// function ifWon(){
//     if(gameover===true){
// break;
// }
// }


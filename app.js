let boxes = document.querySelectorAll(".box");
let input=document.querySelector(".game-container");
let resetBtn = document.querySelector("#reset");
let newBtn = document.querySelector("#new");
let massageContainer = document.querySelector(".msg-container");
let massage = document.querySelector("#msg");
let turnO = true;
let count=0;//player1, player2
//let isGameOver = "false";


//These are the winning conditions
const winnerConditions = [[0, 1, 2], [3, 4, 5], [6, 7, 8],
[0, 3, 6], [1, 4, 7], [2, 5, 8],
[0, 4, 8], [2, 4, 6]];



const resetGame = () => {
    turnO = true;
    count=0;
    enableBoxes();
    massageContainer.classList.add("hide");

}





//let inputVal=document.getElementById(`player1`);
//let storedValue=inputVal;
//console.log(storedValue);






//boxes.forEach(e => {
//  e.innerHTML = ""
//e.addEventListener("click", () => {
//  if (isGameOver && e.innerHTML === "") {
//    e.innerHTML = turnO;
///cheackWinner();
//  cheackDraw();
//changeTurn();
//}
//})
//})


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
            document.querySelector(".big").style.left = "85px";

        }
        else {
            box.innerText = "X";
            turnO = true;
            document.querySelector(".big").style.left = "0";
        }
        box.disabled = true;
        cheackWinner();
        count++
        let isWinner=cheackWinner();
        if(count===9 && !isWinner){
            gameDraw();
        }

    });
});

const gameDraw=()=>{
    massage.innerHTML=`Game was a Draw. \u{1F91D}\u{1F91D}`;
    massageContainer.classList.remove("hide");
    disabledBoxes();
}




//function changeTurn(){
//if(turnO==="X"){
//turnO="O";
//  document.querySelector(".bg").style.left="85px";
// }

//else{
//  turnO="X";
//    document.querySelector(".bg").style.left="0";

//  }

//}
const disabledBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
        //boxes[winnerConditions[i][j]].style.backgroundColor="yellow";

    }
}
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerHTML = "";

    }
}

const showWinner = (winner) => {
    massage.innerText = `Congratulations, Winner is ${winner}  \u{1F973}\u{1F973}`;
    massageContainer.classList.remove("hide");
    disabledBoxes();

}


const cheackWinner = () => {
    for (let pattern of winnerConditions) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                showWinner(pos1);
                return true;
            }
        }
    }
};








//function cheackWinner(){
//let winnerConditions=[[0,1,2],[3,4,5],[6,7,8],
//         [0,3,6],[1,4,7],[2,5,8],
//         [0,4,8],[2,4,6]]

//for(let i=0; i<winnerConditions.length; i++){

//let pos1=boxes[winnerConditions[i][0]].innerHTML;
//let pos2=boxes[winnerConditions[i][1]].innerHTML;
//let pos3=boxes[winnerConditions[i][2]].innerHTML;
//if(pos1!="" && pos1===pos2 && pos2===pos3){
//isGameOver=true;
//document.querySelector("#results").
//innerHTML="Congratulation! "+ turnO +" is winner \u{1F973}\u{1F973}";
//document.querySelector("#play-again").
//style.display="inline"


//for(j=0; j<3; j++){
//boxes[winnerConditions[i][j]].style.
//  backgroundColor="yellowgreen";
//    boxes[winnerConditions[i][j]].style.
//      color="#000"
//    }
//  }
//}
//}

//function cheackDraw() {
  //  if (!isGameOver) {
    //    let isDraw = true;
      //  boxes.forEach(e => {
        //    if (e.innerHTML === "") isDraw = false;
    //    })
      //  if (isDraw) {
        //    isGameOver = true;
          //  document.querySelector("#results").innerHTML = "Game Draw! \u{1F91D}\u{1F91D}";
            //document.querySelector("#play-align").style.display = "inline"
        //}
    //}

//}
//document.querySelector("#play-again").addEventListener("click", () => {
 //   isGameOver = false;
   // turn0 = "X";
    //document.querySelector(".bg").style.left = "0";
    //document.querySelector("#results").innerHTML = "";
    //document.querySelector("#play-again").style.display = "none";

    //boxes.forEach(e => {
     //   e.innerHTML = "";
       // e.style.removeProperty("background-color");
    //    e.style.color = "#fff";
    //})
//})

newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);


//document.querySelector("game-container").style.display="none";
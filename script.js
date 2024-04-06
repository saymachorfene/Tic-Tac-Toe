let btnRef = document.querySelectorAll(".button-option");
let popupRef = document.querySelector(".popup");
let newgameBtn = document.getElementById("new-game");
let restarBtn = document.getElementById("restart");
let msgRef = document.getElementById("message");
//winning pattern Array
let winningpattern = [
    [0, 1, 2],
    [0, 3, 6],
    [2, 5, 8],
    [6, 7, 8],
    [1, 4, 7],
    [3, 4, 5],
    [0, 4, 8],
    [2, 4, 6],

];
//player x plays first
let xTurn = true;
let count = 0;

//disable all Buttons
const disableButtons = () => {
    btnRef.forEach((elemnt) => (elemnt.disabled = true));
    
    popupRef.classList.remove("hide");
};
//enabled all buttons (For new game and restart)
const enableButtons = () => {
    btnRef.forEach((elemnet) => {
        elemnet.innerText = "";
        elemnet.disabled =false;
    });
    
    popupRef.classList.add("hide");
};


//This function is executed whene a planer wins

const winFunction = (letter) => {
    disableButtons();
    if (letter == "X") {
        msgRef.innerHTML = "&#x1F389;<br>'X' Wins";
    }
    else {
        msgRef.innerHTML = "&#x1F389;<br>'O' Wins";
    }

};
//New Game
newgameBtn.addEventListener("click", () => {
    count = 0;
    enableButtons();
});
restarBtn.addEventListener("click", () => {
    count = 0;
    enableButtons();
});



//function for draw
const drawFunction = () => {
    disableButtons();
    msgRef.innerHTML = "&#x1F60E;<br>It's Draw";
}




const winckecker = () => {

    for (let i of winningpattern) {
        let [elemnt1, element2, elemnt3] = [
            btnRef[i[0]].innerText,
            btnRef[i[1]].innerText,
            btnRef[i[2]].innerText
        ];
            
        
        if (elemnt1 != "" && element2 != "" && elemnt3 != ""){
            if (elemnt1 == element2 && element2 == elemnt3) {

                winFunction(elemnt1)
            }
        }
        
    }
};


//display x/o on click
btnRef.forEach((element) => {
    element.addEventListener("click", () => {
        if (xTurn) {
            xTurn = false;
            //display x
            element.innerText = "X";
            element.disabled = true;
        }
        else {
            xTurn = true;
            //display O
            element.innerText = "O";
            element.disabled = true;
        }
        
        count += 1;
        if (count == 9) {
            
            drawFunction();
        }
        
        winckecker();



    });
});
//enable Buttons and disabled popup en page load
window.onload = enableButtons;



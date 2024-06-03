
/* var playedMarks = [];

var boxes = document.querySelectorAll(".sections");
var oes = document.querySelectorAll(".omark");
var xes = document.querySelectorAll(".xmark");
var oMoves = [];
var xMoves = [];


var winningCombinations = [
    [0, 1, 2], // Row 1
    [3, 4, 5], // Row 2
    [6, 7, 8], // Row 3
    [0, 3, 6], // Column 1
    [1, 4, 7], // Column 2
    [2, 5, 8], // Column 3
    [0, 4, 8], // Diagonal 1
    [2, 4, 6]  // Diagonal 2
];



boxes.forEach((box, index) => {
    box.addEventListener("click", function(event) {

        if (!box.classList.contains("clicked")) {
            // Add a class to mark the box as clicked
            box.classList.add("clicked");
            
            playedMarks.push(index);

            if (playedMarks.length % 2 === 0) {

                oes[index].classList.add("reappear");
                oMoves.push(index);
                
                if (checkingWins(oMoves)) {
        
                    document.querySelector(".Owins").classList.add("color");
                }

            } else {
               
                xes[index].classList.add("reappear");
                xMoves.push(index);
                if (checkingWins(xMoves)) {
                    document.querySelector(".Xwins").classList.add("color");
                    
                }
        }      
        if (playedMarks.length === 9 && !checkingWins(oMoves) && !checkingWins(xMoves)) {
            document.querySelector(".draw").classList.add("color");
            
        }
            
         
        }
        
       

    })
}); 


function checkingWins(moves) {
    return winningCombinations.some( combination => 
        combination.every(indice => moves.includes(indice))
     )
}






/*  Verticale wins  : 0 1 2 / 3 4 5 / 6 7 8 /

    Horizantal wins : 0 3 6 / 1 4 7 / 2 5 8

    Diagonal wins   : 0 4 8 / 2 4 6


*/


// ============================== Problems Faced =============================== //

// A box can take more than a click / How to restrict a box from taking more than a click //

// the win don't get declared //













/* 

 playedMarks.push(index);

        playedMarks[0]
        playedMarks[2]
        playedMarks[4]      = xes[index].classList.add("reappear");
        playedMarks[6]
        playedMarks[8]
            
        playedMarks[1]
        playedMarks[3]      = oes[index].classList.add("reappear");
        playedMarks[5]      
        playedMarks[7]



        

*/


/*  if (playedMarks.length === 1 ) {
                xes[index].classList.add("reappear");
            } if (playedMarks.length === 2 ) {
                oes[index].classList.add("reappear");
            }  if (playedMarks.length === 3 ) {
                xes[index].classList.add("reappear");
            } if (playedMarks.length === 4 ) {
                oes[index].classList.add("reappear");
            }  if (playedMarks.length === 5 ) {
                xes[index].classList.add("reappear");
            } if (playedMarks.length === 6 ) {
                oes[index].classList.add("reappear");
            }  if (playedMarks.length === 7 ) {
                xes[index].classList.add("reappear");
            } if (playedMarks.length === 8 ) {
                oes[index].classList.add("reappear");
            } if (playedMarks.length === 9 ) {
                xes[index].classList.add("reappear");
            } 
        
        }

*/


// Order of the showed marks

// x,o,x,o,x,o,x,o,x / deliverd on the boxes depending on the clicker chosen pattern .

// I set up which mark to be displayed but not which box to be at.









// 1(0),2(1),3(2),4(3),5(4),6(5),7(6),8(7),9(8) / array[[0]+2] / array[[1]+2]

// how can i "make them get played" (differently) the !!one after the other!! ?

// what matrix that with it (o) or (x) gonna be played ?



        

var playedMarks = [];
var oMoves = [];
var xMoves = [];

var boxes = document.querySelectorAll(".sections");

var Xwins = document.querySelector(".Xwins");

var xes = document.querySelectorAll(".xmark");
var oes = document.querySelectorAll(".omark");

var fullIndices = [0,1,2,3,4,5,6,7,8];
var leftBoxes = fullIndices.filter(spot => !playedMarks.includes(spot));

var winningCombinations = [
    [0, 1, 2], // Row 1
    [3, 4, 5], // Row 2
    [6, 7, 8], // Row 3
    [0, 3, 6], // Column 1
    [1, 4, 7], // Column 2
    [2, 5, 8], // Column 3
    [0, 4, 8], // Diagonal 1
    [2, 4, 6]  // Diagonal 2
];


boxes.forEach((box, index) => {
        box.addEventListener("click", () => {
            
            if (!box.classList.contains("clicked")) {

                box.classList.add("clicked");
                playedMarks.push(index);

             if (playedMarks.length % 2 === 0) {
                   oMoves.push(index);
                   if (checkingWins(oMoves)) {
                    document.querySelector(".Owins").classList.add("color");
                    gameOverForX();
                    
                }
                   oes[index].classList.add("reappear");
             } else {
                xMoves.push(index);
                xes[index].classList.add("reappear");

                if (checkingWins(xMoves)) {
                    document.querySelector(".Xwins").classList.add("color");
                    gameOverForO();
                }

               
                
                
             } if (playedMarks.length === 9  && !checkingWins(xMoves) && !checkingWins(xMoves) ) {
                document.querySelector(".draw").classList.add("color");
                
             }

            }
        })
});


function checkingWins(patterns) {
    return winningCombinations.some ( combination => 
        combination.every(index => patterns.includes(index))
    )
}


function gameOverForO() {
    playedMarks = [];
    xMoves = [];
    oMoves = [];

    oes.forEach((o, num) => {
        o.classList.remove("reappear");
    }) 

  
    for (let i = 0; i < 9; i++) {
        boxes[leftBoxes[i]].addEventListener("click", () => {
            boxes[leftBoxes[i]].innerHTML = "<div></div>"
        })
    }
           
     
    
}

function gameOverForX() {
    playedMarks = [];
    xMoves = [];
    oMoves = [];

    xes.forEach((x, num) => {
        x.classList.remove("reappear");
    }) 



    for (let i = 0; i < 9; i++) {
        boxes[leftBoxes[i]].addEventListener("click", () => {
            boxes[leftBoxes[i]].innerHTML = "<div></div>"
        })
    }
      
    
}





















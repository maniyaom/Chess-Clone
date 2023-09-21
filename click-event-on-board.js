let lightRedColor = "rgb(212,109,81)";
const allSquares = document.querySelectorAll(".square");
let selectedCells = []

// Defining an event that will make square red when right click on that square
// also add elements to the selected cells and remove accordingly when double right click
for (const i of allSquares){
    i.addEventListener("contextmenu",(e) => {
        e.preventDefault();
        if(i.hasAttribute("style")){
            i.removeAttribute("style");
            const index = selectedCells.indexOf(i.getAttribute("id"));
            selectedCells.splice(index,1);
        }
        else{
            i.style.backgroundColor = lightRedColor;
            selectedCells.push(i.getAttribute("id"));
        }
    }) 
}

// Defining an event that will make square to default view
for (const i of allSquares){
    i.addEventListener("click",(e) => {
        e.preventDefault();

        // Remove Red Colour from board
        for (const j of selectedCells){
            document.getElementById(j).removeAttribute("style");
        }
        // let oldLocation = i.getAttribute("id");
        // let x = document.getElementById(oldLocation).childNodes;
        // let newLocation = oldLocation[0] + (parseInt(oldLocation[1]) + 1)

        // if(x[1].hasAttribute("src")){
        //     console.log(x[1].textContent);
        //     let dot = document.createElement("span");
        //     dot.setAttribute("class","dot");
        //     document.getElementById(newLocation).appendChild(dot);
        // }
    }) 
}


// Click Event on all white and black pieces which will make current clicked square to yellow
let squareColorYellow = '';
for (const square of allSquares) {
    square.addEventListener("click", (e) => {
        if(squareColorYellow != ''){
            document.querySelector(squareColorYellow).removeAttribute("style");
            squareColorYellow = '';
        }

        if(square.innerHTML.includes("black") || square.innerHTML.includes("white")){
            square.style.backgroundColor = "rgb(187,204,68)";
            squareColorYellow = '#'+square.getAttribute("id");
            console.log(squareColorYellow)
        }
    })
}


// First two positions of Pawn 

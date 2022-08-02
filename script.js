// Sets important constants and variables

const container = document.getElementById("container");
let rows = document.getElementsByClassName("gridRow");


// Creates a default grid sized 16x16
function defaultGrid() {
    makeRows(16);
    makeColumns(16);
}

// Takes (rows, columns) input and makes a grid
function makeRows(rowNum) {

    // Creates rows
    for (r = 0; r < rowNum; r++) {
        let row = document.createElement("div");
        container.appendChild(row).className = "gridRow";
    };
};

// Creates columns
function makeColumns(cellNum) {
    for (i = 0; i < rows.length; i++) {
        for (j = 0; j < cellNum; j++) {
            let newCell = document.createElement("div");
            rows[j].appendChild(newCell).className = "cell";
        };

    };
};

defaultGrid()

let cells = document.querySelectorAll(".cell");
let paint = false;

//Set timeout func

addEventListener('mousedown', (event) => {
	paint = true;
});
addEventListener('mouseup', (event) => {
	paint = false;
});

// Setting up a "hover element" for rainbow mode
cells.forEach((cell) => {

    cell.addEventListener("mouseover", () => {
    	if (paint){
       	const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        cell.style.backgroundColor = "#" + randomColor;
      }
    });
});

// Black mode

// cell.forEach((cell) => {
//     cell.addEventListener("mouseover", () => {
//         cell.classList.add("hover")
//     })
// }) 
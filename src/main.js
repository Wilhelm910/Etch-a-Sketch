document.addEventListener("DOMContentLoaded", () => {


gridSize();

reload.addEventListener("click", function(){
    reloadPage()
})

function reloadPage() {
window.location.reload()
}


//Wie viele Kästchen sollen entstehen:
function gridSize() {
    const btn16 = document.getElementById("btn16")
    btn16.addEventListener("click", function() {
        const num = 16
        
        createGrid(num)
    })
    const btn32 = document.getElementById("btn32")
    btn32.addEventListener("click", function() {
        const num = 32 
        createGrid(num)
    })
    const btn64 = document.getElementById("btn64")
    btn64.addEventListener("click", function() {
        const num = 64 
        createGrid(num)
    })
    const btn100 = document.getElementById("btn100")
    btn100.addEventListener("click", function() {
        const num = 100 
        createGrid(num)
    })
}


//Kästchen erstellen: 
function createGrid(num) {
    for (let i = 1; i <= num; i++ ) {
        const row = document.createElement("div")
        row.setAttribute("class", "row")
    for (let j = 1; j <= num; j++) {
        const grid = document.createElement("div")
        grid.setAttribute("class", "grid")
        grid.addEventListener("mouseover", changeColor)
        document.getElementById("divContainer")    
        row.appendChild(grid)
        divContainer.appendChild(row)
    }
    }
}

// Farbe ändern
function changeColor(e) {
    e.target.style.backgroundColor = randomColor()
}

// zufällige Farbe
function randomColor() {
    const hexColorCode = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hexColorCode[Math.floor((Math.random() * hexColorCode.length))];
    }
    return color;
}


// zufällige Farbe der Überschrift:
const title = document.getElementById("title")
title.addEventListener("mouseover", mouseOverTitle)
function mouseOverTitle() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16)
    title.style.color = "#" + randomColor
}

})
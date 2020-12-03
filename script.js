/*----- app's state (variables) -----*/

let currentPlayer = "X"

/*----- cached element references -----*/

let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let btn3 = document.getElementById("btn3")
let btn4 = document.getElementById("btn4")
let btn5 = document.getElementById("btn5")
let btn6 = document.getElementById("btn6")
let btn7 = document.getElementById("btn7")
let btn8 = document.getElementById("btn8")
let btn9 = document.getElementById("btn9")

/*----- event listeners -----*/

btn1.addEventListener("click", btn1Click)
btn2.addEventListener("click", btn2Click)
btn3.addEventListener("click", btn3Click)
btn4.addEventListener("click", btn4Click)
btn5.addEventListener("click", btn5Click)
btn6.addEventListener("click", btn6Click)
btn7.addEventListener("click", btn7Click)
btn8.addEventListener("click", btn8Click)
btn9.addEventListener("click", btn9Click)

/*----- functions -----*/

function switchPlayer() {
    if (currentPlayer == "X") {
    currentPlayer = "O"
  } else {
    currentPlayer = "X"
  }
}

function checkForWin() {
    if (btn1.innerHTML + btn2.innerHTML + btn3.innerHTML == "XXX") {
        alert("Win")
    } else if (btn4.innerHTML + btn5.innerHTML + btn6.innerHTML == "XXX") {
        alert("Win")
    } else if (btn7.innerHTML + btn8.innerHTML + btn9.innerHTML == "XXX") {
        alert("Win")
    } else if (btn1.innerHTML + btn4.innerHTML + btn7.innerHTML == "XXX") {
        alert("Win")
    } else if (btn2.innerHTML + btn5.innerHTML + btn8.innerHTML == "XXX") {
        alert("Win")
    } else if (btn3.innerHTML + btn6.innerHTML + btn9.innerHTML == "XXX") {
        alert("Win")
    } else if (btn1.innerHTML + btn5.innerHTML + btn9.innerHTML == "XXX") {
        alert("Win")
    } else if (btn3.innerHTML + btn5.innerHTML + btn7.innerHTML == "XXX") {
        alert("Win")
    }
}

function btn1Click() {
    btn1.innerHTML = currentPlayer
    switchPlayer()
    checkForWin()
}

function btn2Click() {
    btn2.innerHTML = currentPlayer
    switchPlayer()
    checkForWin()
}

function btn3Click() {
    btn3.innerHTML = currentPlayer
    switchPlayer()
    checkForWin()
}

function btn4Click() {
    btn4.innerHTML = currentPlayer
    switchPlayer()
    checkForWin()
}

function btn5Click() {
    btn5.innerHTML = currentPlayer
    switchPlayer()
    checkForWin()
}

function btn6Click() {
    btn6.innerHTML = currentPlayer
    switchPlayer()
    checkForWin()
}

function btn7Click() {
    btn7.innerHTML = currentPlayer
    switchPlayer()
    checkForWin()
}

function btn8Click() {
    btn8.innerHTML = currentPlayer
    switchPlayer()
    checkForWin()
}

function btn9Click() {
    btn9.innerHTML = currentPlayer
    switchPlayer()
    checkForWin()
}
// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"
function makeshape(){
   var circle =document.createElementNS(namespace,"circle")
   circle.setAttribute("cx",55 )
    circle.setAttribute("cy", 55)
     circle.setAttribute("r",45 )

var canvas = document.getElementById("game-board")
canvas.appendChild(circle)

}

function nextturn(){
   var circle =document.createElementNS(namespace,"circle")
   circle.setAttribute("cx",255)
    circle.setAttribute("cy", 55 )
     circle.setAttribute("r",45 )

var canvas = document.getElementById("game-board")
canvas.appendChild(circle)

}

function player1(){
   var circle =document.createElementNS(namespace,"circle")
   circle.setAttribute("cx",155)
    circle.setAttribute("cy",55)
     circle.setAttribute("r",45)

var canvas = document.getElementById("game-board")
canvas.appendChild(circle)

}

function player2(){
   var circle =document.createElementNS(namespace,"circle")
   circle.setAttribute("cx",55)
    circle.setAttribute("cy", 155)
     circle.setAttribute("r",45)

var canvas = document.getElementById("game-board")
canvas.appendChild(circle)

}

function player3(){
   var circle =document.createElementNS(namespace,"circle")
   circle.setAttribute("cx",155)
    circle.setAttribute("cy",155 )
     circle.setAttribute("r", 45)

var canvas = document.getElementById("game-board")
canvas.appendChild(circle)

}

function player4(){
   var circle =document.createElementNS(namespace,"circle")
   circle.setAttribute("cx",255)
    circle.setAttribute("cy",255 )
     circle.setAttribute("r", 45)

var canvas = document.getElementById("game-board")
canvas.appendChild(circle)

}

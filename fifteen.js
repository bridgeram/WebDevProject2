var X = 300; 
var Y = 300; 
var Tiles = []; 

window.onload = function() { 
   createPieces(); 
    document.getElementById("shufflebutton").addEventListener("click", shuffle);
 }; 
 
function createPieces() { 
	 Tiles = document.querySelectorAll("#puzzlearea div"); 
 	var j = 0; 
 	var t = 3; 
 	for (var i = 0; i < Tiles.length; i++) { 
 		for (var x = 0; x <= t; x++) { 
 			Tiles[i].setAttribute("class", "puzzlepiece");
 			Tiles[i].style.top = 100 * j + "px"; 
 			Tiles[i].style.left = 100 * x  + "px"; 
 			Tiles[i].style.backgroundPosition = -x * 100 + "px " + j * -100 + "px"; 
 			Tiles[i].addEventListener("click", moveTile); 
 			Tiles[i].addEventListener("mouseover", hover); 
 			i++; 
 		} 
 		j++; 
 		if (j > 2) { 
 			t = 2; 
 		} 
 		i--; 
 	} 
 }	 

 
 function hover(event){
     
     if (testNeighbour(this.style.left, this.style.top)){
         this.setAttribute("class", "puzzlepiece movablepiece");
     }
     else if (this.classList.contains("movablepiece")) { 
 		this.classList.remove("movablepiece"); 
 	} 
 }

function moveTileHelp(tile) { 
 	if (testNeighbour(tile.style.left, tile.style.top)) { 
 		var XX = tile.style.left; 
 		var YY = tile.style.top; 
 		tile.style.left = X + "px"; 
 		tile.style.top = Y + "px"; 
 		X = parseInt(XX); 
 		Y = parseInt(YY); 
 	} 
} 

function moveTile(event) { 
 	moveTileHelp(this); 
 } 
 
function shuffle() { 
 	var holder = []; 
 	for (var i = 0; i < 200; i++) { 
 		for (var j = 0; j < Tiles.length; j++) { 
 			if (testNeighbour(Tiles[j].style.left, Tiles[j].style.top)) { 
				holder.push(Tiles[j]); 
			} 
		} 
		moveTileHelp(holder[Math.floor(Math.random() * holder.length)]); 
		holder = []; 
	} 
} 


function testNeighbour(x, y) { 
 	if (Math.abs(Y - parseInt(y)) == 100) { 
 		if (Math.abs(X - parseInt(x)) == 0) { 
 			return true; 
 		} 
 	} else if (Math.abs(X - parseInt(x)) == 100) { 
 		if (Math.abs(Y - parseInt(y)) == 0) { 
 			return true; 
 		} 
 	} 
 	return false; 
} 
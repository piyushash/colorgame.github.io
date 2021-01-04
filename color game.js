var numSquares = 6;
var colors = generateRandomColor(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor= pikColor();
var displayMessage =document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn =document.querySelector("#easybtn");
var hardBtn = document.querySelector("#hardbtn");

easyBtn.addEventListener("click",function(){
	hardBtn.classList.remove("selected");			//to simutaus select the easy hard mode
	easyBtn.classList.add("selected");				//to simutaus select the easy hard mode
	numSquares = 3;
	colors=generateRandomColor(numSquares);
	pickedColor= pikColor();
	colordisp.textContent = pickedColor;

	for(var i = 0; i< squares.length; i++){
		if(colors[i]){								   // id color of 0 then we will put color[0] in square[0] 
			squares[i].style.background = colors[i];  //  change color of upper 3 squares
		}else{
			squares[i].style.display="none"         // hide bottom 3 squares
		}
	}
});

hardBtn.addEventListener("click",function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");


	numSquares = 6
	colors=generateRandomColor(numSquares);
	pickedColor= pikColor();
	colordisp.textContent = pickedColor;

	for(var i = 0; i< squares.length; i++){
									                   // id color of 0 then we will put color[0] in square[0] 
			squares[i].style.background = colors[i];  //  change color of upper 3 squares
		
			squares[i].style.display="block"         // hide bottom 3 squares
	}		
		
});



resetButton.addEventListener("click",function(){
	//generate all new colors
	colors = generateRandomColor(numSquares);
	//pick a new random color from an array
	pickedColor= pikColor();
	//changed colordisplay to match picked color
	colordisp.textContent = pickedColor;
	this.textContent = "New Colors"

	displayMessage.textContent="";
	//change color of square
	for (var i = 0; i < squares.length; i++) {
	
	squares[i].style.background = colors[i];
	}
	h1.style.background="steelblue"; //to change h1 background

});

var colordisp = document.getElementById("colordisplay")
colordisp.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
	//add initial colors to the sqares
	squares[i].style.background = colors[i];
	//add click listner to squares
	squares[i].addEventListener("click",function() {
		//grab color of clicked square
		var clickedColor = this.style.background;
		//compare color to picked color
		if(clickedColor == pickedColor){
			displayMessage.textContent="Correct!!"
			resetButton.textContent="Play Again??"   //to channge play again button
			changecolor(clickedColor)
			h1.style.background=clickedColor;
		}
		else{
			this.style.background="#232323";
			displayMessage.textContent="Try again!!"
			

		}
	});
}	

function changecolor(colors){
	//loop through all squares
	for(var i=0;i<squares.length;i++){
		squares[i].style.background = colors;
	}
}

function pikColor(){
	var random = Math.floor(Math.random() * colors.length); //floor has been used to remove decimal value
	return colors[random];
}

function generateRandomColor(num){
		//make an array
		var arr=[];
		// add num random color to array
		for (var i = 0; i < num; i++) {           //repeat num times	
			//gt random color push to array
			arr.push(randomColor());
		}
		//return that array
		return arr;
	}

function randomColor(){
		//pick a 'red' form 0-255
		var r = Math.floor(Math.random()*256);
		//pick a 'green' form 0-255
		var g = Math.floor(Math.random()*256);
		//pick a 'blue' form 0-255
		var b = Math.floor(Math.random()*256);
		
		return "rgb(" + r + ", " + g + ", " + b + ")";
}


var numSquare = 6;
var colors=generateRandomColors(numSquare);

var squares= document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay"); 
var messageDisplay = document.getElementById("message");
var h1=document.querySelector("h1");
var resetButton = document.getElementById("reset");
var easyBtn = document.querySelector("#easy");
var hardBtn = document.querySelector("#hard");
var clickColor;
colorDisplay.textContent = pickedColor; 

newColors();
function newColors(){
    for(var i = 0 ; i<squares.length; i++){
        //initial the color
        squares[i].style.background = colors[i];
        //add click listener to square
        squares[i].addEventListener("click",function(){
            //grab color of clicked square
             clickColor = this.style.background;
            console.log(clickColor);
            //compare color to picked square
            if(clickColor === pickedColor){
                messageDisplay.textContent = "Correct!!";
                resetButton.textContent = "play again?";
                changeColor(clickColor);
                h1.style.background = clickColor;
               
            }
            else{
                this.style.background = "#232323";
                messageDisplay.textContent= "Try Again";
            }
         });
    }     
}



function changeColor(color){
    for(var i = 0 ; i<squares.length; i++){
        squares[i].style.background = color;

    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    //make array
    var arr = [];
    //repeat nums time this array andnpush into array
    for(var i=0;i<num;i++){
        arr.push(randomColors());
    }
    //return array
    return arr;
}

function randomColors(){
    //pick red from 0 - 255
   var r = Math.floor(Math.random() *256);

    //pick green from 0 - 255
   var g = Math.floor(Math.random() *256);


    //pick blue from 0 - 255
    var b = Math.floor(Math.random() *256);

    return "rgb("+ r +", "+ g + ", " + b + ")";

}


//reset button
resetButton.addEventListener("click",function(){
    //generete all new color
    colors=generateRandomColors(numSquare);
    //pick new random color from array
    pickedColor = pickColor();
    //change the colorDisplay rgb
    colorDisplay.textContent=pickedColor;
    this.textContent="New Colors";
    messageDisplay.textContent ="";
    //change the color of square
    for(var i = 0 ; i<squares.length; i++){
        //initial the color
        squares[i].style.background = colors[i];
    }
    //reset h1 background
    h1.style.background = "steelblue";
});





//easy button 
easyBtn.addEventListener("click",function(){
   hardBtn.classList.remove("selected");
   easyBtn.classList.add("selected");
   numSquare =3;
   colors = generateRandomColors(numSquare);
   pickedColor = pickColor();
   colorDisplay.textContent = pickedColor;
   for(var i=0 ;i<squares.length;i++){
       if(colors[i]){
           squares[i].style.background=colors[i];
       }else{
           squares[i].style.display = "none";
       }
   }
   h1.style.background = "steelblue"; 
});

//hardButton
hardBtn.addEventListener("click",function(){
    easyBtn.classList.remove("selected");
   hardBtn.classList.add("selected");
   numSquare = 6;
   colors = generateRandomColors(numSquare);
   pickedColor = pickColor();
   colorDisplay.textContent = pickedColor;
   for(var i=0 ;i<squares.length;i++){
       squares[i].style.background=colors[i];
       squares[i].style.display = "block";
       
   } 
});
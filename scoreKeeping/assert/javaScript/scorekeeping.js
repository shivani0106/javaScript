
// **************VARIABLE *********************************************************************************************************************************************

var p1Button = document.getElementById("p1");
var p2Buttun = document.getElementById("p2");
var re = document.getElementById("reset");
var f1 = document.querySelector("#f1");
var f2 = document.querySelector("#f2");
var numinput = document.querySelector("input");
var newmax = document.querySelector("p span");
var win = document.querySelector("#win");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winnigGame = 5 ;

//***************FUNCTION CALLING****************************************************************************************************************************************/
p1Button.addEventListener("click",button1);
p2Buttun.addEventListener("click",button2);
re.addEventListener("click",resetall);
numinput.addEventListener("change",setmaxnum);


//*********************FUNCTION DEFINATIION********************************************************************************************************************************** */
function button1(){
    if(!gameOver){
    p1Score++;
    console.log(p1Score);
        if(p1Score === winnigGame){
            gameOver=true;
            win.textContent = "Player one winner";
            f1.classList.add("winner");
        }
        f1.textContent = p1Score;
    }
};

function button2(){
    if(!gameOver){
    p2Score++;
    console.log(p2Score);
    }
        if(p2Score === winnigGame){
            gameOver=true;
            f2.classList.add("winner");
            win.textContent = "Player Two winner";
        }
    
    f2.textContent = p2Score;
};

function resetall(){
    p1Score=0;
    f1.textContent=p1Score;
    f1.classList.remove("winner");
    p2Score=0;
    f2.textContent=p2Score;
    f2.classList.remove("winner");
    gameOver=false;
};

function setmaxnum(){
    newmax.textContent = numinput.value;
    winnigGame = Number(numinput.value);
    resetall();
};

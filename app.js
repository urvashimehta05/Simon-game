let gameSeq=[];
let userSeq=[];
let started=false;
let btns=["red","yellow","green","purple"];
let level=0;
let highScore=0;
let l2=document.querySelector("h2")
let h3=document.querySelector("h3");
document.addEventListener("keypress",function(event){
    if(started==false){
console.log("game started");
started=true;
levelUp();
 }
});
function gameflash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    },250);
    }
    function userPressed(btn) {
        btn.classList.add("user-flash");
        setTimeout(function() {
            btn.classList.remove("user-flash");
        },250);
        }    
function levelUp() {
    userSeq=[];
level++;
l2.innerText= `level ${level}`;
let randIdx=Math.floor(Math.random()*3);
let randomColor=btns[randIdx];
let randbtn=document.querySelector(`.${randomColor}`);
gameSeq.push(randomColor);
console.log(randomColor);
gameflash(randbtn);
}
function checkAns(idx) {
    if(gameSeq[idx]==userSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
            console.log(gameSeq);
        }
    } else {
        l2.innerHTML=`Game over! Your score was <i><b>${level}</b></i><br>Press any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
         },250);
         Score();
         resetTo();
         
    }
}
function btnPress() {
    let btn=this;
    userPressed(btn);
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}
let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns) {
    btn.addEventListener("click",btnPress);
}
function resetTo() {
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}
function Score() {
    if(level>=highScore){
        highScore=level;
        h2.append(`Your highScore is ${highScore}`);
    }
    else {
        h2.append(`Your highScore is ${highScore}`);
    }
}
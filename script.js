let startbutton=document.querySelector("button");

let flag=true;
startbutton.addEventListener("click",function(){
   if(flag==true){
    startbutton.innerText="Reset"
   }
   else{
    startbutton.innerText="Start"
   }
   flag=!flag;
})

let board=document.querySelector("main");
let controle=document.querySelector("h2");
let flag2=true;
board.addEventListener("click",function(cell){
    if(flag==false){
   if(flag2==true){
    cell.target.innerText="X"
    controle.innerText="Player X is Turn"
    
   }
   else{
    cell.target.innerText="0";
    controle.innerText="Player 0 is Turn"
   }
   flag2=!flag2;
}
})
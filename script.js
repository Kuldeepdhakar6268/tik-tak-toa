let startbutton=document.querySelector("button");
let allcell=document.querySelectorAll(".cell");

let flag=true;
startbutton.addEventListener("click",function(){
   if(flag==true){
    startbutton.innerText="Reset"
   }
   else{
    reset();
    controle.innerText=""
    startbutton.innerText="Start"
   }
   flag=!flag;
})

let board=document.querySelector("main");
let controle=document.querySelector("h2");
let flag2=true;
let turn="X";
board.addEventListener("click",function(cell){
   
    if(flag==false && cell.target.innerText==""){
   if(flag2==true){
    cell.target.innerText=turn;
    turn="0"
   }
   else{
    cell.target.innerText=turn;
    turn="X"
   }
   
   controle.innerText=`Player ${turn} is Turn`
   flag2=!flag2;
}
let a=checker()
console.log("cheker is run"+a)
if(a==0){
    controle.innerText="Player 0 is win"
}
else if(a==1){
    controle.innerText="Player X is win"
}


})

function reset(){
   for(let i=0;i<allcell.length;i++){
     allcell[i].innerText="";
   }
}

function checker(){

    if(board.childNodes[1].innerText=="0" && board.childNodes[3].innerText=="0" && board.childNodes[5].innerText=="0"||board.childNodes[7].innerText=="0"&& board.childNodes[9].innerText=="0" && board.childNodes[11].innerText=="0"||board.childNodes[13].innerText=="0"&& board.childNodes[15].innerText=="0"&& board.childNodes[17].innerText=="0" || board.childNodes[1].innerText=="0" && board.childNodes[7].innerText=="0" && board.childNodes[13].innerText=="0"||board.childNodes[3].innerText=="0"&& board.childNodes[9].innerText=="0" && board.childNodes[15].innerText=="0"||board.childNodes[5].innerText=="0"&& board.childNodes[11].innerText=="0"&& board.childNodes[17].innerText=="0" ||board.childNodes[1].innerText=="0" && board.childNodes[9].innerText=="0" && board.childNodes[17].innerText=="0" || board.childNodes[5].innerText=="0" && board.childNodes[9].innerText=="0" && board.childNodes[13].innerText=="0"){
        return 0;
    }
    else if(board.childNodes[1].innerText=="X" && board.childNodes[3].innerText=="X" && board.childNodes[5].innerText=="X"||board.childNodes[7].innerText=="X"&& board.childNodes[9].innerText=="X" && board.childNodes[11].innerText=="X"||board.childNodes[13].innerText=="X"&& board.childNodes[15].innerText=="X"&& board.childNodes[17].innerText=="X" || board.childNodes[1].innerText=="X" && board.childNodes[7].innerText=="X" && board.childNodes[13].innerText=="X"||board.childNodes[3].innerText=="X"&& board.childNodes[9].innerText=="X" && board.childNodes[15].innerText=="X"||board.childNodes[5].innerText=="X"&& board.childNodes[11].innerText=="X"&& board.childNodes[17].innerText=="X" ||board.childNodes[1].innerText=="X" && board.childNodes[9].innerText=="X" && board.childNodes[17].innerText=="X" || board.childNodes[5].innerText=="X" && board.childNodes[9].innerText=="X" && board.childNodes[13].innerText=="X"){
        return 1;
    }
}

console.log(board.childNodes)
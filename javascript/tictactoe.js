let boxes =document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-button");
let newgmbtn=document.querySelector("#newgm");
let msgcontainer=document.querySelector(".msgdabba")
let msg =document.querySelector("#msg");


let player=true;

const winplayer=[
     [0,1,2],
     [0,3,6],
     [0,4,8],
     [1,4,7],
     [2,5,8],
     [2,4,6],
     [3,4,5],
     [6,7,8],
];
const resetgame=()=>{
    player=true;
    enableboxes();
    msgcontainer.classList.add("hide");

}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(player){
            box.innerText="O";
            player=false; 
        }else{
            box.innerText="X";
            player=true;
        }
        box.disabled=true;
        checkwinner();

       
    });
});
const disabledboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableboxes=()=>{
    for(let box of boxes ){
        box.disabled=false;
        box.innerText="";
    }
}
const showwinner=(winner)=>{
    msg.innerText=  `Badhai Ho Aap Jeet Gye,The Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
}
const checkwinner =()=>{
    for(let pattern of winplayer){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        if(pos1val!="" && pos2val!=""&&pos3val!=""){
            if(pos1val===pos2val&&pos2val===pos3val){
                showwinner(pos1val);
            }
        }
    }
};
newgmbtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame)
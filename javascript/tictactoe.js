let boxes =document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-button");
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
]
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
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
const checkwinner =()=>{
    
}
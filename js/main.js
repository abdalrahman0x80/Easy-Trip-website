let menu = document.getElementsByClassName("mymenu")[0];
let turn = 1;
document.getElementById("menu").onclick = ()=> {
    if(turn == 0)
    {
        menu.classList.remove("flex");
        menu.classList.add("hidden");
        turn = 1
    }else{
        menu.classList.remove("hidden");
        menu.classList.add("flex");
        turn = 0
    }
}
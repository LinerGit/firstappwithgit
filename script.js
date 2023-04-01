let stpbl1 = document.getElementById("stepbl1");
let stbrdr1 = document.getElementById("stepbrdr1");

stpbl1.onmouseover = function(){
    stbrdr1.style.borderBottom = "3px solid white";
}
stpbl1.onmouseout = function(){
    stbrdr1.style.borderBottom = "3px solid black";
}
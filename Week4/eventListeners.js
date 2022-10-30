var box = document.getElementById("box");

function onLoad(){
    box.style.backgroundColor = 'black'
};
 function changeGreen(){
    box.style.backgroundColor = 'green'
};
function changeYellow(){
    box.style.backgroundColor = 'yellow'
};
function changeBlue(){
    box.style.backgroundColor = 'blue'
};
function changeRed(){
    box.style.backgroundColor = 'red'
};
function changePurple(){
    box.style.backgroundColor = 'purple'
};

window.addEventListener('load', onLoad);
box.addEventListener('mouseover', changeGreen);
box.addEventListener('mousedown', changeYellow);
box.addEventListener('mouseout', changeBlue);
box.addEventListener('dblclick', changeRed);
window.addEventListener('scroll', changePurple);


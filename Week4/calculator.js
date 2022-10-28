var btnAdd = document.getElementById('add');
function add(num1, num2){
    var num1 = document.getElementById('num1').value
    var num2 = document.getElementById('num2').value
    document.getElementById('answer').innerHTML = Number(num1) + Number(num2);
};
btnAdd.addEventListener('click', add);

var btnSub = document.getElementById('sub');
function sub(num3, num4){
    var num3 = document.getElementById('num3').value;
    var num4 = document.getElementById('num4').value;
    document.getElementById("answer1").innerHTML = Number(num3) - Number(num4);
};
btnSub.addEventListener('click', sub);

var btnMul = document.getElementById('mul');
function mul(num5, num6){
    var num5 = document.getElementById('num5').value;
    var num6 = document.getElementById('num6').value;
    document.getElementById('answer2').innerHTML = Number(num5) * Number(num6);
};
btnMul.addEventListener('click', mul);

var btnDiv = document.getElementById('div');
function div(num7, num8){
    var num7 = document.getElementById('num7').value;
    var num8 = document.getElementById('num8').value;
    document.getElementById('answer3').innerHTML = Number(num7) / Number(num8)
};
btnDiv.addEventListener('click', div);

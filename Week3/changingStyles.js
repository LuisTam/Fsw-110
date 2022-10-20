for(var i = 0; i < 5 ; i++){
    var newHeader = document.createElement('h2');
    newHeader.style.fontSize = '20px';
    newHeader.style.fontWeight = 'lighter';
    newHeader.style.fontFamily = 'sans-serif';
    newHeader.style.color = 'cornflowerblue';
    newHeader.textContent = 'My Header2';
    document.body.appendChild(newHeader);
}

var box = document.createElement('div');
box.classList.add('border');
document.body.appendChild(box)







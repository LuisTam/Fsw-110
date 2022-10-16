var navBar = document.createElement('a');
navBar.textContent = href='https://www.imdb.com/title/tt0386676/'
document.body.appendChild(navBar);

var newHead = document.createElement('h1');
newHead.textContent = 'This is my h1';
document.body.appendChild(newHead);

var newPar = document.createElement('p');
newPar.textContent = 'This is my p';
document.body.appendChild(newPar);

var listItems = ['This', 'Is', 'My', 'List'];
var newList = document.createElement('ol');
listItems.forEach((item)=>{
    let li = document.createElement('li');
    li.innerText = item;
    newList.appendChild(li);
})
document.body.appendChild(newList)


var footer = document.createElement('footer');
footer.textContent = 'about footer';
document.body.appendChild(footer)
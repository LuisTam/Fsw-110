var newHeader = document.createElement('h1')
newHeader.textContent = 'Welcome to my JS site'
document.body.appendChild(newHeader)

var newP = document.createElement('p')
newP.textContent = 'All of this was created with Javascript'
document.body.appendChild(newP)

var listItems = ['Water', 'Food', 'Snacks'];

var newList = document.createElement('ol');

listItems.forEach((item)=>{
    let li = document.createElement('li');
    li.innerText = item;
    newList.appendChild(li);
})
document.body.appendChild(newList)

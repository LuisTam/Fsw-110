/*var texT = "Hello World!"
var headr = document.createElement('h1');
headr.textContent = texT;
document.body.appendChild(headr);*/

for (var i = 0; i < 10; i++){
    var newH = document.createElement('h1');
    newH.style.color = 'orange'
    newH.style.backgroundColor = 'blue'
    newH.textContent = "Hello World!";
    document.body.appendChild(newH);
}

var names =[
    'steve',
    'larry',
    'joe',
    'shirley',
    'steph',
    'nate',
    'rick',
    'emily'
]
var newList = document.createElement('ul')
for (var i = 0; i < names.length; i++) {
    rangersList.innerHTML += '<li>' + powerRangers[i] + '</li>'
}
document.body.appendChild(newList)


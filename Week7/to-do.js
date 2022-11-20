var subBtn = document.getElementById('btn');
subBtn.addEventListener("click", addChore);


function addChore(){
    var newLi = document.createElement("li");
    newLi.setAttribute("id", "listItem")
    var newChore = document.getElementById("chore").value
    var desc = document.getElementById("info").value
    newDiv.appendChild(newLi)
    
    newLi.textContent = newChore + " " + desc
    var htLi = document.getElementById("myList");
    htLi.append(newLi);

    var button = document.createElement('button');
    button.className = "deleteBtn"
    var textContent = document.createTextNode("Delete");
    button.appendChild(textContent)
    newLi.appendChild(button)

}

function ClearFields() {
    document.getElementById("chore").value = "";
    document.getElementById("info").value = "";
}
subBtn.addEventListener("click", ClearFields);

var del = document.getElementsByClassName('deleteBtn');
del.addEventListener("click", deletedItems);

function deletedItems(){
 var delItem = document.getElementsByClassName("div1");
 delItem.remove()
}
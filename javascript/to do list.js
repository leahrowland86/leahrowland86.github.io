//creates a new item for to do list
function createNewItem() {
let inputElement = document.getElementById('input').value;
let ulElement = document.getElementById('list');
//creates the list element that goes inside the ul
let liElement = document.createElement('li');
liElement.className = "lilist";

//add the list items to the ul once you hit enter
liElement.appendChild(document.createTextNode(inputElement));
ulElement.appendChild(liElement);
//reset the input to blank after hitting enter
 document.getElementById("input").value = "";

 //call the remove item function
 liElement.onclick = removeItem;
}

//adds the new item to the list by hitting the return key
document.body.onkeyup = function(returnKey) {
  if (returnKey.keyCode == 13) {
    //call the create new item function
    createNewItem();
  }
};

//removes item when it is clicked on
function removeItem(itemToRemove) {
  itemToRemove.target.parentElement.removeChild(itemToRemove.target);
}

function reminderNote() {
  alert("Add items to the to do list by hitting enter. Clicking on the item will remove it from your list.");
}

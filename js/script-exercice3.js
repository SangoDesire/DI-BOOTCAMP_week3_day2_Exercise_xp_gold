/**
 * @author ETOUMI Aristide
 * @description DI-Bootcamp Week3 Day2 ExerciceXPGold Exercice 3: Create A Shopping List
 */

/*
1- Create an empty array. For example: let shoppingList=[].
2- Create a form containing : a text input field and an “AddItem” button. Add this form to the DOM.
3- Type what you need to buy in the text input field, then add the new item to the array as soon as you click on the “AddItem” button (Hint: create a function named addItem()).
4- Add a “ClearAll” button to the DOM, that when clicked on, should call the clearAll() function (see below).
5- Create a function named clearAll() that should clear out all the items in the shopping list.
*/

let root = document.getElementById("root");
//1
let shoppingList = [];

//2
let form = document.createElement("form");

let input = document.createElement("input");
input.setAttribute("type", "text");
input.style.marginRight = "10px";

let addItemButton = document.createElement("button");
addItemButton.innerHTML = "AddItem";
addItemButton.onclick = addItem;
addItemButton.style.marginRight = "10px";

let clearAllButton = document.createElement("button");
clearAllButton.innerHTML = "ClearAll";
clearAllButton.onclick = clearAll;

form.appendChild(input);
form.appendChild(addItemButton);
form.appendChild(clearAllButton);
root.appendChild(form);

let h1 = document.createElement("h1");
h1.innerHTML = "Shoping List";
root.appendChild(h1)

let ul = document.createElement("ul");
root.appendChild(ul);


function addItem(ev) {
    ev.preventDefault();
    shoppingList.push(input.value);
    let li = document.createElement("li");
    li.innerHTML = input.value;
    ul.appendChild(li);
    input.value = "";
    input.focus();
}

function clearAll(ev) {
    ev.preventDefault();

    shoppingList.splice(0, shoppingList.length);
    ul.innerHTML = "";
}
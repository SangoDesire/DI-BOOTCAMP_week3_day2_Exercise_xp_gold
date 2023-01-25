/**
 * @author ETOUMI Aristide
 * @description DI-Bootcamp Week3 Day2 ExerciceXPGold Exercice 2: Delete Colors
 */

/*
1- Add a click event listener to the <input type="button">. When clicked on, it should call 
a function named : removecolor() that removes the selected color from the dropdown list.
*/

let inputTypeButton = document.forms[0].lastElementChild;
inputTypeButton.addEventListener("click", removecolor)

let colorSelect = document.getElementById("colorSelect");
function removecolor(ev) {
    ev.preventDefault();
    let selectedColor = colorSelect.value;
    let options = document.getElementsByTagName("option");
    for (const option of options) {
        if (option.textContent == selectedColor) {
            colorSelect.removeChild(option);
            break;
        }
    }
}
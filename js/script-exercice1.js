/**
 * @author ETOUMI Aristide
 * @description DI-Bootcamp week3 day2 ExercicesXPGold Exercice 1: Select A Kind Of Music
 * 
 */

/*


*/
//1- Display the value of the selected option.
let genres = document.getElementById("genres");

console.log(genres.value);

// 2- Add an additional option to the select tag:
// <option value="classic">Classic</option>
// 3- The newly added option should be selected by default.
let option = document.createElement("option");
option.setAttribute("value", "classic");
option.innerHTML = "Classic";
option.setAttribute("selected", true);
genres.appendChild(option);
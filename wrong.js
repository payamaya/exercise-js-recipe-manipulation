const header = (document.querySelector('.logo-text').style.color = 'black')
const header2 = (document.querySelector('header').style.justifyContent =
  'flex-start')
const headerBorder = (document.querySelector('header').style.borderBottom =
  '1px solid green')

// 4)
const changeRecipeName = document.querySelector('h1')
changeRecipeName.innerText = 'Frozen Cheeseake'
// 5)The clock icon beneath the recipe name has disappeared and been replaced by a text instead. This can be fixed by adding a class to that element.
const addIcon = document.querySelector('.time-container span')
addIcon.classList.add('material-icons')

// 6)The estimated time of the recipe is also incorrect. Change it to the correct time estimation.
const estimateTime = document.querySelector('.time')
estimateTime.innerText = '60 + min'
// 7)The src path to the image is wrong, or atleast it's showing the wrong image. Change it to the correct one. The available images can be found in the assets folder.
const imgElement = document.querySelector('.image-container img') // Select the <img> element
imgElement.src = '/assets/frozen-cheesecake-slice.jpg'

// 8)The background color of the ingredients list container is wrong. Fix it.
const bgColorIngredient = document.querySelector('.ingredients-container')
bgColorIngredient.style.backgroundColor = '#f9f9f9'

// 9)The ingredients are divided in to two parts, one for the bottom and one for the paste. In the list of the ingredients to the bottom, there is a text instead of two list items. Remove the text and add those two list items.

const bottomIngredientsList = document.querySelector('.ingredients-list-bottom')
const textElement = bottomIngredientsList.querySelector('p')
bottomIngredientsList.removeChild(textElement)

const newItem1 = document.createElement('li')
newItem1.textContent = '15st digistivetex'
const newItem2 = document.createElement('li')
newItem2.textContent = 'Lite smör'

bottomIngredientsList.appendChild(newItem1)
bottomIngredientsList.appendChild(newItem2)

// 10) The third ingredient in the list of ingredients to the paste is wrong. Change that specific ingredient to the correct one.
const listItem = document.querySelector('.ingredients-list-paste').children[2]
const changeIngredients = document.createTextNode('3tsk vaniljsocker')
listItem.replaceChild(changeIngredients, listItem.childNodes[0])

// 11) There is also a missing ingredient in the list of ingredients to the paste. Look and see what it is and add that one the the end of the list.

const ulElement = document.querySelector('.ingredients-list-paste')

const addToList = document.createElement('li')

addToList.innerText = '400g naturell philadelphiaost'

ulElement.appendChild(addToList)

// 12)The text "Instructions" to the left, beneath the image, has some shadow styling applied to it. Remove that styling.

const removeBoxShadow = document.querySelector('.shadow')
removeBoxShadow.style.boxShadow = 'none'

// 13) Two list elements of the list of instructions are incorrect. Find them and change them to the correct ones.

// nr:2  <li> Separera ägggulor och äggvitor. Äggvitorna lägger du i en stor bunke, äggulorna i enliten bunke. </li>

// nr: 9 <li>Ställ in i frysen över natten.</li>

const instructionsList = document.querySelector('.instructions-list')

const listItems = instructionsList.querySelectorAll('li')

if (listItems.length >= 2) {
  listItems[1].textContent =
    '  Separera ägggulor och äggvitor. Äggvitorna lägger du i en stor bunke, äggulorna i en liten bunke.'
  listItems[listItems.length - 2].textContent = 'Ställ in i frysen över natten.'
}

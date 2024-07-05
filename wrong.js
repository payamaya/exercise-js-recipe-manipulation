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
// Select the <ul> element containing ingredients for the bottom
const bottomIngredientsList = document.querySelector('.ingredients-list-bottom')

// Remove the existing <p> element containing the placeholder text
const textElement = bottomIngredientsList.querySelector('p')
bottomIngredientsList.removeChild(textElement)

// Create new <li> elements for the bottom ingredients
const newItem1 = document.createElement('li')
newItem1.textContent = '15st digistivetex'

const newItem2 = document.createElement('li')
newItem2.textContent = 'Lite smör'

// Append the new <li> elements to the bottom ingredients list
bottomIngredientsList.appendChild(newItem1)
bottomIngredientsList.appendChild(newItem2)

// 12)The text "Instructions" to the left, beneath the image, has some shadow styling applied to it. Remove that styling.

const removeBoxShadow = document.querySelector('.shadow')
removeBoxShadow.style.boxShadow = 'none'

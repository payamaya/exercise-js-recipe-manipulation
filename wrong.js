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

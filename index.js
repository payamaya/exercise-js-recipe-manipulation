// 1)What is the name of the recipe?
const recipeName = document.querySelector('h1')
console.log(recipeName.innerText)

// 2)What HTML tag is used to display the Recipe name?
console.log(recipeName.tagName)

// 3)What is the font size of the paragraph tag with the class "description".
const p = document.querySelector('.description')
const computedStyle = window.getComputedStyle(p)
const fontSize = computedStyle.getPropertyValue('font-size')
console.log(fontSize)

// 4)What is the value of the alt atrribute on the image?
const altAtribute = document.querySelector('img')
altAtribute.getAttribute('alt')
console.log(altAtribute.alt)

/*
 5)What is the dimensions and the url of the image? Create an object that looks like this, and log it to the console:
 {
  url: string
  height: number,
  width: number,
}
*/
const img = document.querySelector('img')
const imgDimension = {
  width: img.naturalWidth,
  height: img.naturalHeight,
  url: img.src,
}
const width = img.naturalWidth
const height = img.naturalHeight
const url = img.src
console.log(width)
console.log(height)
console.log(url)
console.log(imgDimension)

//6)How many ingredients has the paste?
const ingredients = document.querySelectorAll('ul li')
console.log(ingredients.length)

// 7)Which is the forth element in the list containing the ingredients for the paste?
console.log(ingredients[3].innerHTML)

// 8) Create an an array of objects from the instructions. Each element in the array should be an object that looks like this:

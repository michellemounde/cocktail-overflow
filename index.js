const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1/"
const search = "search.php?"
const lookup = "lookup.php?"
const random = "random.php?"
const filter = "filter.php?"
const list = "list.php?"
const ingredient = "i="
const name = "s="
const firstLetter = "f="
const ingredientID = "iid="
const alcoholPresence = "a="
const category = "c="
const glass = "g="


document.addEventListener("DOMContentLoaded", () => {
    getCocktail("11007")
    getAlcohol("Vodka")
    getAlcohol("Whiskey")
    
    

})

// Get and load alcohol to pick from

function getAlcohol(liquor) {
    fetch(`${BASE_URL}/${filter}${ingredient}${liquor}`)
    .then(resp => resp.json())
    .then(data => {
        const alcohol = data.drinks
        console.log(alcohol)
        loadAlcohol(liquor)
    })
    .catch(err => {throw err})
}

function loadAlcohol(name) {
    const liquor = document.createElement("li")
    const alcoholMenu = document.querySelector("#alcohol")

    liquor.id = name
    liquor.className = "alcohol-item"
    liquor.textContent = name

    alcoholMenu.append(liquor)

}

// Get and load cocktails based on alcohol


// Get and load cocktail details to page on click
function getCocktail(id) {
    fetch(`${BASE_URL}/${lookup}${ingredient}${id}`)
    .then(resp => resp.json())
    .then(data => {
        const cocktail = data.drinks[0]
        console.log(cocktail)
        loadCocktail(cocktail)
    })
    .catch(err => {throw err})
}

function loadCocktail(cocktail) {
    const details = document.querySelector("#cocktail-details")
    const img = details.querySelector("img")
    const cocktailName = details.querySelector("#cocktail-name")

    img.src = `${cocktail.strDrinkThumb}/preview`
    img.alt = cocktail.strDrink

    cocktailName.textContent = cocktail.strDrink
}

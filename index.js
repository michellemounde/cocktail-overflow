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

})

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
    const body = document.querySelector("body")
    const cocktailDetails = document.createElement("div")

    cocktailDetails.id = "cocktail-details"
    cocktailDetails.textContent = cocktail.strDrink

    body.append(cocktailDetails)
}

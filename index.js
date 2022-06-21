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

//consider adding an event listener for search by enter
document.addEventListener("DOMContentLoaded", () => {
    getCocktail("11007")
    getCocktails()
    
    

})

// Get co

function getAlcohol(liquor) {
    fetch(`${BASE_URL}/${filter}${ingredient}${liquor}`)
    .then(resp => resp.json())
    .then(data => {
        const alcohol = data.drinks
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
function getCocktails() {
    const lis = document.querySelectorAll(".alcohol-item")
    lis.forEach(li => {
        li.addEventListener("click", () => {
            fetch(`${BASE_URL}/${filter}${ingredient}${li.textContent}`)
            .then(resp => resp.json())
            .then(data => {
                const cocktails = data.drinks
                console.log(cocktails)
                loadCocktails(cocktails)
            })
            .catch(err => {throw err})
        }) 
    })  
}

function loadCocktails(cocktails) {
    cocktails.forEach(cocktail => {
        const li = document.createElement("li")
        const ul = document.querySelector("#cocktails")

        li.id = cocktail.idDrink
        li.className = "cocktails-item"
        li.textContent = cocktail.strDrink

        console.log(`li: ${li}`)

        ul.append("li")
    })
}


// Get and load cocktail details to page on click
function getCocktail(id) {
    fetch(`${BASE_URL}/${lookup}${ingredient}${id}`)
    .then(resp => resp.json())
    .then(data => {
        const cocktail = data.drinks[0]
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

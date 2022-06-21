const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1/"
const search = "search.php?"
const lookup = "lookup.php?"
const random = "random.php?"
const filter = "filter.php?"
const list = "list.php?"
const ingr = "i="
const name = "s="
const firstLetter = "f="
const ingrID = "iid="
const alcoholPresence = "a="
const category = "c="
const glass = "g="

//consider adding an event listener for search by enter
document.addEventListener("DOMContentLoaded", () => {
    getCocktail("11007")
    getCocktails()
    searchIngredient()
    

})

// Get and load cocktails based on alcohol
function getCocktails() {
    const lis = document.querySelectorAll(".alcohol-item")
    lis.forEach(li => {
        li.addEventListener("click", (e) => {

            fetch(`${BASE_URL}/${filter}${ingr}${li.textContent}`)
            .then(resp => resp.json())
            .then(data => {
                const cocktails = data.drinks
                loadCocktails(cocktails)
            })
            .catch(err => {throw err})
        }) 
    })  
}

function loadCocktails(cocktails) {
    const ol = document.querySelector("#cocktails")
    if (ol.textContent === "") {
        createCocktails(cocktails)
    } else {
        ol.textContent = ""
        createCocktails(cocktails)
    }
}

function createCocktails(cocktails) {
    cocktails.forEach(cocktail => {
        const li = document.createElement("li")
        const ol = document.querySelector("#cocktails")
           
        li.id = cocktail.idDrink
        li.className = "cocktails-item"
        li.textContent = cocktail.strDrink
        
        ol.append(li)

        li.addEventListener("click", () => {
            getCocktail(li.id)
        })          
    })
}

// Get and load cocktails based on search 
function searchIngredient() {
    const form = document.querySelector("#search-alcohol")
    const searchIngr = form.querySelector("#alcohol-search")
    const btn = form.querySelector("button")

    btn.addEventListener("click", (e) => {
        fetch(`${BASE_URL}/${filter}${ingr}${e.target.parentNode.searchIngr.value}`)
        .then(resp => resp.json())
        .then(data => {
            e.preventDefault()
            console.log(e.target.parentNode.searchIngr.value)
            const cocktails = data.drinks
            loadCocktails(cocktails)
        })
        .catch(err => {throw err})
    })

    searchIngr.addEventListener("input", (e) => {
        fetch(`${BASE_URL}/${filter}${ingr}${e.target.value}`)
            .then(resp => resp.json())
            .then(data => {
                e.preventDefault()
                console.log(e.target.value)
                const cocktails = data.drinks
                loadCocktails(cocktails)
            })
            .catch(err => {throw err})
    })
}


// Get and load cocktail details to page on click
function getCocktail(id) {
    fetch(`${BASE_URL}/${lookup}${ingr}${id}`)
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
    const name = details.querySelector("#cocktail-name")
    const recipe = document.querySelector("#recipe")
    const glass = document.querySelector("#glass")
    const ingredients = document.querySelector("#ingredients")
    

    img.src = `${cocktail.strDrinkThumb}/preview`
    img.alt = cocktail.strDrink
    name.textContent = cocktail.strDrink.toUpperCase()
    recipe.textContent = cocktail.strInstructions
    glass.textContent = cocktail.strGlass
    ingredients.textContent = ""

    for (let key in cocktail) {
        if ( key.startsWith("strIngredient") && cocktail[key] !== null && cocktail[key] !== "") {
                const li = document.createElement("li")
                li.className = "ingredient"
                li.textContent = cocktail[key]
                ingredients.append(li)
        }
    }
}
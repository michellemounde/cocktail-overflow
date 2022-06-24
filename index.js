const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1/"

document.addEventListener("DOMContentLoaded", () => {
    getCocktail("11000")
    getCocktails()
    searchIngredient()
    addFeedback()
    likeCocktail()
})

// Get and load cocktails based on alcohol
function getCocktails() {
    const lis = document.querySelectorAll(".alcohol-item")
    lis.forEach(li => {
        li.addEventListener("click", (e) => {

            fetch(`${BASE_URL}/filter.php?i=${li.textContent}`)
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
    ol.textContent = ""

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

// Get and load cocktails based on ingredient searched for 
function searchIngredient() {
    const form = document.querySelector("#search-alcohol")
    const searchIngr = form.querySelector("#alcohol-search")
    
    form.addEventListener("submit", (e) => {
        e.preventDefault()
        fetch(`${BASE_URL}/filter.php?i=${searchIngr.value}`)
        .then(resp => resp.json())
        .then(data => {
            const cocktails = data.drinks
            loadCocktails(cocktails)
        })
        .catch(err => {throw err})
        e.target.reset()
    })
}


// Get and load cocktail details to page on click
function getCocktail(id) {
    fetch(`${BASE_URL}/lookup.php?i=${id}`)
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
    const name = document.getElementById("cocktail-name")
    const recipe = document.querySelector("#recipe")
    const glass = document.querySelector("#glass")
    const ingredients = document.querySelector("#ingredients")
    const ratingP = document.querySelector("#rating")
    const commentP = document.querySelector("#comment")
    const like = document.querySelector("#like")

    img.src = `${cocktail.strDrinkThumb}/preview`
    img.alt = cocktail.strDrink
    name.textContent = cocktail.strDrink.toUpperCase()
    recipe.textContent = cocktail.strInstructions
    glass.textContent = cocktail.strGlass
    // Resetting the following texts and glyph to default when a different cocktail is selected
    ingredients.textContent = ""
    ratingP.textContent = "Your rating will be added here"
    commentP.textContent = "Your comments will be added here"
    like.className = "glyphicon glyphicon-heart-empty"


    for (let i = 1; i < 15; i++) {
        // Show both ingredient name and measure
        if (!!cocktail[`strIngredient${i}`]) {
            const li = document.createElement("li")
            li.className = "ingredient"
            if (!!cocktail[`strMeasure${i}`]) {
                li.textContent = `${cocktail[`strMeasure${i}`]} ${cocktail[`strIngredient${i}`]}`
                ingredients.append(li)
                // Show only ingredient name if it has no measure
            } else {
                li.textContent = `${cocktail[`strIngredient${i}`]}`
                ingredients.append(li)
            }
        } 
    }  
}

// Enable adding of rating and comment
function addFeedback() {
    const form = document.querySelector("#rating-comment")
    const ratingInput = form.querySelector("#rating-given")
    const commentInput = form.querySelector("#comment-given")
    
    form.addEventListener("submit", (e) => {
        e.preventDefault()
        handleFeedback(ratingInput, commentInput)
        e.target.reset()
    })
}

function handleFeedback(rating, comment) {
    const ratingP = document.querySelector("#rating")
    const commentP = document.querySelector("#comment")

    ratingP.textContent = rating.value
    commentP.textContent = comment.value
}

// Enable liking and unliking of cocktail
function likeCocktail() {
    const btn = document.querySelector("#like-button")

    btn.addEventListener("click", () => {
        const like = document.querySelector("#like")
        
        if ( like.className === "glyphicon glyphicon-heart-empty") {
            like.classList.remove("glyphicon-heart-empty")
            like.classList.add("glyphicon-heart")
        } else {
            like.classList.add("glyphicon-heart-empty")
            like.classList.remove("glyphicon-heart")
        }
    })
}
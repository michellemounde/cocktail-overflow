# The basic story of your application

A cocktail web application that allows users to explore the types of cocktails that can be made 
using different liquers and spirits. The user can search by ingredient or cocktail, explore a list 
of cocktails that can be made using different ingredients, different categories and whether alcoholic 
or not. The user can look at the recipes for those cocktails. Like a cocktail, leave a comment and 
suggest ingredients to improve the cocktail.

## The API data you'll be using and how you'll use it

I will be using the cocktail DB(https://www.thecocktaildb.com/api.php) and plan on using it to get 
cocktails list that can be filtered and searched by ingredients.

Run this command to get the backend started:

```console
$ json-server --watch db.json
```

Test your server by visiting this route in the browser:

[https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a](https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a)

Then, open the `index.html` file on your browser to run the application.

Write your code in the `src/index.js` file. The base URL for your API will be
[https://www.thecocktaildb.com/api.php](https://www.thecocktaildb.com/api.php).

## The core features of your MVP

As a user, I can:

1. See a cocktail detail on page load without having to click on any cocktail 
to load details first cocktail available.

   ```txt
   GET cocktails/1

   Example Response:
   {
      "idDrink": "11007",
      "strDrink": "Margarita",
      "strDrinkAlternate": null,
      "strTags": "IBA,ContemporaryClassic",
      "strVideo": null,
      "strCategory": "Ordinary Drink",
      "strIBA": "Contemporary Classics",
      "strAlcoholic": "Alcoholic",
      "strGlass": "Cocktail glass",
      "strInstructions": "Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.",
      "strInstructionsES": null,
      "strInstructionsDE": "Reiben Sie den Rand des Glases mit der Limettenscheibe, damit das Salz daran haftet. Achten Sie darauf, dass nur der äußere Rand angefeuchtet wird und streuen Sie das Salz darauf. Das Salz sollte sich auf den Lippen des Genießers befinden und niemals in den Cocktail einmischen. Die anderen Zutaten mit Eis schütteln und vorsichtig in das Glas geben.",
      "strInstructionsFR": null,
      "strInstructionsIT": "Strofina il bordo del bicchiere con la fetta di lime per far aderire il sale.\r\nAvere cura di inumidire solo il bordo esterno e cospargere di sale.\r\nIl sale dovrebbe presentarsi alle labbra del bevitore e non mescolarsi mai al cocktail.\r\nShakerare gli altri ingredienti con ghiaccio, quindi versarli delicatamente nel bicchiere.",
      "strInstructionsZH-HANS": null,
      "strInstructionsZH-HANT": null,
      "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
      "strIngredient1": "Tequila",
      "strIngredient2": "Triple sec",
      "strIngredient3": "Lime juice",
      "strIngredient4": "Salt",
      "strIngredient5": null,
      "strIngredient6": null,
      "strIngredient7": null,
      "strIngredient8": null,
      "strIngredient9": null,
      "strIngredient10": null,
      "strIngredient11": null,
      "strIngredient12": null,
      "strIngredient13": null,
      "strIngredient14": null,
      "strIngredient15": null,
      "strMeasure1": "1 1/2 oz ",
      "strMeasure2": "1/2 oz ",
      "strMeasure3": "1 oz ",
      "strMeasure4": null,
      "strMeasure5": null,
      "strMeasure6": null,
      "strMeasure7": null,
      "strMeasure8": null,
      "strMeasure9": null,
      "strMeasure10": null,
      "strMeasure11": null,
      "strMeasure12": null,
      "strMeasure13": null,
      "strMeasure14": null,
      "strMeasure15": null,
      "strImageSource": "https://commons.wikimedia.org/wiki/File:Klassiche_Margarita.jpg",
      "strImageAttribution": "Cocktailmarler",
      "strCreativeCommonsConfirmed": "Yes",
      "dateModified": "2015-08-18 14:42:59"
    }
   ```

2. Select cocktails by main ingredient such as liquer or spirit and click on cocktail in resulting list 
to view the cocktails made with that ingredient and select a cocktail to replace the first cocktail 
details with it:

   ```txt
   GET cocktails/1

   Example response:
   [
      {
      "strDrink": "Ace",
      "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/l3cd7f1504818306.jpg",
      "idDrink": "17225"
    },
    {
      "strDrink": "Adam & Eve",
      "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/vfeumw1504819077.jpg",
      "idDrink": "17226"
    },
    {
      "strDrink": "Addison",
      "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/yzva7x1504820300.jpg",
      "idDrink": "17228"
    },
    {
      "strDrink": "Alaska Cocktail",
      "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/wsyryt1483387720.jpg",
      "idDrink": "11013"
   ]
   ```

3. Like a cocktail and after liking it see the like count update

### Bonus Features

**Make sure to commit your work to save your progress before
adding the bonus features!**

1. Click on a cocktail in the menu to replace the currently displayed cocktail's
   details with the new cocktail's details.

2. When a cocktail is commented on or suggested ingredients, update the 
comment and suggested ingredients for the cocktail:

   ```html
   ```

#### Extra Bonus Features

These extra bonus features involve using `fetch` to update data on the
`json-server` backend by using `POST`, `PATCH`, and `DELETE` requests. **Make sure to
commit your work to save your progress before adding the extra bonus
features!**

1. When a cocktail is suggested ingredients, commented or liked, its details should be 
updated on the backend when a ticket is purchased. Make a request that follows this structure:

   ```txt
   PATCH cocktails/11007

   Request Headers: {
     Content-Type: application/json
   }

   Request Body: {
     "strIngredient5": null,
     "comment": "This is the best coktail ever"
     "likeCount": 1
   }
   ----
   Example Response:
    {
      "idDrink": "11007",
      "strDrink": "Margarita",
      "strDrinkAlternate": null,
      "strTags": "IBA,ContemporaryClassic",
      "strVideo": null,
      "strCategory": "Ordinary Drink",
      "strIBA": "Contemporary Classics",
      "strAlcoholic": "Alcoholic",
      "strGlass": "Cocktail glass",
      "strInstructions": "Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.",
      "strInstructionsES": null,
      "strInstructionsDE": "Reiben Sie den Rand des Glases mit der Limettenscheibe, damit das Salz daran haftet. Achten Sie darauf, dass nur der äußere Rand angefeuchtet wird und streuen Sie das Salz darauf. Das Salz sollte sich auf den Lippen des Genießers befinden und niemals in den Cocktail einmischen. Die anderen Zutaten mit Eis schütteln und vorsichtig in das Glas geben.",
      "strInstructionsFR": null,
      "strInstructionsIT": "Strofina il bordo del bicchiere con la fetta di lime per far aderire il sale.\r\nAvere cura di inumidire solo il bordo esterno e cospargere di sale.\r\nIl sale dovrebbe presentarsi alle labbra del bevitore e non mescolarsi mai al cocktail.\r\nShakerare gli altri ingredienti con ghiaccio, quindi versarli delicatamente nel bicchiere.",
      "strInstructionsZH-HANS": null,
      "strInstructionsZH-HANT": null,
      "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
      "strIngredient1": "Tequila",
      "strIngredient2": "Triple sec",
      "strIngredient3": "Lime juice",
      "strIngredient4": "Salt",
      "strIngredient5": null,
      "strIngredient6": null,
      "strIngredient7": null,
      "strIngredient8": null,
      "strIngredient9": null,
      "strIngredient10": null,
      "strIngredient11": null,
      "strIngredient12": null,
      "strIngredient13": null,
      "strIngredient14": null,
      "strIngredient15": null,
      "strMeasure1": "1 1/2 oz ",
      "strMeasure2": "1/2 oz ",
      "strMeasure3": "1 oz ",
      "strMeasure4": null,
      "strMeasure5": null,
      "strMeasure6": null,
      "strMeasure7": null,
      "strMeasure8": null,
      "strMeasure9": null,
      "strMeasure10": null,
      "strMeasure11": null,
      "strMeasure12": null,
      "strMeasure13": null,
      "strMeasure14": null,
      "strMeasure15": null,
      "strImageSource": "https://commons.wikimedia.org/wiki/File:Klassiche_Margarita.jpg",
      "strImageAttribution": "Cocktailmarler",
      "strCreativeCommonsConfirmed": "Yes",
      "dateModified": "2015-08-18 14:42:59"
      "comment": "This is the best coktail ever"
      "likeCount": 1 
    }
   ```

2. Delete a cocktail from the server. Add a delete button next to each cocktail in the
   cocktail menu. When the button is clicked, remove the cocktail from the list
   and also delete the cocktail on the server:

   ```txt
   DELETE cocktails/11007

   Example Response:
   {}
   ```

3. Add a cocktail to the server and frontend by submitting the new-cocktail form. Update
to the server using a POST request and add to HTML by adding to the list as an li item

```txt
   POST cocktails/

   Request Headers: {
     Content-Type: application/json
   }

   Request Body: {
      "idDrink": "11007",
      "strDrink": "Margarita",
      "strAlcoholic": "Alcoholic",
      "strGlass": "Cocktail glass",
      "strInstructions": "Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.",
      "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
      "strIngredient1": "Tequila",
      "strIngredient2": "Triple sec",
      "strIngredient3": "Lime juice",
      "strIngredient4": "Salt",
      "strMeasure1": "1 1/2 oz ",
      "strMeasure2": "1/2 oz ",
      "strMeasure3": "1 oz ",
   }
   ----
   Example Response:
    {
      "idDrink": "11007",
      "strDrink": "Margarita",
      "strAlcoholic": "Alcoholic",
      "strGlass": "Cocktail glass",
      "strInstructions": "Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.",
      "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
      "strIngredient1": "Tequila",
      "strIngredient2": "Triple sec",
      "strIngredient3": "Lime juice",
      "strIngredient4": "Salt",
      "strMeasure1": "1 1/2 oz ",
      "strMeasure2": "1/2 oz ",
      "strMeasure3": "1 oz ",
    }
   ```

## Challenges you expect to face

1. Learning how to use a Public API with a json server, didn't fully understand this

2. Adding event listeners accurately to ensure search and cocktail selection are working as expected 
instead of running through every item to show the last item in the list


## How you are meeting the requirements of the project

1. Will create web page structure with HTML, style with CSS and add functionality to enable interactivity 
with JavaScript accessing a public API that is handled asynchronously with JSON

2. My entire web application will run on a single page

3. My web application will have an event listener for DOMContentLoaded, for click to show cocktail details 
and to like a cocktail and for submit to search for cocktails by ingredient and add suggestion and comment.

4. My web application will allow for interactivity through liking, adding comments and suggestions.

5. Will ensure reuse of functions to avoid repeating myself.

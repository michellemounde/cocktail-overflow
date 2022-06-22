# Independent Project

A cocktail web application that allows users to explore the types of cocktails that can be made 
using different kinds of alcohol. The user can select or search for an alcohol, explore a list of 
cocktails that can be made using that alcohol. The user can select the cocktail to see the recipe 
and ingredient for that cocktail. Like a cocktail, leave a comment and rating for the cocktail.

## Setup

Clone the repository to your local machine as below:

```console
$ git clone git@github.com:michellemounde/project-cocktail-web-app.git
```

Test your server by visiting this route in the browser:

[https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a](https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a)

Then, open the `index.html` file on your browser to run the application.

Write your code in the `src/index.js` file. The base URL for your API will be
[https://www.thecocktaildb.com/api.php](https://www.thecocktaildb.com/api.php).

## The core features of my MVP

As a user, I can:

1. See the first cocktail detail on page load without having to click on the 
first cocktail available.

   ```txt
   GET api/json/v1/1/lookup.php?i=11000

   Example Response:
    {
      "idDrink": "11000",
      "strDrink": "Mojito",
      "strDrinkAlternate": null,
      "strTags": "IBA,ContemporaryClassic,Alcoholic,USA,Asia,Vegan,Citrus,Brunch,Hangover,Mild",
      "strVideo": null,
      "strCategory": "Cocktail",
      "strIBA": "Contemporary Classics",
      "strAlcoholic": "Alcoholic",
      "strGlass": "Highball glass",
      "strInstructions": "Muddle mint leaves with sugar and lime juice. Add a splash of soda water and fill the glass with cracked ice. Pour the rum and top with soda water. Garnish and serve with straw.",
      "strInstructionsES": null,
      "strInstructionsDE": "Minzblätter mit Zucker und Limettensaft verrühren. Füge einen Spritzer Sodawasser hinzu und fülle das Glas mit gebrochenem Eis. Den Rum eingießen und mit Sodawasser übergießen. Garnieren und mit einem Strohhalm servieren.",
      "strInstructionsFR": null,
      "strInstructionsIT": "Pestare le foglie di menta con lo zucchero e il succo di lime.\r\nAggiungere una spruzzata di acqua di seltz e riempi il bicchiere con ghiaccio tritato.\r\nVersare il rum e riempire con acqua di seltz.\r\nGuarnire con una fetta di lime, servire con una cannuccia.",
      "strInstructionsZH-HANS": null,
      "strInstructionsZH-HANT": null,
      "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/metwgh1606770327.jpg",
      "strIngredient1": "Light rum",
      "strIngredient2": "Lime",
      "strIngredient3": "Sugar",
      "strIngredient4": "Mint",
      "strIngredient5": "Soda water",
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
      "strMeasure1": "2-3 oz ",
      "strMeasure2": "Juice of 1 ",
      "strMeasure3": "2 tsp ",
      "strMeasure4": "2-4 ",
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
      "strImageSource": "https://pixabay.com/photos/cocktail-mojito-cocktail-recipe-5096281/",
      "strImageAttribution": "anilaha https://pixabay.com/users/anilaha-16242978/",
      "strCreativeCommonsConfirmed": "Yes",
      "dateModified": "2016-11-04 09:17:09"
    }
   ```

2. Select an alcohol type or search by cocktail ingredient to see a list of all cocktails 
of that alcohol or ingredient type, select a cocktail in the list by clicking it to 
replace the first cocktail details with it:

   ```txt
   GET api/json/v1/1/search.php?i=vodka

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

3. Like and unlike, rate and comment on a cocktail and see the like, rating and comment update.
//Aaron Lack I399 Project 4
'use strict'
const API_KEY = 1;
const getRecipe = async search => {

    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}&appid=${1}`);

    //Error Checking
    if(response.ok) {
        //If no errors, make sure error message is empty
        document.querySelector('.error').textContent = "";
        
    }
    else {
        //If there is an error, display an error message
        document.querySelector('.error').textContent = "Invalid Entry!";   
    }

    console.log(response);
    const data = await response.json();
    //More Error Checking
    if(data.meals) {
        displayRecipe(data);
    }
    else {
        document.querySelector('.error').textContent = "Invalid Entry!";  
    }
    console.log(data);
}

const displayRecipe = recipes => {
    
    const meals = recipes.meals;
    const mealsInfo = document.querySelector(".recipe-info");
    mealsInfo.innerHTML = ''; //Clears it everytime. 

    meals.forEach(r =>{
      let html = `
                <div class="recipe-desc" data-index="${r.idMeal}">
                    <h2>${r.strMeal}</h2>
                    <img src="${r.strMealThumb}" height="300px" width="300px">
                </div>`;

            mealsInfo.insertAdjacentHTML('beforeend', html);  
    });
    let allMeals = document.querySelectorAll(".recipe-desc"); //Select all recipes
    
    allMeals.forEach(k =>{
        k.addEventListener('click',() =>{
            meals.forEach(j => {
                if(j.idMeal === k.dataset.index) {
                    console.log(k.dataset.index);
                    displayFullRecipe(j); //Calls full recipe
                }
            });

        });

    });
}


const displayFullRecipe = fullRecipe => {
    //Ingredients go here
    let html = '';
    let recipe = document.querySelector(".recipe-info");
    console.log("recipe" + recipe);
    console.log(fullRecipe);
    for(let i = 1; i <= 20; i++) {
        let ingredients = `strIngredient${i}`;
        let measure = `strMeasure${i}`;
        if(fullRecipe[ingredients] != '' && fullRecipe[ingredients] != null) {
            html += `
                        <tr>
                            <td>${fullRecipe[ingredients]}</td>
                            <td>${fullRecipe[measure]}</td>
                        </tr>`;     
        }
    }
    //Check with the video as well. 
    let mealSource = `strSource`;
    let mealVideo = `strYoutube`;
    
    let div = `<div class="ingredients">
    <table>
    <tr>
    <th>Ingredients</th>
    <th>Measurement</th>
    </tr>${html}</table>
    <p><a href="${fullRecipe[mealSource]}">Meal Source</a></p>
    <p><a href="${fullRecipe[mealVideo]}">Meal Video</a></p>
    </div>`;
    recipe.innerHTML = div;  
}

document.getElementById("search").addEventListener('click', () => {
    let search = document.querySelector('.myInput');
    getRecipe(search.value);
});

const randRecipe = async random => {
    const randomResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/random.php?appid=${API_KEY}`);
    console.log(randomResponse.ok);
    const randData = await randomResponse.json();
    console.log(randData);
    displayRecipe(randData);
}

//Event listener for shuffle button
document.getElementById("shuffle").addEventListener('click', () => {
    randRecipe();   
});



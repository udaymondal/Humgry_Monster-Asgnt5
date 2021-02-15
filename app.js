const searchMeal = ()=>{
    const serachText = document.getElementById('searchMeal').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${serachText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeal(data.meals));
}

const displayMeal = meals =>{
    const mealContainer = document.getElementById('mealContainer');
    mealContainer.innerHTML = '';
    meals.forEach(meal => {
       console.log("clicked");
        const mealDiv = document.createElement('div');
        mealDiv.className = 'col-md-3';
        mealDiv.innerHTML = ` 
        <div onclick="getIngredients('${meal.idMeal}')" class="border rounded text-center h-100">
            <img class="img-fluid rounded-top" src="${meal.strMealThumb}" alt="">
            <h4 class="h5 py-4 px-2 mb-0">${meal.strMeal}</h4>
        </div>
        `
        mealContainer.appendChild(mealDiv);
    })
}

const getIngredients = mealId =>{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayIngredients(data.meals[0]))
}

const displayIngredients = ingredients =>{
    console.log(ingredients);
    const mealIngredients = [];
    let j= 0;
    for (let key in ingredients){
        // console.log(key);
        j++;
        const ingredient = `strIngredient${j}`;    // j increamrnting $j{[++++]}
        mealIngredients.push(ingredients[ingredient]);
    }
    console.log(mealIngredients);
}
//obj keyf
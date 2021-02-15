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
        console.log(meal);
        const mealDiv = document.createElement('div');
        mealDiv.className = 'col-md-3';
        mealDiv.innerHTML = ` 
        <div onclick="displayIngredients('')" class="border rounded text-center h-100">
            <img class="img-fluid rounded-top" src="${meal.strMealThumb}" alt="">
            <h4 class="h5 py-4 px-2 mb-0">${meal.strMeal}</h4>
        </div>
        `
        mealContainer.appendChild(mealDiv);
    })
}
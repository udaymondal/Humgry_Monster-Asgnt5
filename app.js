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
        const mealDiv = document.createElement('div');
        mealDiv.className = '';
        console.log(meal.strMeal);
    });
}
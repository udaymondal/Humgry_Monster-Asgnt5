fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
.then(res => res.json())
.then(data => displayAllCategory(data.meals));

const displayAllCategory = categories => {
    const mealCategories = document.getElementById('mealCategories');
    //console.log(categories);
    categories.forEach(category => {
        console.log(categories.strIngredient);
        
   })
}
// www.themealdb.com/api/json/v1/1/search.php?s=beef
let meals = [];
const results = document.querySelector(".results");

const fetchMeals = async () => {
  await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=chicken")
    .then((res) => res.json())
    .then((data) => {
      meals = data.meals;
      console.log(meals);
    });
};

const displayMeals = async () => {
  await fetchMeals();
  console.log(results);
  meals
    .map((meal) => {
      results.innerHTML += `<li>
      <h3>${meal.strMeal}</h3>
      <img src="${meal.strMealThumb}" alt ="picture of ${meal.strMeal}">
    </li>`;
      console.log(meal.strMeal);
    })
    .join(" ");
};

displayMeals();

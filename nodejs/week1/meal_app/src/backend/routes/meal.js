const express = require("express");
const app = express();

const mealsJson = require(__dirname + '/../data/meals.json');
const reviewsJson = require(__dirname + '/../data/reviews.json');

mealsJson.forEach(meal => {
    meal.review = [];
    reviewsJson.forEach(mealreview => {
        if (mealreview.mealId === meal.id) {
            meal.review.push(mealreview)
        }
    })
})

app.get("/", (request, response) => {
    const randomMeal = mealsJson[Math.floor(Math.random() * mealsJson.length)];
    response.send(randomMeal);
});

module.exports = app;

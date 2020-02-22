const express = require("express");
const app = express();

const mealsJson = require(__dirname + '/../data/meals.json');
const reviewsJson = require(__dirname + '/../data/reviews.json');

const largeMealsArray = mealsJson.filter(meal => meal.maxNumberOfGuests >= 5)
largeMealsArray.forEach(meal => {
    meal.review = [];
    reviewsJson.forEach(mealreview => {
        if (mealreview.mealId === meal.id) {
            meal.review.push(mealreview)
        }
    })
})

app.get("/", (request, response) => {
    response.send(largeMealsArray);
});

module.exports = app;

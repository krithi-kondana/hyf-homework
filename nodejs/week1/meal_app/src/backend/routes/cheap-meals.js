const express = require("express");
const app = express();

const mealsJson = require(__dirname + '/../data/meals.json');
const reviewsJson = require(__dirname + '/../data/reviews.json');

const cheapMealsArray = mealsJson.filter(meal => meal.price < 50);
cheapMealsArray.forEach(meal => {
meal.review = reviewsJson.filter(mealReview => mealReview.mealId === meal.id)   
});

app.get("/", (request, response) => {
    response.send(cheapMealsArray);
});

module.exports = app;

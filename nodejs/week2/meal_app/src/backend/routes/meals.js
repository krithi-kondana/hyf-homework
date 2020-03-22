const express = require("express");
const app = express();
const router = express.Router();

const mealsJson = require(__dirname + '/../data/meals.json');
const reviewsJson = require(__dirname + '/../data/reviews.json');

mealsJson.forEach(meal => {
    meal.review = reviewsJson.filter(mealReview => mealReview.mealId === meal.id)
});

router.get("/", (req, res) => {
    const maxPrice = req.query["maxPrice"];
    const title = req.query["title"];
    const createdAfter = req.query["createdAfter"];
    const limit = req.query["limit"];

    if (req.originalUrl === '/meals') {
        res.send(mealsJson)
    }
    //  http://localhost:3000/meals

    if (maxPrice) {
        if (isNaN(parseFloat(maxPrice))) {
            res.status(400).send(`Error!Please enter a number`);
        }
        else {
            const mealsWithPriceSmallerThanMaxPrice = mealsJson.filter(meal => meal.price < Number(maxPrice))
            res.send(mealsWithPriceSmallerThanMaxPrice);
        }
    }
    //  http://localhost:3000/meals?maxPrice=50

    if (title) {
        const matchedTitle = mealsJson.some(meal => meal.title.toLowerCase().includes(title.toLowerCase()))    //returns true or false 
        if (matchedTitle) {
            const mealsWithMatchedTitle = mealsJson.filter(meal => meal.title.toLowerCase().includes(req.query["title"].toLowerCase()))
            res.send(mealsWithMatchedTitle);
        }
        else {
            res.send(`No meal with title matching ${title}`)
        }
    }
    // http://localhost:3000/meals?title=indian

    if (createdAfter) {
        if (isNaN(parseFloat(createdAfter))) {
            res.status(400).send(`Error!please enter a date format yyyy-mm-dd`);
        }
        else {
            const mealsCreatedAfterGivenDate = mealsJson.filter(meal => new Date(meal.createdAt) > new Date(createdAfter))
            res.send(mealsCreatedAfterGivenDate)
        }
    }
    // http://localhost:3000/meals?createdAfter=2019-12-06

    if (limit) {
        if (isNaN(parseFloat(limit))) {
            res.status(400).send(`Error!Please enter a number`);
        }
        else {
            const spicificNumberOfMeals = mealsJson.slice(0, (Number(limit)))
            res.send(spicificNumberOfMeals)
        }
    }
    // http://localhost:3000/meals?limit=1

    res.send(`Please enter proper query`);

})


router.get("/:id", (req, res) => {
    const matchedId = mealsJson.some(mealId => mealId.id == req.params.id); //returns true or false
    if (matchedId) {
        const matchedIDMeal = mealsJson.filter(meal => meal.id === Number(req.params.id));
        res.send(matchedIDMeal);
    }

    else {
        if (isNaN(parseFloat(req.params.id))) {
            res.status(400).send(`Error!Please enter a number`);
        }
        else {
            res.status(400).send(`No meal with id ${Number(req.params.id)}`);
        }
    }
})
// http://localhost:3000/meals/2

module.exports = router;

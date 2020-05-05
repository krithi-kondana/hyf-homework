const express = require("express");
const app = express();
const router = express.Router();

const mealsJson = require(__dirname + '/../data/meals.json');
const reviewsJson = require(__dirname + '/../data/reviews.json');

mealsJson.forEach(meal => {
    meal.review = reviewsJson.filter(mealReview => mealReview.mealId === meal.id)
});

router.get("/", (req, res) => {
    const { maxPrice,title, createdAfter, limit } = req.query

    if (Object.entries(req.query).length === 0) {
        res.send(mealsJson)
    }
    //  http://localhost:3000/meals
    
    const result = mealsJson
    .filter(meal => {
        if (maxPrice && isNaN(parseFloat(maxPrice))) {
            res.status(400).send(`Error!Please enter a number`);
        }
        else if(maxPrice) {
            return meal.price < Number(maxPrice)
        } 
        return true
    })
    .filter(meal => {
        if (createdAfter && isNaN(parseFloat(createdAfter))) {
            res.status(400).send(`Error!please enter a date format yyyy-mm-dd`);
            }
        if(createdAfter) {
            return new Date(meal.createdAt) > new Date(createdAfter)
        }
        return true
    })
    .filter(meal => {
        if(title) {
            return meal.title.toLowerCase().includes(title.toLowerCase())
        } 
        return true
    })
    .slice(0, limit != null ? Number(limit) : mealsJson.length)
    
    res.send(result);
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

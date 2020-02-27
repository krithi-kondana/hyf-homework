const express = require("express");
const app = express();

const reviewsJson = require(__dirname + '/../data/reviews.json');

app.get("/", (request, response) => {
    response.send(reviewsJson);
});

app.get("/:id", (req, res) => {
    const matchedId = reviewsJson.some(reviewId => reviewId.id === Number(req.params.id));
    if (matchedId) {
        const matchedIdReview = reviewsJson.filter(review => review.id === Number(req.params.id));
        res.send(matchedIdReview);
    }
    else {
        res.send(`No review with id ${Number(req.params.id)}`)
    }
})

module.exports = app;
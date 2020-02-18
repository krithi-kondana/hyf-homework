const express = require("express");
const app = express();

const reservationsJson = require(__dirname + '/../data/reservations.json');

app.get("/", (request, response) => {
    response.send(reservationsJson);
});

module.exports = app;
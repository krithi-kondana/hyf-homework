const express = require("express");
const app = express();

const reservationsJson = require(__dirname + '/../data/reservations.json');

app.get("/", (request, response) => {
    let randomReservation = reservationsJson[Math.floor(Math.random() * reservationsJson.length)];
    response.send(randomReservation);
});

module.exports = app;
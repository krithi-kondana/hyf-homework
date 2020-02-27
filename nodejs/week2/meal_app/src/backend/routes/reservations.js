const express = require("express");
const app = express();

const reservationsJson = require(__dirname + '/../data/reservations.json');

app.get("/", (request, response) => {
    response.send(reservationsJson);
});


app.get("/:id", (req, res) => {
    const matchedId = reservationsJson.some(reservationId => reservationId.id === Number(req.params.id));
    if (matchedId) {
        const matchedIdReservation = reservationsJson.filter(reservation => reservation.id === Number(req.params.id));
        res.send(matchedIdReservation);
    }
    else {
        res.send(`No reservation with id ${Number(req.params.id)}`)
    }
})

module.exports = app;

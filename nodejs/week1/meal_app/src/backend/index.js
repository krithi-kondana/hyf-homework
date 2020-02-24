const express = require("express");
const app = express();

const mealsRouter = require("./routes/meals.js");
const cheapMealsRouter = require("./routes/cheap-meals.js");
const largeMealsRouter = require("./routes/large-meals.js");
const mealRouter = require("./routes/meal.js");
const reservationsRouter = require("./routes/reservations.js");
const reservationRouter = require("./routes/reservation.js");


app.use("/meals", mealsRouter);
app.use("/cheap-meals", cheapMealsRouter);
app.use("/large-meals", largeMealsRouter);
app.use("/meal", mealRouter);
app.use("/reservations", reservationsRouter);
app.use("/reservation", reservationRouter);

app.listen(3000);
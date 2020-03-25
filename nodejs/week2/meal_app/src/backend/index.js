const express = require("express");
const app = express();

const mealsRouter = require("./routes/meals.js");
const reservationsRouter = require("./routes/reservations.js");
const reviewsRouter = require("./routes/reviews.js");

const router = express.Router();

app.use((req, res, next) => {
    console.log(`${new Date().toLocaleString()} request received for path:${req.originalUrl}`)
    next()
});

router.use("/meals", mealsRouter);
router.use("/reservations", reservationsRouter);
router.use("/reviews", reviewsRouter);
app.use("/", router);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})

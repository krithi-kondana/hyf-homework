const express = require('express');
const app = express();

app.get('/numbers/add', (req, res) => {
    let sum = Number(req.query["first"]) + Number(req.query["second"]);
    res.send(`${sum}`);
});

// http://localhost:3000/numbers/add?first=3&second=7    //10

app.get('/numbers/multiply/:first/:second', (req, res) => {
    let product = Number(req.params.first) * Number(req.params.second);
    res.send(`${product}`);
});

// http://localhost:3000/numbers/multiply/3/5    //15

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});


const express = require("express");
const app = express();

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: false })) // for parsing application/x-www-form-urlencoded

// Calculator using :param
app.get('/calculator/multiply', (req, res) => {
    const arrayOfStringedNumbers = Object.values(req.query);
    const merged = [].concat.apply([], arrayOfStringedNumbers); //this is done to merge nested array caused by using same Params twice. Ex: [ '2', [ '2', '4' ] ]
    const arrayOfNumbers = merged.map(Number); // to unstring number
    const productOfNumbers = arrayOfNumbers.reduce((total, num) => total * num)
    res.send(`${productOfNumbers}`);
})


// Calculator using req.body
app.post('/calculator', (req, res) => {
    const method = req.body.method;
    const arrayOfStringedNumbers = Object.values(req.query);
    const merged = [].concat.apply([], arrayOfStringedNumbers); //this is done to merge nested array caused by using same Params twice. Ex: [ '2', [ '2', '4' ] ]
    const arrayOfNumbers = merged.map(Number); // to unstring number

    if (method === 'multiply') {
        const productOfNumbers = arrayOfNumbers.reduce((total, num) => total * num)
        return res.send(`Product of numbers: ${productOfNumbers}`);
    } else if (method === 'add') {
        const sumOfNumbers = arrayOfNumbers.reduce((total, num) => total + num)
        return res.send(`Sum of numbers: ${sumOfNumbers}`);
    } else if (method === 'divide') {
        const divisionOfNumbers = arrayOfNumbers.reduce((total, num) => total / num)
        return res.send(`Division of numbers: ${divisionOfNumbers}`);
    } else if (method === 'subtract') {
        const subtractionOfNumbers = arrayOfNumbers.reduce((total, num) => total - num)
        return res.send(`Subtraction of numbers: ${subtractionOfNumbers}`);
    }

})


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
})
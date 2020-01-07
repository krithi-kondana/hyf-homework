// Create an array with 3 items. All items should be functions. Iterate through the array and call all the functions.
const functions = [functionone, functiontwo, functionthree];

function functionone() {
    console.log('This is first function');
}
function functiontwo() {
    console.log('This is second function');
}
function functionthree() {
    console.log('This is third function');
}


functions.forEach(func => { return func() });
console.log('\n');




// Create a function as a const and try creating a function normally. Call both functions.
const functionAsConstant = function () {
    console.log('Function created as a constant');
}
functionAsConstant();


function normalFunction() {
    console.log('Function created normally');
}
normalFunction();
console.log('\n');



// Create an object that has a key whose value is a function. Try calling this function.
const myObject = {
    myFunction: sayHello
}
function sayHello() {
    console.log('Hello world!');
}
myObject.myFunction();

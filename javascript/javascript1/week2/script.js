// Flight booking fullname function
console.log("..................flight booking.................");

function getFullname(firstname, surname, useFormalName) {
  if (useFormalName) {
    return `Lord ${firstname} ${surname}`;
  }
  else {
    return `${firstname} ${surname}`;
  }
}

var fullname1 = getFullname("Krithi", "kondana", true);
var fullname2 = getFullname("Krithi", "kondana", false);
console.log(fullname1);
console.log(fullname2);
console.log("\n");





// Event application
console.log("................event application..............");

function getWeekDay(date) {
  var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];   //Created an array containing each day, starting with Sunday. 
  var day = date.getDay();   //Used getDay() method to get the day.
  return weekdays[day];  //Return the element that corresponds to that index.
}

var date = new Date();
var weekDay = getWeekDay(date);

var eventDate = new Date('November 21, 2019');
var eventDay = getWeekDay(eventDate);

console.log(`Today is ${weekDay} and the event is in ${Math.round((eventDate - date) / (1000 * 60 * 60 * 24))} days. Therefore the event will be held on ${eventDay}`);
console.log("\n");




// Weather wear
console.log(".....................weather wear.............");

function weatherWear(temperature) {

  if (temperature <= 0 && temperature >= -20) {
    return "Its freezing cold. Please wear Beanie,Sweater,Gloves,jeans,Scarf,Socks";
  }
  else if (temperature <= 10 && temperature > 0) {
    return "Its cold. Please wear fleece jacket";
  }
  else if (temperature <= 20 && temperature > 10) {
    return "Its not that cold. You can wear long sleeve top and jeans";
  }
  else if (temperature <= 30 && temperature > 20) {
    return "Its bit hot outside. You can wear shorts and a T-shirt";
  }
  else if (temperature <= 40 && temperature > 30) {
    return "Its very hot outside. Wear hawaiian shirt or tank top and shorts with sun glasses";
  }
  else {
    return "Please insert proper temperature";
  }
}
var clothesToWear = weatherWear(20);
console.log(clothesToWear);
console.log("\n");





// Student manager
console.log(".............student manager.........");

let class07Students = [];

function addStudentToClass(studentName) {

  if (studentName.toLowerCase() === "queen" && class07Students.length <= 6) {
    class07Students.push(studentName);
    console.log(class07Students);
  }
  else if (class07Students.length >= 6) {
    console.log("Cannot add more students to class 07");
  }
  // I have used Array.prototype.indexOf() method to see if the name exists in the array and made sure to convert the cases
  else if (class07Students.indexOf(studentName.toLowerCase()) !== -1) {
    console.log(`${studentName} is already in the class`);
  }
  else if (studentName === "") {
    console.log("You cannot add an empty string to a class");
  }
  else {
    class07Students.push(studentName);
    console.log(class07Students);
  }
}
addStudentToClass("Diya");
addStudentToClass("queen");


function getNumberOfStudents() {
  console.log(`There are ${class07Students.length} students in the class`);
}
getNumberOfStudents();
console.log("\n");






//candy helper
console.log(".................candy helper............");

var boughtCandyPrices = []
function addCandy(candyType, weight) {
  var sweetPrice = 0.5;
  var chocolatePrice = 0.7;
  var toffeePrice = 1.1;
  var chewinggumPrice = 0.03;
  if (candyType === "sweet") {
    boughtCandyPrices.push(weight * sweetPrice)
  }
  else if (candyType === "chocolate") {
    boughtCandyPrices.push(weight * chocolatePrice)
  }
  else if (candyType === "toffee") {
    boughtCandyPrices.push(weight * toffeePrice)
  }
  else if (candyType === "chewinggum") {
    boughtCandyPrices.push(weight * chewinggumPrice)
  }
  else {
    console.log("Please enter correct name");
  }
  console.log(boughtCandyPrices);
}

addCandy("toffee", 20);
addCandy("chocolate", 30);


var amountToSpend = Math.random() * 100;
console.log(amountToSpend);

function canBuyMoreCandy() {
  var totalPrice = 0;
  for (i = 0; i < boughtCandyPrices.length; i++) {
    totalPrice += boughtCandyPrices[i];
  }
  if (totalPrice < amountToSpend) {
    console.log("You can buy more, so please do!");
  }
  else {
    console.log("Enough candy for you!");
  }
}
canBuyMoreCandy();
console.log("Freecodecamp username: " + "krithi-kondana");


// Age-ify (A future age calculator)
const yearOfBirth = 1989;
const yearFuture = 2030;
const age = yearFuture - yearOfBirth;
console.log("You will be " + age + " years old in " + yearFuture + ".");


// Goodboy-Oldboy (A dog age calculator)
const dogYearOfBirth = 2000;
const dogYearFuture = 2005;
let dogYear;
const x = 4;
let shouldShowResultInDogYears = false;
if (shouldShowResultInDogYears) {
dogYear = dogYearFuture - dogYearOfBirth;
console.log("Your dog will be " + dogYear + " dog  years old in " + dogYearFuture)
}
else { 
 if (dogYearFuture - dogYearOfBirth === 1) {
    dogYear = 15;   
}
 if (dogYearFuture - dogYearOfBirth === 2) {
     dogYear = x * (x+1) + x;   
}
 if (dogYearFuture - dogYearOfBirth === 3) {
     dogYear = x * (x+2) + x;   
}
 if (dogYearFuture - dogYearOfBirth === 4) {
     dogYear = x * (x+3) + x;   
 }
 if (dogYearFuture - dogYearOfBirth === 5) {
     dogYear = x * (x+4) + x;   
 }
 if (dogYearFuture - dogYearOfBirth === 6) {
     dogYear = x * (x+5) + x;   
 }
 if (dogYearFuture - dogYearOfBirth === 7) {
     dogYear = x * (x+6) + x;   
 }
 if (dogYearFuture - dogYearOfBirth === 8) {
     dogYear = x * (x+7) + x;   
 }
 if (dogYearFuture - dogYearOfBirth === 9) {
     dogYear = x * (x+8) + x;   
 }
 if (dogYearFuture - dogYearOfBirth === 10) {
     dogYear = x * (x+9) + x;   
 }
 if (dogYearFuture - dogYearOfBirth === 11) {
     dogYear = x * (x+10) + x;   
 }
 if (dogYearFuture - dogYearOfBirth === 12) {
     dogYear = x * (x+11) + x;   
 }
 if (dogYearFuture - dogYearOfBirth === 13) {
     dogYear = x * (x+12) + x;   
 }
 if (dogYearFuture - dogYearOfBirth === 14) {
     dogYear = x * (x+13) + x;   
 }
 if (dogYearFuture - dogYearOfBirth === 15) {
     dogYear = x * (x+14) + x;   
 }
 if (dogYearFuture - dogYearOfBirth === 16) {
     dogYear = x * (x+15) + x;   
 }
console.log("Your dog will be " + dogYear + " human years old in " + dogYearFuture)

if (dogYearFuture - dogYearOfBirth > 16){
     console.log("Dogs cannot survive more than 16 years");  
}
if (dogYearFuture - dogYearOfBirth < 0){
    console.log("Your dog is not yet born");  
}
}



// Housey pricey (A house price estimator)
const person1 = {
    name: "Peter",
    gardenSizeInMeters: 100,
    houseCost: 2500000,
    widthInMeters : 8,
    lengthInMeters:10,
    heightInMeters:10
}
const person2 = {
    name: "Julia",
    gardenSizeInMeters: 70,
    houseCost: 1000000,
    widthInMeters : 5,
    lengthInMeters:11,
    heightInMeters:8
}
var volumeInMeters;
volumeInMeters =  person1.widthInMeters * person1.lengthInMeters * person1.heightInMeters;
housePrice = volumeInMeters * 2.5 * 1000 + person1.gardenSizeInMeters * 300;
if (person1.houseCost>housePrice) {
    console.log(person1.name + "," + "you are paying too much. " + "The actual cost estimate for this house is " + housePrice + ".");
}
else {
    console.log(person1.name + "," + "you are paying too little. " + "The actual cost estimate for this house is " + housePrice + "." );   
}
volumeInMeters =  person2.widthInMeters * person2.lengthInMeters * person2.heightInMeters;
housePrice = volumeInMeters * 2.5 * 1000 + person2.gardenSizeInMeters * 300;
if (person2.houseCost>housePrice) {
    console.log(person2.name + "," + "you are paying too much. " + "The actual cost estimate for this house is " + housePrice + ".");
}
else {
    console.log(person2.name + "," + "you can buy this. Its cheap. " + "The actual cost estimate for this house is " + housePrice + "." );   
}



// Ez Namey (Startup name generator)
const firstWords = ["Partner","Biz","Rapid","Initial","Venture","Business","Success","Startup","Fairway","Little"];
const secondWords = ["profit","start","revolution","invite","session","point","recipe","king","solutions","mesh"];
const startupName = firstWords[Math.floor(Math.random() * firstWords.length)] + " " + secondWords[Math.floor(Math.random() * secondWords.length)];
console.log("The start up: " + startupName + " contains " + startupName.length + " characters.");


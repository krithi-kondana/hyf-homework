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
dogAgeInDogYear = dogYearFuture - dogYearOfBirth;
console.log("Your dog will be " + dogAgeInDogYear + " dog  years old in " + dogYearFuture)
}
else { 
    dogAgeInHumanYear = (dogYearFuture - dogYearOfBirth)* 7;
console.log("Your dog will be " + dogAgeInHumanYear + " human years old in " + dogYearFuture)
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


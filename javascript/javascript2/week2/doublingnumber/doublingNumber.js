const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = numbers
    .filter(odd => odd % 2)
    .map(odd => odd * 2);
console.log("The doubled numbers are", result);



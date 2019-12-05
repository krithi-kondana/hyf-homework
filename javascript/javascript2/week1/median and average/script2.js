let housePrices = [3000000, 3500000, 1300000, 40000000, 100000000, 8000000, 2100000];
document.getElementById('prices').value = housePrices;


function median() {
    let median = calculate("median");
    document.getElementById('median').innerHTML = `Median: ${median}`;
    console.log(median);
}


function average() {
    let average = calculate("average");
    document.getElementById('average').innerHTML = `Average: ${average}`;
    console.log(average);
}


function calculate(input) {
    let result = "";
    if (input == "median") {
        let ascend = housePrices.sort((a, b) => a - b);  //arranging houseprices array in ascending order
        result = ascend[Math.floor(housePrices.length / 2)];
    }

    else {
        let sum = 0;
        for (let i = 0; i < housePrices.length; i++) {
            sum += housePrices[i];
        }
        result = Math.round(sum / housePrices.length);

    }
    return result;
}


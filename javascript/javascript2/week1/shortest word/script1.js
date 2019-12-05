const danishWords = ["bil", "plante", "kaffe", "ø", "bog", "planetarium"];
document.getElementById('word').value = danishWords;

function shortestWord() {
  const orderedArray = danishWords.sort((a, b) => {   //arranging in ascending order of danish words length
    return a.length - b.length;
  });

  const resultArray = [];
  let minLength = orderedArray[0].length;   //considering the length of first value to be smallest

  let result = orderedArray[0];  //assigning first index value to the result variable as it has the smallest length

  resultArray.push(result);

  for (let i = 1; i < danishWords.length; i++) {  //only executed if the smallest value is more than one, with same length
    if (danishWords[i].length == minLength) {
      resultArray.push(danishWords[i]);
    }
  }
  document.getElementById('result').innerHTML = resultArray;

}


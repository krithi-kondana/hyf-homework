let name;

const spiritAnimal = [
  "crying cat",
  "laughing leapord",
  "dazzling donkey",
  "boring bear",
  "smiling squirrel",
  "weeping wolf",
  "dreaming dog",
  "roaring rat"
];

function button() {
  if (document.getElementById("event").value === "1") {
    combine();
  }
}

function hover() {
  if (document.getElementById("event").value === "2") {
    combine();
  }
}

function input() {
  myName();
  if (document.getElementById("event").value === "3") {
    combine();
  }
}

function combine() {
  if (name) {
    let spiritName = spiritAnimal[Math.floor(Math.random() * spiritAnimal.length)];
    document.getElementById("spirit-name").innerHTML = `${name} - ${spiritName}`;
  }
  else {
    document.getElementById("spirit-name").innerHTML = "Please enter your name first";
  }
}

let animalName = document.getElementById("name");
animalName.addEventListener("click", button);
animalName.addEventListener("mouseover", hover);
animalName.addEventListener("input", input);

function myName() {
  name = document.getElementById("name").value;
}

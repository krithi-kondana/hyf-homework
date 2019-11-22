console.log(".............................save a note.................................");
// save a note
const notes = [];
function addNote(content, id) {

    notes.push({ content, id });
}
addNote("apple", 10);
addNote("orange", 6);

console.log(notes);   //output shows grapes instead of apple because i have used a unique feature of replacing content based on id in line 104. Thus apple gets replaced with grapes everywhere
// I would either change this name here or change it on the other side,cause if it change then it doesn't satisfy the task request
// that asked to save a note into the array, something that is not always true due to the change that you have done below.
// notes is declared as global variable, even if you have initialized as a const , it will affect , cause you are changing the content inside the object , but not the array itself.

console.log("\n");




console.log(".............................get a note.................................");
// get a note
const idNotes = [];
function getNoteFromId(id) {

    if (id && !isNaN(id)) {

        let matchId = false;

        for (i = 0; i < notes.length; i++) {

            if (id === notes[i].id) {
                idNotes.push(notes[i]);
                matchId = true
            }

        }
        if (!matchId) {
            console.log("There is no content matching with this id");

        }
    }
    else {
        console.log("Please enter valid id");

    }
}
getNoteFromId(10);
getNoteFromId(5);
getNoteFromId(6);
getNoteFromId();
console.log(idNotes);
console.log("\n");



console.log("............................get all notes..................................");
// get all notes
const getAllNotes = notes;
console.log(getAllNotes);
console.log("\n");



console.log("...........................Log out notes...................................");
// Log out notes
function logOutNotesFormatted() {

    for (i = 0; i < getAllNotes.length; i++) {

        console.log(`The note with id ${getAllNotes[i].id}, has the following note text: ${getAllNotes[i].content}.`);
    }
}
logOutNotesFormatted();
console.log("\n");





// Unique feature
//this function allows users to replace a content based on the id
function replaceNote(content, id) {

    if (id && !isNaN(id)) {

        let matchId = false;

        for (i = 0; i < notes.length; i++) {

            if (id === notes[i].id) {
                notes[i].content = content;
                matchId = true
            }

        }
        if (!matchId) {
            console.log("There is no notes with this id");
        }
    }
    else {
        console.log("Please enter valid id");
    }

}
console.log(notes);

replaceNote("grapes", 10);
console.log(notes);





console.log("...............................CactusIO-interactive (Smart phone usage app) optional...............................");
// CactusIO-interactive (Smart phone usage app) optional
console.log("..............................Adding an activity................................");
// Adding an activity
const activities = [];
let todayDate = new Date().toLocaleDateString();    //implemented today's date as per optional homework task

function addActivity(date, activity, duration) {

    activities.push({ date, activity, duration });

}
addActivity(todayDate, 'Youtube', 30);
addActivity(todayDate, 'facebook', 20);
addActivity(todayDate, 'instagram', 40);


console.log(activities);
console.log("\n");






// Show my status
console.log("..............................Show my status................................");
function showStatus(todayDate) {

    let totalDuration = 0;

    if (activities.length === 0) {
        console.log("Add some activities before calling showStatus");

    }
    else {
        for (let i = 0; i < activities.length; i++) {

            const total = activities[i].duration;
            totalDuration = totalDuration + total;

        }
        if (totalDuration < 120) {   //usage limit
            console.log(`You have added ${activities.length} activities. They amount to ${totalDuration} minutes of usage`);
        }
        else {
            console.log("You have reached your limit, no more smartphoning for you!");

        }
    }
}
showStatus(todayDate);


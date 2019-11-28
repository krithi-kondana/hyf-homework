let name;
const todo = [];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const favoriteDish = [];
const event = [];


function getReply(command) {

    let stringCommand = command.toLowerCase();
    let splitCommand = command.split(' ');


    //introduction part
    if (stringCommand.includes("hello") && name === undefined) {
        name = splitCommand.pop();
        console.log(`Nice to meet you ${name}`);
    }

    else if (command.includes("hello") && name) {
        console.log(`Once again, nice to meet you ${name}`);
    }

    else if (stringCommand.includes("what is my name") && name === undefined) {
        console.log(`Please mention your name first`);
    }

    else if (stringCommand.includes("what is my name")) {
        console.log(`Your name is ${name}`);
    }




    //todos
    else if (stringCommand.startsWith("add") && stringCommand.endsWith("to my todo")) {
        let task = splitCommand.slice(1, -3).join(' ');
        todo.push(task);
        console.log(`${task} added to your todo`);
        console.log(todo);
    }

    else if (stringCommand.startsWith("remove") && stringCommand.endsWith("from my todo")) {
        let removeFirstItem = todo.shift();
        console.log(`Removed ${removeFirstItem} from your todo`);
        console.log(todo);
    }

    else if (stringCommand.includes("what is on my todo?")) {
        console.log(`you have ${todo.length} todos - ${todo}`);
    }




    //what day is today?
    else if (stringCommand.includes("what day is it today")) {
        let today = new Date();
        let date = today.getDate();
        let month = months[today.getMonth()];
        let year = today.getFullYear();
        console.log(`Today is ${date} of ${month} ${year}`);
    }




    //simple calculation
    else if (stringCommand.includes('+') || stringCommand.includes('*') || stringCommand.includes('-')) {

        let num1 = splitCommand.slice(2, -2);
        let num2 = splitCommand.slice(4);

        if (stringCommand.includes('+')) {
            let total = Number(num1) + Number(num2);  //Number() converts number string to number
            console.log(`Sum of ${num1} and ${num2} is ${total}`);
        }
        else if (stringCommand.includes('*')) {
            let total = Number(num1) * Number(num2);
            console.log(`Product of ${num1} and ${num2} is ${total}`);
        }
        else if (stringCommand.includes('-')) {
            let total = Number(num1) - Number(num2);
            console.log(`Subtraction of ${num1} and ${num2} is ${total}`);
        }
    }



    //favorite dish
    else if (stringCommand.includes("my favorite dish is")) {
        let dish = splitCommand.pop();
        favoriteDish.push(dish);
        console.log(`${dish} is added to your favorite dish`);
    }

    else if (stringCommand.includes("what is my favorite dish")) {
        console.log(`Your favorite dish is ${favoriteDish}`);
    }



    //setting timer
    else if (stringCommand.includes("set a timer")) {
        let time = splitCommand.slice(4, 5);
        let timer = Number(time);
        console.log(`Timer set for ${timer} minutes`);
        setTimeout(() => alert("Timer done"), timer * 60 * 1000);  //here '() =>' is called arrow function and is similar to 'function()'
    }



    //calender events
    else if (stringCommand.startsWith("add") && stringCommand.endsWith("calendar")) {
        let calenderEvent = splitCommand.slice(1, -3);
        let eventName = calenderEvent.slice(0, -2).join(' ');
        let eventDate = calenderEvent.pop();

        event.push({ name: eventName, date: eventDate });

        console.log(`${eventName} added to your calendar`);

        console.log(event);
    }

    else if (stringCommand.startsWith("what") && stringCommand.endsWith("this week?")) {
        console.log(`This week you have ${event.length} event:`)

        for (let i = 0; i < event.length; i++) {

            console.log(` ${event[i].name} on ${event[i].date}`);
        }

    }

    else {
        console.log("Please give a valid command");
    }

}

getReply('Hello my name is krithi');
getReply('hello my name is krithi');
getReply('What is my name');
getReply('Add fishing to my todo');
getReply('Add singing in the shower to my todo');
getReply('Remove fishing from my todo');
getReply('What is on my todo?');
getReply('What day is it today?');
getReply('what is 4 + 3');
getReply('what is 8 * 5');
getReply('what is 7 - 5');
getReply('My favorite dish is lasagne');
getReply('My favorite dish is pizza');
getReply('What is my favorite dish');
getReply('Set a timer for 4 minutes');
getReply('Add Bike ride the 28/11/2019 to my calendar');
getReply('Add movie the 30/11/2019 to my calendar');
getReply('What am I doing this week?');











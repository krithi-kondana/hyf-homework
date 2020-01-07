// 1. Log out the text 'Called after 2.5 seconds' 2.5 seconds after the script is loaded.
function delaylog() {
    console.log('Called after 2.5 seconds');
}
function timeout() {
    setTimeout(delaylog, 2.5 * 1000)
}
timeout();



// 2. Create a function that takes 2 parameters: delay and stringToLog. Calling this function should log out the stringToLog after delay seconds. Call the function you have created with some different arguments
function delayedlog(delay, stringToLog) {
    setTimeout(timedout, delay * 1000)

    function timedout() {
        console.log(stringToLog);
    }
}
delayedlog(2, 'This string is logged after 2 seconds')
delayedlog(4, 'This string is logged after 4 seconds')




// 3. Create a button in html. When clicking this button, use the function you created in the previous task to log out the text: 'Called after 5 seconds' 5 seconds after the button is clicked
const btn = document.getElementById('btn');
btn.addEventListener('click', logDelay)

function logDelay() {
    delayedlog(5, 'Called after 5 seconds')
}



// 4. earth and saturn functions
const earthLogger = () => { console.log('earth') }

const saturnLogger = () => { console.log('saturn') }

function planetLogFunction(planetlogger) {
    planetlogger();
}
planetLogFunction(earthLogger);
planetLogFunction(saturnLogger);




// 5. Create a button with the text called "Log location". When this button is clicked the location (latitude, longitude) of the user should be logged out 
const location1 = document.getElementById('location')
location1.addEventListener('click', myLocation);

function myPosition(position) {
    latitudes = position.coords.latitude;
    longitudes = position.coords.longitude;
    document.getElementById('location-content').innerHTML = `Latitude: ${latitudes} <br> Longitude: ${longitudes}`;
}
function myLocation() {
    navigator.geolocation.getCurrentPosition(myPosition)
}



// 6. Optional Now show that location on a map
// let map;
// let infoWindow;
// function initMap() {
//     map = new google.maps.Map(document.getElementById('map'), {
//         center: { lat: 55.6883968, lng: 12.510822},
//         zoom: 10
//     });
//     infoWindow = new google.maps.InfoWindow;
// }



// 7. Create a function called runAfterDelay. It has two parameters: delay and callback
function runAfterDelay(delay, callback) {
    setTimeout(callback, delay * 1000)
}
runAfterDelay(5, function () {
    console.log('Logged after 5 seconds');

});



// 8. double clicking
const dblbtn = document.getElementById('dblbtn')
dblbtn.addEventListener('dblclick', doubleclick);

function doubleclick() {
    document.getElementById('dblbtn-content').textContent = 'Double clicked!'
}



// 9. joke creater function
function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
    if (shouldTellFunnyJoke) {
        logFunnyJoke();
    }
    else {
        logBadJoke();
    }
}

function logFunnyJoke() {
    console.log('Good joke: The best thing about good old days is that we were neither good nor old.');
}
function logBadJoke() {
    console.log('Bad joke: If we shouldn’t eat at night, why do they put a light in the fridge?');
}
jokeCreator(true, logFunnyJoke, logBadJoke);
jokeCreator(false, logFunnyJoke, logBadJoke);
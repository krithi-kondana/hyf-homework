console.log("freecodecamp username: krithi-kondana");
console.log("\n");


console.log("............................Item array removal.............................");
// Item array removal
const names = ['Peter', 'Ahmad', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala'];
const nameToRemove = 'Ahmad';
names.splice(1, 1);
console.log(names);
console.log("\n");






console.log("............................ When will we be there??.............................");
// When will we be there??
const travelInformation = {
    speed: 50,
    destinationDistance: 432,
};
function travelTime(travelInformation) {

    const travelTime = (travelInformation.destinationDistance / travelInformation.speed) * 60;
    const hours = (travelTime / 60);
    const rhours = Math.floor(hours);
    const minutes = (hours - rhours) * 60;
    const rminutes = Math.round(minutes);
    console.log(`${rhours} hours and ${rminutes} minutes.`);
}

travelTime(travelInformation);
console.log("\n");






console.log("............................Series duration of my life.............................");
// Series duration of my life
const seriesDurations = [
    {
        title: 'River dale',
        days: 2,
        hours: 0,
        minutes: 0,
    },
    {
        title: 'Dark',
        days: 2,
        hours: 15,
        minutes: 54,
    },
    {
        title: 'Russian doll',
        days: 3,
        hours: 19,
        minutes: 54,
    }
]
const lifeSpanInYears = 80;
const lifeSpanInDays = lifeSpanInYears * 365;

let roundPercentage = 0;
let total = 0;

for (i = 0; i < seriesDurations.length; i++) {

    const hoursInDays = seriesDurations[i].hours / 24;
    const minutesInDays = seriesDurations[i].minutes / 1440;
    const seriesTotal = seriesDurations[i].days + hoursInDays + minutesInDays;
    total = total + seriesTotal;
    const seriesPercentage = seriesTotal / (lifeSpanInDays) * 100;
    roundseriesPercentage = seriesPercentage.toFixed(4);        //rounding off decimals upto 4 decimal points
    console.log(`${seriesDurations[i].title} took ${roundseriesPercentage}% of my life`);

}
const percentage = total / (lifeSpanInDays) * 100;

roundPercentage = percentage.toFixed(4);  //rounding off decimals upto 4 decimal points

console.log(`In total, it took ${roundPercentage}% of my life`);

console.log("\n");






console.log("...........................My favorite songs..............................");
// My favorite songs
const songDatabase = [{
    songId: 1,
    title: 'My baby',
    artist: 'Soggy socks',
},
{
    songId: 2,
    title: '3 nails in wood',
    artist: 'The carpenters',
},
{
    songId: 3,
    title: 'Blacker than black',
    artist: 'Instant coffee',
},
{
    songId: 4,
    title: 'When is enough too little?',
    artist: 'The spies girls',
},
{
    songId: 5,
    title: 'Blacker than black',
    artist: 'The spies boys',
}
];



console.log("...............adding song to database..............");
//adding song to database
function addSongToDatabase(song) {
    songDatabase.push(song);
}

addSongToDatabase({
    songId: 6,
    title: 'The stronger',
    artist: 'rainbow',
});

console.log(songDatabase);
console.log("\n");




console.log("...............searching for a song................");
//searching for a song and (Improving our application optional)
const searchedSong = [];
function getSongByTitle(title) {

    let songsArray = [];      //Improving our application optional, if there are multiple songs with the same name,return an array of songs

    for (i = 0; i < songDatabase.length; i++) {

        if (title == songDatabase[i].title) {

            songsArray.push(songDatabase[i]);
        }
    }
    if (songsArray.length === 0) {
        console.log("There is no song with this title");
    }
    else {
        searchedSong.push(songsArray);
    }

}

getSongByTitle("3 nails in wood");
getSongByTitle("stronger me");
getSongByTitle("My baby");
getSongByTitle("Blacker than black");
console.log(searchedSong);
console.log("\n");






console.log("................Creating our own playlist..................");
// Creating our own playlist
const myPlaylist = [];

function addSongToMyPlaylist(title) {

    for (i = 0; i < songDatabase.length; i++) {

        if (title == songDatabase[i].title) {
            myPlaylist.push(songDatabase[i]);
        }
    }
}

addSongToMyPlaylist("Blacker than black");
addSongToMyPlaylist('When is enough too little?');
console.log(myPlaylist);






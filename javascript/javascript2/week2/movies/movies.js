console.log(movies);

console.log('\n');
//short title movies
const shortTitle = movies.filter(short => short.title.length <= 10);
console.log('Movies with short title are', shortTitle);


console.log('\n');
//long title movies
const longTitle = movies
    .filter(long => long.title.length > 10)
    .map(long => long.title);
console.log('Movie titles with long titles are', longTitle);



console.log('\n');
// number of movies made between 1980-1989
const moviesYear = movies
    .filter(Myear => Myear.year >= 1980 && Myear.year <= 1989)
    .map(Myear => Myear.year).length;
console.log('Number of movies between 1980-1989:', moviesYear);



console.log('\n');
// extra key called tag
const extraKey = movies.map(tagging => {
    if (tagging.rating >= 7) {
        tagging.tag = 'good';
    }
    else if (tagging.rating >= 4 && tagging.rating < 7) {
        tagging.tag = 'average';
    }
    else if (tagging.rating < 4) {
        tagging.tag = 'bad';
    }
    return tagging;
});
console.log(extraKey);




console.log('\n');
// movies rated higher than 6
const moviesRating = movies
    .filter(Mrating => Mrating.rating > 6)
    .map(Mrating => Mrating.rating);
console.log('Movies rated higher than 6:', moviesRating);



console.log('\n');
// Count the total number of movies containing any of following keywords: Surfer, Alien or Benjamin
const keywords = movies.filter(keywords =>
    keywords.title.toLowerCase().includes('surfer'.toLowerCase())
    || keywords.title.toLowerCase().includes('Alien'.toLowerCase())
    || keywords.title.toLowerCase().includes('Benjamin'.toLowerCase())).length;
console.log('Total number of movies containing keywords: Surfer, Alien or Benjamin is', keywords);




console.log('\n');
// movies where a word in the title is duplicated
const duplicated = [];
const word = movies.map(duplicate => {

    for (let i = 0; i <= duplicate.title.length; i++) {
        for (let j = i; j <= duplicate.title.length; j++) {

            if (i != j && duplicate.title[i] == duplicate.title[j]) {
                duplicated.push(duplicate);

                return duplicate;

            }

        }
    }

});
console.log(duplicated);



console.log('\n');
// word that is mostly duplicated using sort
let duplicatedTitle = duplicated.map(duplicate => duplicate.title.split(' ').join());
const mostDuplicatedWord = (duplicatedTitle) => {
    let sortedDuplicate = duplicatedTitle.sort();
    let results = [];
    for (let i = 0; i < sortedDuplicate.length - 1; i++) {
        if (sortedDuplicate[i + 1] == sortedDuplicate[i]) {
            results.push(sortedDuplicate[i]);
        }
    }
    return results;
}
console.log(mostDuplicatedWord(duplicatedTitle));   //not sure if the output is true




console.log('\n');
// average rating of all the movies using reduce. Optional
const averageRating = movies
    .map(avgrating => avgrating.rating)
    .reduce((avgrating, rating) => avgrating + rating, 0) / movies.length;

console.log(`Average rating of all the movies is`, Math.round(averageRating));




console.log('\n');
// Count the total number of Good, Average and Bad movies using reduce. Optional
const total = movies.map(tagging => tagging.tag)
    .reduce((tally, rating) => {
        tally[rating] = (tally[rating] || 0) + 1;
        return tally;
    }, {});
console.log(`Total number of Good, Average and Bad movies`, total);




// Movies exercise
fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
    .then(response => response.json())
    .then(data => {
        console.log('All movies', data);

        const badMovies = data.filter(movies => movies.rating < 4)
        console.log('Bad movies', badMovies);

        const badMoviesSince2000 = badMovies.filter(movies => movies.year >= 2000)
        console.log('Bad movies since 2000', badMoviesSince2000);

        const badMoviesTitleSince2000 = badMoviesSince2000.map(movies => movies.title)
        console.log('Bad movie titles since 2000', badMoviesTitleSince2000);

    })




// Promise that resolves after set time
function setTimeOutPromise(resolveAfter) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('I am called asynchronously')
        }, resolveAfter * 1000)
    })
}
setTimeOutPromise(6)
    .then(message => {
        console.log(message);
    })





// Rewrite time
function setTimeoutPromise(delay) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, delay)
    })
}
setTimeoutPromise(3000)
    .then(() => {
        console.log('Called after 3 seconds');
    });



function getCurrentLocation() {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(resolve);
        }
        else {
            reject('Geolocation is not supported by this browser')
        }
    })
}
getCurrentLocation()
    .then(position => {
        console.log(position);
    })
    .catch(error => {
        console.log(error);
    })




// Fetching and waiting
fetch('https://api.harvardartmuseums.org/image?q=width:<1000&apikey=08158290-2fcd-11ea-ad33-290bbc9f85c9')
    .then(response => response.json())
    .then(result => {
        setTimeout(() => {
            console.log(result);
        }, 3000)
    })

// Fetching and waiting by chaining - optional
fetch('https://api.harvardartmuseums.org/image?q=width:<1000&apikey=08158290-2fcd-11ea-ad33-290bbc9f85c9')
    .then(response => response.json())
    .then(data => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(data)
            }, 3000)
        })
    })
    .then(api => {
        console.log(api);
    })

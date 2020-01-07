let errorMessage = document.getElementById('content');

function fetchGif() {

    errorMessage.innerText = '';

    let searchValue = document.getElementById('search').value;
    let numberOfGif = document.getElementById('gifnumber').value;
    if (searchValue === '') {
        errorMessage.innerText = 'Please type any gif name!';
    }
    else {
        fetch(`http://api.giphy.com/v1/gifs/search?q=${searchValue}&api_key=5OjB8GkUO9O2GO5oHdVFOxzqMgSwKRBv&limit=${numberOfGif}`)
            .then(response => response.json())
            .then(gifdata => {

                console.log(gifdata);
                renderGif(gifdata);

            })
    }
}

document.getElementById('btn').addEventListener('click', fetchGif)

function renderGif(gifdata) {
    document.querySelector('.images').innerHTML = gifdata.data.map(gif => `<img src=${gif.images.downsized_large.url}><br>`)
}
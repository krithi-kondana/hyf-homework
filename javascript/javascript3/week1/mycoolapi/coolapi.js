function fetchData() {
    let pageNumber = document.getElementById('page').value
    fetch(`https://api.harvardartmuseums.org/image?q=width:<1000&apikey=08158290-2fcd-11ea-ad33-290bbc9f85c9&page=${pageNumber}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            renderData(data);
        })
}
document.getElementById('btn').addEventListener('click', fetchData)

function renderData(data) {
    document.querySelector('.images').innerHTML = data.records.map(image => `<img src=${image.baseimageurl}><br>`)
}
function translateAllAtOnce() {
    moveElement(document.querySelector('li:nth-child(1)'), { x: 20, y: 300 })
    moveElement(document.querySelector('li:nth-child(2)'), { x: 400, y: 300 })
    moveElement(document.querySelector('li:nth-child(3)'), { x: 400, y: 20 })
}
translateAllAtOnce()

const moveElementPromise = moveElement;

Promise.all([moveElementPromise])
    .then(() => {
        console.log('All elements have been moved')
    })

function translateOneByOne() {

    moveElement(document.querySelector('li:nth-child(1)'), { x: 20, y: 300 })
        .then(() => {
            console.log('Red has been moved');
            return moveElement(document.querySelector('li:nth-child(2)'), { x: 400, y: 300 })
        })
        .then(() => {
            console.log('Blue has been moved');
            return moveElement(document.querySelector('li:nth-child(3)'), { x: 400, y: 20 })
        })
        .then(() => {
            console.log('Green has been moved');
        });

}
translateOneByOne()










// Paint a circle to a canvas element
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

context.fillStyle = 'red';
context.beginPath()
context.arc(50, 50, 50, 0, 2 * Math.PI);
context.stroke();
context.fill();



// Class creation time!
class Circle {
    constructor(x, y, r, startAngle, endAngle, fillColor) {
        this.x = x
        this.y = y
        this.r = r
        this.startAngle = startAngle
        this.endAngle = endAngle
        this.fillColor = fillColor
    }
    draw() {
        context.beginPath()
        context.fillStyle = this.fillColor;
        context.arc(this.x, this.y, this.r, this.startAngle, this.endAngle, this.fillColor)
        context.stroke()
        context.fill();
    }
}
const c1 = new Circle(175, 175, 20, 0, 2 * Math.PI, '#000000');
const c2 = new Circle(130, 100, 40, 0, 2 * Math.PI, 'blue');
c1.draw();
c2.draw();


canvas.setAttribute('width', window.innerWidth);
canvas.setAttribute('height', window.innerHeight);



//  Now lets make art!
function getRandomCircles() {
    let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);       //source: https://dev.to/akhil_001/generating-random-color-with-single-line-of-js-code-fhj
    const randomCircle = new Circle(Math.random() * window.innerWidth, Math.random() * window.innerHeight, Math.random() * 50, 0, 2 * Math.PI, randomColor)
    randomCircle.draw()
}
setInterval(getRandomCircles, 500);




// Follow the mouse - optional
canvas.addEventListener('mousemove', mouseFollow)

function mouseFollow(event) {

    const mouseX = event.pageX;
    const mouseY = event.pageY;

    let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    const randomCircle = new Circle(mouseX, mouseY, Math.random() * 50, 0, 2 * Math.PI, randomColor)
    randomCircle.draw()
}
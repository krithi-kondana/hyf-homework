const startGame = document.getElementById('start')
startGame.addEventListener('click', fastpress)

let keyS = document.getElementById('s-key');
let keyL = document.getElementById('l-key');

let countS = 0;
let countL = 0;

function counter() {

    if (event.code === 'KeyS') {
        countS += 1;
        keyS.innerHTML = `Press S <br> ${countS}`;
    }
    else if (event.code === 'KeyL') {
        countL += 1;
        keyL.innerHTML = `Press L <br> ${countL}`;
    }
}


let errorMessage = document.getElementById('error');
let startClick = false;
let inputValue;

window.addEventListener('keydown', fastpress);


function fastpress() {

    errorMessage.textContent = '';

    inputValue = document.getElementById('inputvalue').value;

    if (inputValue === undefined || inputValue == "") {
        if (event.code === 'KeyS' || event.code === 'KeyL' || event.currentTarget.id == 'start') {
            errorMessage.textContent = 'Please set timer first!';
        }
    }
    else {
        if (event.currentTarget.id == 'start') {
            startClick = true;

            let timeleft = inputValue;
            let timer = setInterval(() => {
                document.getElementById("content").innerHTML = `Countdown timer<br> ${timeleft}`;
                timeleft -= 1;
                if (timeleft <= 0) {
                    clearInterval(timer);
                    document.getElementById("content").innerHTML = "Time up"
                }
            }, 1000);
        }
        else if (startClick) {
            counter()
            setTimeout(time, inputValue * 1000);
        }
        else {
            errorMessage.textContent = 'Click start game button!';
        }
    }
}



function time() {

    if (countS > countL) {
        document.getElementById('content').innerText = 'Congratulations S  key! You are the winner';
        let confetti = new ConfettiGenerator({ target: 'canvas-s' });
        confetti.render();
    }
    else if (countL > countS) {
        document.getElementById('content').innerText = 'Congratulations L  key! You are the winner';
        let confetti = new ConfettiGenerator({ target: 'canvas-l' });
        confetti.render();
    }
    else if (countL = countS) {
        document.getElementById('content').innerText = 'Oops! Its a draw';
    }

    window.removeEventListener('keydown', fastpress);

}

const restartGame = document.getElementById('restart')
restartGame.addEventListener('click', reloadPage)

function reloadPage() {
    window.location.reload();
}



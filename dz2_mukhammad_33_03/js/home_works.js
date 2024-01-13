const gmailInput = document.getElementById('gmail_input')
const verifierBtn = document.getElementById('gmail_button')
const gmailResult = document.getElementById('gmail_result')

const regExp = /\w{6,30}@gmail.com/

verifierBtn.addEventListener('click', function () {
    let html = ''

    if (!gmailInput.value) {
        html = `Please insert your gmail`
    } else if (regExp.test(gmailInput.value)) {
        html = `Gmail is correct`
        gmailInput.value = ''
    } else {
        html = `Gmail username is incorrect :(`
        gmailInput.value = ''
    }
    gmailResult.textContent = html
})

// hw2 moving box

let positionX = 0
let positionY = 0

const movingBall = () => {
    let ball = document.querySelector('.child_block')

    if(positionX < 450 && positionY === 0){
        positionX++
    }else if(positionX === 450 && positionY < 450){
        positionY++
    }else if (positionX > 0 && positionY ===450){
        positionX--
    }else if(positionX === 0 && positionY > 0){
        positionY--
    }

    ball.style.left = `${positionX}px`
    ball.style.top = `${positionY}px`

    requestAnimationFrame(movingBall)
}
movingBall()

//timer HomeWork Part2

const startBtn = document.getElementById("start")
const stopBtn = document.getElementById("stop")
const resetBtn = document.getElementById("reset")
const timerScreen = document.getElementById("seconds")

let seconds = 0
let timer

function startTimer() {
    if (!timer) {
        timer = setInterval(() => {
            seconds++
            timerScreen.textContent = seconds
        }, 1000)
    }
}

function stopTimer() {
    clearInterval(timer)
    timer = null
}

function resetTimer() {
    clearInterval(timer)
    seconds = 0
    timerScreen.textContent = seconds
    timer = null
}

startBtn.addEventListener("click", startTimer)
stopBtn.addEventListener("click", stopTimer)
resetBtn.addEventListener("click", resetTimer)
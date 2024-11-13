let randomNum = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const lastResult = document.querySelector('.lastResult')
const lowHigh = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGUess = 1

let playGame = true

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess  = parseInt(userInput.value);
        valGuess(guess)
    })
}
function valGuess(guess){
    if(isNaN(guess)){
        alert("PLease enter a valid Number")
    } else if(guess < 1){
        alert("PLease enter a valid Number")
    }else if(guess > 100){
        alert("PLease enter between 1 to 100")
    }else {
        prevGuess.push(guess)
        if(numGUess === 11){
            displayGUess(guess)
            displayMessage(`Game over. Random Number was ${randomNum}`)
            endGame()
        }else{
            displayGUess(guess)
            checkGuess(guess)
        }
    }
}
function checkGuess(guess){
    if(guess === randomNum){
        displayMessage(`You won`)
        endGame()
    }else if(guess < randomNum){
        displayMessage(`Number is less than guess`)
    } else if(guess < randomNum){
        displayMessage(`Number is higher than as guess`)
    }
}
function displayGUess(guess){   
    userInput.value = '';
    guessSlot.innerHTML += ` ${guess}  `
    numGUess++;
    lastResult.innerHTML = `${11-numGUess}`
}
function displayMessage(message){
 lowHigh.innerHTML = `<h3> ${message}</h>`
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start Game Again </h2>`
    startOver.appendChild(p)
    playGame = false;
    newGame()
}

function newGame(){
 const newGameButton = document.querySelector('#newGame')
 newGameButton.addEventListener('click',function (e){
    randomNum = parseInt(Math.random() * 100 + 1);
    prevGuess = []
    numGUess = 1
    guessSlot.innerHTML = ''
    lastResult.innerHTML = `${11-numGUess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    
    playGame = true
 })
}








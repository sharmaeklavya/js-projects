//variables
let userScoreCount = 0;
let houseScoreCount = 0;
let singleClick = false;

//element selectors
const rps = document.querySelectorAll('.rps')
const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissor = document.querySelector('.scissor')
const userText = document.querySelector('.user-text')
const houseText = document.querySelector('.house-text')
const houseScore = document.querySelector('.house h1')
const userScore = document.querySelector('.user h1')
const narration = document.querySelector('.narration')
const rulesBtn = document.querySelector('.rules-btn')
const rulesImg = document.querySelector('.set-rules')
const resetBtn = document.querySelector('.reset')
const result = document.querySelector('.result')
const main = document.getElementById('main')


// event listeners
rock.addEventListener('click', function() {
    game('rock')
})
paper.addEventListener('click', function() {
    game('paper')
})
scissor.addEventListener('click', function(){
    game('scissor')
})

rulesBtn.addEventListener('click', function() {
    rulesImg.classList.toggle('show')
})

window.addEventListener('mouseup', function(e) {    
    if(e.target !== rulesBtn && rulesImg.classList.contains('show')){
        rulesImg.classList.remove('show')
    }
})

// Main function
function game(userChoice){
    const houseChoice = getHouseGesture()
    if (!singleClick){
        switch(userChoice + houseChoice){
            case 'rockscissor':
            case 'scissorpaper':
            case 'paperrock':
                win(userChoice, houseChoice)
                break;
            case 'scissorrock':
            case 'paperscissor':
            case 'rockpaper':
                lose(userChoice, houseChoice)
                break;
            case 'paperpaper':
            case 'rockrock':
            case 'scissorscissor':
                draw(userChoice, houseChoice)
                break;
        }
    }
    hideLeftOver(userChoice, houseChoice)
}

// Get House/Computer Choice
function getHouseGesture(){
    const choices = ['rock', 'paper', 'scissor']
    let value = Math.floor(Math.random() * choices.length)
    return choices[value]
}

//Win result
function win(userChoice, houseChoice){
    textVisible(userChoice, houseChoice)
    userScoreCount++
    userScore.innerHTML = userScoreCount;
    narration.innerHTML = `${userChoice} beats ${houseChoice}.`
    result.innerHTML = 'You win!'
}

//Lost result
function lose(userChoice, houseChoice){
    textVisible(userChoice, houseChoice)
    houseScoreCount++
    houseScore.innerHTML = houseScoreCount;
    narration.innerHTML = `${houseChoice} beats ${userChoice}.`
    result.innerHTML = 'You lost!'
}

//Draw result
function draw(userChoice, houseChoice){
    textVisible(userChoice, houseChoice)
    narration.innerHTML = `${userChoice} equals to ${houseChoice}.`
    result.innerHTML = 'It\'s a tie.'
    rps.forEach(gesture => {
        let getUserChoice = gesture.dataset.id
        if (getUserChoice === houseChoice){
            let cloneChoice = gesture.cloneNode(true)
            cloneChoice.setAttribute('id', 'clone')
            main.appendChild(cloneChoice)
            cloneChoice.style.gridColumn = '1'
            cloneChoice.style.gridRow = '1'
        }
    })
}

//Game Narration/ Score/ Win-losses 
function textVisible(user, house){
    userText.style.visibility = 'visible'
    houseText.style.visibility = 'visible'
    userText.innerHTML = `You picked ${user.toUpperCase()}`
    houseText.innerHTML = `House picked ${house.toUpperCase()}`
    resetGame(user, house)
}

//Hide all the texts - narration/ win-losses except score
function hideTextFields(){
    userText.innerHTML = ''
    houseText.innerHTML = ''
    result.innerHTML = ''
    narration.innerHTML = ''
}

// Hide the third gesture/choice
function hideLeftOver(user, house){    
    if(!singleClick){
        rps.forEach(choice => {
            let getGesture = choice.dataset.id        
            if(getGesture !== user && getGesture !== house ){
                choice.classList.add('hide')
                main.style.backgroundImage = 'none'
            } if(getGesture == user){
                choice.style.gridColumn = '1'
                choice.style.gridRow = '1'
            } if (getGesture == house ){
                choice.style.gridColumn = '3'
                choice.style.gridRow = '1'
            }
        })
    singleClick = true
    }
}

// Reset game not the score
function resetGame(){
    resetBtn.addEventListener('click', ()=> {
        hideTextFields()
        for (let i=0; i<rps.length; i++){
            let value = rps[i].dataset.id
            rps[i].classList.remove('hide')
            let cloneChoice = document.getElementById('clone')
            if(cloneChoice){
                cloneChoice.remove()
            }
            if(value === 'rock'){
                rps[i].style.gridColumn = '1'
                rps[i].style.gridRow = '1'
            } else if (value === 'paper'){
                rps[i].style.gridColumn = '3'
                rps[i].style.gridRow = '1'
            } else if (value === 'scissor'){
                rps[i].style.gridColumn = '2'
                rps[i].style.gridRow = '2'
            } 
            main.style.backgroundImage = 'url(images/bg-triangle.svg)'
        }
        singleClick = false        
    })
}

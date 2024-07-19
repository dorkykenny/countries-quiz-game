/*-------------------------------- Constants --------------------------------*/

const countries = [
    { country: "Afghanistan 🇦🇫", capital: "Kabul", continent: "Asia" },
    { country: "Albania 🇦🇱", capital: "Tirana", continent: "Europe" },
    { country: "Algeria 🇩🇿", capital: "Algiers", continent: "Africa" },
    { country: "Andorra 🇦🇩", capital: "Andorra la Vella", continent: "Europe" },
    { country: "Angola 🇦🇴", capital: "Luanda", continent: "Africa" },
    { country: "Antigua and Barbuda 🇦🇬", capital: "Saint John's", continent: "North America" },
    { country: "Argentina 🇦🇷", capital: "Buenos Aires", continent: "South America" },
    { country: "Armenia 🇦🇲", capital: "Yerevan", continent: "Asia" },
]

const usedCountries = []

const totalRounds = 3
const initialLives = 3

/*---------------------------- Variables (state) ----------------------------*/

let question
let options
let round = 1
let lives = 3
let gameCategory

/*------------------------ Cached Element References ------------------------*/

const categoryBtnsEl = document.querySelectorAll(`.game-category`)
const categoryContainer = document.querySelector(`.category-container`)

const gameContainer = document.querySelector(`.game-container`)
const questionEl = document.getElementById(`question`)
const optionsEl = document.getElementById(`options`)

const restartBtnEl = document.getElementById(`restart`)
const nextBtnEl = document.getElementById(`next`)
const resultEl = document.getElementById(`result`)

const gameInfoEl = document.querySelector(`.game-info`)
const livesEl = document.getElementById(`lives`)
const heart1El = document.querySelector(`.heart-1`)
const heart2El = document.querySelector(`.heart-2`)
const heart3El = document.querySelector(`.heart-3`)
const roundsEl = document.getElementById(`rounds`)


/*-------------------------------- Functions --------------------------------*/

function homepage() {
    categoryContainer.classList.remove(`hidden`)
    gameContainer.classList.add(`hidden`)
    resultEl.innerHTML = ``
    lives = initialLives
    round = 1

    checkForLives()
}

function startGame(event) {
    gameCategory = event.target.closest(`.game-category`).id

    categoryContainer.classList.add('hidden')
    gameContainer.classList.remove(`hidden`)
    gameInfoEl.classList.remove(`hidden`)
    restartBtnEl.classList.add(`hidden`)

    nextRound()
}


function nextRound() {
    optionsEl.innerHTML = ``

    roundsEl.classList.remove(`hidden`)
    roundsEl.textContent = `Round: ${round}/${totalRounds}`
    round++

    livesEl.classList.remove(`hidden`)
    nextBtnEl.classList.add('hidden')

    if (gameCategory === `capital-city`) {
        capitalCity()
    } else if (gameCategory === `continent`) {
        continent()
    }
}

function getRandomCountry() {
    const randomIndex = Math.floor(Math.random() * countries.length)

    if (!usedCountries.includes(countries[randomIndex])) {
        return countries[randomIndex]
    } else {
        return getRandomCountry()
    }
}


function capitalCity() {
    question = getRandomCountry()
    options = []
    const correctCapital = question.capital
    questionEl.innerHTML = `What is the capital city of <strong>${question.country}?</strong>`
    options.push(correctCapital)

    while (options.length < 4) {
        let randomCapital = getRandomCountry()

        if (!options.includes(randomCapital.capital) && randomCapital.capital !== correctCapital) {
            options.push(randomCapital.capital)
        }
    }

    options.sort(() => Math.random() - 0.5)

    options.forEach((option) => {
        const button = document.createElement('button')
        button.textContent = option
        if (option === correctCapital) {
            button.addEventListener('click', selectedCorrectAnswer)
            button.classList.add('option', 'correct-answer')
        } else {
            button.addEventListener('click', selectedIncorrectAnswer)
            button.classList.add('option', 'incorrect-answer')
        }
        optionsEl.appendChild(button)
    })


    const selectedCountry = question
    usedCountries.push(selectedCountry)

    // if (!usedCountries.includes(selectedCountry)) {
    //     countries.splice(randomIndex, 1)
    //     return selectedCountry
    // } else {
    //     return getRandomCountry()
    // }


}

function continent() {
    question = getRandomCountry()
    options = []
    const correctContinent = question.continent
    questionEl.innerHTML = `<strong>${question.country}</strong> is in which continent?`
    options.push(correctContinent)

    while (options.length < 4) {
        let randomContinent = getRandomCountry()

        if (!options.includes(randomContinent.continent) && randomContinent.continent !== correctContinent) {
            options.push(randomContinent.continent)
        }
    }

    options.sort(() => Math.random() - 0.5)

    options.forEach((option) => {
        const button = document.createElement('button')
        button.textContent = option
        if (option === correctContinent) {
            button.addEventListener('click', selectedCorrectAnswer)
            button.classList.add('option', 'correct-answer')
        } else {
            button.addEventListener('click', selectedIncorrectAnswer)
            button.classList.add('option', 'incorrect-answer')
        }
        optionsEl.appendChild(button)
    })
}

function selectedCorrectAnswer() {
    nextBtnEl.classList.remove(`hidden`)

    const buttons = document.querySelectorAll('.option')

    buttons.forEach((option) => {
        option.disabled = true
        if (option.classList.contains('correct-answer')) {
            option.classList.add('show-correct-answer')
        } else {
            option.classList.contains('incorrect-answer')
            option.classList.add('show-incorrect-answer')
        }
    })

    checkForLives()
    checkForWin()
}

function selectedIncorrectAnswer() {
    nextBtnEl.classList.remove(`hidden`)
    lives--

    const buttons = document.querySelectorAll('.option')

    buttons.forEach((option) => {
        option.disabled = true
        if (option.classList.contains('correct-answer')) {
            option.classList.add('show-correct-answer')
        } else {
            option.classList.contains('incorrect-answer')
            option.classList.add('show-incorrect-answer')
        }
    })

    checkForLives()
    checkForWin()
}

function checkForLives() {
    if (lives === 3) {
        heart1El.classList.remove(`hidden`)
        heart2El.classList.remove(`hidden`)
        heart3El.classList.remove(`hidden`)
    } else if (lives === 2) {
        heart3El.classList.add(`hidden`)
    } else if (lives === 1) {
        heart2El.classList.add(`hidden`)
    } else {
        heart1El.classList.add(`hidden`)
    }
}

function checkForWin() {
    if (lives < 0) {
        nextBtnEl.classList.add(`hidden`)
        resultEl.innerHTML = '<p>BETTER LUCK NEXT TIME!</p>'
        restartBtnEl.classList.remove(`hidden`)
    }

    if (round > totalRounds) {
        nextBtnEl.classList.add(`hidden`)
        resultEl.innerHTML = `<p>YOU WIN!</p>`
        restartBtnEl.classList.remove(`hidden`)
    }
}

/*----------------------------- Event Listeners -----------------------------*/

categoryBtnsEl.forEach((category) => {
    category.addEventListener(`click`, startGame)
})

nextBtnEl.addEventListener(`click`, nextRound)

restartBtnEl.addEventListener(`click`, homepage)

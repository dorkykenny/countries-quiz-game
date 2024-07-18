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
    { country: "Australia 🇦🇺", capital: "Canberra", continent: "Australia" },
    { country: "Austria 🇦🇹", capital: "Vienna", continent: "Europe" },
    { country: "Azerbaijan 🇦🇿", capital: "Baku", continent: "Asia" },
    { country: "Bahamas 🇧🇸", capital: "Nassau", continent: "North America" },
    { country: "Bahrain 🇧🇭", capital: "Manama", continent: "Asia" },
    { country: "Bangladesh 🇧🇩", capital: "Dhaka", continent: "Asia" },
    { country: "Barbados 🇧🇧", capital: "Bridgetown", continent: "North America" },
    { country: "Belarus 🇧🇾", capital: "Minsk", continent: "Europe" },
    { country: "Belgium 🇧🇪", capital: "Brussels", continent: "Europe" },
    { country: "Belize 🇧🇿", capital: "Belmopan", continent: "North America" },
    { country: "Benin 🇧🇯", capital: "Porto-Novo", continent: "Africa" },
    { country: "Bhutan 🇧🇹", capital: "Thimphu", continent: "Asia" },
    { country: "Bolivia 🇧🇴", capital: "Sucre", continent: "South America" },
    { country: "Bosnia and Herzegovina 🇧🇦", capital: "Sarajevo", continent: "Europe" },
    { country: "Botswana 🇧🇼", capital: "Gaborone", continent: "Africa" },
    { country: "Brazil 🇧🇷", capital: "Brasília", continent: "South America" },
    { country: "Brunei 🇧🇳", capital: "Bandar Seri Begawan", continent: "Asia" },
    { country: "Bulgaria 🇧🇬", capital: "Sofia", continent: "Europe" },
    { country: "Burkina Faso 🇧🇫", capital: "Ouagadougou", continent: "Africa" },
    { country: "Burundi 🇧🇮", capital: "Gitega", continent: "Africa" },
    { country: "Cabo Verde 🇨🇻", capital: "Praia", continent: "Africa" },
    { country: "Cambodia 🇰🇭", capital: "Phnom Penh", continent: "Asia" },
    { country: "Cameroon 🇨🇲", capital: "Yaoundé", continent: "Africa" },
    { country: "Canada 🇨🇦", capital: "Ottawa", continent: "North America" },
    { country: "Central African Republic 🇨🇫", capital: "Bangui", continent: "Africa" },
    { country: "Chad 🇹🇩", capital: "N'Djamena", continent: "Africa" },
    { country: "Chile 🇨🇱", capital: "Santiago", continent: "South America" },
    { country: "China 🇨🇳", capital: "Beijing", continent: "Asia" },
    { country: "Colombia 🇨🇴", capital: "Bogotá", continent: "South America" },
    { country: "Comoros 🇰🇲", capital: "Moroni", continent: "Africa" },
    { country: "Congo 🇨🇬", capital: "Brazzaville", continent: "Africa" },
    { country: "Costa Rica 🇨🇷", capital: "San José", continent: "North America" },
    { country: "Croatia 🇭🇷", capital: "Zagreb", continent: "Europe" },
    { country: "Cuba 🇨🇺", capital: "Havana", continent: "North America" },
    { country: "Cyprus 🇨🇾", capital: "Nicosia", continent: "Europe" },
    { country: "Czech Republic 🇨🇿", capital: "Prague", continent: "Europe" },
    { country: "Democratic Republic of Congo 🇨🇩", capital: "Kinshasa", continent: "Africa" },
    { country: "Denmark 🇩🇰", capital: "Copenhagen", continent: "Europe" },
    { country: "Djibouti 🇩🇯", capital: "Djibouti", continent: "Africa" },
    { country: "Dominica 🇩🇲", capital: "Roseau", continent: "North America" },
    { country: "Dominican Republic 🇩🇴", capital: "Santo Domingo", continent: "North America" },
    { country: "Ecuador 🇪🇨", capital: "Quito", continent: "South America" },
    { country: "Egypt 🇪🇬", capital: "Cairo", continent: "Africa" },
    { country: "El Salvador 🇸🇻", capital: "San Salvador", continent: "North America" },
    { country: "Equatorial Guinea 🇬🇶", capital: "Malabo", continent: "Africa" },
    { country: "Eritrea 🇪🇷", capital: "Asmara", continent: "Africa" },
    { country: "Estonia 🇪🇪", capital: "Tallinn", continent: "Europe" },
    { country: "Eswatini 🇸🇿", capital: "Mbabane", continent: "Africa" },
    { country: "Ethiopia 🇪🇹", capital: "Addis Ababa", continent: "Africa" },
    { country: "Fiji 🇫🇯", capital: "Suva", continent: "Australia" },
    { country: "Finland 🇫🇮", capital: "Helsinki", continent: "Europe" },
    { country: "France 🇫🇷", capital: "Paris", continent: "Europe" },
    { country: "Gabon 🇬🇦", capital: "Libreville", continent: "Africa" },
    { country: "Gambia 🇬🇲", capital: "Banjul", continent: "Africa" },
    { country: "Georgia 🇬🇪", capital: "Tbilisi", continent: "Asia" },
    { country: "Germany 🇩🇪", capital: "Berlin", continent: "Europe" },
    { country: "Ghana 🇬🇭", capital: "Accra", continent: "Africa" },
    { country: "Greece 🇬🇷", capital: "Athens", continent: "Europe" },
    { country: "Grenada 🇬🇩", capital: "St. George's", continent: "North America" },
    { country: "Guatemala 🇬🇹", capital: "Guatemala City", continent: "North America" },
    { country: "Guinea 🇬🇳", capital: "Conakry", continent: "Africa" },
    { country: "Guinea-Bissau 🇬🇼", capital: "Bissau", continent: "Africa" },
    { country: "Guyana 🇬🇾", capital: "Georgetown", continent: "South America" },
    { country: "Haiti 🇭🇹", capital: "Port-au-Prince", continent: "North America" },
    { country: "Honduras 🇭🇳", capital: "Tegucigalpa", continent: "North America" },
    { country: "Hungary 🇭🇺", capital: "Budapest", continent: "Europe" },
    { country: "Iceland 🇮🇸", capital: "Reykjavik", continent: "Europe" },
    { country: "India 🇮🇳", capital: "New Delhi", continent: "Asia" },
    { country: "Indonesia 🇮🇩", capital: "Jakarta", continent: "Asia" },
    { country: "Iran 🇮🇷", capital: "Tehran", continent: "Asia" },
    { country: "Iraq 🇮🇶", capital: "Baghdad", continent: "Asia" },
    { country: "Ireland 🇮🇪", capital: "Dublin", continent: "Europe" },
    { country: "Israel 🇮🇱", capital: "Jerusalem", continent: "Asia" },
    { country: "Italy 🇮🇹", capital: "Rome", continent: "Europe" },
    { country: "Jamaica 🇯🇲", capital: "Kingston", continent: "North America" },
    { country: "Japan 🇯🇵", capital: "Tokyo", continent: "Asia" },
    { country: "Jordan 🇯🇴", capital: "Amman", continent: "Asia" },
    { country: "Kazakhstan 🇰🇿", capital: "Nur-Sultan", continent: "Asia" },
    { country: "Kenya 🇰🇪", capital: "Nairobi", continent: "Africa" },
    { country: "Kiribati 🇰🇮", capital: "Tarawa", continent: "Australia" },
    { country: "Kuwait 🇰🇼", capital: "Kuwait City", continent: "Asia" },
    { country: "Kyrgyzstan 🇰🇬", capital: "Bishkek", continent: "Asia" },
    { country: "Laos 🇱🇦", capital: "Vientiane", continent: "Asia" },
    { country: "Latvia 🇱🇻", capital: "Riga", continent: "Europe" },
    { country: "Lebanon 🇱🇧", capital: "Beirut", continent: "Asia" },
    { country: "Lesotho 🇱🇸", capital: "Maseru", continent: "Africa" },
    { country: "Liberia 🇱🇷", capital: "Monrovia", continent: "Africa" },
    { country: "Libya 🇱🇾", capital: "Tripoli", continent: "Africa" },
    { country: "Liechtenstein 🇱🇮", capital: "Vaduz", continent: "Europe" },
    { country: "Lithuania 🇱🇹", capital: "Vilnius", continent: "Europe" },
    { country: "Luxembourg 🇱🇺", capital: "Luxembourg City", continent: "Europe" },
    { country: "Madagascar 🇲🇬", capital: "Antananarivo", continent: "Africa" },
    { country: "Malawi 🇲🇼", capital: "Lilongwe", continent: "Africa" },
    { country: "Malaysia 🇲🇾", capital: "Kuala Lumpur", continent: "Asia" },
    { country: "Maldives 🇲🇻", capital: "Malé", continent: "Asia" },
    { country: "Mali 🇲🇱", capital: "Bamako", continent: "Africa" },
    { country: "Malta 🇲🇹", capital: "Valletta", continent: "Europe" },
    { country: "Marshall Islands 🇲🇭", capital: "Majuro", continent: "Australia" },
    { country: "Mauritania 🇲🇷", capital: "Nouakchott", continent: "Africa" },
    { country: "Mauritius 🇲🇺", capital: "Port Louis", continent: "Africa" },
    { country: "Mexico 🇲🇽", capital: "Mexico City", continent: "North America" },
    { country: "Micronesia 🇫🇲", capital: "Palikir", continent: "Australia" },
    { country: "Moldova 🇲🇩", capital: "Chisinau", continent: "Europe" },
    { country: "Monaco 🇲🇨", capital: "Monaco", continent: "Europe" },
    { country: "Mongolia 🇲🇳", capital: "Ulaanbaatar", continent: "Asia" },
    { country: "Montenegro 🇲🇪", capital: "Podgorica", continent: "Europe" },
    { country: "Morocco 🇲🇦", capital: "Rabat", continent: "Africa" },
    { country: "Mozambique 🇲🇿", capital: "Maputo", continent: "Africa" },
    { country: "Myanmar (Burma) 🇲🇲", capital: "Naypyidaw", continent: "Asia" },
    { country: "Namibia 🇳🇦", capital: "Windhoek", continent: "Africa" },
    { country: "Nauru 🇳🇷", capital: "Yaren", continent: "Australia" },
    { country: "Nepal 🇳🇵", capital: "Kathmandu", continent: "Asia" },
    { country: "Netherlands 🇳🇱", capital: "Amsterdam", continent: "Europe" },
    { country: "New Zealand 🇳🇿", capital: "Wellington", continent: "Australia" },
    { country: "Nicaragua 🇳🇮", capital: "Managua", continent: "North America" },
    { country: "Niger 🇳🇪", capital: "Niamey", continent: "Africa" },
    { country: "Nigeria 🇳🇬", capital: "Abuja", continent: "Africa" },
    { country: "North Korea 🇰🇵", capital: "Pyongyang", continent: "Asia" },
    { country: "North Macedonia 🇲🇰", capital: "Skopje", continent: "Europe" },
    { country: "Norway 🇳🇴", capital: "Oslo", continent: "Europe" },
    { country: "Oman 🇴🇲", capital: "Muscat", continent: "Asia" },
    { country: "Pakistan 🇵🇰", capital: "Islamabad", continent: "Asia" },
    { country: "Palau 🇵🇼", capital: "Ngerulmud", continent: "Australia" },
    { country: "Palestine 🇵🇸", capital: "Ramallah", continent: "Asia" },
    { country: "Panama 🇵🇦", capital: "Panama City", continent: "North America" },
    { country: "Papua New Guinea 🇵🇬", capital: "Port Moresby", continent: "Australia" },
    { country: "Paraguay 🇵🇾", capital: "Asunción", continent: "South America" },
    { country: "Peru 🇵🇪", capital: "Lima", continent: "South America" },
    { country: "Philippines 🇵🇭", capital: "Manila", continent: "Asia" },
    { country: "Poland 🇵🇱", capital: "Warsaw", continent: "Europe" },
    { country: "Portugal 🇵🇹", capital: "Lisbon", continent: "Europe" },
    { country: "Qatar 🇶🇦", capital: "Doha", continent: "Asia" },
    { country: "Romania 🇷🇴", capital: "Bucharest", continent: "Europe" },
    { country: "Russia 🇷🇺", capital: "Moscow", continent: "Europe" },
    { country: "Rwanda 🇷🇼", capital: "Kigali", continent: "Africa" },
    { country: "Saint Kitts and Nevis 🇰🇳", capital: "Basseterre", continent: "North America" },
    { country: "Saint Lucia 🇱🇨", capital: "Castries", continent: "North America" },
    { country: "Saint Vincent and the Grenadines 🇻🇨", capital: "Kingstown", continent: "North America" },
    { country: "Samoa 🇼🇸", capital: "Apia", continent: "Australia" },
    { country: "San Marino 🇸🇲", capital: "San Marino", continent: "Europe" },
    { country: "Sao Tome and Principe 🇸🇹", capital: "São Tomé", continent: "Africa" },
    { country: "Saudi Arabia 🇸🇦", capital: "Riyadh", continent: "Asia" },
    { country: "Senegal 🇸🇳", capital: "Dakar", continent: "Africa" },
    { country: "Serbia 🇷🇸", capital: "Belgrade", continent: "Europe" },
    { country: "Seychelles 🇸🇨", capital: "Victoria", continent: "Africa" },
    { country: "Sierra Leone 🇸🇱", capital: "Freetown", continent: "Africa" },
    { country: "Singapore 🇸🇬", capital: "Singapore", continent: "Asia" },
    { country: "Slovakia 🇸🇰", capital: "Bratislava", continent: "Europe" },
    { country: "Slovenia 🇸🇮", capital: "Ljubljana", continent: "Europe" },
    { country: "Solomon Islands 🇸🇧", capital: "Honiara", continent: "Australia" },
    { country: "Somalia 🇸🇴", capital: "Mogadishu", continent: "Africa" },
    { country: "South Africa 🇿🇦", capital: "Pretoria", continent: "Africa" },
    { country: "South Korea 🇰🇷", capital: "Seoul", continent: "Asia" },
    { country: "South Sudan 🇸🇸", capital: "Juba", continent: "Africa" },
    { country: "Spain 🇪🇸", capital: "Madrid", continent: "Europe" },
    { country: "Sri Lanka 🇱🇰", capital: "Colombo", continent: "Asia" },
    { country: "Sudan 🇸🇩", capital: "Khartoum", continent: "Africa" },
    { country: "Suriname 🇸🇷", capital: "Paramaribo", continent: "South America" },
    { country: "Sweden 🇸🇪", capital: "Stockholm", continent: "Europe" },
    { country: "Switzerland 🇨🇭", capital: "Bern", continent: "Europe" },
    { country: "Syria 🇸🇾", capital: "Damascus", continent: "Asia" },
    { country: "Tajikistan 🇹🇯", capital: "Dushanbe", continent: "Asia" },
    { country: "Tanzania 🇹🇿", capital: "Dodoma", continent: "Africa" },
    { country: "Thailand 🇹🇭", capital: "Bangkok", continent: "Asia" },
    { country: "Timor-Leste 🇹🇱", capital: "Dili", continent: "Asia" },
    { country: "Togo 🇹🇬", capital: "Lomé", continent: "Africa" },
    { country: "Tonga 🇹🇴", capital: "Nuku'alofa", continent: "Australia" },
    { country: "Trinidad and Tobago 🇹🇹", capital: "Port of Spain", continent: "North America" },
    { country: "Tunisia 🇹🇳", capital: "Tunis", continent: "Africa" },
    { country: "Turkey 🇹🇷", capital: "Ankara", continent: "Asia" },
    { country: "Turkmenistan 🇹🇲", capital: "Ashgabat", continent: "Asia" },
    { country: "Tuvalu 🇹🇻", capital: "Funafuti", continent: "Australia" },
    { country: "Uganda 🇺🇬", capital: "Kampala", continent: "Africa" },
    { country: "Ukraine 🇺🇦", capital: "Kyiv", continent: "Europe" },
    { country: "United Arab Emirates 🇦🇪", capital: "Abu Dhabi", continent: "Asia" },
    { country: "United Kingdom 🇬🇧", capital: "London", continent: "Europe" },
    { country: "United States of America 🇺🇸", capital: "Washington, D.C.", continent: "North America" },
    { country: "Uruguay 🇺🇾", capital: "Montevideo", continent: "South America" },
    { country: "Uzbekistan 🇺🇿", capital: "Tashkent", continent: "Asia" },
    { country: "Vanuatu 🇻🇺", capital: "Port Vila", continent: "Australia" },
    { country: "Vatican City 🇻🇦", capital: "Vatican City", continent: "Europe" },
    { country: "Venezuela 🇻🇪", capital: "Caracas", continent: "South America" },
    { country: "Vietnam 🇻🇳", capital: "Hanoi", continent: "Asia" },
    { country: "Yemen 🇾🇪", capital: "Sana'a", continent: "Asia" },
    { country: "Zambia 🇿🇲", capital: "Lusaka", continent: "Africa" },
    { country: "Zimbabwe 🇿🇼", capital: "Harare", continent: "Africa" }
]

const totalRounds = 20
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
    return countries[randomIndex]
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

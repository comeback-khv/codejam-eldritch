// Импорт
import './sass/main.scss'
import greenCardData from './data/mythicCards/green/index'
import brownCardData from './data/mythicCards/brown/index'
import blueCardData from './data/mythicCards/blue/index'
import ancients from './assets/Ancients/index'
import ancientsData from './data/ancients'
import homeBackground from './assets/home.png'
import cardBackground from './assets/mythicCardBackground.png'

// Объявление переменных - Древние
const azathoth = document.querySelector('#Azathoth');
const cthulthu = document.querySelector('#Cthulthu');
const iogSothoth = document.querySelector('#IogSothoth');
const shubNiggurath = document.querySelector('#ShubNiggurath');

// Вставляем картинки на страницу
azathoth.style.backgroundImage = `url(${ancients.azathoth})`;
cthulthu.style.backgroundImage = `url(${ancients.cthulhu})`;
iogSothoth.style.backgroundImage = `url(${ancients.iogSothoth})`;
shubNiggurath.style.backgroundImage = `url(${ancients.shubNiggurath})`;

// Объявление переменные - Сложности игры
const difficultyContainer = document.querySelector('.difficulty-container');
const difficulty = document.querySelectorAll('.difficulty');

// Объявление переменные - Колода
const deckСontainer = document.querySelector('.deck-container');
const shuffleButton = document.querySelector('.shuffle-button');
const currentState = document.querySelectorAll('.current-state');
const deck = document.querySelector('.deck');
const body = document.querySelector('.App');
const lastCard = document.querySelector('.last-card')
const green = document.querySelectorAll('.green')
const brown = document.querySelectorAll('.brown')
const blue = document.querySelectorAll('.blue')
deck.style.backgroundImage = `url(${cardBackground})`;
body.style.backgroundImage = `url(${homeBackground})`;

// Функция появления меню
function addMenu() {
    difficultyContainer.classList.remove('hidden');
}

// Появление меню
azathoth.addEventListener('click', addMenu);
cthulthu.addEventListener('click', addMenu);
iogSothoth.addEventListener('click', addMenu);
shubNiggurath.addEventListener('click', addMenu);

// Добавление active у сложности и редактирование колонки с колодой
difficulty[0].addEventListener('click', () => {
    difficulty[0].classList.add('active');
    difficulty[1].classList.remove('active');
    difficulty[2].classList.remove('active');
    deckСontainer.classList.remove('hidden');
    shuffleButton.classList.remove('hidden');
    deck.classList.add('hidden');
})
difficulty[1].addEventListener('click', () => {
    difficulty[1].classList.add('active');
    difficulty[0].classList.remove('active');
    difficulty[2].classList.remove('active');
    deckСontainer.classList.remove('hidden');
    shuffleButton.classList.remove('hidden');
    deck.classList.add('hidden');
})
difficulty[2].addEventListener('click', () => {
    difficulty[2].classList.add('active');
    difficulty[0].classList.remove('active');
    difficulty[1].classList.remove('active');
    deckСontainer.classList.remove('hidden');
    shuffleButton.classList.remove('hidden');
    deck.classList.add('hidden');
})

// Спрятать кнопку 'Замешать колоду'
shuffleButton.addEventListener('click', () => {
    shuffleButton.classList.add('hidden');
    deck.classList.remove('hidden');
    lastCard.classList.remove('hidden')
})

// Сделать активной Древнего при клике
azathoth.addEventListener('click', () => {
    azathoth.classList.add('active');
    cthulthu.classList.remove('active');
    iogSothoth.classList.remove('active');
    shubNiggurath.classList.remove('active');
})
cthulthu.addEventListener('click', () => {
    azathoth.classList.remove('active');
    cthulthu.classList.add('active');
    iogSothoth.classList.remove('active');
    shubNiggurath.classList.remove('active');
})
iogSothoth.addEventListener('click', () => {
    azathoth.classList.remove('active');
    cthulthu.classList.remove('active');
    iogSothoth.classList.add('active');
    shubNiggurath.classList.remove('active');
})
shubNiggurath.addEventListener('click', () => {
    azathoth.classList.remove('active');
    cthulthu.classList.remove('active');
    iogSothoth.classList.remove('active');
    shubNiggurath.classList.add('active');
})

// Функция создания случайного числа
function randomNumber(number) {
    let randomNumber = Math.round(Math.random() * number)
    return randomNumber
}
// Объявляем переменные раундов
let firstStage = [];
let secondStage = [];
let thirdStage = [];

// Объявляем переменные клонов даты
let greenCardDataClone = [];
let brownCardDataClone = [];
let blueCardDataClone = [];

// Функци показа карты
function showCard() {
    if (firstStage.length > 0) {
        lastCard.style.backgroundImage = `url(${firstStage[0].cardFace})`
        if (firstStage[0].id.includes('green')) {
            green[0].textContent = `${green[0].textContent - 1}`
        }
        if (firstStage[0].id.includes('brown')) {
            brown[0].textContent = `${brown[0].textContent - 1}`
        }
        if (firstStage[0].id.includes('blue')) {
            blue[0].textContent = `${blue[0].textContent - 1}`
        }
        firstStage.splice(0, 1);
        console.log(firstStage)
    } else if ((secondStage.length > 0)) {
        lastCard.style.backgroundImage = `url(${secondStage[0].cardFace})`
        if (secondStage[0].id.includes('green')) {
            green[1].textContent = `${green[1].textContent - 1}`
        }
        if (secondStage[0].id.includes('brown')) {
            brown[1].textContent = `${brown[1].textContent - 1}`
        }
        if (secondStage[0].id.includes('blue')) {
            blue[1].textContent = `${blue[1].textContent - 1}`
        }
        secondStage.splice(0, 1);
        console.log(secondStage)
    } else if ((thirdStage.length > 0)) {
        lastCard.style.backgroundImage = `url(${thirdStage[0].cardFace})`
        if (thirdStage[0].id.includes('green')) {
            green[2].textContent = `${green[2].textContent - 1}`
        }
        if (thirdStage[0].id.includes('brown')) {
            brown[2].textContent = `${brown[2].textContent - 1}`
        }
        if (thirdStage[0].id.includes('blue')) {
            blue[2].textContent = `${blue[2].textContent - 1}`
        }
        thirdStage.splice(0, 1);
        console.log(thirdStage)
    }
}
// Замешиваем при нажатии на Древнего и уровень сложности
shuffleButton.addEventListener('click', () => {
    if (azathoth.classList.contains('active')) {
        resetStage()
        resetDataClone()
        pickAncient(0)
    }
    if (cthulthu.classList.contains('active')) {
        resetStage()
        resetDataClone()
        pickAncient(1)
    }
    if (iogSothoth.classList.contains('active')) {
        resetStage()
        resetDataClone()
        pickAncient(2)
    }
    if (shubNiggurath.classList.contains('active')) {
        resetStage()
        resetDataClone()
        pickAncient(3)
    }
})

// Показать карту
deck.addEventListener('click', showCard)

// Показать трекер при шафле
shuffleButton.addEventListener('click', () => {
    currentState[0].classList.remove('hidden');
    currentState[1].classList.remove('hidden');
    currentState[2].classList.remove('hidden');
})

//Функция шафла карт внутри колоды
function shuffleCards(arr) {
    return arr.sort(() => Math.random() - 0.5)
}

// Спрять меню справа при нажатии на древнего
azathoth.addEventListener('click', () => {
    deck.classList.add('hidden')
    currentState[0].classList.add('hidden')
    currentState[1].classList.add('hidden')
    currentState[2].classList.add('hidden')
    lastCard.classList.add('hidden')
    shuffleButton.classList.remove('hidden')
})
cthulthu.addEventListener('click', () => {
    deck.classList.add('hidden')
    currentState[0].classList.add('hidden')
    currentState[1].classList.add('hidden')
    currentState[2].classList.add('hidden')
    lastCard.classList.add('hidden')
    shuffleButton.classList.remove('hidden')
})
iogSothoth.addEventListener('click', () => {
    deck.classList.add('hidden')
    currentState[0].classList.add('hidden')
    currentState[1].classList.add('hidden')
    currentState[2].classList.add('hidden')
    lastCard.classList.add('hidden')
    shuffleButton.classList.remove('hidden')
})
shubNiggurath.addEventListener('click', () => {
    deck.classList.add('hidden')
    currentState[0].classList.add('hidden')
    currentState[1].classList.add('hidden')
    currentState[2].classList.add('hidden')
    lastCard.classList.add('hidden')
    shuffleButton.classList.remove('hidden')
})

// Функция сброса раунда
function resetStage() {
    firstStage = [];
    secondStage = [];
    thirdStage = [];
}

// Функция сброса клона даты карт
function resetDataClone() {
    greenCardDataClone = [];
    brownCardDataClone = [];
    blueCardDataClone = [];
}

// Функция для древнего
function pickAncient(heroNumber) {
    // firstStage
    for (let i = 0; i < `${ancientsData[heroNumber].firstStage.greenCards}`; i++) {
        let rndNum = randomNumber(17 - i);
        greenCardDataClone = greenCardDataClone.concat(greenCardData);
        firstStage.push(greenCardDataClone[rndNum]);
        greenCardDataClone.splice(rndNum, 1);
    }
    for (let i = 0; i < `${ancientsData[heroNumber].firstStage.brownCards}`; i++) {
        let rndNum = randomNumber(20 - i);
        brownCardDataClone = brownCardDataClone.concat(brownCardData);
        firstStage.push(brownCardDataClone[rndNum]);
        brownCardDataClone.splice(rndNum, 1);
    }
    for (let i = 0; i < `${ancientsData[heroNumber].firstStage.blueCards}`; i++) {
        let rndNum = randomNumber(11 - i);
        blueCardDataClone = blueCardDataClone.concat(blueCardData);
        firstStage.push(blueCardDataClone[rndNum]);
        blueCardDataClone.splice(rndNum, 1);
    }
    // secondStage
    for (let i = 0; i < `${ancientsData[heroNumber].secondStage.greenCards}`; i++) {
        let rndNum = randomNumber(16 - i);
        greenCardDataClone = greenCardDataClone.concat(greenCardData);
        secondStage.push(greenCardDataClone[rndNum]);
        greenCardDataClone.splice(rndNum, 1);
    }
    for (let i = 0; i < `${ancientsData[heroNumber].secondStage.brownCards}`; i++) {
        let rndNum = randomNumber(18 - i);
        brownCardDataClone = brownCardDataClone.concat(brownCardData);
        secondStage.push(brownCardDataClone[rndNum]);
        brownCardDataClone.splice(rndNum, 1);
    }
    for (let i = 0; i < `${ancientsData[heroNumber].secondStage.blueCards}`; i++) {
        let rndNum = randomNumber(10 - i);
        blueCardDataClone = blueCardDataClone.concat(blueCardData);
        secondStage.push(blueCardDataClone[rndNum]);
        blueCardDataClone.splice(rndNum, 1);
    }
    // thirdStage
    for (let i = 0; i < `${ancientsData[heroNumber].thirdStage.greenCards
} `; i++) {
        let rndNum = randomNumber(14 - i);
        greenCardDataClone = greenCardDataClone.concat(greenCardData);
        thirdStage.push(greenCardDataClone[rndNum]);
        greenCardDataClone.splice(rndNum, 1);
    }
    for (let i = 0; i < `${ ancientsData[heroNumber].thirdStage.brownCards } `; i++) {
        let rndNum = randomNumber(15 - i);
        brownCardDataClone = brownCardDataClone.concat(brownCardData);
        thirdStage.push(brownCardDataClone[rndNum]);
        brownCardDataClone.splice(rndNum, 1);
    }
    for (let i = 0; i < `${ ancientsData[heroNumber].thirdStage.blueCards } `; i++) {
        let rndNum = randomNumber(9 - i);
        blueCardDataClone = blueCardDataClone.concat(blueCardData);
        thirdStage.push(blueCardDataClone[rndNum]);
        blueCardDataClone.splice(rndNum, 1);
    }
    green[0].textContent = `${ancientsData[heroNumber].firstStage.greenCards}`;
    brown[0].textContent = `${ancientsData[heroNumber].firstStage.brownCards}`;
    blue[0].textContent = `${ancientsData[heroNumber].firstStage.blueCards}`;
    green[1].textContent = `${ancientsData[heroNumber].secondStage.greenCards}`;
    brown[1].textContent = `${ancientsData[heroNumber].secondStage.brownCards}`;
    blue[1].textContent = `${ancientsData[heroNumber].secondStage.blueCards}`;
    green[2].textContent = `${ancientsData[heroNumber].thirdStage.greenCards} `;
    brown[2].textContent = `${ancientsData[heroNumber].thirdStage.brownCards} `;
    blue[2].textContent = `${ancientsData[heroNumber].thirdStage.blueCards} `;
    // Шафлим карты
    shuffleCards(firstStage);
    shuffleCards(secondStage);
    shuffleCards(thirdStage);
}
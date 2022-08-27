// Импорт
import './sass/main.scss'
import cardsGreen from './assets/MythicCards/green/index'
import cardsBrown from './assets/MythicCards/brown/index'
import cardsBlue from './assets/MythicCards/blue/index'
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

// Создаем массив с 3мя колодами
let fullCardsGreen = [];
for (let key in cardsGreen) {
    fullCardsGreen.push(cardsGreen[key])
}
let fullCardsBrown = [];
for (let key in cardsBrown) {
    fullCardsBrown.push(cardsBrown[key])
}
let fullCardsBlue = [];
for (let key in cardsBlue) {
    fullCardsBlue.push(cardsBlue[key])
}
let firstStage = [];
let secondStage = [];
let thirdStage = [];

// Шафл для Первого демона, все этапы, средняя сложность
function azathothStandart() {
    // firstStage
    for (let i = 0; i < `${ancientsData[0].firstStage.greenCards}`; i++) {
        let rndNum = randomNumber(17 - i);
        firstStage.push(fullCardsGreen[rndNum]);
        fullCardsGreen.splice(rndNum, 1);
        green[0].textContent = `${ancientsData[0].firstStage.greenCards}`;
    }
    for (let i = 0; i < `${ancientsData[0].firstStage.brownCards}`; i++) {
        let rndNum = randomNumber(20 - i);
        firstStage.push(fullCardsBrown[rndNum]);
        fullCardsBrown.splice(rndNum, 1);
        brown[0].textContent = `${ancientsData[0].firstStage.brownCards}`;
    }
    for (let i = 0; i < `${ancientsData[0].firstStage.blueCards}`; i++) {
        let rndNum = randomNumber(11 - i);
        firstStage.push(fullCardsBlue[rndNum]);
        fullCardsBlue.splice(rndNum, 1);
        blue[0].textContent = `${ancientsData[0].firstStage.blueCards}`;
    }
    // secondStage
    for (let i = 0; i < `${ancientsData[0].secondStage.greenCards}`; i++) {
        let rndNum = randomNumber(16 - i);
        secondStage.push(fullCardsGreen[rndNum]);
        fullCardsGreen.splice(rndNum, 1);
        green[1].textContent = `${ancientsData[0].secondStage.greenCards}`;
    }
    for (let i = 0; i < `${ancientsData[0].secondStage.brownCards}`; i++) {
        let rndNum = randomNumber(18 - i);
        secondStage.push(fullCardsBrown[rndNum]);
        fullCardsBrown.splice(rndNum, 1);
        brown[1].textContent = `${ancientsData[0].secondStage.brownCards}`;
    }
    for (let i = 0; i < `${ancientsData[0].secondStage.blueCards}`; i++) {
        let rndNum = randomNumber(10 - i);
        secondStage.push(fullCardsBlue[rndNum]);
        fullCardsBlue.splice(rndNum, 1);
        blue[1].textContent = `${ancientsData[0].secondStage.blueCards}`;
    }
    // thirdStage
    for (let i = 0; i < `${ancientsData[0].thirdStage.greenCards}`; i++) {
        let rndNum = randomNumber(14 - i);
        thirdStage.push(fullCardsGreen[rndNum]);
        fullCardsGreen.splice(rndNum, 1);
        green[2].textContent = `${ancientsData[0].thirdStage.greenCards}`;
    }
    for (let i = 0; i < `${ancientsData[0].thirdStage.brownCards}`; i++) {
        let rndNum = randomNumber(15 - i);
        thirdStage.push(fullCardsBrown[rndNum]);
        fullCardsBrown.splice(rndNum, 1);
        brown[2].textContent = `${ancientsData[0].thirdStage.brownCards}`;
    }
    for (let i = 0; i < `${ancientsData[0].thirdStage.blueCards}`; i++) {
        let rndNum = randomNumber(9 - i);
        thirdStage.push(fullCardsBlue[rndNum]);
        fullCardsBlue.splice(rndNum, 1);
    }
    blue[2].textContent = `${ancientsData[0].thirdStage.blueCards}`;
    // Шафлим карты
    shuffleCards(firstStage);
    shuffleCards(secondStage);
    shuffleCards(thirdStage);
}

// Функци показа карты
function showCard() {
    if (firstStage.length > 0) {
        lastCard.style.backgroundImage = `url(${firstStage[0]})`
        if (firstStage[0].includes('green')) {
            green[0].textContent = `${green[0].textContent - 1}`
        }
        if (firstStage[0].includes('brown')) {
            brown[0].textContent = `${brown[0].textContent - 1}`
        }
        if (firstStage[0].includes('blue')) {
            blue[0].textContent = `${blue[0].textContent - 1}`
        }
        firstStage.splice(0, 1);
    } else if ((secondStage.length > 0)) {
        lastCard.style.backgroundImage = `url(${secondStage[0]})`
        if (secondStage[0].includes('green')) {
            green[1].textContent = `${green[1].textContent - 1}`
        }
        if (secondStage[0].includes('brown')) {
            brown[1].textContent = `${brown[1].textContent - 1}`
        }
        if (secondStage[0].includes('blue')) {
            blue[1].textContent = `${blue[1].textContent - 1}`
        }
        secondStage.splice(0, 1);
    } else if ((thirdStage.length > 0)) {
        lastCard.style.backgroundImage = `url(${thirdStage[0]})`
        if (thirdStage[0].includes('green')) {
            green[2].textContent = `${green[2].textContent - 1}`
        }
        if (thirdStage[0].includes('brown')) {
            brown[2].textContent = `${brown[2].textContent - 1}`
        }
        if (thirdStage[0].includes('blue')) {
            blue[2].textContent = `${blue[2].textContent - 1}`
        }
        thirdStage.splice(0, 1);
    }
}
// Замешиваем при нажатии на Древнего и уровень сложности
shuffleButton.addEventListener('click', () => {
    if (azathoth.classList.contains('active')) {
        azathothStandart()
    }
    if (cthulthu.classList.contains('active')) {
        cthulthuStandart()
    }
    if (iogSothoth.classList.contains('active')) {
        iogSothothStandart()
    }
    if (shubNiggurath.classList.contains('active')) {
        shubNiggurathStandart()
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

// Функция для 2 древнего
function cthulthuStandart() {
    // firstStage
    for (let i = 0; i < `${ancientsData[1].firstStage.greenCards}`; i++) {
        let rndNum = randomNumber(17 - i);
        firstStage.push(fullCardsGreen[rndNum]);
        fullCardsGreen.splice(rndNum, 1);
        green[0].textContent = `${ancientsData[1].firstStage.greenCards}`;
    }
    for (let i = 0; i < `${ancientsData[1].firstStage.brownCards}`; i++) {
        let rndNum = randomNumber(20 - i);
        firstStage.push(fullCardsBrown[rndNum]);
        fullCardsBrown.splice(rndNum, 1);
        brown[0].textContent = `${ancientsData[1].firstStage.brownCards}`;
    }
    for (let i = 0; i < `${ancientsData[1].firstStage.blueCards}`; i++) {
        let rndNum = randomNumber(11 - i);
        firstStage.push(fullCardsBlue[rndNum]);
        fullCardsBlue.splice(rndNum, 1);
        blue[0].textContent = `${ancientsData[1].firstStage.blueCards}`;
    }
    // secondStage
    for (let i = 0; i < `${ancientsData[1].secondStage.greenCards}`; i++) {
        let rndNum = randomNumber(16 - i);
        secondStage.push(fullCardsGreen[rndNum]);
        fullCardsGreen.splice(rndNum, 1);
        green[1].textContent = `${ancientsData[1].secondStage.greenCards}`;
    }
    for (let i = 0; i < `${ancientsData[1].secondStage.brownCards}`; i++) {
        let rndNum = randomNumber(18 - i);
        secondStage.push(fullCardsBrown[rndNum]);
        fullCardsBrown.splice(rndNum, 1);
        brown[1].textContent = `${ancientsData[1].secondStage.brownCards}`;
    }
    for (let i = 0; i < `${ancientsData[1].secondStage.blueCards}`; i++) {
        let rndNum = randomNumber(10 - i);
        secondStage.push(fullCardsBlue[rndNum]);
        fullCardsBlue.splice(rndNum, 1);
        blue[1].textContent = `${ancientsData[1].secondStage.blueCards}`;
    }
    // thirdStage
    for (let i = 0; i < `${ancientsData[1].thirdStage.greenCards}`; i++) {
        let rndNum = randomNumber(14 - i);
        thirdStage.push(fullCardsGreen[rndNum]);
        fullCardsGreen.splice(rndNum, 1);
        green[2].textContent = `${ancientsData[1].thirdStage.greenCards}`;
    }
    for (let i = 0; i < `${ancientsData[1].thirdStage.brownCards}`; i++) {
        let rndNum = randomNumber(15 - i);
        thirdStage.push(fullCardsBrown[rndNum]);
        fullCardsBrown.splice(rndNum, 1);
        brown[2].textContent = `${ancientsData[1].thirdStage.brownCards}`;
    }
    for (let i = 0; i < `${ancientsData[1].thirdStage.blueCards}`; i++) {
        let rndNum = randomNumber(9 - i);
        thirdStage.push(fullCardsBlue[rndNum]);
        fullCardsBlue.splice(rndNum, 1);
    }
    green[0].textContent = `${ancientsData[1].thirdStage.blueCards}`;
    blue[1].textContent = `${ancientsData[1].thirdStage.blueCards}`;
    blue[2].textContent = `${ancientsData[1].thirdStage.blueCards}`;
    // Шафлим карты
    shuffleCards(firstStage);
    shuffleCards(secondStage);
    shuffleCards(thirdStage);
}

// Функция для 3ого древнего
function iogSothothStandart() {
    // firstStage
    for (let i = 0; i < `${ancientsData[2].firstStage.greenCards}`; i++) {
        let rndNum = randomNumber(17 - i);
        firstStage.push(fullCardsGreen[rndNum]);
        fullCardsGreen.splice(rndNum, 1);
        green[0].textContent = `${ancientsData[2].firstStage.greenCards}`;
    }
    for (let i = 0; i < `${ancientsData[2].firstStage.brownCards}`; i++) {
        let rndNum = randomNumber(20 - i);
        firstStage.push(fullCardsBrown[rndNum]);
        fullCardsBrown.splice(rndNum, 1);
        brown[0].textContent = `${ancientsData[2].firstStage.brownCards}`;
    }
    for (let i = 0; i < `${ancientsData[2].firstStage.blueCards}`; i++) {
        let rndNum = randomNumber(11 - i);
        firstStage.push(fullCardsBlue[rndNum]);
        fullCardsBlue.splice(rndNum, 1);
        blue[0].textContent = `${ancientsData[2].firstStage.blueCards}`;
    }
    // secondStage
    for (let i = 0; i < `${ancientsData[2].secondStage.greenCards}`; i++) {
        let rndNum = randomNumber(16 - i);
        secondStage.push(fullCardsGreen[rndNum]);
        fullCardsGreen.splice(rndNum, 1);
        green[1].textContent = `${ancientsData[2].secondStage.greenCards}`;
    }
    for (let i = 0; i < `${ancientsData[2].secondStage.brownCards}`; i++) {
        let rndNum = randomNumber(18 - i);
        secondStage.push(fullCardsBrown[rndNum]);
        fullCardsBrown.splice(rndNum, 1);
        brown[1].textContent = `${ancientsData[2].secondStage.brownCards}`;
    }
    for (let i = 0; i < `${ancientsData[2].secondStage.blueCards}`; i++) {
        let rndNum = randomNumber(10 - i);
        secondStage.push(fullCardsBlue[rndNum]);
        fullCardsBlue.splice(rndNum, 1);
        blue[1].textContent = `${ancientsData[2].secondStage.blueCards}`;
    }
    // thirdStage
    for (let i = 0; i < `${ancientsData[2].thirdStage.greenCards}`; i++) {
        let rndNum = randomNumber(14 - i);
        thirdStage.push(fullCardsGreen[rndNum]);
        fullCardsGreen.splice(rndNum, 1);
        green[2].textContent = `${ancientsData[2].thirdStage.greenCards}`;
    }
    for (let i = 0; i < `${ancientsData[2].thirdStage.brownCards}`; i++) {
        let rndNum = randomNumber(15 - i);
        thirdStage.push(fullCardsBrown[rndNum]);
        fullCardsBrown.splice(rndNum, 1);
        brown[2].textContent = `${ancientsData[2].thirdStage.brownCards}`;
    }
    for (let i = 0; i < `${ancientsData[2].thirdStage.blueCards}`; i++) {
        let rndNum = randomNumber(9 - i);
        thirdStage.push(fullCardsBlue[rndNum]);
        fullCardsBlue.splice(rndNum, 1);
    }
    green[0].textContent = `${ancientsData[2].thirdStage.blueCards}`;
    blue[2].textContent = `${ancientsData[2].thirdStage.blueCards}`;
    // Шафлим карты
    shuffleCards(firstStage);
    shuffleCards(secondStage);
    shuffleCards(thirdStage);
}

// Функция для 4ого древнего
function shubNiggurathStandart() {
    // firstStage
    for (let i = 0; i < `${ancientsData[3].firstStage.greenCards}`; i++) {
        let rndNum = randomNumber(17 - i);
        firstStage.push(fullCardsGreen[rndNum]);
        fullCardsGreen.splice(rndNum, 1);
        green[0].textContent = `${ancientsData[3].firstStage.greenCards}`;
    }
    for (let i = 0; i < `${ancientsData[3].firstStage.brownCards}`; i++) {
        let rndNum = randomNumber(20 - i);
        firstStage.push(fullCardsBrown[rndNum]);
        fullCardsBrown.splice(rndNum, 1);
        brown[0].textContent = `${ancientsData[3].firstStage.brownCards}`;
    }
    for (let i = 0; i < `${ancientsData[3].firstStage.blueCards}`; i++) {
        let rndNum = randomNumber(11 - i);
        firstStage.push(fullCardsBlue[rndNum]);
        fullCardsBlue.splice(rndNum, 1);
        blue[0].textContent = `${ancientsData[3].firstStage.blueCards}`;
    }
    // secondStage
    for (let i = 0; i < `${ancientsData[3].secondStage.greenCards}`; i++) {
        let rndNum = randomNumber(16 - i);
        secondStage.push(fullCardsGreen[rndNum]);
        fullCardsGreen.splice(rndNum, 1);
        green[1].textContent = `${ancientsData[3].secondStage.greenCards}`;
    }
    for (let i = 0; i < `${ancientsData[3].secondStage.brownCards}`; i++) {
        let rndNum = randomNumber(18 - i);
        secondStage.push(fullCardsBrown[rndNum]);
        fullCardsBrown.splice(rndNum, 1);
        brown[1].textContent = `${ancientsData[3].secondStage.brownCards}`;
    }
    for (let i = 0; i < `${ancientsData[3].secondStage.blueCards}`; i++) {
        let rndNum = randomNumber(10 - i);
        secondStage.push(fullCardsBlue[rndNum]);
        fullCardsBlue.splice(rndNum, 1);
        blue[1].textContent = `${ancientsData[3].secondStage.blueCards}`;
    }
    // thirdStage
    for (let i = 0; i < `${ancientsData[3].thirdStage.greenCards}`; i++) {
        let rndNum = randomNumber(14 - i);
        thirdStage.push(fullCardsGreen[rndNum]);
        fullCardsGreen.splice(rndNum, 1);
        green[2].textContent = `${ancientsData[3].thirdStage.greenCards}`;
    }
    for (let i = 0; i < `${ancientsData[3].thirdStage.brownCards}`; i++) {
        let rndNum = randomNumber(15 - i);
        thirdStage.push(fullCardsBrown[rndNum]);
        fullCardsBrown.splice(rndNum, 1);
        brown[2].textContent = `${ancientsData[3].thirdStage.brownCards}`;
    }
    for (let i = 0; i < `${ancientsData[3].thirdStage.blueCards}`; i++) {
        let rndNum = randomNumber(9 - i);
        thirdStage.push(fullCardsBlue[rndNum]);
        fullCardsBlue.splice(rndNum, 1);
    }
    blue[2].textContent = `${ancientsData[3].thirdStage.blueCards}`;
    // Шафлим карты
    shuffleCards(firstStage);
    shuffleCards(secondStage);
    shuffleCards(thirdStage);
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
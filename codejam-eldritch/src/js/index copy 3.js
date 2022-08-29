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
const stageText = document.querySelectorAll('.stage-text')
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
    currentState[0].classList.add('hidden');
    currentState[1].classList.add('hidden');
    currentState[2].classList.add('hidden');
    stageText[0].classList.remove('done')
    stageText[1].classList.remove('done')
    stageText[2].classList.remove('done')
})
difficulty[1].addEventListener('click', () => {
    difficulty[1].classList.add('active');
    difficulty[0].classList.remove('active');
    difficulty[2].classList.remove('active');
    deckСontainer.classList.remove('hidden');
    shuffleButton.classList.remove('hidden');
    deck.classList.add('hidden');
    currentState[0].classList.add('hidden');
    currentState[1].classList.add('hidden');
    currentState[2].classList.add('hidden');
    stageText[0].classList.remove('done')
    stageText[1].classList.remove('done')
    stageText[2].classList.remove('done')
})
difficulty[2].addEventListener('click', () => {
    difficulty[2].classList.add('active');
    difficulty[0].classList.remove('active');
    difficulty[1].classList.remove('active');
    deckСontainer.classList.remove('hidden');
    shuffleButton.classList.remove('hidden');
    deck.classList.add('hidden');
    currentState[0].classList.add('hidden');
    currentState[1].classList.add('hidden');
    currentState[2].classList.add('hidden');
    stageText[0].classList.remove('done')
    stageText[1].classList.remove('done')
    stageText[2].classList.remove('done')
})
difficulty[3].addEventListener('click', () => {
    difficulty[3].classList.add('active');
    difficulty[1].classList.remove('active');
    difficulty[2].classList.remove('active');
    difficulty[0].classList.remove('active');
    deckСontainer.classList.remove('hidden');
    shuffleButton.classList.remove('hidden');
    deck.classList.add('hidden');
    currentState[0].classList.add('hidden');
    currentState[1].classList.add('hidden');
    currentState[2].classList.add('hidden');
    stageText[0].classList.remove('done')
    stageText[1].classList.remove('done')
    stageText[2].classList.remove('done')
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
    if (firstStage.length === 0) {
        stageText[0].classList.add('done')
    }
    if (secondStage.length === 0) {
        stageText[1].classList.add('done')
    }
    if (thirdStage.length === 0) {
        stageText[2].classList.add('done')
    }

}
// Замешиваем при нажатии на Древнего и уровень сложности
shuffleButton.addEventListener('click', () => {
    // Первый древний 3 сложности
    if ((azathoth.classList.contains('active') & difficulty[0].classList.contains('active'))) {
        resetStage()
        resetDataClone()
        pickAncient(0, 'superEasy')
    }
    if ((azathoth.classList.contains('active') & difficulty[1].classList.contains('active'))) {
        resetStage()
        resetDataClone()
        pickAncient(0, 'easy')
    }
    if ((azathoth.classList.contains('active') & difficulty[2].classList.contains('active'))) {
        resetStage()
        resetDataClone()
        pickAncient(0, 'normal')
    }
    if ((azathoth.classList.contains('active') & difficulty[3].classList.contains('active'))) {
        resetStage()
        resetDataClone()
        pickAncient(0, 'hard')
    }
    // Второй древний 3 сложности
    if ((cthulthu.classList.contains('active') & difficulty[0].classList.contains('active'))) {
        resetStage()
        resetDataClone()
        pickAncient(1, 'superEasy')
    }
    if ((cthulthu.classList.contains('active') & difficulty[1].classList.contains('active'))) {
        resetStage()
        resetDataClone()
        pickAncient(1, 'easy')
    }
    if ((cthulthu.classList.contains('active') & difficulty[2].classList.contains('active'))) {
        resetStage()
        resetDataClone()
        pickAncient(1, 'normal')
    }
    if ((cthulthu.classList.contains('active') & difficulty[3].classList.contains('active'))) {
        resetStage()
        resetDataClone()
        pickAncient(1, 'hard')
    }
    // Третий древний 3 сложности
    if ((iogSothoth.classList.contains('active') & difficulty[0].classList.contains('active'))) {
        resetStage()
        resetDataClone()
        pickAncient(2, 'superEasy')
    }
    if ((iogSothoth.classList.contains('active') & difficulty[1].classList.contains('active'))) {
        resetStage()
        resetDataClone()
        pickAncient(2, 'easy')
    }
    if ((iogSothoth.classList.contains('active') & difficulty[2].classList.contains('active'))) {
        resetStage()
        resetDataClone()
        pickAncient(2, 'normal')
    }
    if ((iogSothoth.classList.contains('active') & difficulty[3].classList.contains('active'))) {
        resetStage()
        resetDataClone()
        pickAncient(2, 'hard')
    }
    // Четвертый древний 3 сложности
    if ((shubNiggurath.classList.contains('active') & difficulty[0].classList.contains('active'))) {
        resetStage()
        resetDataClone()
        pickAncient(3, 'superEasy')
    }
    if ((shubNiggurath.classList.contains('active') & difficulty[1].classList.contains('active'))) {
        resetStage()
        resetDataClone()
        pickAncient(3, 'easy')
    }
    if ((shubNiggurath.classList.contains('active') & difficulty[2].classList.contains('active'))) {
        resetStage()
        resetDataClone()
        pickAncient(3, 'normal')
    }
    if ((shubNiggurath.classList.contains('active') & difficulty[3].classList.contains('active'))) {
        resetStage()
        resetDataClone()
        pickAncient(3, 'hard')
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
    stageText[0].classList.remove('done')
    stageText[1].classList.remove('done')
    stageText[2].classList.remove('done')
})
cthulthu.addEventListener('click', () => {
    deck.classList.add('hidden')
    currentState[0].classList.add('hidden')
    currentState[1].classList.add('hidden')
    currentState[2].classList.add('hidden')
    lastCard.classList.add('hidden')
    shuffleButton.classList.remove('hidden')
    stageText[0].classList.remove('done')
    stageText[1].classList.remove('done')
    stageText[2].classList.remove('done')
})
iogSothoth.addEventListener('click', () => {
    deck.classList.add('hidden')
    currentState[0].classList.add('hidden')
    currentState[1].classList.add('hidden')
    currentState[2].classList.add('hidden')
    lastCard.classList.add('hidden')
    shuffleButton.classList.remove('hidden')
    stageText[0].classList.remove('done')
    stageText[1].classList.remove('done')
    stageText[2].classList.remove('done')
})
shubNiggurath.addEventListener('click', () => {
    deck.classList.add('hidden')
    currentState[0].classList.add('hidden')
    currentState[1].classList.add('hidden')
    currentState[2].classList.add('hidden')
    lastCard.classList.add('hidden')
    shuffleButton.classList.remove('hidden')
    stageText[0].classList.remove('done')
    stageText[1].classList.remove('done')
    stageText[2].classList.remove('done')
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
let rndNum = 0

// Функция для древнего
function pickAncient(heroNumber, difficulty) {
    // Сумма всех легких карт для 3ех стадий
    const sumOfGreenEasyCards = (ancientsData[heroNumber].firstStage.greenCards) + (ancientsData[heroNumber].secondStage.greenCards) + (ancientsData[heroNumber].thirdStage.greenCards)
    const sumOfBrownEasyCards = (ancientsData[heroNumber].firstStage.brownCards) + (ancientsData[heroNumber].secondStage.brownCards) + (ancientsData[heroNumber].thirdStage.brownCards)
    const sumOfBlueEasyCards = (ancientsData[heroNumber].firstStage.blueCards) + (ancientsData[heroNumber].secondStage.blueCards) + (ancientsData[heroNumber].thirdStage.blueCards)
    // Супер легкая сложность
    if (difficulty === 'superEasy') {
        // Для зеленых карт
        for (let j = 0; j < greenCardData.length - 1; j++) {
            if (greenCardData[j].difficulty === 'easy') {
                greenCardDataClone.push(greenCardData[j])
            }
        }
        if (greenCardDataClone.length < sumOfGreenEasyCards) {
            for (let j = 0; j < sumOfGreenEasyCards - (greenCardDataClone.length - 1); j++) {
                if (greenCardData[j].difficulty === 'normal') {
                    greenCardDataClone.push(greenCardData[j])
                }
            }
        }
        // Для коричневых карт
        for (let j = 0; j < brownCardData.length - 1; j++) {
            if (brownCardData[j].difficulty === 'easy') {
                brownCardDataClone.push(brownCardData[j])
            }
        }
        if (brownCardDataClone.length < sumOfBrownEasyCards) {
            for (let j = 0; j < sumOfBrownEasyCards - (brownCardDataClone.length - 1); j++) {
                if (brownCardData[j].difficulty === 'normal') {
                    brownCardDataClone.push(brownCardData[j])
                }
            }
        }
        // Для синих карт
        for (let j = 0; j < blueCardData.length - 1; j++) {
            if (blueCardData[j].difficulty === 'easy') {
                blueCardDataClone.push(blueCardData[j])
            }
        }
        if (blueCardDataClone.length < sumOfBlueEasyCards) {
            for (let j = 0; j < sumOfBrownEasyCards - (blueCardDataClone.length - 1); j++) {
                if (blueCardData[j].difficulty === 'normal') {
                    blueCardDataClone.push(blueCardData[j])
                }
            }
        }
    }
    console.log(greenCardDataClone)
    console.log(brownCardDataClone)
    console.log(blueCardDataClone)
    // Легкая сложность
    if (difficulty === 'easy') {
        for (let j = 0; j < greenCardData.length - 1; j++) {
            if (greenCardData[j].difficulty === 'easy' | greenCardData[j].difficulty === 'normal') {
                greenCardDataClone.push(greenCardData[j])
            }
        }
        for (let j = 0; j < brownCardData.length - 1; j++) {
            if (brownCardData[j].difficulty === 'easy' | brownCardData[j].difficulty === 'normal') {
                brownCardDataClone.push(brownCardData[j])
            }
        }
        for (let j = 0; j < blueCardData.length - 1; j++) {
            if (blueCardData[j].difficulty === 'easy' | blueCardData[j].difficulty === 'normal') {
                blueCardDataClone.push(blueCardData[j])
            }
        }
    }
    // Средняя сложность
    if (difficulty === 'normal') {
        for (let j = 0; j < greenCardData.length - 1; j++) {
            greenCardDataClone.push(greenCardData[j])
        }
        for (let j = 0; j < brownCardData.length - 1; j++) {
            brownCardDataClone.push(brownCardData[j])
        }
        for (let j = 0; j < blueCardData.length - 1; j++) {
            blueCardDataClone.push(blueCardData[j])
        }
    }
    // Тяжелая сложность
    if (difficulty === 'hard') {
        for (let j = 0; j < greenCardData.length - 1; j++) {
            if (greenCardData[j].difficulty === 'hard' | greenCardData[j].difficulty === 'normal') {
                greenCardDataClone.push(greenCardData[j])
            }
        }
        for (let j = 0; j < brownCardData.length - 1; j++) {
            if (brownCardData[j].difficulty === 'hard' | brownCardData[j].difficulty === 'normal') {
                brownCardDataClone.push(brownCardData[j])
            }
        }
        for (let j = 0; j < blueCardData.length - 1; j++) {
            if (blueCardData[j].difficulty === 'hard' | blueCardData[j].difficulty === 'normal') {
                blueCardDataClone.push(blueCardData[j])
            }
        }
    }
    // firstStage 
    for (let i = 0; i < `${ancientsData[heroNumber].firstStage.greenCards}`; i++) {
        rndNum = randomNumber(greenCardDataClone.length - 1 - i);
        firstStage.push(greenCardDataClone[rndNum]);
        greenCardDataClone.splice(rndNum, 1);
    }
    for (let i = 0; i < `${ancientsData[heroNumber].firstStage.brownCards}`; i++) {
        rndNum = randomNumber(brownCardDataClone.length - 1 - i);
        firstStage.push(brownCardDataClone[rndNum]);
        brownCardDataClone.splice(rndNum, 1);
    }
    for (let i = 0; i < `${ancientsData[heroNumber].firstStage.blueCards}`; i++) {
        rndNum = randomNumber(blueCardDataClone.length - 1 - i);
        firstStage.push(blueCardDataClone[rndNum]);
        blueCardDataClone.splice(rndNum, 1);
    }
    // secondStage
    for (let i = 0; i < `${ancientsData[heroNumber].secondStage.greenCards}`; i++) {
        rndNum = randomNumber(greenCardDataClone.length - 1 - ancientsData[heroNumber].firstStage.greenCards - i);
        secondStage.push(greenCardDataClone[rndNum]);
        greenCardDataClone.splice(rndNum, 1);
    }
    for (let i = 0; i < `${ancientsData[heroNumber].secondStage.brownCards}`; i++) {
        rndNum = randomNumber(brownCardDataClone.length - 1 - ancientsData[heroNumber].firstStage.brownCards - i);
        secondStage.push(brownCardDataClone[rndNum]);
        brownCardDataClone.splice(rndNum, 1);
    }
    for (let i = 0; i < `${ancientsData[heroNumber].secondStage.blueCards}`; i++) {
        rndNum = randomNumber(blueCardDataClone.length - 1 - ancientsData[heroNumber].firstStage.blueCards - i);
        secondStage.push(blueCardDataClone[rndNum]);
        blueCardDataClone.splice(rndNum, 1);
    }
    // thirdStage
    for (let i = 0; i < `${ancientsData[heroNumber].thirdStage.greenCards
        } `; i++) {
        rndNum = randomNumber(greenCardDataClone.length - 1 - ancientsData[heroNumber].secondStage.greenCards - i);
        thirdStage.push(greenCardDataClone[rndNum]);
        greenCardDataClone.splice(rndNum, 1);
    }
    for (let i = 0; i < `${ancientsData[heroNumber].thirdStage.brownCards} `; i++) {
        rndNum = randomNumber(brownCardDataClone.length - 1 - ancientsData[heroNumber].secondStage.brownCards - i);
        thirdStage.push(brownCardDataClone[rndNum]);
        brownCardDataClone.splice(rndNum, 1);
    }
    for (let i = 0; i < `${ancientsData[heroNumber].thirdStage.blueCards} `; i++) {
        rndNum = randomNumber(blueCardDataClone.length - 1 - ancientsData[heroNumber].secondStage.blueCards - i);
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

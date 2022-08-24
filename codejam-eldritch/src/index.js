// Импорт
import './sass/main.scss'
import cards from './assets/MythicCards/blue/index'
import ancients from './assets/Ancients/index'
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
const deck = document.querySelector('.deck');
const body = document.querySelector('.App');
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

function azathothStandart() {
    const fullDeck = [];
    fullDeck.push('71');
}
azathothStandart()
console.log(ancients.azathoth)
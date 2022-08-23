// Объявление переменных - Древние
const azathoth = document.querySelector('#Azathoth');
const cthulthu = document.querySelector('#Cthulthu');
const iogSothoth = document.querySelector('#IogSothoth');
const shubNiggurath = document.querySelector('#ShubNiggurath');

// Объявление переменные - Сложности игры
const difficultyContainer = document.querySelector('.difficulty-container');
const difficulty = document.querySelectorAll('.difficulty');

// Объявление переменные - Колода
const deckСontainer = document.querySelector('.deck-container');
const shuffleButton = document.querySelector('.shuffle-button');
const deck = document.querySelector('.deck');

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

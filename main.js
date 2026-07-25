//Изменение цвета карточки товара
const productCard = document.querySelector('.product-wrapper')
const changeCardColorButton = document.querySelector('.button-group__change-card-color-button')
const greenColorHash = '#a3e7c5'
const blueColorHash = '#84848f'

changeCardColorButton.addEventListener('click', () => {
  productCard.style.backgroundColor = greenColorHash
})

//Изменение цвета всех карточек товара
const productCards = document.querySelectorAll('.product-wrapper')
const changeAllCardsColorButton = document.querySelector('.button-group__change-all-cards-color-button')

changeAllCardsColorButton.addEventListener('click', () => {
  productCards.forEach((card) => card.style.backgroundColor = blueColorHash)
})

//Открытие google.com в новой вкладке
const openGoogleButton = document.querySelector('.button-group__open-google-button')
const googleUrl = 'https://www.google.com'

openGoogleButton.addEventListener('click', openGoogle)

function openGoogle() {
  const answer = window.confirm('Вы хотите открыть google.com?')
  if (answer === true) {
    window.open(googleUrl)
  } 
  else {
    return;
  }
}

//Вывод консоль лог
const openConsoleLogButton = document.querySelector('.button-group__open-console-log-button')

openConsoleLogButton.addEventListener('click', () => 
  outputConsoleLogButton('Вы открыли консоль лог!','Сообщение выведено в консоль')
)

function outputConsoleLogButton(message, alertMessage) {
  console.log(message)
  alert(alertMessage)
}

//Выведение контента элемента заголовка в консоль
const openPageTitleConsole = document.querySelector('.container__page-title')

openPageTitleConsole.addEventListener('mouseenter', () => 
  outputConsoleLogPageTitle(openPageTitleConsole.textContent)
)

function outputConsoleLogPageTitle(textContent) {
  console.log(textContent)
}

//Изменение цвета кнопки при нажатии
const editClickColorButton = document.querySelector('.button-group__edit-self-color-button')

editClickColorButton.addEventListener('click', changeButtonColor)

function changeButtonColor() {
  editClickColorButton.classList.toggle('change-color-button')
}

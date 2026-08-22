//Изменение цвета карточки товара
const productCard = document.querySelector('.product-wrapper');
const CardColorButton = document.querySelector('.button-group__change-card-color-button');
const greenColorHex = '#a3e7c5';
const blueColorHex = '#84848f';

CardColorButton.addEventListener('click', () => {
  productCard.style.backgroundColor = greenColorHex;
});

//Изменение цвета всех карточек товара
const productCards = document.querySelectorAll('.product-wrapper');
const AllCardsColorButton = document.querySelector('.button-group__change-all-cards-color-button');

AllCardsColorButton.addEventListener('click', () => {
  productCards.forEach((card) => card.style.backgroundColor = blueColorHex);
});

//Открытие google.com в новой вкладке
const openGoogleButton = document.querySelector('.button-group__open-google-button');
const googleUrl = 'https://www.google.com';

openGoogleButton.addEventListener('click', openGoogle);

function openGoogle() {
  const answer = window.confirm('Вы хотите открыть google.com?');
  if (answer === true) {
    window.open(googleUrl)
  } 
  else {
    return;
  }
}

//Вывод консоль лог
const messageOutputButton = document.querySelector('.button-group__open-console-log-button');

messageOutputButton.addEventListener('click', () => 
  outputMessage('Вы открыли консоль лог!','Сообщение выведено в консоль')
);

function outputMessage(message, alertMessage) {
  console.log(message);
  alert(alertMessage);
}

//Выведение контента элемента заголовка в консоль
const pageTitle = document.querySelector('.container__page-title');

pageTitle.addEventListener('mouseenter', () => 
  outputPageTitle(pageTitle.textContent)
);

function outputPageTitle(textContent) {
  console.log(textContent);
}

//Изменение цвета кнопки при нажатии
const colorEditButton = document.querySelector('.button-group__edit-self-color-button');

colorEditButton.addEventListener('click', changeButtonColor);

function changeButtonColor() {
  colorEditButton.classList.toggle('change-color-button');
}

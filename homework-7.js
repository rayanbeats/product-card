//Функция которая принимает 2 параметра и выводит в консоль

function showWeather(city, temperature) {
  console.log (`Сейчас в ${city} температура — ${temperature} градусов по Цельсию`)
}

showWeather("Санкт-Петербург", 10);

//Определение типа скорости

const LIGHT_SPEED = 299792458;

function determineSpeedType (speed) {
  if (speed > LIGHT_SPEED) {
    console.log("Сверхсветовая скорость");
  } else if (speed === LIGHT_SPEED) {
    console.log("Скорость света");
  } else {
    console.log("Субсветовая скорость");
  }
}

determineSpeedType(2997924533);
determineSpeedType(29979245);
determineSpeedType(299792458);

//Проверка бюджета на покупку

let product = "Автомобиль";
let price = 20000;

function buyProductAccept (budget) {
  if (budget >= price) {
    console.log(`${product} приобретен. Спасибо за покупку!`);
  } else {
    const notEnough = price - budget;
    console.log(`Вам не хватает ${notEnough}$, пополните баланс`);
  }
}

buyProductAccept(12400);
buyProductAccept(20000);


//Определение превышения скорости автомобиля
function determineCarSpeed (speed) {
  if (speed <= 40) {
    console.log(`Скорость - ${speed} км/ч. Скорость не превышена!`);
  } else {
    console.log(`Скорость - ${speed} км/ч. Превышение скорости!`);
  }
}

determineCarSpeed(10);
determineCarSpeed(100);

//3 различных переменных
const PI = 3.14;
let bookName = "Отцы и Дети";
let themeBlack = true;
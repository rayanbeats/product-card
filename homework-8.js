//Создание объекта на основе своих данных
const profile = {
  name:"Rayan",
  surname:"Beats",
  age: 27,
  email:"rusl070769@gmail.com",
  work:"Self employed",
  position:"Frontend Developer",
  country:"Russia",
  city:"Izhevsk"
}

//Создание объекта, который будет хранить данные об автомобиле
const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2022,
  color: "Черный",
  transmission: "Автомат"
}

car.owner = profile;

//Функция проверки наличия свойства объекта "максимальная скорость"
function checkProperty (car) {
  if ("maxSpeed" in car){
    console.log("Свойство 'maxSpeed' присутствует в объекте 'car'");
  } else {
    car.maxSpeed = 200;
    console.log("Свойство 'maxSpeed' добавлено в объект 'car'");
  }
  return
}
checkProperty(car);
console.log(car);

//Функция которая получает перым аргументом объект, а вторым - свойство, которое нужно вывести
function checkProperty2 (car, propertyName) {
  console.log(car[propertyName]);
}

checkProperty2(car, "brand");
checkProperty2(car, "model");
checkProperty2(car, "year");

//Создать массив, который содержит названия продуктов (просто строки)
const products = [
  "Мороженое", "Пицца", "Сок", "Чипсы", "Шоколад",
  "Печенье", "Сыр", "Молоко", "Хлеб", "Яйца"
];

//Создать массив, который содержит объекты с информацией 
// о продуктах (название, цена, вес, количество, категория, рейтинг, наличие на складе) 
// и добавить в конец массива productsInfo объект с информацией о новом продукте
const productsInfo = [
  {name: "Мороженое", price: 100, weight: 100, quantity: 50, category: "Десерты", rating: 4.5},
  {name: "Пицца", price: 500, weight: 300, quantity: 0, category: "Горячие блюда", rating: 4.8},
  {name: "Сок", price: 150, weight: 500, quantity: 30, category: "Напитки", rating: 4.2},
  {name: "Чипсы", price: 200, weight: 150, quantity: 40, category: "Закуски", rating: 4.0},
  {name: "Шоколад", price: 250, weight: 200, quantity: 0, category: "Десерты", rating: 4.7},
  {name: "Печенье", price: 300, weight: 100, quantity: 0, category: "Десерты", rating: 4.3},
  {name: "Сыр", price: 400, weight: 250, quantity: 10, category: "Молочные продукты", rating: 4.6},
  {name: "Молоко", price: 120, weight: 1000, quantity: 35, category: "Молочные продукты", rating: 4.1},
  {name: "Хлеб", price: 80, weight: 500, quantity: 60, category: "Выпечка", rating: 4.4},
  {name: "Яйца", price: 90, weight: 60, quantity: 45, category: "Молочные продукты", rating: 4.5}
];

console.log(`Длина массива productsInfo: ${productsInfo.length} элементов`);
productsInfo.push({name: "Кофе", price: 200, weight: 100, quantity: 300, category: "Напитки", rating: 4.9});

console.log(`Добавлен новый продукт в массив productsInfo: ${productsInfo[productsInfo.length - 1].name},
Длина массива productsInfo после добавления в конец : ${productsInfo.length} элементов
  `);

//Создание массива с новой категорией товаров и последующим объединением двух массивов
const newCategory = [
  {name: "Банан", price: 140, weight: 200, quantity: 150, category: "Фрукты", rating: 4.8},
  {name: "Ананас", price: 350, weight: 1500, quantity: 20, category: "Фрукты", rating: 4.9},
  {name: "Груша", price: 180, weight: 180, quantity: 80, category: "Фрукты", rating: 4.6},
  {name: "Апельсин", price: 160, weight: 250, quantity: 0, category: "Фрукты", rating: 4.7}
];

const updateProductsInfo = [...productsInfo, ...newCategory];
console.log(`Длина массива productsInfo: ${updateProductsInfo.length} элементов`);

//Добавление нового свойства продуктов - наличие на складе при условии
const checkInStock = updateProductsInfo.map(product => {
  return product.quantity > 0 
    ? {...product, inStock:true}
    : {...product, inStock:false} 
});

console.log(checkInStock)
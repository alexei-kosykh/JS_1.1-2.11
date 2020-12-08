"use strict";

// 2.1
// alert("Я JavaScript!");

// 2.4
// let admin;
// let name = "John";
// admin = name;
// alert(admin);

// let planetEarth;
// let nameUser;

// 2.6
// let nameUser = prompt("Подскажите ваше имя...", undefined);
// alert(`Вас зовут: ${nameUser}`);

// 2.7
// let a = prompt("Первое число?", 1);
// let b = prompt("Второе число?", 2);

// alert(a + b); // 12
// alert(+a + +b); // 3

// 2.10
// задание 2
// let nameJS = prompt('Какое "официальное" название JavaScript', "");
// if (nameJS == "ECMAScript") {
//   alert("Верно!");
// } else {
//   alert("Не знаете? ECMAScript!");
// }

// задание 3
// let value = prompt("Введите любое число: ", "");
// if (value > 0) {
//   alert(1);
// } else if (value < 0) {
//   alert(-1);
// } else {
//   alert(0);
// }

// задание 4
// let result;
// let a = 5;
// let b = -2;
// result = a + b < 4 ? "Мало" : "Много";
// console.log(result);

// задание 5
// let login = prompt("Кто вы? ", "");
// let message =
//   login == "Сотрудник"
//     ? "Привет"
//     : login == "Директор"
//     ? "Здравствуйте"
//     : login == ""
//     ? "Нет логина"
//     : "";
// alert(message);

// 2.11
// 1
// let age = prompt("Введите число: ", "");
// if (age >= 14 && age <= 90) {
//   alert("Находится между 14 и 90");
// } else {
//   alert("Не находится между 14 и 90");
// }

// 2
// let age = prompt("Введите число: ", "");
// if (!(age >= 14 && age <= 90)) {
//   alert("Не находится между 14 и 90");
// } else {
//   alert("Находится между 14 и 90");
// }
// if (age < 14 || age > 90) {
//   alert("Не находится между 14 и 90");
// } else {
//   alert("Находится между 14 и 90");
// }

// 3
let login = prompt("Введите логин: ", "");
if (login === "Админ") {
  let password = prompt("Введите пароль: ");
  if (password === "" || password === null) {
    alert("Отменено");
  } else if ((password = "Я Главный")) {
    alert("Здравствуйте!");
  } else {
    alert("Неверный пароль");
  }
} else if (login === null || login === "") {
  alert("Отменено");
} else if (login != "Админ") {
  alert("Я вас не знаю");
}

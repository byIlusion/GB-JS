
console.log('Task 5. Выполненеие скрипта с атрибутом defer из <head>.');

// Функция по задаче 1
function task_01_01() {
  let tc = parseInt(prompt('Введите темепературу по Цельсию:'));
  if (!isNaN(tc)) {
    let tf = (9 / 5) * tc + 32;
    console.log('Температура по Цельсию: ' + tc + '°C');
    console.log('Температура по Фаренгейту: ' + tf + '°F');
    alert('Температура по Фаренгейту: ' + tf + '°F');
  }
  else {
    alert('Неверный ввод!');
  }
}

// Функция по задачам 2-3
function task_01_03() {
  let admin;
  let name = 'Василий';
  console.log('name = ' + name);
  admin = name;
  console.log('admin = ' + admin);
}

// Функция по задаче 4
function task_01_04() {
  console.log('1000 + "108" = ' + (1000 + "108"));
}


/*
Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.

Определите иерархию электроприборов. Включите некоторые в розетку. Посчитайте потребляемую мощность (передайте аргумент). 

Таких приборов должно быть как минимум два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.

План:

Определите родительскую функцию с методами, которые включают/выключают прибор из розетки.
Создайте делегирующую связь [[Prototype]] для двух конкретных приборов.
У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.
Создайте экземпляры каждого прибора.
Выведите в консоль и посмотрите на результаты работы, можете гордиться собой :)
Общие требования:

Имена функций, свойств и методов должны быть информативными
Соблюдайте best practices:
использование camelCase нотации для переменных и методов, PascalCase для названия функций-конструкторов и классов;
информативные имена (а не a, b);
четкая связь между классом и его экземплярами (класс описывает множество, а экземпляр — конкретную реализацию);
использование синтаксиса es6 (кроме функции-конструкторов) и так далее.

*/





function ElectricPribors(name, power) {
  this.name = name;
  this.power = power;
  this.pluggedIn = false;
}

ElectricPribors.prototype.pluggedOn = function() {
    this.pluggedIn = true;
    console.log(`${this.name} включен в розетку.`);
  };

ElectricPribors.prototype.pluggedOff = function() {
    this.pluggedIn = false;
    console.log(`${this.name} выключен из розетки.`);
  };

function DeskLamp(name, power, brightness) {
  this.device = new ElectricPribors(name, power);
  this.brightness = brightness;
}

DeskLamp.prototype.pluggedOn = function() {
  this.device.pluggedOn();
};

DeskLamp.prototype.pluggedOff = function() {
  this.device.pluggedOff();
};

DeskLamp.prototype.adjustBrightness = function(level) {
  this.brightness = level;
  console.log(`${this.device.name} яркость установлена на ${this.brightness}.`);
};

function Computer(name, power, cpu) {
  this.device = new ElectricPribors(name, power);
  this.cpu = cpu;
}

Computer.prototype.pluggedOn = function() {
  this.device.pluggedOn();
};

Computer.prototype.pluggedOff = function() {
  this.device.pluggedOff();
};

Computer.prototype.upgradeCPU = function(newCPU) {
  this.cpu = newCPU;
  console.log(`${this.device.name} процессор обновлен до ${this.cpu}.`);
};


// Создание экземпляров приборов
const deskLamp = new DeskLamp('Настольная лампа', 20, 75);
const computer = new Computer('Компьютер', 500, 'Intel i9');

// Подключение приборов к розетке
deskLamp.pluggedOn();
computer.pluggedOn();

// Изменение яркости лампы и обновление компьютера
deskLamp.adjustBrightness(50);
computer.upgradeCPU('Intel Ultra 7 155'');

// Отключение лампы от розетки
deskLamp.pluggedOff();






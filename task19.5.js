/*
Перепишите консольное приложение из предыдущего юнита на классы.

Общие требования:
Имена классов, свойств и методов должны быть информативными.
Соблюдайте best practices.
Используйте синтаксис ES6.
*/


class ElectricPribors{
  constructor(name, power) {
    this.name = name;
    this.power = power;
    this.pluggedIn = false;
  }

  pluggedOn() {
      this.pluggedIn = true;
      console.log(`${this.name} включен в розетку.`);
  }

  pluggedOff() {
      this.pluggedIn = false;
      console.log(`${this.name} выключен из розетки.`);
    }

class DeskLamps extends ElectricPribors{
  constructor(name, power, brightness) {
    super(name, power);
    this.brightness = brightness;
  }

  adjustBrightness(level) {
    this.brightness = level;
    console.log(`${this.name} яркость установлена на ${this.brightness}.`);
  }
}

class Computers extends ElectricPribors{
  constructor(name, power, cpu) {
    super(name, power);
    this.cpu = cpu;
  }

  upgradeCPU(newCPU) {
    this.cpu = newCPU;
    console.log(`${this.name} процессор обновлен до ${this.cpu}.`);
  }

}

// Создание экземпляров приборов
const desklamp = new DeskLamps('Настольная лампа', 20, 75);
const computer = new Computers('Компьютер', 500, 'Intel i9');

// Подключение компьютера к розетке
computer.pluggedOn();

// Изменение яркости лампы и обновление компьютера
desklamp.adjustBrightness(50);
computer.upgradeCPU('Intel Ultra 7 155');



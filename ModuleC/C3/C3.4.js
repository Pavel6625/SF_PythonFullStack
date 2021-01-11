console.clear()

function Device(name, manufacturer, power) {
    this.name = name;
    this.manufacturer = manufacturer;
    this.power = power;
    this.activated = false;
}

// включаем прибор
Device.prototype.switch_on = function() {
    console.log(this.name + " включён!");
    this.activated = true;
};

// метод, который определяет прибор как выключеный из розетки
Device.prototype.switch_off = function() {
    console.log(this.name + " выключен!");
    this.activated = false;
};

// телевизор
function TVSet(name, manufacturer, power, screen, smartTV) {
    this.name = name;
    this.manufacturer = manufacturer;
    this.power = power;
    this.screen = screen;
    this.smartTV = smartTV;
    this.activated = false;
}

TVSet.prototype = new Device();

// компьютер
function PC(name, manufacturer, power, type) {
    this.name = name;
    this.manufacturer = manufacturer;
    this.power = power;
    this.type = type;
    this.activated = false;
}

PC.prototype = new Device();

// новый телевизор
const myTVSet = new TVSet("Телевизор в комнате", "Samsung", 5, 45, true);

// новые компьютеры
const myTablePC = new PC("Компьютер", "IRU", 160, "stationary")
const myNotebook = new PC("Ноутбук", "ASUS", 100, "notebook")

myTVSet.switch_on();
myTablePC.switch_on();
myNotebook.switch_on();
myTVSet.switch_off();

// результат
console.log(myTVSet)
console.log(myTablePC)
console.log(myNotebook)
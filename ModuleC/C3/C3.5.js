console.clear()

class Device { //общий класс приборов
    constructor(name, manufacturer, power){
        this.name = name;
        this.manufacturer = manufacturer;
        this.power = power;
        this.activated = false;
    }

    switch_on() { // включаем прибор
        console.log(this.name + " включён!");
        this.activated = true;
    }

    switch_off() { // выключаем прибор
        console.log(this.name + " выключен!");
        this.activated = false;
    }
}

class TVSet extends Device { //класс телевизора
    constructor (name, manufacturer, power, screen, smartTV) {
        super(name, manufacturer, power);
        this.screen = screen;
        this.smartTV = smartTV;
        this.activated = false;
    }
}

class PC extends Device { //класс компьютера
    constructor(name, manufacturer, power, type) {
        super(name, manufacturer, power);
        this.type = type;
        this.activated = false;
    }
}

// новый телевизор
const myTVSet = new TVSet("Телевизор в комнате", "Samsung", 5, 45, true);

// новые компьютеры
const myTablePC = new PC("Компьютер", "IRU", 160, "stationary")
const myNotebook = new PC("Ноутбук", "ASUS", 100, "notebook")

myTVSet.switch_on();
myTablePC.switch_on();
myNotebook.switch_on();
myTVSet.switch_off();

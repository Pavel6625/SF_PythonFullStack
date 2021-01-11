//Задание 1----------------------------------------------------------------------------------------------------------
console.log('\n----------Задание С1----------')
const inputValue = prompt('Введите число')

const value = +inputValue;

if (typeof value == "number" && !isNaN(value)) {
    if (value === 0) {
        console.log('ноль')
    } else if (value % 2 === 0) {
        console.log('чётное')
    } else {
        console.log('нечётное')
    }
} else {
    console.log('Упс, кажется, вы ошиблись')
}

//Задание 2----------------------------------------------------------------------------------------------------------
console.log('\n----------Задание С2----------')
let x;
switch (typeof x) {
    case 'number':
        console.log('x - число');
        break;
    case 'string':
        console.log('x - строка');
        break;
    case 'boolean':
        console.log('x - булево значение');
        break;
    default:
        console.log('Тип x не определен');
}
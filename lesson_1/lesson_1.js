// Переменные 

var lol = 'lol'; // Устаревшая запись, но тоже используется
let numb = 10; // Изменяемое значение
const her = 5; // Неизменяемое значение

// Типы данных

let number = 20; // Number
let bigIntNum = 4872422384723428472834247n // BigINt
let str1 = 'Hello'; // string
let variable = true; // boolean
let emtpy = null; // null
let test; // undifined
let user = { // object
    id: 1, 
    firstName: 'Alex',
}
let sym = Symbol() // Symbol 
console.log(typeof numb); // number

// Операторы присваивания
/*
>
<
>=
<=
== (равно)
=== (строгое равно)
!= (не равно)
*/

if('true' ==  0) { // false
    console.log('OMG');
} 

if('1' == 1) { // true
    console.log('LOL');
}

if('1' === 1) { // false
    console.log('LOL');
} else if('true' == true) { // false
    console.log('Прекол');
} else {
    console.log('ну ок');
}

//switch case

const color = 'pinky';

if('1' === 1) { // false
    console.log('LOL');
} else if(color == 'red') { 
    console.log('зеленый');
} else if(color == 'blue') { 
    console.log('голубой');
} else if(color == 'black') { 
    console.log('черный');
} else if(color == 'white') { 
    console.log('белый');
} else if(color == 'pink') {
    console.log('розовый');
} else {
    console.log('что за цвет нахер?????!!!!???');
}

switch(color) {
    case 'green' : // if(color === 'green')
        console.log('зеленый');
        break;
    case 'red' : // else if(color === 'red')
        console.log('красный');
        break;
    default :
        console.log('что за цвет нахер?????!!!!???')

}

let popusk = 0;

switch(popusk) {
    case '0': // false
        console.log('непонел')
}


// Задание 4: 
const randomNumber = 50
if(randomNumber < 20) {
    console.log('randomNumber меньше 20')
} else if(randomNumber > 50) {
    console.log('randomNumber больше 50')
} else {
    console.log('randomNumber больше 20, и меньше 50')
}

// Задание 5:
switch(randomNumber) {
    case 20:
        console.log('Это 20')
        break
    case 50:
        console.log('Это 50')
        break
    default:
        console.log('Не 20, не 50')
        break
}
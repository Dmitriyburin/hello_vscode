
// Задание 1: как я понял, надо создать объект
let city = {
    name: 'Saint-Petersburg',
    country:  'Russia',
    size:  5388759,
    stadium:  true,
}

// Задание 2:
let height = 40;
let width = 70;
let square = height * width
console.log(square)

// Задание 3:
let time = 2;
let speedOfFirst = 95;
let speedOfSecond = 114;
let speedGeneral = speedOfFirst + speedOfSecond
let distance = speedGeneral * time
console.log(distance)

// Задание 4: 
const randomNumber = Math.floor(Math.random() * 100);
if(randomNumber < 20) {
    console.log('randomNumber меньше 20')
} else if(randomNumber > 50) {
    console.log('randomNumber больше 50')
} else {
    console.log('randomNumber больше 20, и меньше 50')
}

// Задание 5:
/* 
не очень понимаю, как сделать конструкцию randomNumber < 20 на switch
можно же только randomNumber === 20, поэтому так:
*/
switch(true) {
    case randomNumber < 20:
        console.log('randomNumber меньше 20')
        break
    case randomNumber > 50:
        console.log('randomNumber больше 50')
        break
    default:
        console.log('randomNumber больше 20, и меньше 50')
        break
}

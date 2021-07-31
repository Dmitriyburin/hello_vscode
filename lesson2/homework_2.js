// Задание 1:
for (let num = 10; num <= 50; num += 2){
    console.log(num)
};

// Задание 2:

const person = {
    firstName: 'Dmitriy',
    lastName: 'Burin',
    age: 15,
    pet: false
};
// console.log(person.firstName, person.lastName)

// Задание 3:
const array = [
    'я в Симбирск,',
    'в трактире.',
    'с утра',
    'В ту же ночь',
    'Я остановился',
    'для закупки', 
    'что и было поручено Савельичу.',
    'приехал',
    'где должен был',
    'нужных вещей,',
    'отправился по лавкам',
    'пробыть сутки',
    'Савельич'
];
let result = [array[3], array[7], array[0], array[8], array[11], array[5], array[9], array[6], array[4], array[1], array[12], array[2], array[10]].join(' ');
console.log(result);

// Задание 4:
const initials = (firstName, lastName) => {
    const fullName = `${firstName} ${lastName}`;
    console.log(fullName);
};
initials('Dmitriy', 'Burin');

// Задание 5:
let i = 21;
while(i <= 67) {
    console.log(i);
    i += 2;
}

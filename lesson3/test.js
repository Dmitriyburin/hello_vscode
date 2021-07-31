let div = document.querySelector('.box');
let par = document.querySelector('.par');

// console.log(div);
// div.classList.toggle('lite');
// div.addEventListener('click', function(){
//     alert('хватит тыкать!')
// })

div.addEventListener('mouseover', function(){
    div.classList.toggle('new_color')
})

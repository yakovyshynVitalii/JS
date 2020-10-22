// 1. Створити сайт використовуючи swapi.dev. вибрати 1 з 6 проперті (films, characters etc..)і зробити запит по них, вибрати одну з перших проперті що отримаєте і витягнувши з неї "url" - отримати конкретну(планету,фільм, персонажа) з всією інформацією про нього. Додати кнопку при натисканні на яку вивести всю наявну інформацію на екран красиво структуровано. 

let node = null;
let url =` https://swapi.dev/api/films`;
const btn1 = document.getElementById ('btn1');
let inform = document.getElementById('inform');


window.onload = function(){
    node = fetch(`${url}`) 
    .then(response => response.json())
    .then(result => node = result)
    .then(function () {
        node = fetch(`http://swapi.dev/api/films/1/`) 
        .then(response => response.json())
        .then(result => node = result)
    })
}


btn1.onclick = function (){
    for(let key in node){
        console.log (node[key]);
        let ul = document.createElement('ul');
        let li = document.createElement('li');
        ul.innerText = key
        li.innerText = node[key];
        inform.appendChild(ul);
        ul.appendChild(li);
    }
}



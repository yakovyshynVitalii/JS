
let Secondnode = null;
let SearshUrl =`https://swapi.dev/api/films/?search=`;
const btn2 = document.getElementById('btn2');

let inform2 = document.getElementById('inform-2');





btn2.onclick = function (){
    let input = document.getElementById('input').value;
    Secondnode = fetch(`${SearshUrl}${input}`) 
    .then(response => response.json())
    .then(result => Secondnode = result)
    .then (function (){
        for (let i = 0; i < Secondnode.results.length; i++){
            console.log(Secondnode.results[i],"WEQWEQWEQW");

            for(let key in Secondnode.results[i]){
            console.log (Secondnode.results[i][key]);
            let ul = document.createElement('ul');
            let li = document.createElement('li');
            ul.innerText = key
            li.innerText = Secondnode.results[i][key];
            inform2.appendChild(ul);
            ul.appendChild(li);
            }
        }
       
    });
   
    
}
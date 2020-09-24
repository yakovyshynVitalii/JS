// 1. Напишіть функцію, що повертає куб числа.

// function kub(a){
//     a = a* a * a;
//     return a;
// }
// console.log(kub(2));


// 2. Напишіть функцію, що додає перше число до другого і ділить результат на третє число.

// function addAndDiv (a,b,c){
//     let result = (a+b)/c;
//     return result;
// }
// console.log (addAndDiv(5,5,2));


// 3. Напишіть функцію, що приймає число від 1 до 7 і повертає відповідну назву дня (українською).
// let day = +prompt("Введіть число дня тижня");
// function days (a){
//     if (a && isNaN(a) ==false && a >=1 && a<=7 ){
//         switch (a){
//             case 1 :
//                 alert("Понеділок")
//                 break;
//              case 2 :
//                 alert("Вівторок")
//                 break;
//              case 3 :
//                 alert("Середа")
//                 break;
//              case 4 :
//                 alert("Четвер")
//                 break;
//              case 5 :
//                 alert("П'ятниця")
//                 break;
//              case 6 :
//                 alert("Субота")
//                 break;
//              case 7 :
//                 alert("Неділя")
//                 break;
//                 default :
//                 alert ('Щось не так з днями((')
//         }
//     }else{
//         alert("Не коректно ввдені дані");
//     }
//     return a;
// }

// console.log(days(day));


// 4. Реалізуйте функцію знаходження факторіала

    
// function factorial (i){
//     a = i * (i -1);
//     console.log (a);
//     i =  a * i;

//     i = 1 * 2 * 3 * (i-2)* (i -1) *i;
//     return i;
// }

// console.log (factorial(5));


// 5.  Напишіть функцію яка отримує години хвилини та секунди і повертає це число в секундах.

// function timeInSec ( hr,min,sec){
//     hr = hr * 3600;
//     min = min * 60;
//     sec = sec + min + hr;
//     return sec;
// }

// console.log(timeInSec(1,20,10 ));

// 6.    Написати функцію , яка приймає секунди, і перетворює їх у години хвилини та секунди у форматі «гг:хх:сс».
//  якщо кількість годин більша за 23.59.59 - вивести повідомлення "Більше одного дня". 

// function toTime(time) {
//     time = +prompt('Введіть секунди');

//     let hours = Math.floor(time / 60 / 60);
//     let minutes = Math.floor(time / 60) - (hours * 60);
//     let seconds = time % 60; 

//     if (hours > 23) {
//         alert('Більше одного дня!');
//     } else {
//         alert(`${hours}:${minutes}:${seconds}`)
//     }
// }

// toTime();

// 1.  Знайдіть суму всіх цифр від 1 до 100.

// let sum ;

// for (let i = 1 ; i <= 100; i++){

//  sum = (i* (i + 1)) / 2;

// }
// console.log(sum);

// 2.  Є масив [1, 2, 3, 4, 5]. З допомогою  цикла for вивести всі елементи на екран.

// let arr = [1,2,3,4,5]

// for (let i=[0]; i < arr.length; i++){
//     console.log(arr[i]);
// }

// 3. Є масив [-1, 22, 3, 44, 5]. Виведіть максимальне значення

// let max = -Infinity, min = +Infinity , arr = [-1, 22, 3, 44, 5];

// for (let i = 0; i < arr.length; i++){
//     if(arr[i] > max){
//         max = arr[i]
//     };

//     if(arr[i] < min){
//         min = arr[i]
//     }
// }
// console.log(max);



// 4. Попросити юзера ввести 8 чисел і скільки він ввів додатніх, відємних та нулів. 
// Вивести статистику на екран. Також досмтатньо тільки 1 змінної для отримання даних від юзера. 

// let numbers = prompt('Введіть 8 чисел через кому').split(',');
// let sumMinus = 0, sumPlus = 0, zero = 0;

// console.log (numbers)


// if (numbers.length !== 8){
//     alert ( 'не правильно введені данні')
// } else{

//     for (let i=[0]; i < numbers.length; i++ ){
//         numbers[i]= +numbers[i];
//         console.log (numbers);
//         if(numbers[i] < 0){
//             sumMinus++
//         }else if (numbers[i] == 0){
//             zero++
//         }else if (numbers[i] > 0){
//             sumPlus++
//         }
//     }

//     alert (`Ви ввели ${sumMinus} мінусових чисел`);
//     alert (`Ви ввели ${zero} нулів`);
//     alert (`Ви ввели ${sumPlus} плюсових чисел`);
// };



// 5. Надрукуйте табличку множення для числа  8 від 1 до 9. 8 х 1 = 8
// let a = 8;

// for(let i = 1 ; i <= 9; i ++){
//     let result = a * i;
//     console.log(result)
// }


// 6. Є масив з елементами 2, 5, 9, 15, 0, 4. З допомогою цикла for і оператора if вивести на екран цифри, які більше 3-х, але менше 10.

// let arr = [2,5,9,15,0,4];

// for (let i = 0; i < arr.length ; i++){

//     if (arr[i] > 3 && arr[i] < 10){
//         console.log (arr[i]);
//     }
// };

// 7. Створити калькулятор який буде зациклений.
// Запитати у юзера 2 числа та знак , провести математичну операцію, далі вивести результат і спитатись чи хоче юзер повторити?

// do{
//     let number1 = +prompt("Введіть перше число");
//     let number2 = +prompt ("Введіть друге число");
//     let operation = prompt ("Введіть операцію");
//     let result = 0;
//     if (isNaN(number1)== false && isNaN(number2) == false && number1 && number2 ){
//         switch(operation){
//             case '+':
//                  result = number1 + number2;
//                  alert (`${number1} + ${number2} = ${result}`);
//             break;
//             case '-':
//                  result = number1 - number2;
//                  alert (`${number1} - ${number2} = ${result}`);
//             break;
//             case '*':
//                  result = number1 * number2;
//                  alert (`${number1} * ${number2} = ${result}`);
//             break;
//             case '/':
//                  result = number1 / number2;
//                  alert (`${number1} / ${number2} = ${result}`);
//             break;
//             default:
//                 alert("Не коректно введена операція");
//         }
//     }else{
//         alert('Ви точно ввели числа?');
//     }
//     retry = confirm("Повторити?");
// }while(retry == true);
    
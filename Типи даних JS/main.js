// 2. Написати конвертер валют - пишете скільки у вас є гривень і які очікуємо можливі конвертації - у долар, євро, нафту(brent), золото. 
// Додатково зробити перевірку чи не обманює вас юзер і перевіряти чи не прийшов вам null or undefined. 

// let uah = +prompt ("Сума у гривнях");
// let usd = uah * 0.036;
// let eur = uah * 0.030;
// let brent = uah * 0.00031;
// let gold = uah * 0.0000181003;

// if(uah && isNaN(uah) == false){
//    let choice = prompt ("введіть валюту (usd) ,(eur), (brent), (gold)").toLowerCase();
//     if (choice == "usd"){
//         alert (`${uah}гривень = ${usd} доларів`);
//     }else if(choice == "eur"){
//         alert (`${uah}гривень = ${eur} євро`);
//     }
//     else if(choice == "brent"){
//         alert (`${uah}гривень = ${brent}л. нафти`);
//     }else if(choice == "gold"){
//         alert (`${uah}гривень = ${gold}г. золота`);
//     }
//     else{
//         alert ("Не коректно введена валюта.Повторіть спробу!")
//     }
// }else{
//     alert("введіть не коректні дані. Повторіть спробу!")
// }

// 3.Спитатись у юзера суму замовлення і вивести результат з урахуванням знижки : до 500 гривень знижка -1 %, від 500 до 1000 - 5%, більше 1000 - 10%
//  та подарунковий сертифікат на 200 гривень у подарунок!

// let orderAmount = +prompt("Введіть суму замовлення");

// if (orderAmount && isNaN(orderAmount) == false){

//     if(orderAmount > 0 && orderAmount <500 )
//     {
//         let discount = orderAmount * 0.01;
//         let result = orderAmount - discount
//         alert (`Ви отримали знижку в 1% тому сума оплати буде ${result}`);
//     }else if (orderAmount >= 500 && orderAmount < 1000){
//         let discount = orderAmount * 0.05;
//         let result = orderAmount - discount
//         alert (`Ви отримали знижку в 5% тому сума оплати буде ${result}`);
//     }else if (orderAmount >= 1000){
//         let discount = orderAmount * 0.1;
//         let result = orderAmount - discount
//         alert (`Вітаю ви отримали подарнковий сертефікати на 200грн на наступну покупку!!! Також ви отримали знижку в 10% тому сума оплати буде ${result}`);
//     }
// }else{
//     alert("Не коректно введнні дані")
// }

// 4. Створити тест на знання будь-чого, юзер має відповісти на 5 питань, вірна відповідь - 1 бал, якщо юзер відповість правильно на всі 5 запитань
// - додатково додати 1 бонусний бал.

// let quest = prompt ("Згіраємо у гру? (так) (ні)").toLowerCase();
// console.log(quest);
// if (quest == "так"){
//     mark = 0;
//     alert ("Прошу вводити цифру правильної відповіді...")
//     question1 = +prompt ("5 президент України? 1.П.Порошенко; 2.В.Зеленський; 3.Л.Кравчук");
//     if (question1 == 1){
//         mark++;
//         alert ("Відповідь правильна +1 бал")
//     }else {
//         alert ("Відповідь не правильна")
//     }
//     question2 = +prompt ("Коли розпочалась 2світова війна? 1.1941р; 2.1940р; 3.Л.1939р");
//     if (question2 == 3){
//         mark++;
//         alert ("Відповідь правильна +1 бал")
//     }else {
//         alert ("Відповідь не правильна")
//     }

//     question3 = +prompt ("Форма правління в Україні? 1.Монархія; 2.В.парламентсько-президентська республіка; 3.Олігархія");
//     if (question3 == 2){
//         mark++;
//         alert ("Відповідь правильна +1 бал")
//     }else {
//         alert ("Відповідь не правильна")
//     }

//     question4 = +prompt ("Чи вступила Україна у НАТО? 1.так; 2.ні;");
//     if (question4 == 2){
//         mark++;
//         alert ("Відповідь правильна +1 бал")
//     }else {
//         alert ("Відповідь не правильна")
//     }

//     question5 = +prompt ("Коли прийняли конституцію України? 1.1996р; 2.1991р; 3.Л.1993р");
//     if (question5 == 1){
//         mark++;
//         alert ("Відповідь правильна +1 бал")
//     }else {
//         alert ("Відповідь не правильна")
//     }
  
//     if(mark == 5){
//         alert ("Ви виграли!!!!")
//     }else{
//         alert (`Ви зробили ${mark}правильних відповідей`)
//     }
// }else{
//     alert ("Ну як хочеш ((((")
// };


// 5. Запитатись у користувача 3 значне число та сказати чи є у ньому однакові цифри 

// let number = +prompt ("Введыть трьохзначне число");

// if (number && isNaN(number) == false && number.toString().length == 3){
//     number = number.toString();
//     let array = number.split("");
//     if(array[0] == array[1] && array[1] == array[2] && array[0] == array[2]){
//         alert (`У числі ${number} всі числа одинакові`);
//     }else if(array[0] == array[1] || array[1] == array[2] || array[0] == array[2]){
//         alert (`У числі ${number} є одинакові числа`);
//     }else{
//         alert (`У числі ${number} немає  одинакових чисел`);
//     }
// }else{
//     alert ("Не коректно введені дані")
// }


// 6. Запитатись у юзера одну кнопоку від 1 до = на клавіатурі та вивести що буде при нажиманні цифри разом з шифтом.

    // let symbol = prompt("Введіть значення");

    // switch (symbol) {
    //     case "1":
    //         alert("!");
    //         break;
    //     case "2":
    //         alert("@");
    //         break;
    //     case "3":
    //         alert("#");
    //         break;
    //     case "4":
    //         alert("$");
    //         break;
    //     case "5":
    //         alert("%");
    //         break;
    //     case "6":
    //         alert("^");
    //         break;
    //     case "7":
    //         alert("&");
    //         break;
    //     case "8":
    //         alert("*");
    //         break;
    //     case "9":
    //         alert("(");
    //         break;
    //     case "0":
    //         alert(")");
    //         break;
    //     case "-":
    //         alert("_");
    //         break;
    //     case "=":
    //         alert("+");
    //         break;
    //         default:
    //             alert("Введіть правильне значення");
    // };


    // 7.Cтворити масив у якому буде 3 юзера описані як обєкти з такими полями - age, name, hobby (теж повинно бути масивом.

    // let users = [
    //     {name: "Vitalii", age: 22, hobby:["sport","film","music"] },
    //     {name: "Andrii", age: 40, hobby:["sport","film","music"] },
    //     {name: "Oksana", age: 17, hobby:["sport","frends","music"] }
    // ]
// 1. Створити обєкт який описує тварину (назву, вагу, вік, середню швидкість), і наступні функції для роботи з ним:
// Функція яка виведе всю інформацію про тварину. Функція яка виведе за скільки тварина зможе подолати 1000 км. (врахуйте що тварина може рухатись не більше 12 годин у день). Функція яка зможе змінити назву тварини на більш детальну. 

// let animal = {

//     name : "fox",
//     weight : 7 , // kh
//     yearsOld : 4,
//     speed : 50 // km/hr 
// }
// не розумію як саме потрібно виводити інформацію тому зробив 2 функції
// function About (a){
//     for(key in a){
//         console.log(a[key])
//     }
// }
// function About2 (a){
//     return a;
// }
// console.log (About(animal));
// console.log (About2(animal));


// function AnimalSpeed (a){
//     let time = 1000 / a.speed;
//     let day = 0;
//     for (let i = 0; i < 1000 ; i++){
//         if (time >=12){
//             day++
//             time= time -12;
//         }
//         else{
//             return (`${day}day, ${time} hr`);
//         }
//     }
// }
// console.log(AnimalSpeed(animal));


// console.log(animal.name)
// function animalName (a){
//     a.name = prompt("new animal name");
//     return a.name;
// }
// console.log(animalName(animal));
// console.log(animal.name);


// 2. Створіть обєкт який має у собі 2 довжини сторін фігури. Додайте методи які будуть робити наступне - рахувати площу фігури, периметр фігури, зроблять фігуру 3-д, зададуть назву фігури, переведуть значення з сантиметрів у метри.


// let figure = {
//     side1 : 10, // sm
//     side2 : 5 // sm
// }


// function Area ( x ){
//     let area = x.side1 * x.side2 ;
//     return area;
// }
// console.log(Area(figure));


// function P ( x  ){
//     let p = 2*(x.side1 + x.side2)
//     return p;
// }
// console.log(P(figure));

// function AddSide3 (x){
//     let side3 = x.side3;
//     x.side3 = +prompt ( "new side");

//     return x.side3;
// }
// console.log(AddSide3(figure));
// console.log (figure);


// function FigureName (x){
//     x.name = prompt ( "figure name");
//     return x.name;
// }

// console.log(FigureName(figure));
// console.log (figure);

// function Meters (x){
//     x.side1 = x.side1 / 100;
//     x.side2 = x.side2 / 100;
//     x.side3 = x.side3 / 100;

//     return (`${x.side1}m , ${x.side2}m, ${x.side3}m`);
// }

// console.log(Meters(figure));
// console.log (figure);



// Виводимо список покупок - спочатку ті які є в магазині потім яких немає, 
// Виводимо список покупок які ми купили.
// Додаємо функцію яка дозволить купити продукт.
// Додаємо функцію яка просумує всі зроблені покупки і виведе результат.(не забуваємо що є значення кількості та ціни за одиницю товару)
// Додаємо можливість збільшувати кількість товару.
// Додаємо можливість зменшувати кількість товару(менше 0 бути не може).


// let products = {
//     tomato: {
//         count: 5,
//         price: 50,
//         buy: false,
//         outOfStore: true
//     },
//     potato: {
//         count: 20,
//         price: 10,
//         buy: true,
//         outOfStore: true
//     },
//     cucumber: {
//         count: 10,
//         price: 35,
//         buy: false,
//         outOfStore: false
//     },
//     lemon: {
//         count: 3,
//         price: 60,
//         buy: false,
//         outOfStore: false
//     },
//     egg: {
//         count: 10,
//         price: 25,
//         buy: true,
//         outOfStore: true
//     },
//     apple: {
//         count: 5,
//         price: 30,
//         buy: false,
//         outOfStore: true
//     }
// }

// let shoppingListTrue= [];
// let shoppingListFalse= [];
// let shoppingListBuy = []; 
// let productsList = [];  
// function productsTrue(x){
//     for (let key in x ){

//         if( x[key].outOfStore == true ){
//             shoppingListTrue.push(key);
//         }
//     }
//     return shoppingListTrue;
// }
// console.log(productsTrue (products));

// function productsFlase(x){
//     for (let key in x ){

//         if( x[key].outOfStore == false ){
//             shoppingListFalse.push(key);
//         }
//     }
//     return shoppingListFalse;
// }
// console.log(productsFlase (products));


// function ShoppingListBuy (x){
//     for (let key in x){
//         if (x[key].buy == true){
//             shoppingListBuy.push(key);
//         }
//     }
//     return shoppingListBuy;
// }

// console.log (ShoppingListBuy(products));



// function BuyProducts (){
//     for( let  key in products){
//         productsList.push(key);

//         if (products[key].outOfStore == true){
//            alert (`${key} немає`)
//         }else{
//             let choice = +confirm(`Ви хочете придбати ${key}?`);
//             if( choice == true){
//                 products[key].count += 1 ;
//                 products[key].buy =true;
//             }
//         }
//     }
//    return products;
// }
// console.log(BuyProducts(products));

// не знав як правильно порахувати тому порахував так сор(((((((
// function Sum () {
//     let sum ;
//     let allproducts = 0;
//     for (let key in products ){
//         sum = products[key].count  * products[key].price;
//         products[key].sum = sum;
//         if (products[key].buy == true){
//             console.log(key);
//         }  
//     }
 
//     allproducts = products.egg.sum + products.potato.sum
//     return allproducts;
// }

// console.log (Sum(products));


// Не повна робота 
// Ще буду доробляти
// 1. Створити сторінку на якій будемо відображати базовий текст в span("Очікую на ввід даних"). При натисканні alt + A, замість спана зявиться інпут з аналогічним текстом, який тепер ви зможете відредагувати. Далі коли ви натисните shift + S дані збережуться і знов будуть відображатись як span. 

    // let span = document.createElement('span');
    // span.innerHTML="Очікую вводу даних";
    // document.getElementById('section').appendChild(span);

    // let input = document.createElement('input');
    // input.setAttribute('value', "Очікую вводу даних");

    // document.addEventListener ('keydown', function(event){
    //     if (event.code == 'KeyA' && event.altKey){
    //         span.style.display ="none";
    //         document.getElementById('section').appendChild(input);
    //     }
    // })
    // document.addEventListener ('keydown', function(event){
    //     if (event.code == 'KeyS' && event.shiftKey){
    //         localStorage.setItem(input,input.value);
    //         input.style.display = "none";
    //        span.innerHTML = localStorage.getItem (input);
    //         span.style.display ="inline";
    //     }
    // })


// 2. Повісити івент лісенер на ресайз сторінки, коли розмір сторінки буде менше 600px , виводити лог ми векористовуємо мобільну версію, при більшому розмірі сторінки - що ми використовуємо десктоп версію.

window.addEventListener('resize', function(){
    if(document.documentElement.clientWidth <= 600){
        return alert ("Ми переходимо на мобільну версію");
    } else if(document.documentElement.clientWidth > 600){
        return alert ("Ми переходимо на десктоп версію");
    }
})

// 3. Повісити івент на інпут, при зміні стану інпута - виводити повідомленням зі значенням яке зараз є введено.

    const input = document.getElementById('input');

    input.addEventListener('blur', function (event){
        if(event.target.value){
            alert(event.target.value);
        }
    })



// 4. При натисканні на кнопку альт+ о виводити модальне вікно на екран, альт + с - закривати.

document.addEventListener ('keydown', function (event){
    if (event.code == 'KeyO' && event.altKey){
        document.getElementById('modal_box-1').classList.add("active")
    } 
});
document.addEventListener ('keydown', function (event){
    if (event.code == 'KeyC' && event.altKey){
        document.getElementById('modal_box-1').classList.remove("active")
    } 
});


// 5. Створити модальне відкно аналог Алерта але з гарним дизайном. по кліку на кнопку зявляється модальне вікно по центрі екрану(центрування елемента). В модальному вікні має бути текст та кнопка закрити.
const btnModal = document.getElementById('modal-2');
const modal = document.getElementById('bg');
const modalExit = document.getElementById('bg_button');

btnModal.onclick = function (){
    modal.classList.add('active');
}
modalExit.onclick = function (){
    modal.classList.remove('active');
}
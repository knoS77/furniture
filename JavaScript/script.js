//burger menu
let burger = document.querySelector('.burger');
let nav = document.querySelector('.nav ul');

let headerBody = document.querySelector('.header__body');

headerBody.addEventListener('click', burgerMenu);

function burgerMenu(event){
    if (event.target.closest('.burger')){
        burger.classList.toggle('active');
        nav.classList.toggle('open');
    }
    if (!event.target.closest('.active')){
        burger.classList.remove('active');
        nav.classList.remove('open');
    };
};

let btns = document.querySelectorAll('.button');

btns.forEach(function(btns){
    btns.addEventListener('click', function(event){
        alert(`Для заказа звоните по номеру: 
+7-(919)-884-43-03

или напишите в одну их наших соц.сетей:
Telegram: @Vazir161
Watsapp: +7-(919)-884-43-03
        `)
    })
});




// section two Показать ещё
let button = document.querySelector('.show__button');
button.addEventListener('click', function(event){
    let divOne = document.getElementById('new__block1');
    let divTwo = document.getElementById('new__block2');
    let divThree = document.getElementById('new__block3');
    let divFour = document.getElementById('new__block4');

    if (divOne.style.display !== 'none') {
        divOne.style.display = 'none';
        button.innerText = 'Весь каталог'
        }
        else {
            divOne.style.display = 'block';
            button.innerText = 'Свернуть';
    }

    if (divTwo.style.display !== 'none') {
        divTwo.style.display = 'none';
        button.innerText = 'Весь каталог'
        }
        else {
            divTwo.style.display = 'block';
            button.innerText = 'Свернуть';
    }

    if (divThree.style.display !== 'none') {
        divThree.style.display = 'none';
        button.innerText = 'Весь каталог'
        }
        else {
            divThree.style.display = 'block';
            button.innerText = 'Свернуть';
    }

    if (divFour.style.display !== 'none') {
        divFour.style.display = 'none';
        button.innerText = 'Весь каталог'
        }
        else {
            divFour.style.display = 'block';
            button.innerText = 'Свернуть';
    }

})
// button.onclick = function(){
    // let divOne = document.getElementById('new__block1');
    // let divTwo = document.getElementById('new__block2');
    // let divThree = document.getElementById('new__block3');
    // let divFour = document.getElementById('new__block4');

    // if (divOne.style.display !== 'none') {
    //     divOne.style.display = 'none';
    //             button.innerHTML = 'Весь каталог'
    //     }
    //     else {
    //         divOne.style.display = 'block';
    //         button.innerHTML = 'Свернуть';
    // }
// }


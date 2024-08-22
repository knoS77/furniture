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
Whatsapp: +7-(919)-884-43-03
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
    let divFive = document.getElementById('new__block5')

    let divSix = document.getElementById('new__block6');
    let divSeven = document.getElementById('new__block7');
    let divEith = document.getElementById('new__block8');
    let divNine = document.getElementById('new__block9');
    let divTen = document.getElementById('new__block10');

    let divEleven = document.getElementById('new__block11');
    let divTwelve = document.getElementById('new__block12');


    if (divTwelve.style.display !== 'none') {
        divTwelve.style.display = 'none';
        button.innerText = 'Весь каталог'
        }
        else {
            divTwelve.style.display = 'block';
            button.innerText = 'Свернуть';
    }


    if (divEleven.style.display !== 'none') {
        divEleven.style.display = 'none';
        button.innerText = 'Весь каталог'
        }
        else {
            divEleven.style.display = 'block';
            button.innerText = 'Свернуть';
    }


    if (divTen.style.display !== 'none') {
        divTen.style.display = 'none';
        button.innerText = 'Весь каталог'
        }
        else {
            divTen.style.display = 'block';
            button.innerText = 'Свернуть';
    }


    if (divNine.style.display !== 'none') {
        divNine.style.display = 'none';
        button.innerText = 'Весь каталог'
        }
        else {
            divNine.style.display = 'block';
            button.innerText = 'Свернуть';
    }

    if (divEith.style.display !== 'none') {
        divEith.style.display = 'none';
        button.innerText = 'Весь каталог'
        }
        else {
            divEith.style.display = 'block';
            button.innerText = 'Свернуть';
    }

    if (divSeven.style.display !== 'none') {
        divSeven.style.display = 'none';
        button.innerText = 'Весь каталог'
        }
        else {
            divSeven.style.display = 'block';
            button.innerText = 'Свернуть';
    }

    if (divSix.style.display !== 'none') {
        divSix.style.display = 'none';
        button.innerText = 'Весь каталог'
        }
        else {
            divSix.style.display = 'block';
            button.innerText = 'Свернуть';
    }


    if (divFive.style.display !== 'none') {
        divFive.style.display = 'none';
        button.innerText = 'Весь каталог'
        }
        else {
            divFive.style.display = 'block';
            button.innerText = 'Свернуть';
    }

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

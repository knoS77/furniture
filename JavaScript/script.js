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

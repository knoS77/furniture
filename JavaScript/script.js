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
+7-(996)-681-93-67

или напишите в одну их наших соц.сетей:
Telegram: @knoS77l
Watsapp: +7-(996)-681-93-67
VK: Kniaz Sloyan
        `)
    })
});




// @media (max-width: 320px) {
//     .two__block {
//       height: 390px;
//     }
//     #seven {
//       display: none;
//     }
//     .title {
//       padding: 0px;
//       font-size: 40px;
//     }
//     .title p {
//       font-size: 40px;
//     }
//     .four__block {
//       max-width: 300px;
//     }
//     .five__block {
//       margin: 20px 0 0 0;
//       max-width: 300px;
//       height: 280px;
//     }
//     .five__block img {
//       width: 300px;
//     }
//     .footer {
//       height: 130px;
//     }
//   }


//   @media (max-width: 375px) {
//     .two__block {
//       height: 390px;
//     }
//     #seven {
//       display: none;
//     }
//     .title {
//       padding: 0px;
//       font-size: 40px;
//     }
//     .title p {
//       font-size: 40px;
//     }
//     .four__block {
//       max-width: 300px;
//     }
//     .five__block {
//       margin: 20px 0 0 0;
//       width: 300px;
//       height: 280px;
//     }
//     .five__block img {
//       width: 300px;
//     }
//     .footer {
//       height: 130px;
//     }
//   }
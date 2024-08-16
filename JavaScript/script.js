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
})

window.addEventListener('click', windowFunction);

function windowFunction(event){
    headerBody.scrollIntoView(top);
}

// @media (max-width: 500px){
//     #seven{display: none;}
// }

// @media (max-width: 570px){
//     #seven{display: none;}
// }

// @media (max-width: 425px) {
//     .two__block{
//         height: 480px;
//     }
//     #seven{display: none;}
//     .title {
//         padding: 0px;
//         font-size: 40px;
//     p{
//         font-size: 40px;

//     }
//     }

//     .four__block {
//         max-width: 300px;
//         height:240px;
//     gap: 16px;
//     opacity: 0px;
//     border-radius: 8px;
//     img{border-radius: 8px;}
//     display: flex;
//     flex-direction: column;
//     }

//     .five__block {
//         margin: 20px 0 0 0;
//         width: 300px;
//     height: 280px;
//     gap: 18px;
//     border-radius: 15px;
//     border: 1px solid black;
//     img{width: 300px;}
//     }

//     .seven__block{
//         display: none;
//     }
//     .seven__map{
//         background-position: 50%;
//     }
// }

// @media (max-width: 768px) {


//     .four__block {
//         max-width: 300px;
//         height:240px;
//     gap: 16px;
//     opacity: 0px;
//     border-radius: 8px;
//     img{border-radius: 8px;}
//     display: flex;
//     flex-direction: column;
//     }

//     .five__block {
//         margin: 20px 0 0 0;
//         width: 280px;
//     height: 280px;
//     gap: 18px;
//     border-radius: 15px;
//     border: 1px solid black;
//     img{width: 280px;}
//     }

//         .seven__block {
//             position: absolute;
//             top: 0px;
//             left: 0px;
//             width: 280px;
//         height: 200px;
//         padding: 18px 20px 30px 20px;
//         border-radius: 10px;
//         background-color: white;
//         box-shadow: 0px 4px 20px 0px #96969640;
//         };
    
//     .seven__map{
//         background-position: 50%;
//     }

//     .footer{
//         height: 130px;
//     }
// }
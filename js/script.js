
//  Плавный скролл
$('a[href^="#"').on('click', function() {

    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top
    });
    return false;
});

// МЕНЮ БУРГЕР


// const burger = document.querySelector('.burger'),
//         nav = document.querySelector('.header__main'),
//         links = document.querySelector('.header__links');
// function slider(){
//     burger.addEventListener('click', () => {

//         nav.classList.toggle('header__item-active');

//         burger.classList.toggle('toggle');

//         links.forEach((link, index) => {
//             if(link.style.animation) {
//                 link.style.animation = '';
//             } else {
//                 link.style.animation  = 'navLinksFade .5s ease forwards $(index/7 + 0.3)s'
//             }
//         })
//     })
// }



$(document).ready(function () {
   $('.menu__tabs_item').click(function (e) {
      e.preventDefault()

      // класс где лежать ссылки(табы)
      // 2класс - тело, где лежить контент
      $('.menu__tabs_item').removeClass(' menu__tabs_item--active');
      $('.tabs-block').removeClass('tabs-block--active');

      $(this).addClass('menu__tabs_item--active');
      $($(this).attr('href')).addClass('tabs-block--active')

   });
   $('.menu__tabs_item:first').click();

});

$(document).ready(function () {
   // на header burger вешаем событие клик
   $('.header__burger').click(function (event) {
      // при клике на бургер и хедер меню добавился класс aktive (нажали-добав класс, нажали-убрался класс) 
      $('.header__burger, .header__menu').toggleClass('active');
      // при открытом бургере блокируем прокрутку страницы
      $('body').toggleClass('lock');
   });
});





const headerLinks = document.querySelectorAll('.header__menu')
headerLinks.forEach((el) => {
   el.addEventListener('click', () => {
      $('.header__burger,.header__menu').toggleClass('active');
   })
})



// спойлер-аккордион 
$(document).ready(function () {
   // ссылка, на которую нажимаем 
   $('.menu__spoiler_link').click(function (event) {
      // общий класс спойлера
      if ($('.menu__spoiler').hasClass('one')) {
         // ссылка, на которую нажимаем 
         $('.menu__spoiler_link').not($(this)).removeClass('hidden');
         // блок который идет сразу после ссылки
         $('.tabs-block').not($(this).next()).slideUp(300);
      }
      $(this).toggleClass('hidden').next().slideToggle(300);
   });
});

// кнопка наверх

$('.back').click(function () {
   $('body,html').animate({ scrollTop: 0 }, 800); // 800 - Скорость анимации
});

$(window).scroll(function () { // Отслеживаем начало прокрутки
   let scrolled = $(window).scrollTop(); // Вычисляем сколько было прокручено.

   if (scrolled > 350) { // Если высота прокрутки больше 350 - показываем кнопку
      $('.back').addClass('active');
   } else {
      $('.back').removeClass('active');
   }
});
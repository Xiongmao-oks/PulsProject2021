$(document).ready(function(){
    $('.сarousel__inner').slick(
        {
            speed: 1200,
            adaptiveHeight: true,
            prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.png"></button>',
            nextArrow: '<button type="button" class="slick-next"><img src="icons/right.png"></button>',
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        arrows: false,
                        dots: true,
                    }
                }
            ]

        });
// работа табов на страница
        $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
            $(this)
              .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
              .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
          });

// переход по ссылке ПОДРОБНЕЕ
        //   $('.catalog-item__link').each(function(i) {
        //       $(this).on('click', function(e) {
        //           e.preventDefault();
        //           $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
        //           $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        //       })
        //   });
// переход по ссылке НАЗАД
        //   $('.catalog-item__back').each(function(i) {
        //     $(this).on('click', function(e) {
        //         e.preventDefault();
        //         $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
        //         $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        //     })
        // });

 //Оптимизированный переход
 
        function toggleSlide(item) {
            $(item).each(function(i) {
                $(this).on('click', function(e) {
                    e.preventDefault();
                    $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                    $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
                })
            });
        };

        toggleSlide('.catalog-item__link');
        toggleSlide('.catalog-item__back');


//Модальные окна 
        $('[data-modal=consultation]').on('click', function() {
            $('.overlay, #consultation').fadeIn('slow');
        });
        $('.modal__close').on('click', function() {
            $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
        });

//Текст в модальном окне будет меняться в зависимости от выбранного товара на странице
        $('.button_mini').each(function(i) {
            $(this).on('click', function() {
                $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
                $('.overlay, #order').fadeIn('slow');
            })
        });

//Валидация форм
        function validateForms(form) {
            $(form).validate({
                rules: {
                    name: "required",
                    phone: {
                        required: true,
                        minlength: 11
                    },
                    email: {
                        required: true,
                        email: true
                    }
                },
                messages: {
                    name: "Пожалуйста, введи своё имя",
                    phone: {
                        required: "Пожалуйста, введи контактный номер телефона",
                        minlength: jQuery.validator.format("Минимальное количество символов {0}")
                    },
                    email: {
                      required: "Пожалуйста, введи Ваш email",
                      email: "Неправильно введен email. Пожалуйста, введите в формате name@domain.com"
                    }
                  }
            });
        };
        validateForms('#consultation-form');
        validateForms('#order form');
        validateForms('#consultation form');

//Маска ввода номера телефона на сайте

  });
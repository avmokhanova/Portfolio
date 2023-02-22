$(document).ready(function(){
    const burgerHeader = document.querySelector('.nav-icon__wrapper');
    const bodyEl = document.body;
    const mobMenu = document.querySelector('.mobile-menu');
    const overlay = document.querySelector('#overlay');
    // let card= document.querySelector('.card');
    // let cardImg = document.querySelector('card__img');
    // let cardTitle = document.querySelector('.card__title');
    let cardLinkWrapper = document.querySelectorAll ('.card__link-wrapper');
    //let cardBtn = document.querySelector('.card-btn');
    //let overlayImj = document.querySelector('#card__overlay');

    burgerHeader.addEventListener('click', function() {

        // this.classList.toggle('active');
        // burger.classList.toggle('active');
        mobMenu.classList.add('active');
        overlay.classList.add('active');
        bodyEl.classList.add('lock');
    });

    mobMenu.addEventListener('click', function(){
        this.classList.remove('active');
        overlay.classList.remove('active')
        bodyEl.classList.remove('lock');
    });  


    // cardLinkWrapper.forEach(element => {
    //     element.addEventListener('mouseover', function(){
    //         let cardBtn = element.parentNode.querySelector('.card-btn');
    //         cardBtn.classList.toggle('active');
    //         let overlayImj = element.querySelector('.card__overlay');
    //         overlayImj.classList.toggle('active');
    //         let cardName = element.querySelector('.card__name')
    //         cardName.classList.toggle('active');
    //     });
    // });

    cardLinkWrapper.forEach(element => {
        element.addEventListener('mouseout', function(){
            let cardBtn = element.parentNode.querySelector('.card-btn');
            cardBtn.classList.remove('active');
            let overlayImj = element.querySelector('.card__overlay');
            overlayImj.classList.remove('active');
            let cardName = element.querySelector('.card__name')
            cardName.classList.remove('active');

        });
    });


    const formItems = document.querySelectorAll('.form__field');
        
    for(let item of formItems){
        const thisParent = item.closest('.form__item');
        const thisPlaceholder = thisParent.querySelector('.fake-placeholder');
        const thisFormItem = item;
        // eсли инпут в фокусе
        item.addEventListener('focus', function(){
            thisPlaceholder.classList.add('active');
            thisFormItem.classList.add('active');
            
        });

        // Если инпут теряет фокус
        item.addEventListener('blur', function(){

            if(item.value.length > 0){
                thisPlaceholder.classList.add('active');
                thisFormItem.classList.remove('active');
            }
            else{
                thisPlaceholder.classList.remove('active');
                thisFormItem.classList.remove('active');
                
            }
        });


    }


    // const thisFormField = document.querySelector('.form-field');

    // item.addEventListener('focus', function(){
    //     thisFormField.classList.add('active');
    // });

    // item.addEventListener('blur', function(){
    //     thisFormField.classList.remove('active');
    // });

    let containerEl = document.querySelector('#mix-cards');
    let mixer = mixitup(containerEl, {
        classNames: {
            block: ""
        }
    });

    //back top icon 

    const backTopBtn = document.querySelector('#backtop');

    backTopBtn.style.opasity = 0;

    document.addEventListener('scroll', function(){
        if(window.pageYOffset > 300){
            backTopBtn.style.opacity = 1;
        }else{
            backTopBtn.style.opacity = 0;
        }
    })

    //form validate

    $('.form').validate({
        rules: {
            email: {
                required: true,
                email: true
            },

            message: {
                required: true
            }
        },

        messages: {
            email: {
                required: 'Введите email',
                email: ' отсутствует символ @'
            },

            message: {
                required: 'Поле не должно быть пустым',
            }
        },
        submitHandler: function(form) {
            ajaxFormSubmit();
        }
    })

    function ajaxFormSubmit() {
        let string = $('.form').serialize();

        $.ajax ({
            type: 'POST',
            url: 'php/mail.php',
            data: string,

            success: function (html) {
                $('.form').slideUp(800);
                $('#answer').html(html);
            }
        })
        return false;
    }

   
        // plagin pageNav
        $('#header-menu').onePageNav({
            currentClass: 'active',
            changeHash: false,
            scrollSpeed: 750,
            scrollThreshold: 0.5,
            filter: '',
            easing: 'swing',
        });
    })
    
        




    

   


    








    
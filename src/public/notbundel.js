// // слайдеры


// var swiper_reviews = new Swiper(".swiper_main", {
//     // spaceBetween: 30,
//     // effect: "fade",
//     speed: 600,
//     // autoHeight: true,
//     pagination: {
//       el: ".swiper-pagination",
//       type: 'bullets',
//       clickable: 'true',
//     },
//     // navigation: {
//     //     nextEl: ".swiper-button-next",
//     //     prevEl: ".swiper-button-prev",
//     //     // clickable: true,
//     // },
//     autoplay: {
//         delay: 6000,
//     },
// });

// var services_swiper = new Swiper(".services-swiper", {
//   spaceBetween: 35,
//   slidesPerView: 3,
  
//   speed: 600,
//   // autoHeight: true,

//   navigation: {
//       nextEl: ".button-next",
//       prevEl: ".button-prev",
//       // clickable: true,
//   },
//   // autoplay: {
//   //     delay: 9000,
//   // },
//   breakpoints: {
//     // when window width is >= 320px
//     320: {
//       slidesPerView: 1,
      
//     },
//     // when window width is >= 480px
//     690: {
//       slidesPerView: 2,
   
//     },
//     // when window width is >= 640px
//     1450: {
//       slidesPerView: 3,
    
//     }
//   },
//   autoplay: {
//     delay: 6000,
// },
// });
// var swiper_video = new Swiper(".swiper_video", {
//   spaceBetween: 35,
//   slidesPerView: 4,
  
//   speed: 600,
//   // autoHeight: true,

//   navigation: {
//       nextEl: ".button-next",
//       prevEl: ".button-prev",
//       // clickable: true,
//   },
//   // autoplay: {
//   //     delay: 9000,
//   // },
//   breakpoints: {
//     // when window width is >= 320px
//     320: {
//       slidesPerView: 1,
      
//     },
//     600: {
//       slidesPerView: 2,
      
//     },
//     // when window width is >= 480px
//     960: {
//       slidesPerView: 3,
   
//     },
//     1200: {
//       slidesPerView: 4,
   
//     },
  
//     1450: {
//       slidesPerView: 4,
    
//     }
//   },
//   autoplay: {
//     delay: 6000,
// },
// });



// var swiper_photo = new Swiper(".swiper_photo", {
//   spaceBetween: 0,
//   slidesPerView: 1,
  
//   speed: 600,
//   // autoHeight: true,

//   navigation: {
//       nextEl: ".button-next",
//       prevEl: ".button-prev",
//       // clickable: true,
//   },
//   // autoplay: {
//   //     delay: 9000,
//   // },
//   breakpoints: {
//     // when window width is >= 320px
//     320: {
//       spaceBetween: 30,
      
//     },
//     // when window width is >= 480px
//     960: {
//       spaceBetween: 0,
   
//     },
//     // when window width is >= 640px
//     1450: {
   
//       spaceBetween: 0,
    
//     }
//   },
// //   autoplay: {
// //     delay: 6000,
// // },
// });

// var team_swiper = new Swiper(".team-swiper", {
//   spaceBetween: 35,
//   slidesPerView: 3,
  
//   speed: 600,
//   // autoHeight: true,

//   navigation: {
//       nextEl: ".button-next",
//       prevEl: ".button-prev",
//       // clickable: true,
//   },
//   // autoplay: {
//   //     delay: 9000,
//   // },
//   breakpoints: {
//     // when window width is >= 320px
//     320: {
//       slidesPerView: 1,
      
//     },
//     // when window width is >= 480px
//     690: {
//       slidesPerView: 2,
   
//     },
//     // when window width is >= 640px
//     1450: {
//       slidesPerView: 3,
    
//     }
//   },
//   autoplay: {
//     delay: 6000,
// },
// });


// // эфект паралакса

// var heart_left = document.getElementById('heart-left');
// if(heart_left){
//   var parallaxInstance1 = new Parallax(heart_left);
// }
// var heart_right = document.getElementById('heart-right');
// if(heart_right){
//   var parallaxInstance2 = new Parallax(heart_right);
// }
// var heart_about = document.getElementById('about-heart');
// if(heart_about ){
// var parallaxInstance3 = new Parallax(heart_about);
// }

// var heart_review = document.getElementById('review-heart');
// if(heart_review ){
// var parallaxInstance3 = new Parallax(heart_review);
// }


// var team_leaf = document.getElementById('team-leaf');
// if(team_leaf  ){
// var parallaxInstance3 = new Parallax(team_leaf);}

// var news_leaf = document.getElementById('news-leaf');
// if(news_leaf ){
// var parallaxInstance3 = new Parallax(news_leaf);}

// var adress_leaf = document.getElementById('adress-leaf');
// if(adress_leaf ){
// var parallaxInstance3 = new Parallax(adress_leaf);}

// var inner_leaf = document.getElementById('inner-leaf1');
// if(inner_leaf ){
// var parallaxInstance3 = new Parallax(inner_leaf);}

// var inner_leaf2 = document.getElementById('inner-leaf2');
// if(inner_leaf2){
// var parallaxInstance3 = new Parallax(inner_leaf2);}

// var content_heart = document.getElementById('content-heart');
// if(content_heart){
// var parallaxInstance3 = new Parallax(content_heart);}

// var serviceg_heart = document.getElementById('serviceg-heart');
// if(serviceg_heart){
// var parallaxInstance3 = new Parallax(serviceg_heart);}

// var map_leaf = document.getElementById('map-leaf');
// if(map_leaf){
// var parallaxInstance3 = new Parallax(map_leaf);}

// var content_leaf = document.getElementById('content-leaf');
// if(content_leaf){
// var parallaxInstance3 = new Parallax(content_leaf);}


// // бургер меню

// const icons = document.querySelectorAll('.burger');
// const header = document.querySelector('header');
// const body = document.querySelector('body');
// icons.forEach (icon => {  
//   icon.addEventListener('click', (event) => {
//     icon.classList.toggle("open");
//     header.classList.toggle("open");
    
//     body.classList.toggle("open");

//   });
// });



// // показать еще (сео-текст)

// let show_btn = document.querySelector('.show-more')
// let hidden_text = document.querySelector('.hidden-text')

// if(show_btn){
//   show_btn.addEventListener('click', function(){
//     hidden_text.classList.add('show')
//     show_btn.classList.add('hide')
//   })
// }





// // фиксированное меню

//   let menu = document.querySelector("menu")



//     window.addEventListener('scroll',function(){
  
//       if( window.pageYOffset >= 200 && window.screen.width >= 1200){
        
//         menu.classList.add('stiky')
    
//       }
//       else{
//         menu.classList.remove('stiky')
        
//       }
//     })
    
 





// // $(function(){
// //  $(window).scroll(function(){
// //     var top = $(this).scrollTop();
// //     var elem = $('#top_nav');
// //     if (top+h_mrg < h_hght) {
// //      elem.css('top', (h_hght-top));
// //     } else {
// //      elem.css('top', h_mrg);
// //     }
// //   });
// // });


// // маска тел
// window.addEventListener("DOMContentLoaded", function () {
//   [].forEach.call(document.querySelectorAll('.tel'), function (input) {
//     var keyCode;

//     function mask(event) {
//       event.keyCode && (keyCode = event.keyCode);
//       var pos = this.selectionStart;
//       if (pos < 3) event.preventDefault();
//       var matrix = "+7 (___) ___ __ __",
//         i = 0,
//         def = matrix.replace(/\D/g, ""),
//         val = this.value.replace(/\D/g, ""),
//         new_value = matrix.replace(/[_\d]/g, function (a) {
//           return i < val.length ? val.charAt(i++) || def.charAt(i) : a
//         });
//       i = new_value.indexOf("_");
//       if (i != -1) {
//         i < 5 && (i = 3);
//         new_value = new_value.slice(0, i)
//       }
//       var reg = matrix.substr(0, this.value.length).replace(/_+/g,
//         function (a) {
//           return "\\d{1," + a.length + "}"
//         }).replace(/[+()]/g, "\\$&");
//       reg = new RegExp("^" + reg + "$");
//       if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
//       if (event.type == "blur" && this.value.length < 5) this.value = ""
//     }

//     input.addEventListener("input", mask, false);
//     input.addEventListener("focus", mask, false);
//     input.addEventListener("blur", mask, false);
//     input.addEventListener("keydown", mask, false)

//   });

// });

// // запрет перемещения модального окна
// if(document.querySelector('[href="#modal-call"]')){
//   const filterGallary2 = Fancybox.bind('[href="#modal-call"]', {
//     // closeButton: "top",
//     dragToClose: false,
//     // Thumbs: false,
//     // Carousel: {
//     //     Dots: false,
//     // },
//   });
  
// }
// if(document.querySelector('[href="#modal-call-second"]')){
//   const filterGallary2 = Fancybox.bind('[href="#modal-call-second"]', {
//     // closeButton: "top",
//     dragToClose: false,
//     // Thumbs: false,
//     // Carousel: {
//     //     Dots: false,
//     // },
//   });
  
// }



// // кнопка наверх

//     //  Get the button
//     let mybutton = document.getElementById("btn-back-to-top");

//     // When the user scrolls down 20px from the top of the document, show the button
//     window.onscroll = function () {
//       scrollFunction();
//     };
    
//     function scrollFunction() {
//       if (
//         document.body.scrollTop > 20 ||
//         document.documentElement.scrollTop > 20
//       ) {
//         mybutton.style.display = "flex";
//       } else {
//         mybutton.style.display = "none";
//       }
//     }
//     // When the user clicks on the button, scroll to the top of the document
//     mybutton.addEventListener("click", backToTop);
    
//     function backToTop() {
//      window.scrollTo({ top: 0, behavior: 'smooth' });

//     }




//     // селект


//     const CLASS_NAME_SELECT = 'select';
// const CLASS_NAME_ACTIVE = 'select_show';
// const CLASS_NAME_SELECTED = 'select__option_selected';
// const SELECTOR_ACTIVE = '.select_show';
// const SELECTOR_DATA = '[data-select]';
// const SELECTOR_DATA_TOGGLE = '[data-select="toggle"]';
// const SELECTOR_OPTION_SELECTED = '.select__option_selected';

// let SELECT_CONTENT = document.querySelectorAll('.adress-block .select-content')

// function changeContent(target){
// if(SELECT_CONTENT.length > 0){
//   if(SELECT_CONTENT[(target.getAttribute('data-index') - 1)].classList.contains('show')){

//     // console.log(SELECT_CONTENT , target.getAttribute('data-index'));
//   }
//   else{
//     document.querySelector('.adress-block .select-content.show')? document.querySelector('.adress-block .select-content.show').classList.remove('show'): ''
//     SELECT_CONTENT[(target.getAttribute('data-index') - 1)].classList.add('show')
//   }
// }
  
  
  
// }


// class CustomSelect {
//   constructor(target, params) {
//     this._elRoot = typeof target === 'string' ? document.querySelector(target) : target;
//     this._params = params || {};
//     if (this._params['options']) {
//       this._elRoot.classList.add(CLASS_NAME_SELECT);
//       this._elRoot.innerHTML = CustomSelect.template(this._params);
//     }
//     this._elToggle = this._elRoot.querySelector(SELECTOR_DATA_TOGGLE);
//     this._elRoot.addEventListener('click', this._onClick.bind(this));
//   }
//   _onClick(e) {
//     const target = e.target;
//     const type = target.closest(SELECTOR_DATA).dataset.select;
//     switch (type) {
//       case 'toggle':
//         this.toggle();
//         break;
//       case 'option':
//         this._changeValue(target);
//         changeContent(target)
//         break;
//     }
   
//   }
//   _update(option) {
//     option = option.closest('.select__option');
//     const selected = this._elRoot.querySelector(SELECTOR_OPTION_SELECTED);
//     if (selected) {
//       selected.classList.remove(CLASS_NAME_SELECTED);
//     }
//     option.classList.add(CLASS_NAME_SELECTED);
//     this._elToggle.textContent = option.textContent;
//     this._elToggle.value = option.dataset['value'];
//     this._elToggle.dataset.index = option.dataset['index'];
//     this._elRoot.dispatchEvent(new CustomEvent('select.change'));
//     this._params.onSelected ? this._params.onSelected(this, option) : null;
//     return option.dataset['value'];
//   }
//   _reset() {
//     const selected = this._elRoot.querySelector(SELECTOR_OPTION_SELECTED);
//     if (selected) {
//       selected.classList.remove(CLASS_NAME_SELECTED);
//     }
//     this._elToggle.textContent = 'Выберите из списка';
//     this._elToggle.value = '';
//     this._elToggle.dataset.index = -1;
//     this._elRoot.dispatchEvent(new CustomEvent('select.change'));
//     this._params.onSelected ? this._params.onSelected(this, null) : null;
//     return '';
//   }
//   _changeValue(option) {
//     if (option.classList.contains(CLASS_NAME_SELECTED)) {
//       return;
//     }
//     this._update(option);
//     this.hide();
//   }
//   show() {
//     document.querySelectorAll(SELECTOR_ACTIVE).forEach(select => {
//       select.classList.remove(CLASS_NAME_ACTIVE);
//     });
//     this._elRoot.classList.add(CLASS_NAME_ACTIVE);
//   }
//   hide() {
//     this._elRoot.classList.remove(CLASS_NAME_ACTIVE);
//   }
//   toggle() {
//     if (this._elRoot.classList.contains(CLASS_NAME_ACTIVE)) {
//       this.hide();
//     } else {
//       this.show();
//     }
//   }
//   dispose() {
//     this._elRoot.removeEventListener('click', this._onClick);
//   }
//   get value() {
//     return this._elToggle.value;
//   }
//   set value(value) {
//     let isExists = false;
//     this._elRoot.querySelectorAll('.select__option').forEach((option) => {
//       if (option.dataset['value'] === value) {
//         isExists = true;
//         return this._update(option);
//       }
//     });
//     if (!isExists) {
//       return this._reset();
//     }
//   }
//   get selectedIndex() {
//     return this._elToggle.dataset['index'];
//   }
//   set selectedIndex(index) {
//     const option = this._elRoot.querySelector(`.select__option[data-index="${index}"]`);
//     if (option) {
//       return this._update(option);
//     }
//     return this._reset();
//   }
// }

// CustomSelect.template = params => {
//   const name = params['name'];
//   const options = params['options'];
//   const targetValue = params['targetValue'];
//   let items = [];
//   let selectedIndex = -1;
//   let selectedValue = '';
//   let selectedContent = 'Выберите из списка';
//   options.forEach((option, index) => {
//     let selectedClass = '';
//     if (option[0] === targetValue) {
//       selectedClass = ' select__option_selected';
//       selectedIndex = index;
//       selectedValue = option[0];
//       selectedContent = option[1];
//     }
//     items.push(`<div class="select__option${selectedClass}" data-select="option" data-value="${option[0]}" data-index="${index}">${option[1]}</div>`);
//   });
//   return `<button type="button" class="select__toggle" name="${name}" value="${selectedValue}" data-select="toggle" data-index="${selectedIndex}">${selectedContent}</button>
//   <div class="select__dropdown">
//     <ul class="select__options">${items.join('')}</ul>
//   </div>`;
// };


// document.addEventListener('click', (e) => {
//   if (!e.target.closest('.select')) {
//     document.querySelectorAll(SELECTOR_ACTIVE).forEach(select => {
//       select.classList.remove(CLASS_NAME_ACTIVE);
//     });
//   }
// });



// // #select-1 - селектор для выбора элемента, который необходимо инициализировать как CustomSelect
// if(document.getElementById("select-1")){
//   const select1 = new CustomSelect('#select-1');
// }

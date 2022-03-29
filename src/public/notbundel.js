


var c = document.getElementById('canvi');
var numfunc = c.getContext('2d');

var w = c.width = window.innerWidth;
var h = c.height = window.innerHeight;

var txt = function() {
  var _t = "Загрузка...".split("").join(String.fromCharCode(0x2004));
  numfunc.font = "Archive";
  numfunc.fillStyle = '#fff';
  numfunc.fillText(_t, (c.width - numfunc.measureText(_t).width) * 0.5, c.height * 0.5);
  return _t;
}

var draw = function(a, b, t) {
  numfunc.lineWidth = 0.8;
  numfunc.fillStyle = '#432158';
  numfunc.fillRect(0, 0, w, h);
  for (var i = -60; i < 60; i += 1) {
    numfunc.strokeStyle = '#ffffff3a';
    numfunc.beginPath();
    numfunc.moveTo(0, h / 2);
    for (var j = 0; j < w; j += 10) {
      numfunc.lineTo(10 * Math.sin(i / 10) +
        j + 0.008 * j * j,
        Math.floor(h / 2 + j / 2 *
          Math.sin(j / 50 - t / 50 - i / 118) +
          (i * 0.9) * Math.sin(j / 25 - (i + t) / 65)));
    };
    numfunc.stroke();
  }
}
var t = 0;

window.addEventListener('resize', function() {
  c.width = w = window.innerWidth;
  c.height = h = window.innerHeight;
  numfunc.fillStyle = 'hsla(160, 95%, 55%, 1)';
}, false);

var run = function() {
  window.requestAnimationFrame(run);
  t += 5;
  draw(33, 52 * Math.sin(t / 2400), t);
  txt();
};

run();


$(window).on('load', function() {
    $('.loader').fadeOut().end().delay(400).fadeOut('slow');
  });


   




// numfunc(window).load(function () {
//     numfunc(".loader_inner").fadeOut();
//     numfunc(".loader").delay(100).fadeOut("slow");
//     numfunc("#canvi").fadeOut();
//     numfunc("#canvi").delay(100).fadeOut("slow");
// });





// // слайдеры


var swiper_news = new Swiper(".swiper_news", {
    // spaceBetween: 30,
    // effect: "fade",
    speed: 600,
    // autoHeight: true,
    // pagination: {
    //   el: ".swiper-pagination",
    //   type: 'bullets',
    //   clickable: 'true',
    // },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        // clickable: true,
    },
    autoplay: {
        delay: 6000,
    },
});






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
    
 





// // numfunc(function(){
// //  numfunc(window).scroll(function(){
// //     var top = numfunc(this).scrollTop();
// //     var elem = numfunc('#top_nav');
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
//         }).replace(/[+()]/g, "\\numfunc&");
//       reg = new RegExp("^" + reg + "numfunc");
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
//     const option = this._elRoot.querySelector(`.select__option[data-index="numfunc{index}"]`);
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
//     items.push(`<div class="select__optionnumfunc{selectedClass}" data-select="option" data-value="numfunc{option[0]}" data-index="numfunc{index}">numfunc{option[1]}</div>`);
//   });
//   return `<button type="button" class="select__toggle" name="numfunc{name}" value="numfunc{selectedValue}" data-select="toggle" data-index="numfunc{selectedIndex}">numfunc{selectedContent}</button>
//   <div class="select__dropdown">
//     <ul class="select__options">numfunc{items.join('')}</ul>
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


/*! WOW - v1.1.2 - 2015-04-07
* Copyright (c) 2015 Matthieu Aussaguel; Licensed MIT */(function(){var a,b,c,d,e,f=function(a,b){return function(){return a.apply(b,arguments)}},g=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1};b=function(){function a(){}return a.prototype.extend=function(a,b){var c,d;for(c in b)d=b[c],null==a[c]&&(a[c]=d);return a},a.prototype.isMobile=function(a){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)},a.prototype.createEvent=function(a,b,c,d){var e;return null==b&&(b=!1),null==c&&(c=!1),null==d&&(d=null),null!=document.createEvent?(e=document.createEvent("CustomEvent"),e.initCustomEvent(a,b,c,d)):null!=document.createEventObject?(e=document.createEventObject(),e.eventType=a):e.eventName=a,e},a.prototype.emitEvent=function(a,b){return null!=a.dispatchEvent?a.dispatchEvent(b):b in(null!=a)?a[b]():"on"+b in(null!=a)?a["on"+b]():void 0},a.prototype.addEvent=function(a,b,c){return null!=a.addEventListener?a.addEventListener(b,c,!1):null!=a.attachEvent?a.attachEvent("on"+b,c):a[b]=c},a.prototype.removeEvent=function(a,b,c){return null!=a.removeEventListener?a.removeEventListener(b,c,!1):null!=a.detachEvent?a.detachEvent("on"+b,c):delete a[b]},a.prototype.innerHeight=function(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight},a}(),c=this.WeakMap||this.MozWeakMap||(c=function(){function a(){this.keys=[],this.values=[]}return a.prototype.get=function(a){var b,c,d,e,f;for(f=this.keys,b=d=0,e=f.length;e>d;b=++d)if(c=f[b],c===a)return this.values[b]},a.prototype.set=function(a,b){var c,d,e,f,g;for(g=this.keys,c=e=0,f=g.length;f>e;c=++e)if(d=g[c],d===a)return void(this.values[c]=b);return this.keys.push(a),this.values.push(b)},a}()),a=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(a=function(){function a(){"undefined"!=typeof console&&null!==console&&console.warn("MutationObserver is not supported by your browser."),"undefined"!=typeof console&&null!==console&&console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}return a.notSupported=!0,a.prototype.observe=function(){},a}()),d=this.getComputedStyle||function(a){return this.getPropertyValue=function(b){var c;return"float"===b&&(b="styleFloat"),e.test(b)&&b.replace(e,function(a,b){return b.toUpperCase()}),(null!=(c=a.currentStyle)?c[b]:void 0)||null},this},e=/(\-([a-z]){1})/g,this.WOW=function(){function e(a){null==a&&(a={}),this.scrollCallback=f(this.scrollCallback,this),this.scrollHandler=f(this.scrollHandler,this),this.resetAnimation=f(this.resetAnimation,this),this.start=f(this.start,this),this.scrolled=!0,this.config=this.util().extend(a,this.defaults),this.animationNameCache=new c,this.wowEvent=this.util().createEvent(this.config.boxClass)}return e.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null},e.prototype.init=function(){var a;return this.element=window.document.documentElement,"interactive"===(a=document.readyState)||"complete"===a?this.start():this.util().addEvent(document,"DOMContentLoaded",this.start),this.finished=[]},e.prototype.start=function(){var b,c,d,e;if(this.stopped=!1,this.boxes=function(){var a,c,d,e;for(d=this.element.querySelectorAll("."+this.config.boxClass),e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.all=function(){var a,c,d,e;for(d=this.boxes,e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.boxes.length)if(this.disabled())this.resetStyle();else for(e=this.boxes,c=0,d=e.length;d>c;c++)b=e[c],this.applyStyle(b,!0);return this.disabled()||(this.util().addEvent(window,"scroll",this.scrollHandler),this.util().addEvent(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live?new a(function(a){return function(b){var c,d,e,f,g;for(g=[],c=0,d=b.length;d>c;c++)f=b[c],g.push(function(){var a,b,c,d;for(c=f.addedNodes||[],d=[],a=0,b=c.length;b>a;a++)e=c[a],d.push(this.doSync(e));return d}.call(a));return g}}(this)).observe(document.body,{childList:!0,subtree:!0}):void 0},e.prototype.stop=function(){return this.stopped=!0,this.util().removeEvent(window,"scroll",this.scrollHandler),this.util().removeEvent(window,"resize",this.scrollHandler),null!=this.interval?clearInterval(this.interval):void 0},e.prototype.sync=function(){return a.notSupported?this.doSync(this.element):void 0},e.prototype.doSync=function(a){var b,c,d,e,f;if(null==a&&(a=this.element),1===a.nodeType){for(a=a.parentNode||a,e=a.querySelectorAll("."+this.config.boxClass),f=[],c=0,d=e.length;d>c;c++)b=e[c],g.call(this.all,b)<0?(this.boxes.push(b),this.all.push(b),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(b,!0),f.push(this.scrolled=!0)):f.push(void 0);return f}},e.prototype.show=function(a){return this.applyStyle(a),a.className=a.className+" "+this.config.animateClass,null!=this.config.callback&&this.config.callback(a),this.util().emitEvent(a,this.wowEvent),this.util().addEvent(a,"animationend",this.resetAnimation),this.util().addEvent(a,"oanimationend",this.resetAnimation),this.util().addEvent(a,"webkitAnimationEnd",this.resetAnimation),this.util().addEvent(a,"MSAnimationEnd",this.resetAnimation),a},e.prototype.applyStyle=function(a,b){var c,d,e;return d=a.getAttribute("data-wow-duration"),c=a.getAttribute("data-wow-delay"),e=a.getAttribute("data-wow-iteration"),this.animate(function(f){return function(){return f.customStyle(a,b,d,c,e)}}(this))},e.prototype.animate=function(){return"requestAnimationFrame"in window?function(a){return window.requestAnimationFrame(a)}:function(a){return a()}}(),e.prototype.resetStyle=function(){var a,b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],e.push(a.style.visibility="visible");return e},e.prototype.resetAnimation=function(a){var b;return a.type.toLowerCase().indexOf("animationend")>=0?(b=a.target||a.srcElement,b.className=b.className.replace(this.config.animateClass,"").trim()):void 0},e.prototype.customStyle=function(a,b,c,d,e){return b&&this.cacheAnimationName(a),a.style.visibility=b?"hidden":"visible",c&&this.vendorSet(a.style,{animationDuration:c}),d&&this.vendorSet(a.style,{animationDelay:d}),e&&this.vendorSet(a.style,{animationIterationCount:e}),this.vendorSet(a.style,{animationName:b?"none":this.cachedAnimationName(a)}),a},e.prototype.vendors=["moz","webkit"],e.prototype.vendorSet=function(a,b){var c,d,e,f;d=[];for(c in b)e=b[c],a[""+c]=e,d.push(function(){var b,d,g,h;for(g=this.vendors,h=[],b=0,d=g.length;d>b;b++)f=g[b],h.push(a[""+f+c.charAt(0).toUpperCase()+c.substr(1)]=e);return h}.call(this));return d},e.prototype.vendorCSS=function(a,b){var c,e,f,g,h,i;for(h=d(a),g=h.getPropertyCSSValue(b),f=this.vendors,c=0,e=f.length;e>c;c++)i=f[c],g=g||h.getPropertyCSSValue("-"+i+"-"+b);return g},e.prototype.animationName=function(a){var b;try{b=this.vendorCSS(a,"animation-name").cssText}catch(c){b=d(a).getPropertyValue("animation-name")}return"none"===b?"":b},e.prototype.cacheAnimationName=function(a){return this.animationNameCache.set(a,this.animationName(a))},e.prototype.cachedAnimationName=function(a){return this.animationNameCache.get(a)},e.prototype.scrollHandler=function(){return this.scrolled=!0},e.prototype.scrollCallback=function(){var a;return!this.scrolled||(this.scrolled=!1,this.boxes=function(){var b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],a&&(this.isVisible(a)?this.show(a):e.push(a));return e}.call(this),this.boxes.length||this.config.live)?void 0:this.stop()},e.prototype.offsetTop=function(a){for(var b;void 0===a.offsetTop;)a=a.parentNode;for(b=a.offsetTop;a=a.offsetParent;)b+=a.offsetTop;return b},e.prototype.isVisible=function(a){var b,c,d,e,f;return c=a.getAttribute("data-wow-offset")||this.config.offset,f=window.pageYOffset,e=f+Math.min(this.element.clientHeight,this.util().innerHeight())-c,d=this.offsetTop(a),b=d+a.clientHeight,e>=d&&b>=f},e.prototype.util=function(){return null!=this._util?this._util:this._util=new b},e.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},e}()}).call(this);

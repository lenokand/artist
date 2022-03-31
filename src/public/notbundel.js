// paralax
var scene2 = document.getElementById('scene2');
if(scene2){
  var parallaxInstance = new Parallax(scene2);
}
var scene = document.getElementById('scene');
if(scene){
  var parallaxInstance = new Parallax(scene);
}
var scene3 = document.getElementById('scene3');
if(scene3){
  var parallaxInstance = new Parallax(scene3);
}
var scene4 = document.getElementById('scene4');
if(scene4){
  var parallaxInstance = new Parallax(scene4);
}
var scene5 = document.getElementById('scene5');
if(scene5){
  var parallaxInstance = new Parallax(scene5);
}





// let tab_controls2 = document.querySelectorAll('#section7 .tab_control_item')
// let tab_contents2 = document.querySelectorAll('#section7 .tabs_content')

// if (tab_controls2.length > 0) {

//   tab_controls2.forEach((tab, index) => {
   

//     tab.addEventListener('click', function(){


//      let active_content = document.querySelector('#section7 .tabs_content.show')
//      active_content.classList.remove('show')
//      tab_contents2[index].classList.add('show')

//       // console.log(active_content, tab)
//     })}
//   )}
  




// preloader

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

// swiper
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
      nextEl: ".swiper-navigation-next",
      prevEl: ".swiper-navigation-prev",
      // clickable: true,
  },
  autoplay: {
      delay: 6000,
  },
  // thumbs: {
  //   swiper: swiper_navigation,
  // },
  // on: {
  //   slideChange() {
  //     sliders
  //       .filter(n => n !== swiper_news)
  //       .forEach(n => n.slideToLoop(this.realIndex));
  //   },},
});



// // показать еще (сео-текст)

// let show_btn = document.querySelector('.show-more')
// let hidden_text = document.querySelector('.hidden-text')

// if(show_btn){
//   show_btn.addEventListener('click', function(){
//     hidden_text.classList.add('show')
//     show_btn.classList.add('hide')
//   })
// }








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






/*! WOW - v1.1.2 - 2015-04-07
* Copyright (c) 2015 Matthieu Aussaguel; Licensed MIT */(function(){var a,b,c,d,e,f=function(a,b){return function(){return a.apply(b,arguments)}},g=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1};b=function(){function a(){}return a.prototype.extend=function(a,b){var c,d;for(c in b)d=b[c],null==a[c]&&(a[c]=d);return a},a.prototype.isMobile=function(a){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)},a.prototype.createEvent=function(a,b,c,d){var e;return null==b&&(b=!1),null==c&&(c=!1),null==d&&(d=null),null!=document.createEvent?(e=document.createEvent("CustomEvent"),e.initCustomEvent(a,b,c,d)):null!=document.createEventObject?(e=document.createEventObject(),e.eventType=a):e.eventName=a,e},a.prototype.emitEvent=function(a,b){return null!=a.dispatchEvent?a.dispatchEvent(b):b in(null!=a)?a[b]():"on"+b in(null!=a)?a["on"+b]():void 0},a.prototype.addEvent=function(a,b,c){return null!=a.addEventListener?a.addEventListener(b,c,!1):null!=a.attachEvent?a.attachEvent("on"+b,c):a[b]=c},a.prototype.removeEvent=function(a,b,c){return null!=a.removeEventListener?a.removeEventListener(b,c,!1):null!=a.detachEvent?a.detachEvent("on"+b,c):delete a[b]},a.prototype.innerHeight=function(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight},a}(),c=this.WeakMap||this.MozWeakMap||(c=function(){function a(){this.keys=[],this.values=[]}return a.prototype.get=function(a){var b,c,d,e,f;for(f=this.keys,b=d=0,e=f.length;e>d;b=++d)if(c=f[b],c===a)return this.values[b]},a.prototype.set=function(a,b){var c,d,e,f,g;for(g=this.keys,c=e=0,f=g.length;f>e;c=++e)if(d=g[c],d===a)return void(this.values[c]=b);return this.keys.push(a),this.values.push(b)},a}()),a=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(a=function(){function a(){"undefined"!=typeof console&&null!==console&&console.warn("MutationObserver is not supported by your browser."),"undefined"!=typeof console&&null!==console&&console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}return a.notSupported=!0,a.prototype.observe=function(){},a}()),d=this.getComputedStyle||function(a){return this.getPropertyValue=function(b){var c;return"float"===b&&(b="styleFloat"),e.test(b)&&b.replace(e,function(a,b){return b.toUpperCase()}),(null!=(c=a.currentStyle)?c[b]:void 0)||null},this},e=/(\-([a-z]){1})/g,this.WOW=function(){function e(a){null==a&&(a={}),this.scrollCallback=f(this.scrollCallback,this),this.scrollHandler=f(this.scrollHandler,this),this.resetAnimation=f(this.resetAnimation,this),this.start=f(this.start,this),this.scrolled=!0,this.config=this.util().extend(a,this.defaults),this.animationNameCache=new c,this.wowEvent=this.util().createEvent(this.config.boxClass)}return e.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null},e.prototype.init=function(){var a;return this.element=window.document.documentElement,"interactive"===(a=document.readyState)||"complete"===a?this.start():this.util().addEvent(document,"DOMContentLoaded",this.start),this.finished=[]},e.prototype.start=function(){var b,c,d,e;if(this.stopped=!1,this.boxes=function(){var a,c,d,e;for(d=this.element.querySelectorAll("."+this.config.boxClass),e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.all=function(){var a,c,d,e;for(d=this.boxes,e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.boxes.length)if(this.disabled())this.resetStyle();else for(e=this.boxes,c=0,d=e.length;d>c;c++)b=e[c],this.applyStyle(b,!0);return this.disabled()||(this.util().addEvent(window,"scroll",this.scrollHandler),this.util().addEvent(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live?new a(function(a){return function(b){var c,d,e,f,g;for(g=[],c=0,d=b.length;d>c;c++)f=b[c],g.push(function(){var a,b,c,d;for(c=f.addedNodes||[],d=[],a=0,b=c.length;b>a;a++)e=c[a],d.push(this.doSync(e));return d}.call(a));return g}}(this)).observe(document.body,{childList:!0,subtree:!0}):void 0},e.prototype.stop=function(){return this.stopped=!0,this.util().removeEvent(window,"scroll",this.scrollHandler),this.util().removeEvent(window,"resize",this.scrollHandler),null!=this.interval?clearInterval(this.interval):void 0},e.prototype.sync=function(){return a.notSupported?this.doSync(this.element):void 0},e.prototype.doSync=function(a){var b,c,d,e,f;if(null==a&&(a=this.element),1===a.nodeType){for(a=a.parentNode||a,e=a.querySelectorAll("."+this.config.boxClass),f=[],c=0,d=e.length;d>c;c++)b=e[c],g.call(this.all,b)<0?(this.boxes.push(b),this.all.push(b),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(b,!0),f.push(this.scrolled=!0)):f.push(void 0);return f}},e.prototype.show=function(a){return this.applyStyle(a),a.className=a.className+" "+this.config.animateClass,null!=this.config.callback&&this.config.callback(a),this.util().emitEvent(a,this.wowEvent),this.util().addEvent(a,"animationend",this.resetAnimation),this.util().addEvent(a,"oanimationend",this.resetAnimation),this.util().addEvent(a,"webkitAnimationEnd",this.resetAnimation),this.util().addEvent(a,"MSAnimationEnd",this.resetAnimation),a},e.prototype.applyStyle=function(a,b){var c,d,e;return d=a.getAttribute("data-wow-duration"),c=a.getAttribute("data-wow-delay"),e=a.getAttribute("data-wow-iteration"),this.animate(function(f){return function(){return f.customStyle(a,b,d,c,e)}}(this))},e.prototype.animate=function(){return"requestAnimationFrame"in window?function(a){return window.requestAnimationFrame(a)}:function(a){return a()}}(),e.prototype.resetStyle=function(){var a,b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],e.push(a.style.visibility="visible");return e},e.prototype.resetAnimation=function(a){var b;return a.type.toLowerCase().indexOf("animationend")>=0?(b=a.target||a.srcElement,b.className=b.className.replace(this.config.animateClass,"").trim()):void 0},e.prototype.customStyle=function(a,b,c,d,e){return b&&this.cacheAnimationName(a),a.style.visibility=b?"hidden":"visible",c&&this.vendorSet(a.style,{animationDuration:c}),d&&this.vendorSet(a.style,{animationDelay:d}),e&&this.vendorSet(a.style,{animationIterationCount:e}),this.vendorSet(a.style,{animationName:b?"none":this.cachedAnimationName(a)}),a},e.prototype.vendors=["moz","webkit"],e.prototype.vendorSet=function(a,b){var c,d,e,f;d=[];for(c in b)e=b[c],a[""+c]=e,d.push(function(){var b,d,g,h;for(g=this.vendors,h=[],b=0,d=g.length;d>b;b++)f=g[b],h.push(a[""+f+c.charAt(0).toUpperCase()+c.substr(1)]=e);return h}.call(this));return d},e.prototype.vendorCSS=function(a,b){var c,e,f,g,h,i;for(h=d(a),g=h.getPropertyCSSValue(b),f=this.vendors,c=0,e=f.length;e>c;c++)i=f[c],g=g||h.getPropertyCSSValue("-"+i+"-"+b);return g},e.prototype.animationName=function(a){var b;try{b=this.vendorCSS(a,"animation-name").cssText}catch(c){b=d(a).getPropertyValue("animation-name")}return"none"===b?"":b},e.prototype.cacheAnimationName=function(a){return this.animationNameCache.set(a,this.animationName(a))},e.prototype.cachedAnimationName=function(a){return this.animationNameCache.get(a)},e.prototype.scrollHandler=function(){return this.scrolled=!0},e.prototype.scrollCallback=function(){var a;return!this.scrolled||(this.scrolled=!1,this.boxes=function(){var b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],a&&(this.isVisible(a)?this.show(a):e.push(a));return e}.call(this),this.boxes.length||this.config.live)?void 0:this.stop()},e.prototype.offsetTop=function(a){for(var b;void 0===a.offsetTop;)a=a.parentNode;for(b=a.offsetTop;a=a.offsetParent;)b+=a.offsetTop;return b},e.prototype.isVisible=function(a){var b,c,d,e,f;return c=a.getAttribute("data-wow-offset")||this.config.offset,f=window.pageYOffset,e=f+Math.min(this.element.clientHeight,this.util().innerHeight())-c,d=this.offsetTop(a),b=d+a.clientHeight,e>=d&&b>=f},e.prototype.util=function(){return null!=this._util?this._util:this._util=new b},e.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},e}()}).call(this);













   



// // табы
// class ItcTabs {
//   constructor(target, config) {
//     const defaultConfig = {};
//     this._config = Object.assign(defaultConfig, config);
//     this._elTabs = typeof target === 'string' ? document.querySelector(target) : target;
//     this._elButtons = this._elTabs.querySelectorAll('.info-tab_navigation .info-tab_item');

//     this._elNext = this._elTabs.querySelector('.news-nav .swiper-navigation-next');//кастомизация
//     this._elPrev = this._elTabs.querySelector('.news-nav .swiper-navigation-prev');//кастомизация
//     // this._elCurIndex;
//     // this._elCountTotal = this._elTabs.querySelector('.tab_count_total');//кастомизация
//     // this._elCountCurent = this._elTabs.querySelector('.tab_count_current');//кастомизация
    
//     this._elPanes = this._elTabs.querySelectorAll('.info-tab_content');
//     this._eventShow = new Event('tab.itc.change');
//     this._init();
//     this._events();
//   }
//   _init() {
//     this._elTabs.setAttribute('role', 'tablist');

//     // this._elCountTotal.innerText = this._elButtons.length //кастомизация
    
//     this._elButtons.forEach((el, index) => {
//       el.dataset.index = index;
//       el.setAttribute('role', 'tab');
//       this._elPanes[index].setAttribute('role', 'tabpanel');
//     });
    
//   }
//   show(elLinkTarget) {

//     // console.log(elLinkTarget)
//     const elPaneTarget = this._elPanes[elLinkTarget.dataset.index];
    

//     // this._elCountCurent.innerText = +elLinkTarget.dataset.index + 1//кастомизация

//     const elLinkActive = this._elTabs.querySelector('.info-tab_navigation .info-tab_item.active');
//     const elPaneShow = this._elTabs.querySelector('.info-tab_content.active');
//     if (elLinkTarget === elLinkActive) {
//       return;
//     }

//     elLinkActive ? elLinkActive.classList.remove('active') : null;
//     elPaneShow ? elPaneShow.classList.remove('active') : null;
//     elLinkTarget.classList.add('active');

//     elPaneTarget.classList.add('active');
//     this._elTabs.dispatchEvent(this._eventShow);
//     elLinkTarget.focus();
//   }

//   // next(elLinkTarget) {
//   //   const elPaneTarget = this._elPanes[elLinkTarget.dataset.index];


//   //   // this._elCountCurent.innerText = +elLinkTarget.dataset.index + 1//кастомизация

//   //   const elLinkActive = this._elTabs.querySelector('.info-tab_navigation .info-tab_item.active');
//   //   const elPaneShow = this._elTabs.querySelector('.info-tab_content.active');
//   //   if (elLinkTarget === elLinkActive) {
//   //     return;
//   //   }

//   //   elLinkActive ? elLinkActive.classList.remove('active') : null;
//   //   elPaneShow ? elPaneShow.classList.remove('active') : null;
//   //   elLinkTarget.classList.add('active');

//   //   elPaneTarget.classList.add('active');
//   //   this._elTabs.dispatchEvent(this._eventShow);
//   //   elLinkTarget.focus();
//   // }



//   showByIndex(index) {
    
//     const elLinkTarget = this._elButtons[index];
//     elLinkTarget ? this.show(elLinkTarget) : null;
//   };

//   _events() {
    
//     // console.log( this._elNext);
//     // this._elNext.addEventListener('click', (e) => {

//     //   let currentIndex = document.querySelector('.info-tab_item.active').dataset.index
//     //   let allTabs = document.querySelectorAll('.news .info-tab_item')
      
//     //   const target = e.target.closest('.info-tab_navigation .info-tab_item');
      
//     //   console.log(allTabs[+currentIndex+1]);
//     //   allTabs[+currentIndex+1]
//     //   this.show(allTabs[+currentIndex+1] );

//     //   // console.log( this._elNext);
//     //   // this.show(target );
//     //   // const alltEl = document.querySelectorAll('.info-tab_navigation .info-tab_item')
//     //   // const currentEl = document.querySelector('.info-tab_navigation .info-tab_item.active')

//     //   // console.log(currentEl.indexOf(".info-tab_navigation .info-tab_item.active"))

//     // })
    
    

//     this._elTabs.addEventListener('click', (e) => {
      
//       const target = e.target.closest('.info-tab_navigation .info-tab_item');
//       // console.log(target)
//       if (target) {
//         e.preventDefault();
//         this.show(target );
        
//       }

//     });




//   }
// }

// // const tabs = document.querySelectorAll('.info-block');
// // for (let i = 0, length = tabs.length; i < length; i++) {
// //   new ItcTabs(tabs[i]);
// // }

// new ItcTabs('.info-block');

// // custom

// // let allTabs = document.querySelectorAll('.info-tab_navigation .info-tab_item')

// // let btnNext = document.querySelector('.news-nav .swiper-navigation-next')
// // let btnPrev = document.querySelector('.news-nav .swiper-navigation-prev')
// // let currentActive = document.querySelector('.info-tab_navigation .info-tab_item.active').getAttribute('data-index')
// // let n = currentActive

// // btnNext.addEventListener('click', 
// //   function(){
    
// //     console.log(n);
// //     // console.log(allTabs[+n + 1]);
// //     // allTabs[+n + 1].click()
// //     n++
// //     allTabs[+n ].click()
   
// //   }
// // )

// // btnPrev.addEventListener('click', 
// //   function(){
   
// //     console.log(currentActive);
// //     console.log(allTabs[+currentActive + 1]);
// //     allTabs[+currentActive - 1].click()
// //   }
// // )


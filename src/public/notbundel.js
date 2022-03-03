// слайдеры


var swiper_reviews = new Swiper(".swiper_main", {
    // spaceBetween: 30,
    // effect: "fade",
    speed: 600,
    // autoHeight: true,
    pagination: {
      el: ".swiper-pagination",
      type: 'bullets',
      clickable: 'true',
    },
    // navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    //     // clickable: true,
    // },
    autoplay: {
        delay: 6000,
    },
});

var services_swiper = new Swiper(".services-swiper", {
  spaceBetween: 35,
  slidesPerView: 3,
  
  speed: 600,
  // autoHeight: true,

  navigation: {
      nextEl: ".button-next",
      prevEl: ".button-prev",
      // clickable: true,
  },
  // autoplay: {
  //     delay: 9000,
  // },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      
    },
    // when window width is >= 480px
    690: {
      slidesPerView: 2,
   
    },
    // when window width is >= 640px
    1450: {
      slidesPerView: 3,
    
    }
  },
  autoplay: {
    delay: 6000,
},
});
var team_swiper = new Swiper(".team-swiper", {
  spaceBetween: 35,
  slidesPerView: 3,
  
  speed: 600,
  // autoHeight: true,

  navigation: {
      nextEl: ".button-next",
      prevEl: ".button-prev",
      // clickable: true,
  },
  // autoplay: {
  //     delay: 9000,
  // },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      
    },
    // when window width is >= 480px
    690: {
      slidesPerView: 2,
   
    },
    // when window width is >= 640px
    1450: {
      slidesPerView: 3,
    
    }
  },
  autoplay: {
    delay: 6000,
},
});


// эфект паралакса

var heart_left = document.getElementById('heart-left');
var parallaxInstance1 = new Parallax(heart_left);
var heart_right = document.getElementById('heart-right');
var parallaxInstance2 = new Parallax(heart_right);
var heart_about = document.getElementById('about-heart');
var parallaxInstance3 = new Parallax(heart_about);
var heart_review = document.getElementById('review-heart');
var parallaxInstance3 = new Parallax(heart_review);
var team_leaf = document.getElementById('team-leaf');
var parallaxInstance3 = new Parallax(team_leaf);
var news_leaf = document.getElementById('news-leaf');
var parallaxInstance3 = new Parallax(news_leaf);


// бургер меню

const icons = document.querySelectorAll('.burger');
const header = document.querySelector('header');
const body = document.querySelector('body');
icons.forEach (icon => {  
  icon.addEventListener('click', (event) => {
    icon.classList.toggle("open");
    header.classList.toggle("open");
    
    body.classList.toggle("open");

  });
});



// показать еще (сео-текст)

let show_btn = document.querySelector('.show-more')
let hidden_text = document.querySelector('.hidden-text')

show_btn.addEventListener('click', function(){
  hidden_text.classList.add('show')
  show_btn.classList.add('hide')
})




// фиксированное меню

  let menu = document.querySelector("menu")



    window.addEventListener('scroll',function(){
  
      if( window.pageYOffset >= 200 && window.screen.width >= 1200){
        
        menu.classList.add('stiky')
    
      }
      else{
        menu.classList.remove('stiky')
        
      }
    })
    
 





// $(function(){
//  $(window).scroll(function(){
//     var top = $(this).scrollTop();
//     var elem = $('#top_nav');
//     if (top+h_mrg < h_hght) {
//      elem.css('top', (h_hght-top));
//     } else {
//      elem.css('top', h_mrg);
//     }
//   });
// });


// маска тел
window.addEventListener("DOMContentLoaded", function () {
  [].forEach.call(document.querySelectorAll('.tel'), function (input) {
    var keyCode;

    function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      var pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      var matrix = "+7 (___) ___ __ __",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, ""),
        new_value = matrix.replace(/[_\d]/g, function (a) {
          return i < val.length ? val.charAt(i++) || def.charAt(i) : a
        });
      i = new_value.indexOf("_");
      if (i != -1) {
        i < 5 && (i = 3);
        new_value = new_value.slice(0, i)
      }
      var reg = matrix.substr(0, this.value.length).replace(/_+/g,
        function (a) {
          return "\\d{1," + a.length + "}"
        }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
      if (event.type == "blur" && this.value.length < 5) this.value = ""
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false)

  });

});

// запрет перемещения модального окна
if(document.querySelector('[href="#modal-call"]')){
  const filterGallary2 = Fancybox.bind('[href="#modal-call"]', {
    // closeButton: "top",
    dragToClose: false,
    // Thumbs: false,
    // Carousel: {
    //     Dots: false,
    // },
  });
  
}
if(document.querySelector('[href="#modal-call-second"]')){
  const filterGallary2 = Fancybox.bind('[href="#modal-call-second"]', {
    // closeButton: "top",
    dragToClose: false,
    // Thumbs: false,
    // Carousel: {
    //     Dots: false,
    // },
  });
  
}



// кнопка наверх

    //  Get the button
    let mybutton = document.getElementById("btn-back-to-top");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () {
      scrollFunction();
    };
    
    function scrollFunction() {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        mybutton.style.display = "flex";
      } else {
        mybutton.style.display = "none";
      }
    }
    // When the user clicks on the button, scroll to the top of the document
    mybutton.addEventListener("click", backToTop);
    
    function backToTop() {
     window.scrollTo({ top: 0, behavior: 'smooth' });

    }
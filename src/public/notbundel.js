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


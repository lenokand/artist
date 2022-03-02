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
    // autoplay: {
    //     delay: 9000,
    // },
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
  }
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

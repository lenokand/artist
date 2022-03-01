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

var heart_left = document.getElementById('heart-left');
var parallaxInstance = new Parallax(heart_left);
var heart_right = document.getElementById('heart-right');
var parallaxInstance = new Parallax(heart_right);


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

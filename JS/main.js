var swiper = new Swiper('.swiper-container', {
  nav: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

$(document).ready(function() {
	$('.nav-toggle').on('click', function(e) {
  
    e.preventDefault();

  	$('.nav').toggleClass('is-active')	
  	$('.layout').toggleClass('is-active')	
  	$('.nav-menu').toggleClass('is-active')	
   
  })
})


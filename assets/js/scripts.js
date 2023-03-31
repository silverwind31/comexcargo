$(window).on('load',function(){
    $('.site-preloader').delay(1000).fadeOut(); 
    $('.site-preloader .fade-in').delay(500).fadeOut('slow'); 
});
$(document).ready(function(){
  var delivery_swiper = new Swiper(".delivery .delivery_swiper", {
    slidesPerView: 4,
    spaceBetween: 20,
    breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
  });
  var team_swiper = new Swiper(".team .team_row", {
    slidesPerView: 3,
    spaceBetween: 50,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 50,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 75,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  });
    // FAQ ACCORDION
    $('.faq .accordion_item').on('click',function(e){
        e.preventDefault();
        $(this).find('.accordion_content_wrapper').slideToggle(300);
        $(this).toggleClass('active');
        $('.faq .accordion_item').not($(this)).removeClass('active')
        $('.faq .accordion_item').not($(this)).find('.accordion_content_wrapper').slideUp(300)
      }); 
        // FORM INPUT RANGE
	    $('.input_item.range [type="range"]').on('change input', function() {
		rangeCount = $('.input_item.range [type="range"]').val();
		$('.range_output').text(rangeCount);
	    });
        const slider = document.querySelector("form .progress")
        const min = slider.min
        const max = slider.max
        const value = slider.value
        slider.style.background = `linear-gradient(to right, #FF8A00 0%, #FF8A00 ${(value-min)/(max-min)*100}%, #fff ${(value-min)/(max-min)*100}%, #fff 100%)`
        slider.oninput = function() {
        this.style.background = `linear-gradient(to right, #FF8A00 0%, #FF8A00 ${(this.value-this.min)/(this.max-this.min)*100}%, #fff ${(this.value-this.min)/(this.max-this.min)*100}%, #fff 100%)`
        };
        // SELECT
        $('select').niceSelect();
        // TESTIMONIALS SWIPER
        var swiper = new Swiper(".testimonials .testimonial", {
            slidesPerView: 3,
            spaceBetween: 20,
            pagination: {
              el: ".swiper-pagination",
              clickable: true
            },
            breakpoints: {
              0: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            },
          });
})
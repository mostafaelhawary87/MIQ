$(window).on("load", function () {
  $(".pre-loader").fadeOut("500", function () {
    $(this).remove();
    $("body").removeClass("overflow");
  });
});
$(document).ready(function () {
  //////////** search **//////////
  $(".search-btn").click(function () {
    $(".search-form").fadeIn(400);
    $("body").addClass("overflow");
    $(".search-cont").addClass("search-in");
    $(".search-input").focus();
  });
  $(".search-form").click(function () {
    $("body").removeClass("overflow");
    $(".search-form").fadeOut(500);
    $(".search-cont").removeClass("search-in");
    $(".search-input").focusout();
  });
  $(".search-cont").click(function (e) {
    e.stopPropagation();
  });

  //////////** main slider **//////////
  var mainswiper = new Swiper(".main-slider .swiper-container", {
    spaceBetween: 15,
    loop: true,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: ".main-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".main-slider .swiper-btn-next",
      prevEl: ".main-slider .swiper-btn-prev",
    },
  });
  //////////** counter slider **//////////
  var counterswiper = new Swiper(".counter-slider .swiper-container", {
    spaceBetween: 15,
    loop: true,
    // autoplay: {
    //   delay: 5100,
    // },
    on: {
      init: function (swiper) {
        setInterval(function () {
          makeTimer();
        }, 1000);
      },
    },
  });
  //////////** services slider **//////////
  var servicesswiper = new Swiper(".services-slider .swiper-container", {
    spaceBetween: 30,
    pagination: {
      el: ".services-slider .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1199: {
        slidesPerView: 4,
      },
    },
  });
  //////////** lattest slider **//////////
  var lattestswiper = new Swiper(".lattest-slider .swiper-container", {
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 5000,
    },
    navigation: {
      nextEl: ".lattest-slider .swiper-btn-next",
      prevEl: ".lattest-slider .swiper-btn-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
    },
  });
  //////////** gallery slider **//////////
  if ($(window).width() <= 767) {
    $(".gallery-item")
      .unwrap()
      .unwrap()
      .wrap('<div class="swiper-slide"></div>');
  }
  var galleryswiper = new Swiper(".gallery-slider .swiper-container", {
    spaceBetween: 15,
    autoplay: {
      delay: 5200,
    },
    loop: true,
    centeredSlides: true,
    navigation: {
      nextEl: ".gallery-slider .swiper-btn-next",
      prevEl: ".gallery-slider .swiper-btn-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 1,
      },
      1199: {
        slidesPerView: 1.4,
      },
    },
  });
  //////////** news slider **//////////
  var newsswiper = new Swiper(".news-slider .swiper-container", {
    spaceBetween: 0,
    loop: true,
    autoplay: {
      delay: 5300,
    },
    navigation: {
      nextEl: ".news-slider .swiper-btn-next",
      prevEl: ".news-slider .swiper-btn-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
    },
  });
  //////////** testimonials slider **//////////
  var testimonialsswiper = new Swiper(
    ".testimonials-slider .swiper-container",
    {
      spaceBetween: 0,
      loop: true,
      autoplay: {
        delay: 5000,
      },
      pagination: {
        el: ".testimonials-slider .swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        992: {
          slidesPerView: 2,
        },
      },
    }
  );
  //////////** partners slider **//////////
  var partnersswiper = new Swiper(".partners-slider .swiper-container", {
    spaceBetween: 0,
    loop: true,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: ".partners-slider .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 4,
      },
      1199: {
        slidesPerView: 5,
      },
    },
  });
  //////////** Events slider **//////////
  var evswiper = new Swiper(".events-one-section .swiper-container", {
    spaceBetween: 0,
    loop: true,
    autoplay: {
      delay: 5300,
    },
    navigation: {
      nextEl: ".events-one-section .swiper-btn-next",
      prevEl: ".events-one-section .swiper-btn-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
     
    },
  });
  var evsswiper = new Swiper(".events-two-section .swiper-container", {
    spaceBetween: 0,
    loop: true,
    autoplay: {
      delay: 5300,
    },
    navigation: {
      nextEl: ".events-two-section .swiper-btn-next",
      prevEl: ".events-two-section .swiper-btn-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
     
    },
  });
  var evthrswiper = new Swiper(".events-thr-section .swiper-container", {
    spaceBetween: 0,
    loop: true,
    autoplay: {
      delay: 5300,
    },
    navigation: {
      nextEl: ".events-thr-section .swiper-btn-next",
      prevEl: ".events-thr-section .swiper-btn-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
     
    },
  });
  //////////** End Events slider **//////////

    //////////** Courses slider **//////////
    var coursesoswiper = new Swiper(".courses-one-section .swiper-container", {
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 5300,
      },
      navigation: {
        nextEl: ".courses-one-section .swiper-btn-next",
        prevEl: ".courses-one-section .swiper-btn-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
       
      },
    });
    var coursestswiper = new Swiper(".courses-two-section .swiper-container", {
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 5300,
      },
      navigation: {
        nextEl: ".courses-two-section .swiper-btn-next",
        prevEl: ".courses-two-section .swiper-btn-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
       
      },
    });
    var coursesthswiper = new Swiper(".courses-thr-section .swiper-container", {
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 5300,
      },
      navigation: {
        nextEl: ".courses-thr-section .swiper-btn-next",
        prevEl: ".courses-thr-section .swiper-btn-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
       
      },
    });


    //////////** Courses slider **//////////
     
      //////////** Our Event **//////////
  function transp() {
    var xx = $('.event-photo .owl-item.active');
    xx.first().find('.part-item').addClass('transp');
    xx.last().find('.part-item').addClass('transp');
}

function untransp() {
    $('.event-photo .owl-item').each(function () {
        $(this).find('.part-item').removeClass('transp');
    });
}

function transplg() {
    var xx = $('.event-photo .owl-item.active');
    xx.first().find('.part-item').addClass('transp');
    xx.last().find('.part-item').addClass('transp');
}

   $(".event-photo .owl-carousel").owlCarousel({
    autoplay: true,
    loop: true,
    nav: false,
    dots: false,
    margin: 22,
   
    center: true,
    rtl: true,
    responsive: {
        0: {
            items: 1,
            dots: true
        },
        480: {
            items: 3,
            dots: true
        },
        768: {
            items: 4,
            center: true,
            onInitialized: transp,
            onTranslate: untransp,
            onTranslated: transp,
            onDragged: untransp
        },
        991: {
            items: 4,
            center: true,
            onInitialized: transp,
            onTranslate: untransp,
            onTranslated: transp,
            onDragged: untransp
        },
        1199: {
            items: 5,
            onInitialized: transp,
            onTranslate: untransp,
            onTranslated: transp,
            onDragged: untransp
        },
        1400: {
            items: 8,
            onInitialized: transplg,
            onTranslate: untransp,
            onTranslated: transplg,
            onDragged: untransp
        }
    }
});

//////////** Our Event **//////////
  ///////// **our-work** /////////
  $(document).ready(function(){
	 
    //Show carousel-control
    
    $("#myCarousel").mouseover(function(){
      $("#myCarousel .carousel-control").show();
    });
  
    $("#myCarousel").mouseleave(function(){
      $("#myCarousel .carousel-control").hide();
    });
    
    //Active thumbnail
    
    $("#thumbCarousel .thumb").on("click", function(){
      $(this).addClass("active");
      $(this).siblings().removeClass("active");
    
    });
    
    //When the carousel slides, auto update
    
    $('#myCarousel').on('slid.bs.carousel', function(){
       var index = $('.carousel-inner .item.active').index();
       //console.log(index);
       var thumbnailActive = $('#thumbCarousel .thumb[data-slide-to="'+index+'"]');
       thumbnailActive.addClass('active');
       $(thumbnailActive).siblings().removeClass("active");
       //console.log($(thumbnailActive).siblings()); 
    });
   });
     ///////// **our-work** /////////

  var a = 0;
  $(window).scroll(function () {
    if ($("div").hasClass("numbers-flex")) {
      if (
        a === 0 &&
        $(this).scrollTop() >= $(".numbers-flex").offset().top - 500
      ) {
        $(".number span").each(function () {
          $(this)
            .prop("Counter", 0)
            .animate(
              {
                Counter: $(this).text(),
              },
              {
                duration: 1000,
                easing: "swing",
                step: function (now) {
                  $(this).text(Math.ceil(now));
                },
              }
            );
        });
        a = 1;
      }
    }
  });

  ///////// **footer** /////////
  if ($(window).width() <= 767) {
    $(".has-sub>a").click(function () {
      $(".has-sub>a").not(this).removeClass("active");
      $(this).toggleClass("active");
      if ($(this).siblings().css("display") == "none") {
        $(this).siblings().slideDown(500);
      } else {
        $(this).siblings().slideUp(500);
      }
      $(".has-sub>a").not(this).siblings().slideUp(500);
    });
  }
  $(".menu-btn").click(function () {
    $("body").addClass("overflow");
    $(".overlay").fadeIn();
    $(".nav-list").addClass("active");
  });
  $(".overlay").click(function () {
    $("body").removeClass("overflow");
    $(".overlay").fadeOut();
    $(".nav-list").removeClass("active");
  });

  if ($(window).width() > 767) {
    $("select.form-control").select2({
      minimumResultsForSearch: Infinity,
    });
    $(".flatpicker").flatpickr();
  }

  $(".advanced-search-btn").click(function () {
    $(".advanced-input").slideToggle("300");
  });
});

function makeTimer() {
  var ele = $(".timer");
  var endTimeVal = $(".timer").attr("data-time");
  var endTime = new Date(endTimeVal);
  endTime = Date.parse(endTime) / 1000;

  var now = new Date();
  now = Date.parse(now) / 1000;

  var timeLeft = endTime - now;

  var days = Math.floor(timeLeft / 86400);
  var hours = Math.floor((timeLeft - days * 86400) / 3600);
  var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
  var seconds = Math.floor(
    timeLeft - days * 86400 - hours * 3600 - minutes * 60
  );

  if (hours < "10") {
    hours = "0" + hours;
  }
  if (minutes < "10") {
    minutes = "0" + minutes;
  }
  if (seconds < "10") {
    seconds = "0" + seconds;
  }
  seconds = seconds.toString().split("");
  minutes = minutes.toString().split("");
  hours = hours.toString().split("");

  $(ele)
    .find(".hours")
    .html(
      '<div class="number"><span>' +
        hours[1] +
        '</span></div><div class="number"><span>' +
        hours[0] +
        "</span></div>"
    );
  $(ele)
    .find(".minutes")
    .html(
      '<div class="number"><span>' +
        minutes[1] +
        '</span></div><div class="number"><span>' +
        minutes[0] +
        "</span></div>"
    );
  $(ele)
    .find(".seconds")
    .html(
      '<div class="number"><span>' +
        seconds[1] +
        '</span></div><div class="number"><span>' +
        seconds[0] +
        "</span></div>"
    );
}

setInterval(function () {
  makeTimer();
}, 1000);

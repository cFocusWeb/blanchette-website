//@prepros-prepend libs/jquery-1.12.0.min.js
//@prepros-prepend libs/bootstrap.min.js
//@prepros-prepend easing.js
//@prepros-prepend libs/appear.min.js
//@prepros-prepend libs/jquery-ui.min.js
//@prepros-prepend libs/slick.min.js
//@prepros-prepend libs/waypoints.min.js
//@prepros-prepend libs/hammer.min.js
//@prepros-prepend libs/jquery.counterup.min.js
//@prepros-prepend jquery.matchHeight.js
//@prepros-prepend wow.min.js
//@prepros-prepend libs/imagesloaded.min.js
//@prepros-prepend libs/masonry.min.js


$(document).ready(function(){

  new WOW().init();
  var toggleFilter = $('#brands .tabbable ul.brands-tabs');
  var toggleShown = true;
  function hideFilter() {
    if (toggleShown) {
      toggleFilter.slideUp("slow");
      toggleShown = false;
    }
  }
  function showFilter() {
    if (!toggleShown) {
      toggleFilter.delay(100).slideDown("slow");
      toggleShown = true;
    }
  }
  hideFilter();
  $(document).on('shown.bs.tab', '#filter-bar .primary-tabs li.banners-tab a', function (e) {
    showFilter();
  })
  $(document).on('hidden.bs.tab', '#filter-bar .primary-tabs li.banners-tab a', function (e) {
    hideFilter();
  })
  $('#filter-bar .primary-tabs li.banners-tab a').click(function(){
    if (toggleShown) {
      toggleFilter.slideUp("slow");
      $('.primary-tabs a[href="#tous"]').tab('show');
    } else {
      $('.primary-tabs a[href="#brands"]').tab('show');
    }
    return false;
  })
  var timelineBottom = false,
      timelineTop = false
  $('.timeline li:odd a.open-timeline').click(function(){
    var parentli = $(this).parents('li');
    if (parentli.hasClass('grouped')) {
      parentli.next('li').toggleClass('enlarged');
    }
    $(this).parent().toggleClass('opened');
    if (!timelineBottom) {
      $(".timeline ol").addClass('opened-btm');
      timelineBottom = true;
    } else if ($('.timeline li:odd div.opened a.open-timeline').length == 0) {
      setTimeout(function(){
        $(".timeline ol").removeClass('opened-btm');
      }, 200);
      timelineBottom = false;
    }
  })

  $('.timeline li:even a.open-timeline').click(function(){
    var parentli = $(this).parents('li');
    if (parentli.hasClass('grouped')) {
      parentli.next('li').toggleClass('enlarged');
    }
    $(this).parent().toggleClass('opened');
    if (!timelineTop) {
      $(".timeline ol").addClass('opened-top');
      timelineTop = true;
    } else if ($('.timeline li:even div.opened a.open-timeline').length == 0) {
      setTimeout(function(){
        $(".timeline ol").removeClass('opened-top');
      }, 300);
      timelineTop = false;
    }
  })

  // Remove placeholder
  $('input,textarea').focus(function(){
     $(this).data('placeholder',$(this).attr('placeholder'))
     $(this).attr('placeholder','');
  });
  $('input,textarea').blur(function(){
     $(this).attr('placeholder',$(this).data('placeholder'));
  });

  // Out of QC
  $('#out-of-qc-notice').hide();
  if (location.pathname.indexOf('/franchises/') == 0 || location.pathname.indexOf('/en/franchises/') == 0) {
    $.ajax({
        url: 'https://freegeoip.net/json/',
        type: "GET",
        dataType: 'json',
        success: function (data) {
            if  (data.region_code !== "QC" && data.region_name !== "Quebec") {
               $('#out-of-qc-notice').show().css("opacity", "1");
               $('.out-of-qc').hide();
            }
        }
    });
  }

});

// appear({
//   elements: function elements(){
//     // work with all elements with the class "track"
//     return document.getElementsByClassName('timeopen');
//   },
//   appear: function appear(el){
//     setTimeout(function(){
//       el.querySelector('div').classList.toggle("opened");
//     }, 600)
//   },
//   // disappear: function disappear(el){
//   //   console.log('no longer visible', el);
//   // },
//   bounds: 50,
//   reappear: false
// });


 $(function() {
  $('a[href*="#mas-header"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

 jQuery('img.svg').each(function(){
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('srcset');

    jQuery.get(imgURL, function(data) {
        // Get the SVG tag, ignore the rest
        var $svg = jQuery(data).find('svg');

        // Add replaced image's ID to the new SVG
        if(typeof imgID !== 'undefined') {
            $svg = $svg.attr('id', imgID);
        }
        // Add replaced image's classes to the new SVG
        if(typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass+' replaced-svg');
        }

        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr('xmlns:a');

        // Replace image with new SVG
        $img.replaceWith($svg);

    }, 'xml');

});

$(document).on('click', '.yamm .dropdown-menu', function(e) {
  e.stopPropagation()
});

$("#logos-slider").slick({
  // normal options...
  infinite: true,
  dots: true,
  arrows:false,
  slidesToShow: 8,
  slidesToScroll: 1,

  responsive: [
    {
      breakpoint: 1099,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 3500,
        pauseOnFocus: false,
        pauseOnHover:false,
        pauseOnDotsHover: false,   
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 3500,
        pauseOnFocus: false,
        pauseOnHover:false,
        pauseOnDotsHover: false,   
      }
    },    
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        pauseOnFocus: false,
        pauseOnHover:false,
        pauseOnDotsHover: false,     
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]


});
$(".mosaic-slider").slick({
  // normal options...
  infinite: true,
  dots: false,
  arrows:false,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 750,
  speed: 0
  // fade: true,
  // cssEase: 'linear'  

});

function slickPause() {
  $(".mosaic-slider").slick('slickPause');
}
slickPause();
$('.mosaic-slider').mouseover(function() {
  $(this).slick('slickPlay')
});
$('.mosaic-slider').mouseout(function() {
  $(this).slick('slickPause');
});

// Sticky header
$(window).scroll(function() {
  if ($(this).scrollTop() > 40){  
      $('#sticky-bar').addClass("sticky");
    }
    else{
      $('#sticky-bar').removeClass("sticky");
    }
});

$(function() {
  $('[data-toggle="tooltip"]').tooltip();
  $('#franchise-logos .franchise-box').matchHeight();
  $('#team-listing .team-block .col-sm-6').matchHeight();
  $('#partner-listing .match').matchHeight();
  $('.contact-info .match').matchHeight();
  $('#partner-listing .match-big').matchHeight();
  $('.wrapup .counter').counterUp({
    delay: 5,
    time: 1000
  });
  $('.grid').masonry({
    itemSelector: '.grid-item', // use a separate class for itemSelector, other than .col-
    columnWidth: '.grid-sizer',
    percentPosition: true
  });
  $('a[data-toggle=tab], #brands .tabbable .nav-tabs li a').each(function () {
    var $this = $(this);

    $this.on('shown.bs.tab', function () {
      $('.grid').masonry({
        itemSelector: '.grid-item', // use a separate class for itemSelector, other than .col-
        columnWidth: '.grid-sizer',
        percentPosition: true
      });  
    });
  });
});

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};
// Preselect stuff depending on locaton and GET request
$(function() {
  if (location.pathname.indexOf('/devenir-franchise') == 0 || location.pathname.indexOf('/en/become-a-franchisee') == 0) {
    var franchise = getUrlParameter('franchise');
    if (franchise) {
      $('#'+franchise).toggleClass('choose-brand').toggleClass('brand-2');
      $('html, body').animate({
        scrollTop: $('#'+franchise).offset().top - 120
      }, 1000);
      return false;
    }
  } else if (location.pathname.indexOf('/projets-developpement') == 0 || location.pathname.indexOf('/en/projects-development') == 0) {
    var article = getUrlParameter('article');
    if (article) {
      $('.primary-tabs a[href="#brands"]').tab('show');
      $('.tabbable .brands-tabs a[href="#' + article + '"]').tab('show');
      $('html, body').animate({
        scrollTop: $('ul.nav.primary-tabs').offset().top - 120
      }, 1000);
      return false;
    }
  }
});

// Menu
$('.menu-btn a').click(function(){
    $('.main-menu-sidebar').addClass("menu-active");
    $('body').toggleClass('body-scroll');
    $(this).toggleClass('open');
});

// Menu
  $('.close-menu-btn').click(function(){
    $('.main-menu-sidebar').removeClass("menu-active");
    $('body').toggleClass('body-scroll');
});

$("ul.nav-tabs a").click(function (e) {
  e.preventDefault();
  $(this).tab('show');
});

$("li.closing a").click(function(e) {
  $('.primary-tabs a[href="#tous"]').tab('show');
})

//logo box 
var brand = true;
$('.process-content #brand-logos .logo-box').click(function(){
    if (brand) {
      brand = false
      var brand1 = $('.brand-1');
      var brand2 = $('.brand-2');
      $(this).toggleClass('choose-brand');
      if (brand2) {
        brand1.toggleClass('brand-1').toggleClass('choose-brand');
        brand2.toggleClass('brand-2').toggleClass('brand-1');
        $(this).toggleClass('brand-2')
      } else if (brand1) {
        $(this).toggleClass('brand-2');
      } else {
        $(this).toggleClass('brand-1');
      }
      brand = true;
    } else {}
});

// Form control
$('.registration-form input[type="text"],.registration-form input[type="tel"], .registration-form input[type="email"]').on('focus', function () {
    $(this).removeClass('input-error');
});

// Pass chosen brands to form
var chosenBrand;
$('.registration-form').on('submit', function (e) {
    chosenBrand = [];
    $('.choose-brand').each(function(e){
      chosenBrand.push($(this).attr('id'));
    })
    $('input#chosenbrands').val(chosenBrand);
    $(this).find('input[type="text"]:not(.not-required),input[type="email"]:not(.not-required),input[type="tel"]:not(.not-required)').each(function () {
        if ($(this).val() == "") {
            e.preventDefault();
            $(this).addClass('input-error');
        } else {
            $(this).removeClass('input-error');
        }
    });
    $('html, body').animate({
      scrollTop: $('#form-start').offset().top
    }, 1000);

});

// Video Controls
var videoReady = false;
$(function() {
  window._wq = window._wq || [];
  _wq.push({ id: "2n3h0ox8fh", onReady: function(video) {
    videoReady = true;
  }});
});

var videos = [
  ['shaker', 62],
  ['chocolato', 111],
  ['grenouille', 176],
  ['tartar', 217],
  ['frits', 256],
  ['hola', 302],
  ['planete', 346],
  ['vapo', 389]
];

function videoClick( i ){
  if (videoReady) {
    Wistia.api("2n3h0ox8fh").time(videos[i][1]);
  }
}

$('.logo-box .vid-click#shaker').click(function(){
  videoClick(0);
})
$('.logo-box .vid-click#chocolato').click(function(){
  videoClick(1);
})
$('.logo-box .vid-click#grenouille').click(function(){
  videoClick(2);
})
$('.logo-box .vid-click#tartar').click(function(){
  videoClick(3);
})
$('.logo-box .vid-click#frits').click(function(){
  videoClick(4);
})
$('.logo-box .vid-click#hola').click(function(){
  videoClick(5);
})
$('.logo-box .vid-click#planete').click(function(){
  videoClick(6);
})
$('.logo-box .vid-click#vapo').click(function(){
  videoClick(7);
})

$(function() {
    $('#province').change(function(){
        $("#select_alberta").hide();
        $("#select_colombie_britannique").hide();
        $("#select_manitoba").hide();
        $("#select_ontario").hide();
        $("#select_quebec").hide();
        $("#select_saskatchewan").hide();

        if(this.value=="alberta"){
            $("#select_alberta").fadeIn("fast");
        }                                                                                               
        if(this.value=="colombie-britannique"){                                                 
            $("#select_colombie_britannique").fadeIn("fast");
        }                                                                                                                               
        if(this.value=="manitoba"){                                                 
            $("#select_manitoba").fadeIn("fast");       
        }                       
        if(this.value=="ontario"){                                              
            $("#select_ontario").fadeIn("fast");    
        }               
        if(this.value=="quebec"){                                           
            $("#select_quebec").fadeIn("fast");     
        }                   
        if(this.value=="saskatchewan"){                                         
            $("#select_saskatchewan").fadeIn("fast");
        }   
    });
});
(function () {

  // VARIABLES
  var timeline = document.querySelector(".timeline ol"),
      elH = document.querySelectorAll(".timeline li > div"),
      arrows = document.querySelectorAll(".timeline .arrows .arrow"),
      arrowPrev = document.querySelector(".timeline .arrows .arrow__prev"),
      arrowNext = document.querySelector(".timeline .arrows .arrow__next"),
      firstItem = document.querySelector(".timeline li:first-child"),
      lastItem = document.querySelector(".timeline li:last-child"),
      xScrolling = 280,
      disabledClass = "disabled";

  // START
  window.addEventListener("load", init);

  function init() {
    // setEqualHeights(elH);
    animateTl(xScrolling, arrows, timeline);
    setSwipeFn(timeline, arrowPrev, arrowNext);
    setKeyboardFn(arrowPrev, arrowNext);
  }

  // SET EQUAL HEIGHTS
  function setEqualHeights(el) {
    var counter = 0;
    for (var i = 0; i < el.length; i++) {
      var singleHeight = el[i].offsetHeight;

      if (counter < singleHeight) {
        counter = singleHeight;
      }
    }


    for (var _i = 0; _i < el.length; _i++) {
      el[_i].style.height = counter + "px";
    }


  }

  // CHECK IF AN ELEMENT IS IN VIEWPORT
  // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
  }

  // SET STATE OF PREV/NEXT ARROWS
  function setBtnState(el) {
    var flag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    if (flag) {
      el.classList.add(disabledClass);
    } else {
      if (el.classList.contains(disabledClass)) {
        el.classList.remove(disabledClass);
      }
      el.disabled = false;
    }
  }

  // ANIMATE TIMELINE
  function animateTl(scrolling, el, tl) {
    var counter = 4;
    for (var i = 0; i < el.length; i++) {
      el[i].addEventListener("click", function () {
        if (!arrowPrev.disabled) {
          arrowPrev.disabled = true;
        }
        if (!arrowNext.disabled) {
          arrowNext.disabled = true;
        }
        var sign = this.classList.contains("arrow__prev") ? "" : "-";
        if (counter === 0) {
          tl.style.transform = "translateX(-" + scrolling + "px)";
        } else {
          var tlStyle = getComputedStyle(tl);
          // add more browser prefixes if needed here
          var tlTransform = tlStyle.getPropertyValue("-webkit-transform") || tlStyle.getPropertyValue("transform");
          var values = parseInt(tlTransform.split(",")[4]) + parseInt("" + sign + scrolling);
          tl.style.transform = "translateX(" + values + "px)";
        }

        setTimeout(function () {
          isElementInViewport(firstItem) ? setBtnState(arrowPrev) : setBtnState(arrowPrev, false);
          isElementInViewport(lastItem) ? setBtnState(arrowNext) : setBtnState(arrowNext, false);
        }, 1100);

        counter++;
      });
    }

  }

  // ADD SWIPE SUPPORT FOR TOUCH DEVICES
  function setSwipeFn(tl, prev, next) {
    var hammer = new Hammer(tl);
    hammer.on("swipeleft", function () {
      return next.click();
    });
    hammer.on("swiperight", function () {
      return prev.click();
    });
  }

  // ADD BASIC KEYBOARD FUNCTIONALITY
  function setKeyboardFn(prev, next) {
    document.addEventListener("keydown", function (e) {
      if (e.which === 37 || e.which === 39) {
        var timelineOfTop = timeline.offsetTop;
        var y = window.pageYOffset;
        if (timelineOfTop !== y) {
          window.scrollTo(0, timelineOfTop);
        }
        if (e.which === 37) {
          prev.click();
        } else if (e.which === 39) {
          next.click();
        }
      }
    });
  }
  timeline.style.transform = "translateX(-900px)";
  setBtnState(arrowPrev, false);
  setBtnState(arrowNext);
})();

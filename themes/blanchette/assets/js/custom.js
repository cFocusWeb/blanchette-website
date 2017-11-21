//@prepros-prepend libs/bootstrap.min.js
//@prepros-prepend easing.js
//@prepros-prepend libs/jquery-ui.min.js
//@prepros-prepend libs/slick.min.js
//@prepros-prepend jquery.matchHeight.js
//@prepros-prepend wow.min.js


$(document).ready(function(){

new WOW().init();


  // Remove placeholder
  $('input,textarea').focus(function(){
     $(this).data('placeholder',$(this).attr('placeholder'))
     $(this).attr('placeholder','');
  });
  $('input,textarea').blur(function(){
     $(this).attr('placeholder',$(this).data('placeholder'));
  });

});




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
  $('#franchise-logos .franchise-box').matchHeight();
  $('.article-listing .col-md-4').matchHeight();
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

//logo box 
$('.process-content #brand-logos .logo-box').click(function(){
    $(this).toggleClass('choose-brand');
});

// Google maps 

function initMap() {

  // Create a new StyledMapType object, passing it an array of styles,
  // and the name to be displayed on the map type control.
  var styledMapType = new google.maps.StyledMapType(
      [
        {
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#f5f5f5"
            }
          ]
        },
        {
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#616161"
            }
          ]
        },
        {
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#f5f5f5"
            }
          ]
        },
        {
          "featureType": "administrative.land_parcel",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "administrative.land_parcel",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#bdbdbd"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#eeeeee"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#e5e5e5"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#ffffff"
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#dadada"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#616161"
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
        },
        {
          "featureType": "transit.line",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#e5e5e5"
            }
          ]
        },
        {
          "featureType": "transit.station",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#eeeeee"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#c9c9c9"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "labels.text",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
        }
      ],
      {name: 'Styled Map'});

  // Create a map object, and include the MapTypeId to add
  // to the map type control.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 46.817137, lng: -71.234851},
    zoom: 6,
    mapTypeControlOptions: {
      mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
              'styled_map']
    }
  });

  //Associate the styled map with the MapTypeId and set it to display.
  map.mapTypes.set('styled_map', styledMapType);
  map.setMapTypeId('styled_map');
  var mshaker = [
      [-71.2822777777778,46.7869722222222],
      [-71.1726944444444,46.7918888888889],
      [-71.3799444444444,46.7519722222222],
      [-71.2681111111111,46.8634444444444],
      [-68.5256944444444,48.452],
      [-69.5512222222222,47.8229444444444],
      [-75.6969722222222,45.4760555555556],
      [-70.6740555555556,46.1215277777778]
  ];
  for (i = 0; i < mshaker.length; i++) {  
    marker = new google.maps.Marker({
         position: { lat: mshaker[i][1], lng: mshaker[i][0]},
         map: map,
         icon: '/img/logos/marker-shaker.png'
    });
  }
  var mchocolato = [
      [-71.2877222222222,46.7915833333333],
      [-71.1665277777778,46.7923888888889],
      [-71.3001111111111,46.8297777777778],
      [-75.6969722222222,45.4760555555556],
      [-71.2846666666667,46.7702222222222],
      [-71.2123611111111,46.8131388888889],
      [-71.3266666666667,46.8414444444444],
      [-73.44225,46.0364444444444],
      [-71.2480277777778,46.8430833333333],
      [-71.2822777777778,46.7869722222222],
      [-73.4715833333333,45.4717777777778],
      [-72.7199166666667,46.5749166666667]
  ];
  for (i = 0; i < mchocolato.length; i++) {  
    marker = new google.maps.Marker({
         position: { lat: mchocolato[i][1], lng: mchocolato[i][0]},
         map: map,
         icon: '/img/logos/marker-chocolato.png'
    });
  }
  var mfritz = [
      [-71.2822777777778,46.7869722222222],
      [-71.1967777777778,46.8753333333333]
  ];
  for (i = 0; i < mfritz.length; i++) {  
    marker = new google.maps.Marker({
         position: { lat: mfritz[i][1], lng: mfritz[i][0]},
         map: map,
         icon: '/img/logos/marker-fritz.png'
    });
  }
  var mtartar = [
      [-71.2822777777778,46.7869722222222]
  ];
  for (i = 0; i < mtartar.length; i++) {  
    marker = new google.maps.Marker({
         position: { lat: mtartar[i][1], lng: mtartar[i][0]},
         map: map,
         icon: '/img/logos/marker-tartar.png'
    });
  }
  var mhola = [
      [-71.2822777777778,46.7869722222222]
  ];
  for (i = 0; i < mhola.length; i++) {  
    marker = new google.maps.Marker({
         position: { lat: mhola[i][1], lng: mhola[i][0]},
         map: map,
         icon: '/img/logos/marker-hola.png'
    });
  }
  var mvapo = [
      [-71.31975,46.7710277777778],
      [-71.2681111111111,46.8634444444444],
      [-71.1819444444445,46.7991111111111]
  ];
  for (i = 0; i < mvapo.length; i++) {  
    marker = new google.maps.Marker({
         position: { lat: mvapo[i][1], lng: mvapo[i][0]},
         map: map,
         icon: '/img/logos/marker-vapo.png'
    });
  }
  var mgrenouille = [
      [-71.2883611111111,46.7904722222222],
      [-73.7118888888889,45.5775],
      [-71.1665277777778,46.7923888888889],
      [-71.8886388888889,45.3990277777778],
      [-73.4397777777778,46.0233888888889],
      [-73.5699722222222,45.5128888888889],
      [-71.0540833333333,48.4274722222222],
      [-68.5326944444444,48.4497777777778],
      [-66.3793611111111,50.2013055555556],
      [-71.2508611111111,46.1235833333333],
      [-72.5418888888889,46.3421388888889],
      [-68.2587777777778,49.1916388888889],
      [-69.5348055555556,47.8306666666667],
      [-71.956,46.0565833333333],
      [-72.6476388888889,45.3344444444444],
      [-70.6741111111111,46.1215]
  ];
  for (i = 0; i < mgrenouille.length; i++) {  
    marker = new google.maps.Marker({
         position: { lat: mgrenouille[i][1], lng: mgrenouille[i][0]},
         map: map,
         icon: '/img/logos/marker-grenouille.png'
    });
  }
  var mplanete = [
      [-71.2728333333333,46.83525],
      [-71.2658055555556,46.7228611111111],
      [-71.3794722222222,46.7517777777778],
      [-68.5069722222222,48.4606944444444],
      [-73.2962777777778,45.3544166666667],
      [-73.2076666666667,45.5648055555556]
  ];
  for (i = 0; i < mplanete.length; i++) {  
    marker = new google.maps.Marker({
         position: { lat: mplanete[i][1], lng: mplanete[i][0]},
         map: map,
         icon: '/img/logos/marker-planete.png'
    });
  }
}

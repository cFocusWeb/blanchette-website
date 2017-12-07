//@prepros-prepend libs/jquery-1.12.0.min.js
//@prepros-prepend libs/bootstrap.min.js
//@prepros-prepend easing.js
//@prepros-prepend libs/jquery-ui.min.js
//@prepros-prepend libs/slick.min.js
//@prepros-prepend jquery.matchHeight.js
//@prepros-prepend wow.min.js
//@prepros-prepend libs/imagesloaded.min.js
//@prepros-prepend libs/masonry.min.js


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
  // $('.article-listing .col-md-4').matchHeight();
  $('#team-listing .team-block .col-sm-6').matchHeight();
  $('#partner-listing .match').matchHeight();
  $('.contact-info .match').matchHeight();
  $('#partner-listing .match-big').matchHeight();
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
  var infowindow = new google.maps.InfoWindow();
  if (location.pathname.indexOf('/en/projects-development') == 0) {
    var iconshaker = {
      url: "/img/logos/marker-shaker-en.png", // url
      scaledSize: new google.maps.Size(50, 67), // scaled size
      origin: new google.maps.Point(0,0), // origin
      anchor: new google.maps.Point(0, 0) // anchor
    };
  } else {
    var iconshaker = {
      url: "/img/logos/marker-shaker.png", // url
      scaledSize: new google.maps.Size(50, 67), // scaled size
      origin: new google.maps.Point(0,0), // origin
      anchor: new google.maps.Point(0, 0) // anchor
    };
  }

  var mshaker = [
      ['SHAKER Ste-Foy','2360 Chemin Ste-Foy',-71.282483,46.786835],
      ['SHAKER Lévis','76 A Route du Président-Kennedy',-71.1726944444444,46.7918888888889],
      ['SHAKER Cap-Rouge',"3695 rue de l'Hêtrière, St-Augustin-des-Desmaures",-71.3799444444444,46.7519722222222],
      ['SHAKER Charlesbourg','8000 boulevard Henri-Bourassa, Québec',-71.2681111111111,46.8634444444444],
      ['SHAKER Rimouski','45 rue St-Germain E, Rimouski',-68.5256944444444,48.452],
      ['SHAKER RDL','95 rue des Cerisiers, Rivière-du-Loup',-69.5512222222222,47.8229444444444],
      ['SHAKER Gatineau','1100 boulevard Maloney Ouest, Gatineau',-75.6969722222222,45.4760555555556],
      ['SHAKER St-Georges','11655 B 1re Avenue, Saint-Georges de Beauce',-70.6740555555556,46.1215277777778]
  ];
  for (i = 0; i < mshaker.length; i++) {  
    marker = new google.maps.Marker({
         position: { lat: mshaker[i][3], lng: mshaker[i][2]},
         map: map,
         animation: google.maps.Animation.DROP,
         icon: iconshaker
    });
    google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {
        infowindow.setContent(mshaker[i][0]+'</br>'+mshaker[i][1]);
        infowindow.open(map, marker);
      }
    })(marker, i));
  }
  var iconchocolato = {
    url: "/img/logos/marker-chocolato.png", // url
    scaledSize: new google.maps.Size(50, 67), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
  };
  var mchocolato = [
      ['Chocolato Ste-Foy','2327 boulevard Versant-Nord, Québec',-71.2877222222222,46.7915833333333],
      ['Chocolato Lévis','95 route du Président-Kennedy, Lévis',-71.1665277777778,46.7923888888889],
      ['Chocolato Galerie de la Capitale','5401 boulevard des Galeries, Québec',-71.3001111111111,46.8297777777778],
      ['Chocolato Promenades Gatineau','1100 boulevard Maloney Ouest, Gatineau',-75.6969722222222,45.4760555555556],
      ['Chocolato Laurier Québec','2700 boulevard Laurier, Québec',-71.2846666666667,46.7702222222222],
      ['Chocolato Rue St-Jean','1015 rue St-Jean, Québec',-71.2123611111111,46.8131388888889],
      ['Chocolato Chauveau','2293 Avenue Chauveau, Québec',-71.3266666666667,46.8414444444444],
      ['Chocolato Joliette','515 rue St-Charles-Borromée Nord, Joliette',-73.44225,46.0364444444444],
      ['Chocolato Charlesbourg','4250 1re Avenue, Québec',-71.2480277777778,46.8430833333333],
      ['Chocolato Pyramide','2360 chemin Ste-Foy, Québec',-71.281991,46.786573],
      ['Chocolato Mail Champlain','2151 Boul. Lapinière, Brossard',-73.4715833333333,45.4717777777778],
      ['Chocolato Shawinigan','1553, boul. Hubert-Biermans, Shawinigan',-72.7199166666667,46.5749166666667]
  ];
  for (i = 0; i < mchocolato.length; i++) {  
    marker = new google.maps.Marker({
         position: { lat: mchocolato[i][3], lng: mchocolato[i][2]},
         map: map,
         animation: google.maps.Animation.DROP,
         icon: iconchocolato
    });
    google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {
        infowindow.setContent(mchocolato[i][0]+'</br>'+mchocolato[i][1]);
        infowindow.open(map, marker);
      }
    })(marker, i));
  }
  var iconfritz = {
    url: "/img/logos/marker-fritz.png", // url
    scaledSize: new google.maps.Size(50, 67), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
  };
  var mfritz = [
      ["Frit's Ste-Foy",'2360 Chemin Ste-Foy, Québec',-71.282210,46.786520],
      ["Frit's Beauport",'228 rue Seigneuriale, Québec',-71.1967777777778,46.8753333333333]
  ];
  for (i = 0; i < mfritz.length; i++) {  
    marker = new google.maps.Marker({
         position: { lat: mfritz[i][3], lng: mfritz[i][2]},
         map: map,
         animation: google.maps.Animation.DROP,
         icon: iconfritz
    });
    google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {
        infowindow.setContent(mfritz[i][0]+'</br>'+mfritz[i][1]);
        infowindow.open(map, marker);
      }
    })(marker, i));
  }
  var icontartar = {
    url: "/img/logos/marker-tartar.png", // url
    scaledSize: new google.maps.Size(50, 67), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
  };
  var mtartar = [
      ['Tartar Station Ste-Foy','2360 Chemin Ste-Foy, Québec',-71.282043,46.786598]
  ];
  for (i = 0; i < mtartar.length; i++) {  
    marker = new google.maps.Marker({
         position: { lat: mtartar[i][3], lng: mtartar[i][2]},
         map: map,
         animation: google.maps.Animation.DROP,
         icon: icontartar
    });
    google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {
        infowindow.setContent(mtartar[i][0]+'</br>'+mtartar[i][1]);
        infowindow.open(map, marker);
      }
    })(marker, i));
  }
  var iconhola = {
    url: "/img/logos/marker-hola.png", // url
    scaledSize: new google.maps.Size(50, 67), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
  };
  var mhola = [
      ['Hola Ste-Foy','2360 Chemin Ste-Foy, Québec',-71.2822,46.786657]
  ];
  for (i = 0; i < mhola.length; i++) {  
    marker = new google.maps.Marker({
         position: { lat: mhola[i][3], lng: mhola[i][2]},
         map: map,
         animation: google.maps.Animation.DROP,
         icon: iconhola
    });
    google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {
        infowindow.setContent(mhola[i][0]+'</br>'+mhola[i][1]);
        infowindow.open(map, marker);
      }
    })(marker, i));
  }
  var iconvapo = {
    url: "/img/logos/marker-vapo.png", // url
    scaledSize: new google.maps.Size(50, 67), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
  };
  var mvapo = [
      ['Vaposhop Ste-Foy','3820 Chemin Ste-Foy, Québec',-71.31975,46.7710277777778],
      ['Vaposhop Charlesbourg','8000 boulevard Henri-Bourrassa, Québec',-71.2681111111111,46.8634444444444],
      ['Vaposhop Lévis','1 route du Président-Kennedy, Lévis',-71.1819444444445,46.7991111111111]
  ];
  for (i = 0; i < mvapo.length; i++) {  
    marker = new google.maps.Marker({
         position: { lat: mvapo[i][3], lng: mvapo[i][2]},
         map: map,
         animation: google.maps.Animation.DROP,
         icon: iconvapo
    });
    google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {
        infowindow.setContent(mvapo[i][0]+'</br>'+mvapo[i][1]);
        infowindow.open(map, marker);
      }
    })(marker, i));
  }
  if (location.pathname.indexOf('/en/projects-development') == 0) {
    var icongrenouille = {
      url: "/img/logos/marker-grenouille-en.png", // url
      scaledSize: new google.maps.Size(50, 67), // scaled size
      origin: new google.maps.Point(0,0), // origin
      anchor: new google.maps.Point(0, 0) // anchor
    };
  } else {
    var icongrenouille = {
      url: "/img/logos/marker-grenouille.png", // url
      scaledSize: new google.maps.Size(50, 67), // scaled size
      origin: new google.maps.Point(0,0), // origin
      anchor: new google.maps.Point(0, 0) // anchor
    };
  }
  var mgrenouille = [
      ["La P'tite Grenouille Ste-Foy",'2376 rue Galvani, Québec',-71.2883611111111,46.7904722222222],
      ["La P'tite Grenouille Laval",'443 boulevard Saint-Martin Ouest, Laval',-73.7118888888889,45.5775],
      ["La P'tite Grenouille Lévis",'95 route du Président-Kennedy, Lévis',-71.1665277777778,46.7923888888889],
      ["La P'tite Grenouille Sherbrooke",'154 rue Wellington Sud, Sherbrooke',-71.8886388888889,45.3990277777778],
      ["La P'tite Grenouille Joliette",'521 rue Notre-Dame, Joliette',-73.4397777777778,46.0233888888889],
      ["La P'tite Grenouille Montréal",'3435 boulevard St-Laurent, Montréal',-73.5699722222222,45.5128888888889],
      ["La P'tite Grenouille Chicoutimi","455 rue de l'Hôtel Dieu, Chicoutimi",-71.0540833333333,48.4274722222222],
      ["La P'tite Grenouille Rimouski",'100 rue St-Germain Ouest, Rimouski',-68.5326944444444,48.4497777777778],
      ["La P'tite Grenouille Sept-Îles",'247 avenue Brochu, Sept-îles',-66.3793611111111,50.2013055555556],
      ["La P'tite Grenouille Thetford Mines",'3625 boulevard Frontenac Est, Robertsonville',-71.2508611111111,46.1235833333333],
      ["La P'tite Grenouille Trois-Rivières",'282 rue des Forges, Trois-Rivières',-72.5418888888889,46.3421388888889],
      ["La P'tite Grenouille Baie Comeau",'888 rue des Puyjalon, Baie Comeau',-68.2587777777778,49.1916388888889],
      ["La P'tite Grenouille Rivière-du-Loup",'403 rue Lafontaine, Rivière-du-Loup',-69.5348055555556,47.8306666666667],
      ["La P'tite Grenouille Victoriaville",'123 rue Notre-Dame Est, Victoriaville',-71.956,46.0565833333333],
      ["La P'tite Grenouille Bromont",'8 boulevard de Bromont, Bromont',-72.6476388888889,45.3344444444444],
      ["La P'tite Grenouille St-Georges",'11620 1re Avenue Saint-Georges de Beauce',-70.6741111111111,46.1215]
  ];
  for (i = 0; i < mgrenouille.length; i++) {  
    marker = new google.maps.Marker({
         position: { lat: mgrenouille[i][3], lng: mgrenouille[i][2]},
         map: map,
         animation: google.maps.Animation.DROP,
         icon: icongrenouille
    });
    google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {
        infowindow.setContent(mgrenouille[i][0]+'</br>'+mgrenouille[i][1]);
        infowindow.open(map, marker);
      }
    })(marker, i));
  }
  var iconplanete = {
    url: "/img/logos/marker-planete.png", // url
    scaledSize: new google.maps.Size(50, 67), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
  };
  var mplanete = [
      ['Planète Nutrition Québec - Entrepôt Bouvier','670 rue Bouvier, Québec',-71.2728333333333,46.83525],
      ['Planète Nutrition Québec - Lévis/Charny','8035 avenue des Églises, Charny',-71.2658055555556,46.7228611111111],
      ['Planète Nutrition Québec - Cap-Rouge/St-Augustin',"3695 rue de l'Hêtriėre, Cap-Rouge",-71.3794722222222,46.7517777777778],
      ['Planète Nutrition Rimouski','217 rue Léonidas Sud, Rimouski',-68.5069722222222,48.4606944444444],
      ['Planète Nutrition Saint-Jean-sur-Richelieu','274 Boul Saint-Luc, Saint-Jean-sur-Richelieu',-73.2962777777778,45.3544166666667],
      ['Planète Nutrition Beloeil','281 rue Duvernay - 102, Beloeil',-73.2076666666667,45.5648055555556]
  ];
  for (i = 0; i < mplanete.length; i++) {  
    marker = new google.maps.Marker({
         position: { lat: mplanete[i][3], lng: mplanete[i][2]},
         map: map,
         animation: google.maps.Animation.DROP,
         icon: iconplanete
    });
    google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {
        infowindow.setContent(mplanete[i][0]+'</br>'+mplanete[i][1]);
        infowindow.open(map, marker);
      }
    })(marker, i));
  }
}
// Google maps 
function initContactMap() {

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
  var map = new google.maps.Map(document.getElementById('contact-map'), {
    center: {lat: 46.786657, lng: -71.2822},
    zoom: 13,
    mapTypeControlOptions: {
      mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
              'styled_map']
    }
  });

  //Associate the styled map with the MapTypeId and set it to display.
  map.mapTypes.set('styled_map', styledMapType);
  map.setMapTypeId('styled_map');

  var iconblanchette = {
    url: "/img/logos/marker-blanchette.png", // url
    scaledSize: new google.maps.Size(50, 67), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
  };
  marker = new google.maps.Marker({
      position: {lat: 46.786657, lng: -71.2822},
      map: map,
      animation: google.maps.Animation.DROP,
      icon: iconblanchette
  });
}
// Form control
$('.registration-form input[type="text"],.registration-form input[type="tel"], .registration-form input[type="email"]').on('focus', function () {
    $(this).removeClass('input-error');
});
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

// video handler
var videoReady = false;
$(function() {
  window._wq = window._wq || [];
  _wq.push({ id: "2n3h0ox8fh", onReady: function(video) {
    videoReady = true;
  }});
});

var videos = [
  ['shaker', 61],
  ['chocolato', 108],
  ['grenouille', 169],
  ['tartar', 222],
  ['frits', 259],
  ['hola', 303],
  ['planete', 348],
  ['vapo', 390]
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


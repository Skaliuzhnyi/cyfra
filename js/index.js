// google analitics

window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag('js', new Date());

// slider

$('.slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  infinite: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
});

// burger menu

function burgerClick() {
  const body = document.querySelector('body');
  const burgerBtn = document.querySelector('.header__burger');
  const menu = document.querySelector('.header');

  burgerBtn.addEventListener('click', () => {
    let burgerBtnActive = burgerBtn.classList.contains('active');

    if (!burgerBtnActive) {
      burgerBtn.classList.add('active');
      menu.classList.add('burger__active');
      body.classList.add('lock');
    } else {
      if (window.scrollY > 0) {
        burgerBtn.classList.remove('active');
        menu.classList.remove('burger__active');
        body.classList.remove('lock');
      } else {
        burgerBtn.classList.remove('active');
        menu.classList.remove('burger__active');
        body.classList.remove('lock');
      }
    }
  });
}

burgerClick();

//фиксація header

$(document).on('scroll', function () {
  if ($(document).scrollTop() > 0) {
    $('.header').addClass('fixed');
  } else {
    $('.header').removeClass('fixed');
  }
});

//карта

function initMap() {
  let maps = document.querySelectorAll('.map');

  maps.forEach((map) => {
    map = new google.maps.Map(document.querySelector('.map'), {
      center: {
        lng: window.mapOptions['center_lng'],
        lat: window.mapOptions['center_lat'],
      },
      zoom: window.mapOptions['zoom'],
      streetViewControl: false,
      disableDefaultUI: true,
      zoomControl: true,
    });

    map.setOptions({
      styles: [
        {
          featureType: 'all',
          elementType: 'labels.text.fill',
          stylers: [
            {
              saturation: 36,
            },
            {
              color: '#000000',
            },
            {
              lightness: 40,
            },
          ],
        },
        {
          featureType: 'all',
          elementType: 'labels.text.stroke',
          stylers: [
            {
              visibility: 'on',
            },
            {
              color: '#000000',
            },
            {
              lightness: 16,
            },
          ],
        },
        {
          featureType: 'all',
          elementType: 'labels.icon',
          stylers: [
            {
              visibility: 'off',
            },
          ],
        },
        {
          featureType: 'administrative',
          elementType: 'geometry.fill',
          stylers: [
            {
              lightness: 20,
            },
          ],
        },
        {
          featureType: 'administrative',
          elementType: 'geometry.stroke',
          stylers: [
            {
              color: '#000000',
            },
            {
              lightness: 17,
            },
            {
              weight: 1.2,
            },
          ],
        },
        {
          featureType: 'administrative.province',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#e3b141',
            },
          ],
        },
        {
          featureType: 'administrative.locality',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#e0a64b',
            },
          ],
        },
        {
          featureType: 'administrative.locality',
          elementType: 'labels.text.stroke',
          stylers: [
            {
              color: '#0e0d0a',
            },
          ],
        },
        {
          featureType: 'administrative.neighborhood',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#d1b995',
            },
          ],
        },
        {
          featureType: 'landscape',
          elementType: 'geometry',
          stylers: [
            {
              color: '#000000',
            },
            {
              lightness: 20,
            },
          ],
        },
        {
          featureType: 'poi',
          elementType: 'geometry',
          stylers: [
            {
              color: '#000000',
            },
            {
              lightness: 21,
            },
          ],
        },
        {
          featureType: 'poi.attraction',
          elementType: 'geometry.fill',
          stylers: [
            {
              visibility: 'on',
            },
            {
              color: '#c07d7d',
            },
          ],
        },
        {
          featureType: 'road',
          elementType: 'labels.text.stroke',
          stylers: [
            {
              color: '#12120f',
            },
          ],
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.fill',
          stylers: [
            {
              lightness: '-77',
            },
            {
              gamma: '4.48',
            },
            {
              saturation: '24',
            },
            {
              weight: '0.65',
            },
          ],
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.stroke',
          stylers: [
            {
              lightness: 29,
            },
            {
              weight: 0.2,
            },
          ],
        },
        {
          featureType: 'road.highway.controlled_access',
          elementType: 'geometry.fill',
          stylers: [
            {
              color: '#f6b044',
            },
          ],
        },
        {
          featureType: 'road.arterial',
          elementType: 'geometry',
          stylers: [
            {
              color: '#4f4e49',
            },
            {
              weight: '0.36',
            },
          ],
        },
        {
          featureType: 'road.arterial',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#c4ac87',
            },
          ],
        },
        {
          featureType: 'road.arterial',
          elementType: 'labels.text.stroke',
          stylers: [
            {
              color: '#262307',
            },
          ],
        },
        {
          featureType: 'road.local',
          elementType: 'geometry',
          stylers: [
            {
              color: '#a4875a',
            },
            {
              lightness: 16,
            },
            {
              weight: '0.16',
            },
          ],
        },
        {
          featureType: 'road.local',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#deb483',
            },
          ],
        },
        {
          featureType: 'transit',
          elementType: 'geometry',
          stylers: [
            {
              color: '#000000',
            },
            {
              lightness: 19,
            },
          ],
        },
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [
            {
              color: '#0f252e',
            },
            {
              lightness: 17,
            },
          ],
        },
        {
          featureType: 'water',
          elementType: 'geometry.fill',
          stylers: [
            {
              color: '#080808',
            },
            {
              gamma: '3.14',
            },
            {
              weight: '1.07',
            },
          ],
        },
      ],
    });

    for (let i = 0; i < markers.length; i++) {
      const marker = new google.maps.Marker({
        position: markers[i].about,
        icon: window.mapOptions.marker_ico,
        map: map,
        optimized: false,
      });

      let infowindow = new google.maps.InfoWindow({
        map: map,
        content: `<div class="map__point"><div class="map__point-inner"><img class="map__point-img" src="${markers[i].about.img}" alt="фото сто"><div class="map__point-address">${markers[i].about.address}</div></div><div class="map__point-time">${markers[i].about.time}</div><a class="map__point-link" href="${markers[i].about.link}" target="_blank">Прокласти маршрут</a></div>`,
      });

      marker.addListener('click', () => {
        infowindow.close();
        infowindow.open({
          anchor: marker,
          map,
          position: marker.position,
        });
      });

      document
        .querySelectorAll('.about-v2__address-link')
        .forEach((element) => {
          element.addEventListener('click', () => {
            if (element.id === markers[i].about.id) {
              map.setCenter(
                { lat: markers[i].about.lat, lng: +markers[i].about.lng },
                16
              );
              infowindow.open({
                anchor: marker,
                map,
                position: markers[i].about,
                id: markers[i].about.id,
              });
            }
          });
        });
    }
  });
}

window.initMap = initMap;

// chat btn

window.addEventListener('DOMContentLoaded', (_) => {
  const text = document.querySelector('.js-text');
  const fab = document.querySelector('.js-fab');
  const button = document.querySelector('.js-toggle');

  button.addEventListener('click', (_) => {
    fab.classList.toggle('is-expanded');
    button.classList.toggle('is-expanded');
  });
});

// анімація заголовків

function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add('showAnim');
    }
  });
}
let options = {
  threshold: [0.5],
};
let observer = new IntersectionObserver(onEntry, options);

let sectionTitle = Array.from(
  document.querySelectorAll('.repair-about__title')
);

for (let item of sectionTitle) {
  item.classList.add('animation-prepare');
}

let elements = document.querySelectorAll('.animation-prepare');

for (let elm of elements) {
  observer.observe(elm);
}

// статус замовлення

(function () {
  var s = document.createElement('script');
  s.type = 'text/javascript';
  s.async = true;
  s.src =
    '//cyfraservicecentre.gincore.net/widget.php?ajax=&w=state&jquery=' +
    ('jQuery' in window ? 1 : 0);
  document.getElementsByTagName('head')[0].appendChild(s);
})();

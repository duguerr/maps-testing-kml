var map;
var src = 'http://lorimapstestinapp.atwebpages.com/tres.kmz';

styles = [
  {
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "transit",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  }
];

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: new google.maps.LatLng(6.243007792147181, -75.58035376905785),
    zoom: 12,
    mapTypeId: 'terrain',
    styles: styles
  });

  const kmlLayer = (src2) => new google.maps.KmlLayer(src2, {
    suppressInfoWindows: true,
    preserveViewport: false,
    map: map
  });


  document.getElementById('boton1').addEventListener('click', (e) => {
    src = 'http://lorimapstestinapp.atwebpages.com/uno.kmz';
    kmlLayer(src)
  })

  document.getElementById('boton2').addEventListener('click', (e) => {
    src = 'http://lorimapstestinapp.atwebpages.com/dos.kmz';
    kmlLayer(src)
  });

  document.getElementById('boton3').addEventListener('click', (e) => {
    src = 'http://lorimapstestinapp.atwebpages.com/tres.kmz';
    kmlLayer(src)
  });

  window.onload = function() {
    // kmlLayer(src)
  };
}
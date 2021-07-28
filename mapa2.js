function initMap() {
    
    var MapOptions = {
    zoom: 12,
    scaleControl: true,
    
    center: {
        
    
        lat: 6.243007792147181,
        lng: -75.58035376905785
    },
    
    
    styles: [
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
    ]   
};
    
    
    var map = new google.maps.Map(document.getElementById("map"), MapOptions);
    
    
    
    /*
    //cuestion los archivos se llaman uno.kmz   dos.kmz     tres.kmz
     var ctaLayer = new google.maps.KmlLayer({
            url: "http://lorimapstestinapp.atwebpages.com/tres.kmz",
            map: map
        });//fin de la variable ctalayer  
   
    */
    
}//fin del la funcion initMap




   







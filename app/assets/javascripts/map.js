function initMap() {
    var customMapType = new google.maps.StyledMapType([{
        "featureType": "administrative",
        "elementType": "all",
        "stylers": [{"color": "#fffbf5"}]
    }, {
        "featureType": "administrative.country",
        "elementType": "all",
        "stylers": [{"color": "#5c4343"}]
    }, {
        "featureType": "administrative.province",
        "elementType": "all",
        "stylers": [{"color": "#cb2a2a"}]
    }, {
        "featureType": "administrative.neighborhood",
        "elementType": "all",
        "stylers": [{"color": "#FFDD9A"}]
    }, {
        "featureType": "administrative.land_parcel",
        "elementType": "all",
        "stylers": [{"color": "#bf2323"}]
    }, {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [{"color": "#f9d99e"}]
    }, {
        "featureType": "landscape",
        "elementType": "labels.text",
        "stylers": [{"color": "#8c5656"}]
    }, {"featureType": "poi", "elementType": "all", "stylers": [{"visibility": "on"}]}, {
        "featureType": "road",
        "elementType": "all",
        "stylers": [{"saturation": -100}, {"lightness": 45}]
    }, {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [{"visibility": "simplified"}, {"color": "#f79d08"}]
    }, {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [{"visibility": "off"}]
    }, {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [{"color": "#ffffff"}]
    }, {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [{"visibility": "off"}]
    }, {
        "featureType": "transit.line",
        "elementType": "all",
        "stylers": [{"color": "#000000"}]
    }, {"featureType": "water", "elementType": "all", "stylers": [{"color": "#f0ca83"}, {"visibility": "on"}]}], {
        name: 'Custom Style'
    });
    var customMapTypeId = 'custom_style';
    var position = {lat: 49.853629, lng: 24.025746};
    map = new google.maps.Map(document.getElementById('map_g'), {
        center: position,
        zoom: 16,
        scrollwheel: false
    });

    var marker = new google.maps.Marker({
        position: position,
        map: map,
        title: 'Ми тут!'
    });

    map.mapTypes.set(customMapTypeId, customMapType);
    map.setMapTypeId(customMapTypeId);
}

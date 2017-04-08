(function(window, google){

var options = {
    center: {
    lat: '',
    lng: ''
    },
    zoom: 10
},
element = document.getElementById('map-canvas'),
map = new google.maps.Map(element, options);

}(window, google))
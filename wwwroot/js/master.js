
function initAutocompleteMaster() {
    var input = document.getElementById('pac-input');
    var autocomplete = new google.maps.places.Autocomplete(input, { types: ['geocode'] });
    autocomplete.addListener('place_changed', function () {
        var place = this.getPlace();
        var pos = place.geometry.location;
        localStorage.setItem('latitude', place.geometry.location.lat());
        localStorage.setItem('longitude', place.geometry.location.lng());

        // Redirect to the next page where the map will be displayed
        window.location.href = '/Master';
    });

    // On the map page, retrieve the stored coordinates
    var latitude = localStorage.getItem('latitude');
    var longitude = localStorage.getItem('longitude');
    console.log("latitude: " + latitude + " longitude: " + longitude);
    var pyrmont = new google.maps.LatLng(latitude, longitude);
    var docMap = document.getElementById('map');
    if (docMap == null) {
        return;
    }
    map = new google.maps.Map(docMap, {
        center: pyrmont,
        zoom: 13
    });
    infoWindow = new google.maps.InfoWindow();
    infoWindow1 = new google.maps.InfoWindow();

    var request = {
        location: pyrmont,
        radius: '500',
        query: 'Things and Food places to explore'
    };
    service = new google.maps.places.PlacesService(map);
    service.textSearch(request, callback);
};

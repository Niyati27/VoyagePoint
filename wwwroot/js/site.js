// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

var markers = [];

function loadGoogleMapsAPI() {
    var script = document.createElement('script');
    script.src = "https://maps.googleapis.com/maps/api/js?key=GOOGLE_API&libraries=places&callback=initialize";
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
}
function initialize(lat, long) {
    if (window.location.pathname === "/Master") {
        initAutocompleteMaster();
    }
    else if (window.location.pathname === "/Food") {
        initAutocompleteFood();
    }
    else if (window.location.pathname === "/Places") {
        initAutocompletePlaces();
    }
    else if (window.location.pathname === "/Hotels") {
        initAutocompleteHotels();
    }
    else {
        initAutocomplete();
    }
}

function initAutocomplete() {
    localStorage.setItem('latitude', '');
    localStorage.setItem('longitude', '');
    var input = document.getElementById('pac-input');
    var autocomplete = new google.maps.places.Autocomplete(input, { types: ['geocode'] });
    autocomplete.addListener('place_changed', function () {
        var place = this.getPlace();
        var pos = place.geometry.location;
        localStorage.setItem('latitude', place.geometry.location.lat());
        localStorage.setItem('longitude', place.geometry.location.lng());
        console.log(place.geometry.location.lat());
        // Redirect to the next page where the map will be displayed
        window.location.href = '/Master';
    });
}

function callback(results, status) {
    console.log(status);
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
            var place = results[i];
            createMarkersFactory(results[i], i);
        }
        populateSomeThings(results[0], 0);
    }
}
function populateSomeThings(markerNodes, num) {
    var id = markerNodes.id;
    var name = markerNodes.name;
    var photo = markerNodes.photos;
    var address = markerNodes.formatted_address;
    var latlng = new google.maps.LatLng(
        parseFloat(markerNodes.geometry.location.lat()),
        parseFloat(markerNodes.geometry.location.lng())
    );
    var html = "<b>" + name;
    var marker = new google.maps.Marker({
        map: map,
        position: latlng
    });
    infoWindow1.setContent(html);
    infoWindow1.open(map, marker);
    if (!(typeof photo === 'undefined' || photo === null)) {
        document.getElementById('placeImage').src = photo[0].getUrl();
    }
    document.getElementById('placeName').innerHTML = "Place: " + name;
    document.getElementById('placeAddress').innerHTML = "Address: " + address;
}
function createMarkersFactory(markerNodes, num) {
    var id = markerNodes.id;
    var name = markerNodes.name;
    var photo = markerNodes.photos;
    var address = markerNodes.formatted_address;
    var latlng = new google.maps.LatLng(
        parseFloat(markerNodes.geometry.location.lat()),
        parseFloat(markerNodes.geometry.location.lng())
    );
    console.log(markerNodes);
    createPreviewForEachPlace(latlng, name, address, photo);
    createMarker(latlng, name, address, photo);
}
function createPreviewForEachPlace(latlng, name, address, photo) {
    var html = "<b>" + name;
    var marker = new google.maps.Marker({
        map: map,
        position: latlng
    });
    var placePreview = document.createElement('div');
    var placeImage = document.createElement('img');
    var placeName = document.createElement('option');
    if (!(typeof photo === 'undefined' || photo === null)) {
        placeImage.src = photo[0].getUrl();
    }
    placeName.innerHTML = name;
    placePreview.appendChild(placeImage);
    placePreview.appendChild(placeName);
    placePreview.addEventListener('click', function (e) {
        infoWindow1.setContent(html);
        infoWindow1.open(map, marker);
        if (!(typeof photo === 'undefined' || photo === null)) {
            document.getElementById('placeImage').src = photo[0].getUrl();
        }
        document.getElementById('placeName').innerHTML = "Place: " + name;
        document.getElementById('placeAddress').innerHTML = "Address: " + address;
    });
    imagesForPlaces.appendChild(placePreview);
}
function createMarker(latlng, name, address, photo) {
    var html = "<b>" + name;
    var marker = new google.maps.Marker({
        map: map,
        position: latlng
    });
    google.maps.event.addListener(marker, 'mouseover', function () {
        infoWindow.setContent(html);
        infoWindow.open(map, marker);
    });
    google.maps.event.addListener(marker, 'mouseout', function () {
        infoWindow.close();
    });
    google.maps.event.addListener(marker, "click", function () {
        infoWindow1.setContent(html);
        infoWindow1.open(map, marker);
        if (!(typeof photo === 'undefined' || photo === null)) {
            document.getElementById('placeImage').src = photo[0].getUrl();
        }
        document.getElementById('placeName').innerHTML = "Place: " + name;
        document.getElementById('placeAddress').innerHTML = "Address: " + address;
    });
    markers.push(marker);
}

loadGoogleMapsAPI();
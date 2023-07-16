// wedding-map.js
// Example code for dynamic map based on user location on wedding details page
function initWeddingMap() {
  // Initialize the map
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
  });
  // Get User location
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var userLatLng = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      // Center the map on the user's location
      map.setCenter(userLatLng);
      // Add a marker at the user's location
      var marker = new google.maps.Marker({
        position: userLatLng,
        map: map,
        title: "Your location",
      });
    });
  }
}
// Initialize the wedding Map
initWeddingMap();

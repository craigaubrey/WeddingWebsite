// wedding-map.js
// Example code for dynamic map based on user location on wedding details page
function initWeddingMap() {
	// Initialize the map
	var map = new google.maps.Map(document.getElementById("map"), {
		zoom: 14,
	});
	// Get User locaiton
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function (position) {
			var userLatLng = {
				lat: position.coords.latitude,
				lng: position.coords.longitude,
			};
			//Center the map on the users locaiton
			map.setCenter(userLatlng;
			// Add a marker at the users location
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
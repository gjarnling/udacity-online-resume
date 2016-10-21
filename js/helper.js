var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<span class="role">%data%</span>';

var HTMLcontactGeneric = '<li class="flex-item"><span>%contact%</span> <span>%data%</span></li>';
var HTMLmobile = '<li class="flex-item"><a href="tel:%data%" class="contactBtn"><i class="material-icons contactBtnIcon">phone</i> <span class="contactBtnText">Mobile</span></a></li>';
var HTMLemail = '<li class="flex-item"><a href="mailto:%data%" class="contactBtn"><i class="material-icons contactBtnIcon">email</i> <span class="contactBtnText">Email</span></a></li>';
var HTMLtwitter = '<li class="flex-item"><a href="%data%" class="contactBtn"><img src="./images/logo-twitter.svg"  class="contactBtnImg" alt=""></a> <span class="contactBtnText">Twitter</span></li>';
var HTMLfacebook = '<li class="flex-item"><a href="%data%" class="contactBtn"><img src="./images/logo-facebook.svg" class="contactBtnImg" alt=""> <span class="contactBtnText">Facebook</span></a></li>';
var HTMLgithub = '<li class="flex-item"><a href="%data%" class="contactBtn"><img src="./images/logo-github.svg" class="contactBtnImg" alt=""> <span class="contactBtnText">Github</span></a></li>';
var HTMLblog = '<li class="flex-item"><span>blog</span> <span>%data%</span></li>';
var HTMLlocation = '<li class="flex-item"><a href="http://maps.google.com/?q=%data%" class="contactBtn"><i class="material-icons contactBtnIcon">my_location</i> <span class="contactBtnText">My location</span></a></li>';

var HTMLbioPic = '<img src="%data%" alt="Personal photo" class="biopic">';
var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';

var HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance</h3><ul id="skills"></ul>';
var HTMLskills = '<li class="skill-item">%data%</li>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a href="#">%data%';
var HTMLworkTitle = ' - %data%</a><br>';
var HTMLworkDates = '<span class="date-text"><i class="material-icons md-18">date_range</i> %data%</span>';
var HTMLworkLocation = '<span class="location-text"><i class="material-icons md-18">location_on</i> %data%</span>';
var HTMLworkDescription = '<p class="work-description">%data%</p>';

var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a href="#">%data%</a><br>';
var HTMLprojectDates = '<span class="date-text"><i class="material-icons md-18">date_range</i> %data%</span>';
var HTMLprojectDescription = '<p class="project-description">%data%</p>';
var HTMLprojectImage = '<img src="%data%" alt="" class="project-image">';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a href="#">%data%';
var HTMLschoolDegree = ' -- %data%</a><br>';
var HTMLschoolDates = '<span class="date-text"><i class="material-icons md-18">date_range</i> %data%</span>';
var HTMLschoolLocation = '<span class="location-text"><i class="material-icons md-18">location_on</i> %data%</span>';
var HTMLschoolMajor = '<div class="school-major"><em>Major: %data%</em></div>';

var HTMLonlineClasses = '<h3 class="education-subheader">Online Classes</h3>';
var HTMLonlineTitle = '<a href="#">%data%';
var HTMLonlineSchool = ' - %data%</a><br>';
var HTMLonlineDates = '<span class="date-text"><i class="material-icons md-18">date_range</i> %data%</span>';
var HTMLonlineURL = '<div class="online-url"><a href="#">%data%</a></div>';

var internationalizeButton = '<button>Internationalize</button>';
var googleMap = '<div id="map"></div>';

/*
See the Google Map documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
var map;

function initializeMap() {
	var locations;
	var mapOptions = {
		disableDefaultUI: true
	};

	map = new google.maps.Map(document.querySelector('#map'), mapOptions);

	function locationFinder() {
		var locations = [];

		locations.push(bio.contacts.location);

		education.schools.forEach(function(school) {
			locations.push(school.location);
		});

		work.jobs.forEach(function(job) {
			locations.push(job.location);
		});

		return locations;
	}

	function createMapMarker(placeData) {

		var lat = placeData.geometry.location.lat();
		var lon = placeData.geometry.location.lng();
		var name = placeData.formatted_address;
		var bounds = window.mapBounds;

		var marker = new google.maps.Marker({
			map: map,
			position: placeData.geometry.location,
			title: name
		});

		var infoWindow = new google.maps.InfoWindow({
			content: name
		});

		bounds.extend(new google.maps.LatLng(lat, lon));
		map.fitBounds(bounds);
		map.setCenter(bounds.getCenter());
	}

	function callback(results, status) {
		if (status == google.maps.places.PlacesServiceStatus.OK) {
			createMapMarker(results[0]);
		}
	}

	function pinPoster(locations) {
		var service = new google.maps.places.PlacesService(map);

		locations.forEach(function(place) {
			var request = {
				query: place
			};

			service.textSearch(request, callback);
		});
	}

	window.mapBounds = new google.maps.LatLngBounds();
	locations = locationFinder();
	pinPoster(locations);
}

window.addEventListener('load', initializeMap);
window.addEventListener('resize', function(e) {
	map.fitBounds(mapBounds);
});

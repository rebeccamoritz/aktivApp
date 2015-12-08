//Google Maps aktuelle Position abfragen
/* function initialize() {
        getLocation();
      }
      google.maps.event.addDomListener(window, 'load', initialize);

      function getLocation(){
        if(navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(success, error);
        } else {
          // default location
        }
      }

      function success(position){
        var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

        var mapOptions = {
          center: latlng,
          scrollWheel: false,
          zoom: 12
        };

        var marker = new google.maps.Marker({
            position: latlng,
            url: '/',
            animation: google.maps.Animation.DROP
        });

        var map = new google.maps.Map(document.getElementById("map-canvas"),
            mapOptions);

        marker.setMap(map);
      }

      function error(msg){
        if (msg.code == 1) {
            //PERMISSION_DENIED
        } else if (msg.code == 2) {
            //POSITION_UNAVAILABLE
        } else {
        }   //TIMEOUT
      } */

//For TextBox Search..............
            google.maps.event.addDomListener(window, 'load', function () {
              var places = new google.maps.places.Autocomplete(document.getElementById('txtFrom'));
              google.maps.event.addListener(places, 'place_changed', function () {
                  var place = places.getPlace();
              });
              var places1 = new google.maps.places.Autocomplete(document.getElementById('txtTo'));
              google.maps.event.addListener(places1, 'place_changed', function () {
                  var place1 = places1.getPlace();
              });
          });
          function calculateRoute(rootfrom, rootto) {

// Center initialized to Vienna, Austria
          var myOptions = {
                      zoom: 10,
                      center: new google.maps.LatLng(48.209206, 16.372778),
                      mapTypeId: google.maps.MapTypeId.ROADMAP
                  };
                  // Draw the map
                  var mapObject = new google.maps.Map(document.getElementById("map-canvas"), myOptions);

                  var directionsService = new google.maps.DirectionsService();
                  var directionsRequest = {
                      origin: rootfrom,
                      destination: rootto,
                      travelMode: google.maps.DirectionsTravelMode.DRIVING,
                      unitSystem: google.maps.UnitSystem.METRIC
                  };
                  directionsService.route(
                  directionsRequest,
                  function (response, status) {
                      if (status == google.maps.DirectionsStatus.OK) {
                          new google.maps.DirectionsRenderer({
                              map: mapObject,
                              directions: response
                          });
                      }
                      else
                          $("#lblError").append("Unable To Find Root");
                  }
              );
              }

              $(document).ready(function () {
                  // If the browser supports the Geolocation API
                  if (typeof navigator.geolocation == "undefined") {
                      $("#lblError").text("Your browser doesn't support the Geolocation API");
                      return;
                  }
                  $("#calculate-route").submit(function (event) {
                      event.preventDefault();
                      calculateRoute($("#txtFrom").val(), $("#txtTo").val());
                  });
              });

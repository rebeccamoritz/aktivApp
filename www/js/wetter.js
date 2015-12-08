// Geolocation verwendbar?
    function getLocation() {
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(handlePosition);
      } else {
          alert("Geolocation wird nicht unterstuezt.");
      }
    }

//function-Aufruf aus getLocation
    function handlePosition(position){

      //long + lat abfragen
      var longi = position.coords.longitude;
      var lati = position.coords.latitude;

      //aktuelles Wetter für diese Position abfragen
      $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?lat='+lati+'&lon='+longi+'&units=metric&APPID=c01c8b6db3081b236e01fdeaee9a5ec7',
        type: 'GET',
        dataType: 'json',
        success: function(data){

            //aktuelles Wetter
            var temp2 = data.main.temp;

            // Werte in Log ausgeben
            console.log(JSON.stringify(data));
            console.log("Ort: "+data.name);
            console.log("Lon: "+data.coord.lon+' - Lat: '+data.coord.lat);
            console.log("Temperatur: " +temp2);

            // Bei Temperaturen ueber 25 Grad zeige Aktivitäten für heißes Wetter
            if (temp2 > 25){
              $(".kalt, .neutral").hide();
              $(".heiss").show();
            }
            // Bei Temperaturen unter 10 Grad zeige Aktivitäten für kaltes Wetter
            else if(temp2 < 10){
              $(".neutral, .heiss").hide();
              $(".kalt").show();
            }
            // ansonsten (zw 10 - 25 Grad) zeige Aktivitäten für jedes Wetter
            else{
              $(".kalt, .heiss").hide();
              $(".neutral").show();
            }
        }
      });
    }

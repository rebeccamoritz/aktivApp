// zeite Detailansicht zu Rezept mit bestimmter ID
    function aktivitaetAnzeigen(id){

//Leere aktivDetail Div
          $("#aktivDetail").empty();      

// JSON laden
          var data = JSON.parse(window.localStorage.getItem("aktivJSON"));

// befülle Aktivitäten-Div
          $("#aktivDetail").append('<div class="col-lg-8 col-lg-offset-2"><div class="row"><div class="col-lg-8 col-lg-offset-2"><div class="modal-body"><!-- Project Details Go Here --><h2>'+data[id].name+'</h2><p class="item-intro text-muted">'+data[id].einleitung+'</p><img class="img-responsive img-centered" src="'+data[id].bildurl+'" alt=""><p>'+data[id].beschreibung+'</p><button class="btn btn-xl" onclick="window.open('+data[id].link+');">Zur Webseite</button><hr/><button type="button" class="btn btn-primary" data-dismiss="modal"><i class="fa fa-times"></i> Aktivität schließen</button></div></div></div></div>');

}

/*

$(document).ready(function(){
// LocalStorage vorhanden?
      if(supports_html5_storage()){

        // ist JSON Objekt NICHT im LS gespeichert?
        if (localStorage.getItem("aktivJSON") === null) {
          console.log("in localStorage speichern");

          // get JSON vom Web
          $.getJSON('aktivitaeten.json', function(data) {

            // speichert JSON in LS
            window.localStorage.setItem("aktivJSON", JSON.stringify(data));

//Leere aktivDetail Div
          $("#aktivDetail").empty();

// JSON laden
          var data = JSON.parse(window.localStorage.getItem("aktivJSON"));

// befülle Aktivitäten-Div
          $("#aktivDetail").append('<div class="col-lg-8 col-lg-offset-2"><div class="row"><div class="col-lg-8 col-lg-offset-2"><div class="modal-body"><!-- Project Details Go Here --><h2>'+data[id].name+'</h2><p class="item-intro text-muted">'+data[id].einleitung+'</p><img class="img-responsive img-centered" src="'+data[id].bildurl+'" alt=""><p>'+data[id].beschreibung+'</p><button class="btn btn-xl" onclick="window.open('+data[id].link+');">Zur Webseite</button><hr/><button type="button" class="btn btn-primary" data-dismiss="modal"><i class="fa fa-times"></i> Aktivität schließen</button></div></div></div></div>');

//, '_blank', 'location=yes'

}); // Ende each
}; // Ende getJSON
}; //if
}); //Ende ready Function

*/

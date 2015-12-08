// LocalStorage (LS) vorhanden?
function supports_html5_storage() {
  try {return 'localStorage' in window && window['localStorage'] !== null;}
  catch (e) { return false;}
}

$(document).ready(function() {
  // Wenn LS vorhanden, dann ...
  if(supports_html5_storage()){
  // überprüfe ob JSON Objekt im LS gespeichert ist, wenn nicht ...
  if (localStorage.getItem("aktivJSON") === null) {
    console.log("Aktivitäten LocalStorage gespeichert");
  //... dann hole das JSON von Firebase ...
  var myFirebaseRef = new Firebase('https://aktivapp.firebaseio.com'); //neue Firebase Connection

    myFirebaseRef.on("value", function(snapshot) {
    var data = snapshot.val(); //Aktivitäten JSOn in data übergeben
          // get JSON vom Web
          //$.getJSON('aktivitaeten.json', function(data) {
  // ... und speicher JSON in LS.
  window.localStorage.setItem("aktivJSON", JSON.stringify(data));
  // Aktivitätenliste leeren (DummyData)
  $("#aktivitaeten").empty();
  console.log(JSON.stringify(data));
  // befülle Aktivitäten-Div
  $.each(data, function(i, val) {
    $("#aktivitaeten").append('<div class="col-md-4 col-sm-6 portfolio-item '+data[i].tempGrad+'"><a href="#portfolioModal1" onclick="aktivitaetAnzeigen('+data[i].id+')" class="portfolio-link" data-toggle="modal"><div class="portfolio-hover"><div class="portfolio-hover-content"><i class="fa fa-plus fa-3x"></i></div></div><img src="'+data[i].bildurl+'" class="img-responsive" alt=""></a><div class="portfolio-caption"><h4>'+data[i].name+'</h4><p class="text-muted">'+data[i].einleitung+'</p></div></div>');
  }); // ende each
}); // ende getJSON

      // else - Zweig von check ob JSON Objekt in LS gespeichert ist
      } else {
        console.log("aus LS laden");

        // JSON laden
        var data = JSON.parse(window.localStorage.getItem("aktivJSON"));

        // Rezeptliste leeren (dummyfile)
        $("#aktivitaeten").empty();

        // befülle Rezepte-Div
        $.each(data, function(i, val) {

           $("#aktivitaeten").append('<div class="col-md-4 col-sm-6 portfolio-item '+data[i].tempGrad+' '+data[i].id+'"><a href="#portfolioModal1" class="portfolio-link" data-toggle="modal"><div class="portfolio-hover"><div class="portfolio-hover-content"><i class="fa fa-plus fa-3x"></i></div></div><img src="'+data[i].bildurl+'" class="img-responsive" alt=""></a><div class="portfolio-caption"><h4>'+data[i].name+'</h4><p class="text-muted">'+data[i].einleitung+'</p></div></div>');

            }); // ende each

      } // else if ende - localStorage Objekt ist vorhanden
    }
});

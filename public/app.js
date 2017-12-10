var app = function(){
  var url = 'http://api.open-notify.org/iss-now.json';
  makeRequest(url, requestComplete);
}

  var makeRequest = function(url, callback){
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.addEventListener('load', callback);
    request.send();
  }

  var requestComplete = function(){
    if(this.status != 200) return;
    var jsonString = this.responseText;
    var issLocation = JSON.parse(jsonString);
    var mapDiv = document.getElementById('main-map');
    var center = { lat: parseFloat(issLocation.iss_position.latitude), lng: parseFloat(issLocation.iss_position.longitude)};
    var mainMap = new MapWrapper(mapDiv, center, 2);
    mainMap.addMarker(center);
  }








window.addEventListener('load', app);

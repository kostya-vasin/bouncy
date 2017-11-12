function initMap() {
   var uluru = {
      lat: 46.4793738,
      lng: 30.7229245
   };
   var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 14,
      center: uluru,
      
  zoomControl: false,
  mapTypeControl: false,
  scaleControl: false,
  streetViewControl: false,
  rotateControl: false,
  fullscreenControl: false

   });
   var beetrootMarker = "https://fex.net/get/568530273335/100445821";
//   size: new google.maps.Size(56, 76)} ;
   var marker = new google.maps.Marker({
      position: uluru,
      map: map,
      icon: beetrootMarker
   });
   
};

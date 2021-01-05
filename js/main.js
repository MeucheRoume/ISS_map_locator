// ISS

async function moveISS() {
    let response = await fetch("http://api.open-notify.org/iss-now.json");
    const data = await response.json();
    var lat = data['iss_position']['latitude'];
    var lon = data['iss_position']['longitude'];
    marker.setLatLng([lat, lon]);
    circle.setLatLng([lat, lon]);
    mymap.panTo([lat, lon], animate=true);
    setTimeout(moveISS, 5000); 
};


var mymap = L.map('mapid').setView([0, 0], 2);

var markerISS = L.icon({iconUrl: 'ISSIcon.png', iconSize: [50, 30]})
var marker = L.marker([0, 0], {icon: markerISS}).addTo(mymap);
var circle = L.circle([0, 0], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.2,
    radius: 2141000
}).addTo(mymap);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWV1Y2hlcm91bWUiLCJhIjoiY2tpaXM1b2RzMGtjOTJ6bnh6dDBvdDIyOSJ9.WWuu8Bx6LF7lxs8-XtoU9A', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512, 
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibWV1Y2hlcm91bWUiLCJhIjoiY2tpaXM1b2RzMGtjOTJ6bnh6dDBvdDIyOSJ9.WWuu8Bx6LF7lxs8-XtoU9A'
}).addTo(mymap);


async function predictionISS(lat, lng) {
    //let response = await fetch("http://api.open-notify.org/iss-pass.json?lat="+lat.value+"&lon="+lng.value);
    let response = await fetch("http://api.open-notify.org/iss-pass.json?lat=45.0&lon=-122.3&alt=20&n=5");
    const data = await response.json();
    console.log(data);
}
const lat = document.getElementById("lat");
const lng = document.getElementById("lng");
predictionISS(lat, lng);


moveISS();
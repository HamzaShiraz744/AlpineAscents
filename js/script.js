function updateDateTime(){
    const now = new Date();
    document.getElementById("current-date").textContent = now.toLocaleDateString();
    document.getElementById("current-time").textContent = now.toLocaleTimeString();
}
updateDateTime();
setInterval(updateDateTime, 1000);

function getLocation() {
    const locationElement = document.getElementById("current-location");

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(
            function(position){
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;

                locationElement.textContent = 
                "Lat: " + latitude.toFixed(4) +
                ", Long: " + longitude.toFixed(4);
            },
            function(){
                locationElement.textContent = "location permission denied";
            }
        );
    } else{
        locationElement.textContent = "Geolocation not supported"
    }
}

getLocation();
let visitors = window.localStorage.getItem("visitors");
if (visitors === null){
    visitors = 0;
}
if (!window.sessionStorage.getItem("visited")){
    visitors++;
    window.localStorage.setItem("visitors", visitors);
    window.sessionStorage.setItem("visited", "true");
}    
document.getElementById("visitor-count").textContent = visitors;
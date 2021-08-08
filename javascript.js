function showCase() {
    var summary = document.getElementById("summary");
    if (summary.style.display === 'none'){
        summary.style.display = 'block';
    }else{
        summary.style.display = 'none';
    };
    function display() {
        var heart_rt = document.getElementById("hrate").value;
      
        if (heart_rt.length == 0){
            document.getElementById("heart_rate").innerHTML = "N/A" ;
        }else{
            document.getElementById("heart_rate").innerHTML = heart_rt + " BPM";
        };

        var temp = document.getElementById("temperature").value;
        // document.getElementById("temp").innerHTML = temp + "C";
        if (heart_rt.length == 0){
            document.getElementById("temp").innerHTML = "N/A" ;
        }else{
            document.getElementById("temp").innerHTML = temp + " C";
        };

        var pulse = document.getElementById("pulse").value;
        // document.getElementById("pulse_rate").innerHTML = pulse + "BPM";
        if (heart_rt.length == 0){
            document.getElementById("pulse_rate").innerHTML = "N/A" ;
        }else{
            document.getElementById("pulse_rate").innerHTML = pulse + " BPM";
        };

        var respr = document.getElementById("respr").value;
        // document.getElementById("respr_rate").innerHTML = respr + "PPT";
        if (heart_rt.length == 0){
            document.getElementById("respr_rate").innerHTML = "N/A" ;
        }else{
            document.getElementById("respr_rate").innerHTML = respr + " PPT";
        };

        var blood_pressure = document.getElementById("bl_pressure").value;
        // document.getElementById("pressure").innerHTML = blood_pressure + "mm Hg";
        if (heart_rt.length == 0){
            document.getElementById("pressure").innerHTML = "N/A" ;
        }else{
            document.getElementById("pressure").innerHTML = blood_pressure + "mm Hg";
        };
    }
    display();
}

//Check if the geolocation is supported
// if (navigator.geolocation) {
//     console.log('Geolocation is supported!');
//   }
//   else {
//     console.log('Geolocation is not supported for this Browser/OS.');
//   }

  //Request to access the user's geo-location
//   window.onload = function() {
//     var startPos;
//     var geoSuccess = function(position) {
//       startPos = position;
//       document.getElementById('startLat').innerHTML = startPos.coords.latitude;
//       document.getElementById('startLon').innerHTML = startPos.coords.longitude;
//     };
//     navigator.geolocation.getCurrentPosition(geoSuccess);
//     // document.getElementById('location').innerHTML = geoSuccess;
//   };

// window.navigator.geolocation
//   .getCurrentPosition(console.log, console.log); 

// const successfulLookup = position => {
//     const { latitude, longitude } = position.coords;
//     fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=1234`)
//       .then(response => response.json());
    //   .then(console.log); 

// results[0].formatted;



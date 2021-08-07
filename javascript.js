function showCase() {
    var summary = document.getElementById("summary");
    if (summary.style.display === 'none'){
        summary.style.display = 'block';
    }else{
        summary.style.display = 'none';
    }
    function display() {
        var heart_rt = document.getElementById("hrate").value;
        document.getElementById("heart_rate").innerHTML = heart_rt + "BPM";

        var temp = document.getElementById("temperature").value;
        document.getElementById("temp").innerHTML = temp + "C";

        var pulse = document.getElementById("pulse").value;
        document.getElementById("pulse_rate").innerHTML = pulse + "BPM";

        var respr = document.getElementById("respr").value;
        document.getElementById("respr_rate").innerHTML = respr + "PPT";

        var blood_pressure = document.getElementById("bl_pressure").value;
        document.getElementById("pressure").innerHTML = blood_pressure + "mm Hg";
    }
    display();
}


function showCase() {
    var summary = document.getElementById("summary");
    var button = document.getElementsById("submit");
    function display() {
        var heart_rt = document.getElementById("hrate").value;
        document.getElementById("heart_rate").innerHTML = heart_rt;

        var temp = document.getElementById("temperature").value;
        document.getElementById("temp").innerHTML = temp;

        var pulse = document.getElementById("pulse").value;
        document.getElementById("pulse_rate").innerHTML = pulse;

        var respr = document.getElementById("respr").value;
        document.getElementById("respr_rate").innerHTML = respr;

        var blood_pressure = document.getElementById("bl_pressure").value;
        document.getElementById("pressure").innerHTML = blood_pressure;
    }
    display();
}
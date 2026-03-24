
function compute_temperature() {
    let temperature = Number(document.getElementById("temperature_input").value);
    let humidity = Number(document.getElementById("humidity_input").value);
    let heatindex = temperature + (0.33 * humidity) - 4.00;

    if (temperature >=20 && temperature <=24 && humidity >= 30 && humidity <= 50 ) {
        window.alert("heatindex: " + heatindex + " - Comfortable / Cool");
    } else if (temperature >=25 && temperature <=27 && humidity >= 40 && humidity <= 60) {
        window.alert("heatindex: " + heatindex + " - Warm.");
    } else if (temperature >=28 && temperature <=31 && humidity >= 50 && humidity <= 70) {
        window.alert("heatindex: " + heatindex + " - Hot");
    } else if (temperature >=32 && temperature <=35 && humidity >= 60 && humidity <= 80) {
        window.alert("heatindex: " + heatindex + " - Very Hot / Caution");
    } else if (temperature >=36 && humidity >= 70 && humidity <= 100) {
        window.alert("heatindex: " + heatindex + " - Extremely Hot / Danger");
    }
}

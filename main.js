function compute_kwh() {

    let usage = Number(document.getElementById("kwh_input").value);

    switch (true) {
        case (usage >= 0 && usage <= 100):
            alert("Very Low Consumer");
            break;

        case (usage >= 101 && usage <= 200):
            alert("Low Consumption");
            break;

        case (usage >= 201 && usage <= 300):
            alert("Average consumer");
            break;

        case (usage >= 301 && usage <= 500):
            alert("High consumer");
            break;

        case (usage > 500):
            alert("Very High Consumer");
            break;

        default:
            alert("Invalid input. Please enter a valid number.");
    }
}

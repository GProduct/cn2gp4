let maxVal1 = 1000*0.00364;
let maxVal2 = 1000*0.0622;
let maxVal3 = 1000*0.249;
let maxVal4 = 1000*0.000525;
let maxVal5 = 1000*0.1;

document.getElementById("slider1").addEventListener('input', function() {
    document.getElementById("slider1Value").innerHTML = this.value;
    updateSlider();
});

document.getElementById("slider2").addEventListener('input', function() {
    document.getElementById("slider2Value").innerHTML = this.value;
    updateSlider();
});

document.getElementById("slider3").addEventListener('input', function() {
    document.getElementById("slider3Value").innerHTML = this.value;
    updateSlider();
});

document.getElementById("slider4").addEventListener('input', function() {
    document.getElementById("slider4Value").innerHTML = this.value;
    updateSlider();
});

document.getElementById("slider5").addEventListener('input', function() {
    document.getElementById("slider5Value").innerHTML = this.value;
    updateSlider();
});

function updateSlider() {
    let slider1Value = document.getElementById("slider1").value * 0.00364;
    let slider2Value = document.getElementById("slider2").value * 0.0622;
    let slider3Value = document.getElementById("slider3").value * 0.249;
    let slider4Value = document.getElementById("slider4").value * 0.000525;
    let slider5Value = document.getElementById("slider5").value * 0.1;

    let totalValue = slider1Value + slider2Value + slider3Value + slider4Value + slider5Value;
    let maxWidth = 100; // Set the maximum width for the div

    document.getElementById("progressBarFg").style.width = (totalValue / (maxVal1 + maxVal2 + maxVal3 + maxVal4 + maxVal5)) * maxWidth + "%";
}

document.documentElement.setAttribute('data-theme', "green-theme");
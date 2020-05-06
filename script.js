var elementR = document.getElementById("dlugosc_r");
var elementH = document.getElementById("dlugosc_H");

var elementFirstStepR = document.getElementById("pk_r");
var elementFirstStepH = document.getElementById("pk_H");
var elementFirstStepPi = document.getElementById("pk_pi");

var elementSecondStepR = document.getElementById("dk_r");
var elementSecondStepH = document.getElementById("dk_H");
var elementSecondStepPi = document.getElementById("dk_pi");

var elementLengthH = document.getElementById("dl_h");
var elementLengthR1 = document.getElementById("dl_r1");
var elementLengthR2 = document.getElementById("dl_r2");

var elementResult = document.getElementById("wynik");

function count() {
    var pi = 3.14;
    var r = parseFloat(elementR.value);
    var H = parseFloat(elementH.value);
    if (!Number.isNaN(r) && !Number.isNaN(H) && H > 0 && r > 0) {
        
        elementLengthH.innerHTML = H;
        elementLengthR1.innerHTML = r;
        elementLengthR2.innerHTML = r;

        elementFirstStepPi.innerHTML = pi;
        elementFirstStepR.innerHTML = r;
        elementFirstStepH.innerHTML = H;

        var sqR = r * r;
        elementSecondStepPi.innerHTML = pi;
        elementSecondStepR.innerHTML = sqR;
        elementSecondStepH.innerHTML = H;

        var result = pi * sqR * H;
        elementResult.innerHTML = parseFloat(result).toFixed(2);;
    }
}

count()
elementR.addEventListener('focusout', count, false);
elementH.addEventListener('focusout', count, false);
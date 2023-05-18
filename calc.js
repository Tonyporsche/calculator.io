function appendvalue(value) {
    document.getElementById('result').value += value;
}

function calculate() {
    var p = document.getElementById('result').value;
    var q = eval(p);
    document.getElementById('result').value = q;
}

function clearResult() {
    document.getElementById('result').value = '';
}
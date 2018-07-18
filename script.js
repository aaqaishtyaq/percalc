one = document.getElementById("one");
two = document.getElementById("two");
three = document.getElementById("three");
four = document.getElementById("four");
button = document.getElementById("calculate");
reset = document.getElementById("reset");

button.onclick = calculatePercentage;
reset.onclick = resetNumbers;

function calculatePercentage() {
    var a = getNumberFirst();
    var b = getNumberSecond();
    var c = getNumberThird();
    var d = getNumberFourth();
    if (d == 0) {
        getPercentageThird()
    } else {
        getPercentageFourth()
    }
}


function getPercentageThird() {
    var a = getNumberFirst();
    var b = getNumberSecond();
    var c = getNumberThird();
    var e = ((a + b + c) / 30).toFixed(2);
    postSumToPage(e);
}

function getPercentageFourth() {
    var a = getNumberFirst();
    var b = getNumberSecond();
    var c = getNumberThird();
    var d = getNumberFourth();
    var e = ((a + b + c + d) / 50).toFixed(2);
    postSumToPage(e);
}

function getNumberFirst() {
    var first = parseInt(one.value);
    a = first / 4;
    return a;
}

function getNumberSecond() {
    var second = parseInt(two.value);
    b = second / 2;
    return b;
}

function getNumberThird() {
    var third = parseInt(three.value);
    var per = third / 20;
    var c = 15 * per;
    return c;
}

function getNumberFourth() {
    var d = parseInt(four.value);
    return d;
}

function postSumToPage(e) {
    var answer = e.toString();
    update.innerHTML = "Aggregate Percentage is: " + answer + "%";
}

function resetNumbers() {
    update.innerHTML = '';
}

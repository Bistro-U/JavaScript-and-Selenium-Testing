function validate() {
    var d = document.getElementById("day").value;
    var m = document.getElementById("month").value;
    var y = document.getElementById("year").value;
    if (y <= 0 || m <= 0 || m > 12 || d <= 0 || d > 31) {
        window.location = "fail.html";
    }
    var maxD = 31;
    if (m == 4 || m == 6 || m == 9 || m == 11) {
        maxD = 30;
    } else if (m == 2) {
        if ((y % 400 == 0) || ((y % 4 == 0) && (y % 100 != 0))) {
            maxD = 29;
        } else {
            maxD = 28;
        }
    }
    if(d<= maxD) {
        window.location = "success.html"; // Redirecting to other page.
        return false;
    }
}

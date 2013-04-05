
function currdate() {
    'use strict';
    var currentDate = new Date();
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1;
    var year = currentDate.getFullYear();
    var my_date = month + "-" + day + "-" + year;
    document.getElementById("dateField").value=my_date;
    return false;
}


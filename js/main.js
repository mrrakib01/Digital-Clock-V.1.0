
function showTime (){
    var date    = new Date();
    var h       = date.getHours(); // 0 - 23
    var m       = date.getMinutes(); // 0 - 59
    var s       = date.getSeconds(); // 0 - 59
    var session = "AM";
    var year    = date.getFullYear();
    var month    = date.getMonth();
    var day    = date.getDay();


    if (h == 0) {
        h = 12;
    }

    if (h > 12) {
        h = h - 12;
        session = "PM";              
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    document.getElementById("hours").innerHTML = h;
    document.getElementById("hours").textContent = h;

    document.getElementById("miniutes").innerHTML = m;
    document.getElementById("seconds").innerHTML = s;
    document.getElementById("session").innerHTML = session;
    

    setTimeout(showTime, 1000);
}

showTime ()
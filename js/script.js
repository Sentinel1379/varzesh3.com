var goTopBtn = document.getElementById("gotop");

window.onscroll = function () {
    scrollFunction();
}

function scrollFunction() {
    var goTopBtn = document.getElementById("gotop");
    if ( document.body.scrollTo > 20 || document.documentElement.scrollTop > 20) {
        goTopBtn.style.opacity = "1";
        goTopBtn.style.visibility = "visible";
    }
    else {
        goTopBtn.style.opacity = "0";
        goTopBtn.style.visibility = "hidden";
    }
}


function scrollToTop() {
    window.scrollTo({
        top:0 ,
        behavior:'smooth'
    });
}


function checkBoxF1() {
    var check1 = document.getElementById("check1");
    var check2 = document.getElementById("check2");
    var anten = document.getElementsByClassName("Anten");
    var tv = document.getElementsByClassName("TV");
    var error1 = document.getElementById("filter-error");

    if (check1.checked == false ) {
        if (check2.checked == true) {
            for (var i=0 ; i<20 ; i++) {
                anten[i].style.display = "none";
            }
            error1.style.display = "none";
        }
        else {
            check1.checked = true;
            error1.style.display = "block";
        }
    }

    else {
        for (var i=0 ; i<20 ; i++) {
            anten[i].style.display = "flex";
        }
        error1.style.display = "none";
    }
}

function checkBoxF2() {
    var check1 = document.getElementById("check1");
    var check2 = document.getElementById("check2");
    var anten = document.getElementsByClassName("Anten");
    var tv = document.getElementsByClassName("TV");
    var error1 = document.getElementById("filter-error");

    if (check2.checked == false) {
        if (check1.checked == true) {
            for (var j=0 ; j<6 ; j++) {
                tv[j].style.display = "none";
            }
            error1.style.display = "none";
        }
        else {
            check2.checked = true;
            error1.style.display = "block";
        }
    }

    else {
        for (var j=0 ; j<6 ; j++) {
            tv[j].style.display = "flex";
        }
        error1.style.display = "none";
    }
}

function checkBoxF3() {
    var check5 = document.getElementById("check12");
    var check6 = document.getElementById("check22");
    var check7 = document.getElementById("check32");
    var dakhel = document.getElementsByClassName("IN");
    var khareg = document.getElementsByClassName("OUT");
    var video = document.getElementsByClassName("VIDEO");
    var error1 = document.getElementById("filter-error-1");

    if (check5.checked == false) {
        if (check6.checked == true || check7.checked == true) {
            for (var i=0 ; i<14 ; i++) {
                dakhel[i].style.display = "none";
            }
            error1.style.display = "none";
        }
        else {
            check5.checked = true;
            error1.style.display = "block";
        }
    }

    else {
        for (var i=0 ; i<14 ; i++) {
            dakhel[i].style.display = "flex";
        }
        error1.style.display = "none";
    }
}

function checkBoxF4() {
    var check5 = document.getElementById("check12");
    var check6 = document.getElementById("check22");
    var check7 = document.getElementById("check32");
    var dakhel = document.getElementsByClassName("IN");
    var khareg = document.getElementsByClassName("OUT");
    var video = document.getElementsByClassName("VIDEO");
    var error1 = document.getElementById("filter-error-1");

    if (check6.checked == false) {
        if (check5.checked == true || check7.checked == true) {
            for (var j=0 ; j<13 ; j++) {
                khareg[j].style.display = "none";
            }
            error1.style.display = "none";
        }
        else {
            check6.checked = true;
            error1.style.display = "block";
        }
    }

    else {
        for (var j=0 ; j<13 ; j++) {
            khareg[j].style.display = "flex";
        }
        error1.style.display = "none";
    }
}

function checkBoxF5() {
    var check5 = document.getElementById("check12");
    var check6 = document.getElementById("check22");
    var check7 = document.getElementById("check32");
    var dakhel = document.getElementsByClassName("IN");
    var khareg = document.getElementsByClassName("OUT");
    var video = document.getElementsByClassName("VIDEO");
    var error1 = document.getElementById("filter-error-1");

    if (check7.checked == false) {
        if (check5.checked == true || check6.checked == true) {
            for (var k=0 ; k<12 ; k++) {
                video[k].style.display = "none";
            }
            error1.style.display = "none";
        }
        else {
            check7.checked = true;
            error1.style.display = "block";
        }
    }

    else {
        for (var k=0 ; k<12 ; k++) {
            video[k].style.display = "flex";
        }
        error1.style.display = "none";
    }
}




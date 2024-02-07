function timer() {
  f = window.setInterval(timer1, 1000);
}
function stopTimer() {
  clearTimeout(f);
}

function timer1() {
  document.getElementById("secend").innerHTML = s;
  var myDiv = document.getElementById("minets");
  myDiv.textContent = m;
  document.getElementById("houres").innerHTML = h;
  var pauseHoure = "__";
  pauseHoure = h;
  var pauseminets = "__";
  pauseminets = m;
  var pausesecend = s;
  secnde();
}

var h = localStorage.getItem("houres-lmet");
var m = localStorage.getItem("minets_lmet");
var s = 60;

function secnde() {
  if (h == 0 && m == 0 && s == 0) {
    stopTimer();
  } else {
    if (s == 0) {
      minets();
    } else {
      s = s - 1;
    }
  }
}
function minets() {
  {
    if (m == 0) {
      hourse();
    } else {
      m = m - 1;
      s = 60;
      secnde();
    }
  }
}
function hourse() {
  if (h == 0 && m == 0 && s == 1) {
    stopTimer();
  } else {
    h = h - 1;
    m = 60;
    minets();
  }
}

// document.getElementById('houres').innerHTML=localStorage.getItem('houres-lmet')
// document.getElementById('minets').innerHTML=localStorage.getItem('minuts-lmet')

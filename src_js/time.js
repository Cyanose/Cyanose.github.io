window.onload = timeup();
function timeup() {
  var time = new Date();
  var hour = time.getHours();
  var min = time.getMinutes();
  // var ampm = "AM";
  // if (hour > 12) {
  //   hour -= 12;
  //   ampm = "PM";
  // }
  // if (hour == 0) {
  //   hour = 12;
  // }
  if (hour < 10) {
    hour = "0" + hour;
  }
  if (min < 10) {
    min = "0" + min;
  }

  var currentTime = hour + ":" + min;
  document.getElementById("time").innerHTML = currentTime;
  setTimeout(timeup, 1000);
}
window.onload = dateup();
function dateup() {
  const monthNames = [
    "Sty",
    "Lut",
    "Mar",
    "Kwi",
    "Maj",
    "Cze",
    "Lip",
    "Sie",
    "Wrz",
    "Paź",
    "Lis",
    "Gru",
  ];
  var date = new Date();
  var day = date.getDate();
  var mm = monthNames[date.getMonth()];
  var currentDate = day + " " + mm;
  document.getElementById("date").innerHTML = currentDate;
}

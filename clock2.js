setInterval(() => {
  let a = new Date();
  var hours = a.getHours();
  var minutes = a.getMinutes();
  var seconds = a.getSeconds();
  var ampm = "PM";

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  if (hours < 12) {
    ampm = "AM";
  }

  if (hours > 12) {
    hours = hours - 12;
  }

  if (hours < 10) {
    hours = "0" + hours;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
  document.getElementById("ampm").innerText = ampm;
}, 1000);

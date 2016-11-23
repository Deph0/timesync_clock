var ts = timesync.create({ server: '/timesync', interval: 10000 });
ts.on('change', function(offset) { console.log("Offset: " + offset + " ms"); });

function addZero(number) {
  return (number < 10 ? '0' : '') + number
}

function displayTime() {
  var date = new Date(ts.now());
  var thm = document.getElementById("timeHourMinute");
  var tis = document.getElementById("timeSeconds");
  thm.innerHTML = date.toLocaleTimeString('sv-SE', {hour: '2-digit', minute:'2-digit'});
  tis.innerHTML = date.toLocaleTimeString('sv-SE').slice(-2);
  //tis.innerHTML = date.toLocaleTimeString('en-US',{second:'2-digit'});
  //tis.innerHTML = addZero(date.getSeconds());
}
setInterval(displayTime, 1000);

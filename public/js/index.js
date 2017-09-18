var ts = timesync.create({ server: '/timesync', interval: 10000 });
ts.on('change', function(offset) { console.log("Offset: " + offset + " ms"); });

function addZero(number) {
  return (number < 10 ? '0' : '') + number
}

function displayTime() {
  var date = new Date(ts.now());
  var thm = document.getElementById("timeHourMinute");
  var tis = document.getElementById("timeSeconds");
  var td = document.getElementById("timeDate");
  thm.innerHTML = date.toLocaleTimeString('sv-SE', {hour: '2-digit', minute:'2-digit'});
  tis.innerHTML = date.toLocaleTimeString('sv-SE').slice(-2);
  //tis.innerHTML = date.toLocaleTimeString('en-US',{second:'2-digit'});
  //tis.innerHTML = addZero(date.getSeconds());
  var options = { weekday: 'long', year: 'numeric', month: '2-digit', day: '2-digit' }; 
  td.innerHTML = date.toLocaleDateString('sv-SE', options);
}
setInterval(displayTime, 1000);

const currentDate = document.getElementById("date");
const currentDay = document.getElementById("day");
const currentTime = document.getElementById("time");

function updateTime() {
  let newTime = new Date();
  let hour = newTime.getHours();
  hour = hour > 9 ? hour : "0" + hour;
  let min = newTime.getMinutes();
  min = min > 9 ? min : "0" + min;
  let sec = newTime.getSeconds();
  sec = sec > 9 ? sec : "0" + sec;
  let date = newTime.getDate();
  let day = newTime.toString().split(" ")[0];
  let time = ` ${hour} : ${min} : ${sec} `;

  currentTime.innerHTML = time;
  currentDate.innerHTML = date;
  currentDay.innerHTML = day;
}

setInterval(updateTime, 1000);

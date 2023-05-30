// var swiper = new Swiper(".mySwiper", {
//   slidesPerView: 1,
//   spaceBetween: 30,
//   loop: true,
//   autoplay: {
//     delay: 3000,
//   }
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });

// timer
let days = document.getElementById('days');
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let second = document.getElementById('second');

let dd = document.getElementById('dd');
let hh = document.getElementById('hh');
let mm = document.getElementById('mm');
let ss = document.getElementById('ss');

let endDate = 'July 12 2023 00:00:00';
// date format mm/dd/yyyy

let x = setInterval(function () {
  let now = new Date(endDate).getTime();
  let countDown = new Date().getTime();
  let distance = now - countDown;

  // time calculation 
  let d = Math.floor(distance / (1000 * 60 * 60 * 24));
  let h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let s = Math.floor((distance % (1000 * 60)) / (1000));

  // output
  days.innerHTML = d + "<br><span>Days<span>";
  hours.innerHTML = h + "<br><span>Hours<span>";
  minutes.innerHTML = m + "<br><span>Minutes<span>";
  second.innerHTML = s + "<br><span>Seconds<span>";

  // animation stroke
  dd.style.strokeDashoffset = 440 - (440 * d) / 365;
  hh.style.strokeDashoffset = 440 - (440 * h) / 24;
  mm.style.strokeDashoffset = 440 - (440 * m) / 60;
  ss.style.strokeDashoffset = 440 - (440 * s) / 60;

  // if countdown is over deadline
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("time").style.display = 'none';
    document.querySelector(".end").style.display = 'block';
  }

  let hrString = hr;
  let minString = min;
  let secString = sec;
  let dayString = day;

  if (day < 10) {
    dayString = "0" + dayString;
  }
  if (min < 10) {
    minString = "0" + minString;
  }
  if (sec < 10) {
    secString = "0" + secString;
  }
  if (hr < 10) {
    hrString = "0" + hrString;
  }

  document.getElementById("days").innerHTML = dayString;
  document.getElementById("hours").innerHTML = hrString;
  document.getElementById("minutes").innerHTML = minString;
  document.getElementById("second").innerHTML = secString;
}, 1000)
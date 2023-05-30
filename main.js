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

let dd = document.getElementById('dd');
let hh = document.getElementById('hh');
let mm = document.getElementById('mm');

let day_dot = document.querySelector('.day_dot');
let hr_dot = document.querySelector('.hr_dot');
let min_dot = document.querySelector('.min_dot');

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

  // output
  days.innerHTML = d + "<br><span>Days<span>";
  hours.innerHTML = h + "<br><span>Hours<span>";
  minutes.innerHTML = m + "<br><span>Min<span>";

  // animation stroke
  dd.style.strokeDashoffset = 440 - (440 * d) / 365;
  hh.style.strokeDashoffset = 440 - (440 * h) / 24;
  mm.style.strokeDashoffset = 440 - (440 * m) / 60;

  // animate circle dots
  day_dot.style.transform = `rotateZ(${d * 0.986}deg)`;
  //360deg/365days = 0.986
  hr_dot.style.transform = `rotateZ(${h * 15}deg)`;
  //360deg/24hr = 15
  min_dot.style.transform = `rotateZ(${m * 6}deg)`;
  //360deg/60min = 6

  // if countdown is over deadline
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("time").style.display = 'none';
    document.querySelector(".end").style.display = 'block';
  }
}, 1000)
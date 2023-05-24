var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3000,
  }
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// timer
let countDownDate = newDate("May 29, 2023 00:00").getTime();
let x = setInterval(function () {
  let now = newDate().getTime();
  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  console.log(days);
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  console.log(hours);
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  console.log(minutes);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hr").innerHTML = hours;
  document.getElementById("min").innerHTML = minutes;

  if (distance > 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = "00";
    document.getElementById("hr").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
  }

}, 1000);





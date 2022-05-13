const headerScrollHeight = document.querySelector("header").scrollHeight;
const nav = document.querySelector("nav");
const line = document.querySelector(".vertical-line");

const numbers = document.querySelectorAll(".number");
let numberBottoms = [];

numbers.forEach((number) => {
  numberBottoms.push(
    window.pageYOffset +
      number.getBoundingClientRect().top +
      number.scrollHeight
  );
});

numberBottoms = numberBottoms.sort();

const start = document.querySelector(".start");
const startBottom = window.scrollY + start.getBoundingClientRect().bottom;
const end = document.querySelector(".end");
const endTop = window.scrollY + end.getBoundingClientRect().top;

let heightBetween = [];
for (let i = 1; i < numberBottoms.length; i++) {
  heightBetween.push(150 + (numberBottoms[i] - numberBottoms[0]));
}

// console.log(cal);

document.addEventListener("scroll", function () {
  changeNavBgColor();
  changeLine();
});

function changeNavBgColor() {
  let currentScrollValue = document.documentElement.scrollTop;

  nav.style.backgroundColor = "rgb(33, 33, 33, 0.5)";

  if (currentScrollValue < headerScrollHeight) {
    nav.style.backgroundColor = "#019267";
  }
}

function changeLine() {
  let windowBottom = window.scrollY + window.innerHeight;

  if (windowBottom > numberBottoms[1]) {
    line.style.height = `${heightBetween[0]}px`;
  }
  if (windowBottom > numberBottoms[2]) {
    line.style.height = `${heightBetween[1]}px`;
  }
  if (windowBottom > numberBottoms[3]) {
    line.style.height = `${heightBetween[2]}px`;
  }
  if (windowBottom > numberBottoms[4]) {
    line.style.height = `${heightBetween[3]}px`;
  }
  if (windowBottom > numberBottoms[5]) {
    line.style.height = `${heightBetween[4]}px`;
  }
  if (windowBottom > numberBottoms[6]) {
    line.style.height = `${heightBetween[5]}px`;
  }
  if (windowBottom > numberBottoms[7]) {
    line.style.height = `${heightBetween[6]}px`;
  }
  if (windowBottom > endTop) {
    line.style.height = `${150 + (endTop - numberBottoms[0])}px`;
  }
}

// header 애니메이션
const shoePrintLeft = document.getElementById("shoe-print-left");
const shoePrintLeft2 = document.getElementById("shoe-print-left2");
const shoePrintRight = document.getElementById("shoe-print-right");
const shoePrintRight2 = document.getElementById("shoe-print-right2");

// setInterval(() => {
setTimeout(() => {
  shoePrintLeft.style.display = "block";
}, 1000);
setTimeout(() => {
  shoePrintRight.style.display = "block";
}, 2000);
setTimeout(() => {
  shoePrintLeft2.style.display = "block";
}, 3000);
setTimeout(() => {
  shoePrintRight2.style.display = "block";
}, 4000);
shoePrintLeft.style.display = "none";
shoePrintLeft2.style.display = "none";
shoePrintRight.style.display = "none";
shoePrintRight2.style.display = "none";
// }, 5000);

const detail = document.querySelector(".detail");
let slideImg = [];
let idx = 0;
const closeBtn = document.querySelector(".close-btn");

// 추천스팟 클릭이벤트 핸들러
function showDetail(hash) {
  let name = hash;
  let result = {};

  recomSpots.forEach((recomSpot) => {
    if (name == recomSpot.title) {
      result = recomSpot;
    }
  });

  showModal(result);
}

// 모달창 띄우는 함수
function showModal(res) {
  detail.style.display = "block";

  const title1 = document.querySelector("#title1");
  title1.innerText = res.title_des;

  const title2 = document.querySelector("#title2");
  title2.innerText = res.title;

  slideImg = res.slide_img;
  showSlides(idx);

  const detailInfo = document.querySelector("#detail-info");
  detailInfo.innerHTML = res.description;
}

// 슬라이드 쇼 띄우는 함수
function showSlides(n) {
  const bgImg = document.querySelector(".bg-img");
  const imgPath = "../images/";
  const detailImg = document.querySelector(".detail-img");

  const prev = document.querySelector(".prev");
  const next = document.querySelector(".next");

  prev.style.display = "none";
  next.style.display = "none";

  if (slideImg.length > 1) {
    prev.style.display = "block";
    next.style.display = "block";
  }

  if (n < 0) {
    idx = slideImg.length - 1;
  }

  if (n >= slideImg.length) {
    idx = 0;
  }

  detailImg.src = `${imgPath}${slideImg[idx]}`;
  bgImg.style.backgroundImage = `url(${imgPath}${slideImg[idx]})`;
}

// 슬라이드 쇼 넘기는 함수
function plusSlides(n) {
  showSlides((idx += n));
}

// 닫기 버튼 기능
closeBtn.addEventListener("click", () => {
  detail.style.display = "none";
});

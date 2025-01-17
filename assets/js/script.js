// 'use strict';

// for the faq section
const faqs = document.querySelectorAll(".faq")
faqs.forEach(faq=>{
    faq.addEventListener("click",()=>{
        faq.classList.toggle("active");
    })
})
// js for countdown
let daysItem = document.querySelector("#days")
let hoursItem = document.querySelector("#hours");
let minItem = document.querySelector("#min");
let secItem = document.querySelector("#sec")

let countDown = ()=>{
    let futureDate = new Date("10 August 2024");
    let currentDate = new Date();
    let myDate = futureDate - currentDate;
    let days = Math.floor(myDate/1000/60/60/24);
    let hours = Math.floor(myDate/1000/60/60) % 24;
    let min = Math.floor(myDate/1000/60)%60;
    let sec = Math.floor(myDate/1000)%60;
    daysItem.innerHTML=days;
    hoursItem.innerHTML=hours;
    minItem.innerHTML=min;
    secItem.innerHTML=sec;
}
countDown();
setInterval(countDown,1000);

/**
 * add event on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * MOBILE NAVBAR
 * navbar will show after clicking menu button
 */

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const toggleNav = function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
}

navToggler.addEventListener("click", toggleNav);

const navClose = () => {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}

addEventOnElements(navLinks, "click", navClose);



/**
 * HEADER and BACK TOP BTN
 * header and back top btn will be active after scrolled down to 100px of screen
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeEl = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

window.addEventListener("scroll", activeEl);



/**
 * Button hover ripple effect
 */

const buttons = document.querySelectorAll("[data-btn]");

const buttonHoverRipple = function (event) {
  this.style.setProperty("--top", `${event.offsetY}px`);
  this.style.setProperty("--left", `${event.offsetX}px`);
}

addEventOnElements(buttons, "mousemove", buttonHoverRipple);



/**
 * Scroll reveal
 */

const revealElements = document.querySelectorAll("[data-reveal]");

const revealElementOnScroll = function () {
  for (let i = 0, len = revealElements.length; i < len; i++) {
    const isElementInsideWindow = revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.1;

    if (isElementInsideWindow) {
      revealElements[i].classList.add("revealed");
    }
  }
}

window.addEventListener("scroll", revealElementOnScroll);

window.addEventListener("load", revealElementOnScroll);



/**
 * Custom cursor
 */

const cursor = document.querySelector("[data-cursor]");
const hoverElements = [...document.querySelectorAll("a"), ...document.querySelectorAll("button")];

const cursorMove = function (event) {
  cursor.style.top = `${event.clientY}px`;
  cursor.style.left = `${event.clientX}px`;
}

window.addEventListener("mousemove", cursorMove);

addEventOnElements(hoverElements, "mouseover", function () {
  cursor.classList.add("hovered");
});

addEventOnElements(hoverElements, "mouseout", function () {
  cursor.classList.remove("hovered");
});

//news//


document.getElementById('read-more2').addEventListener('click', function() {
  const content = document.getElementById('content2');
  if (content.style.display === 'none' || content.style.display === '') {
      content.style.display = 'block';
      this.textContent = 'Read less';
  } else {
      content.style.display = 'none';
      this.textContent = 'Read more';
  }
});

document.getElementById('read-more3').addEventListener('click', function() {
  const content = document.getElementById('content3');
  if (content.style.display === 'none' || content.style.display === '') {
      content.style.display = 'block';
      this.textContent = 'Read less';
  } else {
      content.style.display = 'none';
      this.textContent = 'Read more';
  }
});

document.getElementById('read-more4').addEventListener('click', function() {
  const content = document.getElementById('content4');
  if (content.style.display === 'none' || content.style.display === '') {
      content.style.display = 'block';
      this.textContent = 'Close';
  } else {
      content.style.display = 'none';
      this.textContent = 'Here are the rules:';
  }
});


const canvas = document.getElementById('Matrix');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function isMobileView() {
  return window.innerWidth <= 768; 
}


function hideCanvasOnMobile() {
  var canvas = document.getElementById('Matrix');
  if (canvas && isMobileView()) {
    canvas.style.display = 'none';
  } else {
    canvas.style.display = 'block';
  }
}


window.addEventListener('resize', function() {
  hideCanvasOnMobile();
});


document.addEventListener('DOMContentLoaded', function() {
  hideCanvasOnMobile();
});

const katakana = '01012301780101105601058901023045620210500012087502364012587010398012501228010102101030563250';
const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const nums = '0123456789';

const alphabet = katakana + latin + nums;

const fontSize = 16;
const columns = canvas.width/fontSize;

const rainDrops = [];


for( let x = 0; x < columns; x++ ) {
	rainDrops[x] = 1;
}

const draw = () => {
	context.fillStyle = 'rgba(0, 0, 0, 0.09)';
	context.fillRect(0, 0, canvas.width, canvas.height);
	
	context.fillStyle = '#9742ff';
	context.font = fontSize + 'px monospace';

	for(let i = 0; i < rainDrops.length; i++)
	{
		const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
		context.fillText(text, i*fontSize, rainDrops[i]*fontSize);
		
		if(rainDrops[i]*fontSize > canvas.height && Math.random() > 0.975){
			rainDrops[i] = 0;
        }
		rainDrops[i]++;
	}
};

setInterval(draw, 30);



"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const nav = document.querySelector(".nav");
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");
const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach(btn => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

//button scrolling

btnScrollTo.addEventListener("click", function (e) {
  const s1cords = section1.getBoundingClientRect();
  section1.scrollIntoView({ behavior: "smooth" });
});

//////////////////////////////////////
//page navigation
// document.querySelectorAll(".nav__link").forEach(function (el) {
//   el.addEventListener("click", function (e) {
//     e.preventDefault();
//     const id = this.getAttribute("href");
//     document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//   });
// });

//1. add event listener to common parent element
//2. determine what element originated the event

document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();

  //matching strategy
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

//tabbed component

// tabs.forEach(t=> t.addEventListener("click", ()=> console.log("Tab")))
//using events delegations
tabsContainer.addEventListener("click", function (e) {
  e.preventDefault();
  const clicked = e.target.closest(".operations__tab");

  if (!clicked) return;

  tabs.forEach(t => t.classList.remove("operations__tab--active"));
  tabsContent.forEach(c => c.classList.remove("operations__content--active"));

  //activate tab

  clicked.classList.add("operations__tab--active");
  //activating tab content
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});

//menu fade animation
//mouse over is kinda the same aas mouse enter but mouse enter does not bubble
const handleover = function (e) {
  e.preventDefault();
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");
    const logo = link.closest(".nav").querySelector("img");

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};
//we use the bind to pass an argument into a handler function
//to ass additional values we use the this keyword
nav.addEventListener("mouseover", handleover.bind(0.5));
nav.addEventListener("mouseout", handleover.bind(1));

// sticky navigation

const header = document.querySelector(".header");
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  entry.isIntersecting
    ? nav.classList.remove("sticky")
    : nav.classList.add("sticky");
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`, //adds a box of 90 pixels to the nav
});
headerObserver.observe(header);

//reveal sections
const allSections = document.querySelectorAll(".section");
const revealsection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target); //better for performance
};

const sectionObserver = new IntersectionObserver(revealsection, {
  root: null,
  threshold: 0.15,
});
allSections.forEach(function (section) {
  sectionObserver.observe(section);
  // section.classList.add("section--hidden");
});

//lazy loading images
const imgTargets = document.querySelectorAll("img[data-src]");
const loadImg = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  //relace src with data-src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener("load", function () {
    entry.target.classList.remove("lazy-img");
    //wait for the image to finish loading before removing the classList ....this is because when users are using slow internet the image will still be blured till the whole image loads
    observer.unobserve(entry.target);
  });
};
const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: "200px",
});

imgTargets.forEach(img => imgObserver.observe(img));

//implementing the slider component

const slides = document.querySelectorAll(".slide");
const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");
let curSlide = 0;
const maxSlide = slides.length;
const dotContainer = document.querySelector(".dots");

// const slider = document.querySelector(".slider");
// slider.style.transform = "scale(0.2) translateX(-800px)";
// slider.style.overflow = "visible";

const createDots = function () {
  slides.forEach(function (_, i) {
    dotContainer.insertAdjacentHTML(
      "beforeend",
      `<button class="dots__dot" data-slide = "${i}"></button>`
    );
  });
};
createDots();

const activateDot = function (slide) {
  document
    .querySelectorAll(".dots__dot")
    .forEach(dot => dot.classList.remove("dots__dot--active"));

  document
    .querySelector(`.dots__dot[data-slide = "${slide}"]`)
    .classList.add("dots__dot--active");
};
activateDot(0);
const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - curSlide)}%)`)
  );
};
goToSlide(0);
//next slide
const nextSlide = function () {
  curSlide === maxSlide - 1 ? (curSlide = 0) : curSlide++;
  goToSlide(curSlide);
  activateDot(curSlide);
};
const prevSlide = function () {
  curSlide === 0 ? (curSlide = maxSlide - 1) : curSlide--;
  goToSlide(curSlide);
  activateDot(curSlide);
};
//to the next slide
btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", prevSlide);

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") prevSlide();
  e.key === "ArrowRight" && nextSlide();
});

dotContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("dots__dot")) {
    const { slide } = e.target.dataset;
    goToSlide(slide);
    activateDot(slide);
  }
});

//sticky navigation old method
//making the menu bar attached to the top page

//the scroll event is not efficiient and should be avoided
//bad perfomance
// const initiallCoords = section1.getBoundingClientRect();

// window.addEventListener("scroll", function (e) {
//   e.preventDefault();
//   if (window.scrollY > initiallCoords.top) nav.classList.add("sticky");
//   else nav.classList.remove("sticky");
// });

//this call back will e called when the target section1 intersects the root element in the options
//entries can be an array

// const obsCallBack = function (entries, observer) {
//   entries.forEach(entr => {
//     console.log(entr);
//   });
// };

// const obsOptions = {
//   root: null,
//   threshold: [0, 0.2], //means when the element enters the view and when the element is completely out of the view
// };

// const observer = new IntersectionObserver(obsCallBack, obsOptions);
// observer.observe(section1);

///////////////////////////////////
/*
//selecting elements

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector(".header");
const allSections = document.querySelectorAll(".section");
console.log(allSections);

document.getElementById("section--1");
const button = document.getElementsByTagName("button"); //all elements with the name button
console.log(button);

document.getElementsByClassName("btn");

//creating and inserting elements
// .insertAdjacentHTML
// refer back to bankist app
// BUG;
const message = document.createElement("div");
// creates an element that is stored in message.......it is not in the webage
message.classList.add("cookie-message");
// message.textContent = "We use cookies for improved functionality and analytics";
message.innerHTML = `We use cookies for improved functionality and analytics. <button class ="btn btn--close-cookie"> Got it</button>`;

// header.prepend(message); //on top
header.append(message);
//the elemennt message is in the dom and cannot be in multile places at he same time.....it is shown once
//to create multile copies of an element we have to create a copy of the first element

// header.append(message.cloneNode(true));

//passing true to the clonenode means that also the child elements will also be copied

// header.before(message);
// header.after(message);

// delete elements
document
  .querySelector(".btn--close-cookie")
  .addEventListener("click", function () {
    message.remove();
    // older way of removing things
    //you select the parent element then remove the child
    // message.parentElement.removeChild(message);
  });

//styles
message.style.backgroundColor = "#37383d";
message.style.width = "120%";

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + "px";

///css custom properties

document.documentElement.style.setProperty("--color-primary", "orangered");

//atributtes
const logo = document.querySelector(".nav__logo");
console.log(logo.alt);
//works on standard properties
console.log(logo.className);

logo.alt = "Beautiful minimalist logo";

//non standard
console.log(logo.getAttribute("designer"));

logo.setAttribute("company", "Bankist");

console.log(logo.src);
console.log(logo.getAttribute("src"));

const link = document.querySelector(".nav__link--btn");
// const link = document.querySelector(".twitter-link");

console.log(link.href);
console.log(link.getAttribute("href"));

//data atributes
// always has to sttart with data
console.log(logo.dataset.versionNumber);

// classes
//
logo.classList.add("c", "j");
logo.classList.remove("c", "j");
logo.classList.toggle("c");
logo.classList.contains("c");

// don't use
// ovewrites the classes that are already there
// logo.className = "wilfred";

//////////////////////////////////
//Page coordinates

const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

btnScrollTo.addEventListener("click", function (e) {
  const s1cords = section1.getBoundingClientRect();
  console.log(s1cords);
  
  console.log(e.target.getBoundingClientRect());
  
  console.log("current scroll (X, Y)", window.pageXOffset, pageYOffset);
  
  console.log(
    "Height/Width viewport",
    document.documentElement.clientHeight,
    document.documentElement.clientHeight
  );
    
    //scrolling
    //current position + current scroll
    
    // old schoolway
    
    // window.scrollTo({
      //   left: s1cords.left + window.pageXOffset,
      //   top: s1cords.top + window.pageYOffset,
      //   behavior: "smooth",
      // });
      
  // new school way
  section1.scrollIntoView({ behavior: "smooth" });
});

//event listeners

const h1 = document.querySelector("h1");
//better
//can remove an addevenethandler if we dont need it anymore
// h1.addEventListener("mouseenter", function (e) {
  //   alert("addeventlistener: Great! you are reading the heading :D");
  // });

// //old school
// //cannnot add multiple event listeners too the same event
// h1.onmouseenter = function (e) {
  //   alert("addeventlistener: Great! you are reading the heading :D");
  // };
  
  //can remove an addevenethandler if we dont need it anymore
  //this makes it that we can only listen for the event once
  
const alertH1 = function (e) {
  alert("addeventlistener: Great! you are reading the heading :D");
  };
  h1.addEventListener("mouseenter", alertH1);
  //timer to removt the event listener
  //the event listener can be removed at any point inside the code
  setTimeout(() => h1.removeEventListener("mouseenter", alertH1), 3000);
  
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

document.querySelector(".nav__link").addEventListener("click", function (e) {
  e.preventDefault;
  this.style.backgroundColor = randomColor();
  console.log("link", e.target, e.currentTarget);
  
  //stop event propagation
  //prevents the paret elements from handling the event due to DOM event propagation
  e.stopPropagation();
  
  //is not a good practise
  });

document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault;
  this.style.backgroundColor = randomColor();
  console.log("container", e.target, e.currentTarget);
  });
document.querySelector(".nav").addEventListener(
  "click",
  function (e) {
    e.preventDefault;
    this.style.backgroundColor = randomColor();
    console.log("Nav bar", e.target, e.currentTarget);
    },
    false
    );
//when the use capture parameter is set to true abive the event handler listens to capturing events instead of the bubling events
    

//DOM traversing
//event delegation
const h1 = document.querySelector("h1");

//Going downwards : child
console.log(h1.querySelectorAll(".highlight"));
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = "white";

// going upwards parents
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest(".header").style.background = "var(--gradient-secondary)";
//closest method finds parents

console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function (e) {
  if (e !== h1) {
    e.style.transform = "scale(0.5)";
  }
});

*/

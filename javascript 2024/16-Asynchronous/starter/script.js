"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

const getJSON = function (url, errorMsg = "Something went wrong") {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
    return response.json();
  });
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText("beforeend", msg);
  //   countriesContainer.style.opacity = 1;
};

//Building UI

//oldschool way
const renderCountry = function (data, className = "") {
  const html = `
      <article class="country ${className}">
        <img class="country__img" src="${data.flags.png}" />
        <div class="country__data">
          <h3 class="country__name">${data.name.common}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${(
            data.population / 1000000
          ).toFixed(1)} people</p>
          <p class="country__row"><span>🗣️</span>${
            Object.values(data.languages)[0]
          }</p>
          <p class="country__row"><span>💰</span>${Object.keys(
            data.currencies
          )}</p>
        </div>
      </article>
  `;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

///////////////////////////////////////

//Asynchronous Javascript And Xml ....allows us to comunicate with remote web servers in an asynchronous way. With AJAX calls we can request data from web servers dynamically

//API .....alication programing interface ....enable applications to talk to each other

//we can build our own api(requires back end development ....node js)

//xm is a data format that wat widely used to transmit data .....back in the day

//AJAX was just a popular name ....poeple use JSON nowadays

///////////////////////
/*
const getCountryAndNeighbour = function (country) {
  //get first country
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
  request.send(); //asyncronous behaviour

  request.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    renderCountry(data);

    //get neigbour country[2]
    const neigbour = data.borders[0];

    if (!neigbour) return;

    const request2 = new XMLHttpRequest();
    request2.open("GET", `https://restcountries.com/v3.1/alpha/${neigbour}`);
    request2.send(); //asyncronous behaviour

    request2.addEventListener("load", function () {
      const [data2] = JSON.parse(this.responseText);
      console.log(data2);
      renderCountry(data2, "neighbour");
    });
  });
};

getCountryAndNeighbour("usa");

//escape callback Hell by using promises

//////////////////////////////////////////////////
// const request = new XMLHttpRequest();
// request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
// request.send()

//promise

//on using promises we nolonger need to rely on events and callbacks functions to handle asynchronous results
//we can chain promises to escape callback hell
//they are time sensitive

//is an object that is used as a placeholder or the future result of an asynchronous operation
//a container or a place holder of a future value

///////////////////////////////////
//consuming a promise

// const request = fetch(`https://restcountries.com/v3.1/name/portugal`);
// console.log(request);

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };WhereAmI is not defined
const getJSON = function (url, errorMsg = "Something went wrong") {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
    return response.json();
  });
};

//promise easy code
//a flat chain of promises
// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);
//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];
//       if (!neighbour) return;
//       // country2
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then(response => response.json())
//     .then(([data]) => renderCountry(data, "neighbour"))
//     .catch(err =>
//       renderError(`Something went wrong 💣 ${err.message} 💣 . Try again! `)
//     )
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// getCountryData("eportugal");

const getCountryData = function (country) {
  getJSON(`https://restcountries.com/v3.1/name/${country}`, `Country not found`)
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];

      if (!neighbour) throw new Error("No neighbour found!");

      // country2
      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        `Country not found`
      );
    })
    .then(([data]) => renderCountry(data, "neighbour"))
    .catch(err =>
      renderError(`Something went wrong 💣 ${err.message} 💣 . Try again! `)
    )
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener("click", function () {
  getCountryData("australia");
});

// getCountryData("portugal");

//coding challange

//no free reverse geocoding Api
const whereAmI = function (lat, lng) {
  return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then(response => {
      console.log(response);
      if (!response.ok) throw new Error();
      return response.json();
    })
    .then(data => {
      console.log(data);
    });
};

whereAmI(0.1545604, 37.908383);
//////////////////////
//event loop practice

console.log("Test start");
setTimeout(() => console.log(" 0 sec timeout"), 0); //will be places in the callback que
Promise.resolve("resolve promise 1").then(res => console.log(res)); //will be put in the microstasks que.....will be the first to be executed since microtasks are iven priority over microtasks
Promise.resolve("resolved promise 2").then(res => {
  for (let i = 0; i < 1000; i++) {
    console.log(res);
  }
});
console.log("Test End");


//creating a promise
//promisifying... used to wrap old callback based functions into promises
//converting callback based asynchronous behaviour to promise based

const lotteryPromise = new Promise(function (resolve, reject) {
  console.log("Lotter draw is happening");
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve("you win"); //marks the promise as fulfilled
    } else {
      reject(new Error("You lost your money"));
    }
  }, 2000);
});
lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

//promisifying set timeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};
//cosuming the promise

wait(2)
  .then(() => {
    console.log("i waited for 2 seconds");
    return wait(1);
  })
  .then(() => console.log("I waited for 1 second"));

// setTimeout(() => {
//   console.log('1 second passed');
//   setTimeout(() => {
//     console.log('2 seconds passed');
//     setTimeout(() => {
//       console.log('3 second passed');
//       setTimeout(() => {
//         console.log('4 second passed');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

//creating a fullfilled or a rejected promise immediately
Promise.resolve("abc").then(x => console.log(x));
Promise.reject(new Error("problem!")).catch(y => console.log(y));


console.log("Getting the Position");

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// getPosition().then(pos => console.log(pos));


const whereAmI = function () {
  getPosition()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;

      return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    })
    .then(res => {
      if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
      return res.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);

      return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
    })
    .then(res => {
      if (!res.ok) throw new Error(`Country not found (${res.status})`);

      return res.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(err => console.error(`${err.message} 💥`));
};

btn.addEventListener('click', whereAmI);

let currentImg;
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};
const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement("img");
    img.onload = () => resolve(img);
    img.onerror = () => reject(err => new Error(err));
    img.src = imgPath;

    const images = document.querySelector(".images");
    images.appendChild(img);
  });
};
createImage("img/img-1.jpg")
  .then(img => {
    currentImg = img;
    console.log("image loaded succesfully", currentImg);
    return wait(2).then(() => currentImg);
  })
  .then(() => {
    currentImg.style.display = "none";
    return createImage("img/img-2.jpg");
  })
  .then(img => {
    currentImg = img;
    return wait(2).then(() => currentImg);
  })
  .then(() => (currentImg.style.display = "none"))
  .catch(err => console.error(err));


//async , await

//creating an asyncronous function
//easier
//this function is running in the background and is not blocking the callstack
// BUG ....the code below does not work, ...the reverse geolocation api has to be paid for....for the code to work, look for another free api.....or pay fr it yourself
// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };
// const whereAmI = async function () {
//   try {
//     // Geolocation
//     const pos = await getPosition();
//     const { latitude: lat, longitude: lng } = pos.coords;

//     // Reverse geocoding
//     const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     if (!resGeo.ok) throw new Error("Problem getting location data");

//     const dataGeo = await resGeo.json();
//     console.log(dataGeo);

//     // Country data
//     const res = await fetch(
//       `https://restcountries.eu/rest/v2/name/${dataGeo.country}`
//     );

//     const data = await res.json();
//     console.log(data);
//     renderCountry(data[0]);
//   } catch (err) {
//     console.error(`${err} 💥`);
//     renderError(`💥 ${err.message}`);
//   }
// };
// whereAmI();
// console.log("FIRST"); //to show that the fnction above is asyncronous

//ERRO HANDLING ...

//TRY ...CATCH

// is used to handle real errors in an async function
// try {
//   let y = 1;
//   const x = 2;
//   x = 3;
// } catch (err) {
//   alert(err.message);
// }

//////////////////////////////////////////

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
const whereAmI = async function () {
  try {
    // Geolocation
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    // Reverse geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    if (!resGeo.ok) throw new Error("Problem getting location data");

    const dataGeo = await resGeo.json();

    // Country data
    const res = await fetch(
      `https://restcountries.eu/rest/v2/name/${dataGeo.country}`
    );

    const data = await res.json();
    renderCountry(data[0]);
  } catch (err) {
    console.error(`${err} 💥`);
    renderError(`💥 ${err.message}`);

    //reject promise
    throw err;
  }
};
console.log("FIRST"); //to show that the fnction above is asyncronous
const city = whereAmI();
console.log(city); //when this is run the promise shows pending

//mixing promises
whereAmI()
  .then(city => console.log(city))
  .catch(err => console.log(err.message))
  .finally(() => console.log(" finished")); //not going to work BUG
console.log("SECOND"); //to show that the fnction above is asyncronous

//using async await
//iffie
(async function () {
  try {
    const city = await whereAmI();
    console.log(city);
  } catch (err) {
    console.error(err.message);
  }
  console.log("3 finished"); //put the finally() outside the try and catch
});

//////////
//never use an async function without a try and catch

///////////////////////////////////////////
//PROMISE.ALL()

const get3Countries = async function (c1, c2, c3) {
  try {
    // const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
    // const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
    // const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);
    //the above code runs one after the other waisting loading time

    //the code below runs them all at once saving loading time
    const data = await Promise.all([
      await getJSON(`https://restcountries.com/v3.1/name/${c1}`),
      await getJSON(`https://restcountries.com/v3.1/name/${c2}`),
      await getJSON(`https://restcountries.com/v3.1/name/${c3}`),
    ]);
    console.log(data.map(d => d[0].capital));
    //if one of the romises rejects the whole thing rejects
    //shortcircuted
  } catch (err) {
    console.error(err);
  }
};

get3Countries("portugal", "Kenya", "Somalia");



//promise.race
//returns the furst value that is settled doesnt matter if the promise got rejected or fullfilled
//only gets one result
//a romise that got rejected can also win the race
(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.com/v3.1/name/italy`),
    getJSON(`https://restcountries.com/v3.1/name/egypt`),
    getJSON(`https://restcountries.com/v3.1/name/mexico`),
  ]);
  console.log(res[0]);
})();

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function (sec) {
      reject(new Error("Request took too long"));
    }, sec * 1000);
  });
};

//promise.race

//in Promise.race we have the first parameter (getJSON) and the second parameter race each other and the one thhat happens first is executed
//so if it takes too long to load the whole thing is rejected
//deending on the speed of the internet connection
Promise.race([
  getJSON(`https://restcountries.com/v3.1/name/tanzania`),
  timeout(0.1),
])
  .then(res => console.log(res[0]))
  .catch(err => console.error(err));

//
//promise.allSettled
//takes in an array of promises and returns the settled ones
//it never shortcircuits

Promise.allSettled([
  Promise.resolve("success"),
  Promise.reject("error"),
  Promise.resolve("successsss"),
]).then(res => console.log(res));

//promise.all
//returns when all the promises are fulfilled
Promise.all([
  Promise.resolve("success"),
  Promise.reject("error"),
  Promise.resolve("successsss"),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));

//promise.any
//takes in an array of multiple promises
//it returns the first fullfiled promise and ignores the rejected promises

Promise.any([
  Promise.resolve("success"),
  Promise.reject("error"),
  Promise.resolve("successsss"),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));
*/

//coding challange

const imgContainer = document.querySelector(".images");
const imgArr = ["img/img-1.jpg", "img/img-2.jpg", "img/img-3.jpg"];
let currentImg;

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement("img");
    img.src = imgPath;

    img.addEventListener("load", function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener("error", function () {
      reject(new Error("Image not found"));
    });
  });
};

const loadNpause = async function () {
  try {
    let image = await createImage("img/img-1.jpg");
    currentImg = image;
    wait(2);
    currentImg.style.display = "none";
    currentImg.classList.add("parallel");

    image = await createImage("img/img-2.jpg");
    currentImg = image;
    wait(2);
    currentImg.style.display = "none";
    currentImg.classList.add("parallel");
  } catch (error) {
    console.error(error);
  }
};
loadNpause();

const loadAll = async function (imgArr) {
  const imgs = imgArr.map(async img => await createImage(img));
  try {
    const resolvedImages = await Promise.all(imgs);
    console.log(resolvedImages); // An array of resolved images
  } catch (error) {
    console.error("Error loading images:", error);
  }
};
loadAll(imgArr);

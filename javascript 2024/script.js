const words ="M";//add as ore words as needed
const ANIMATION_DURATION = 4000; //ms

  //separate each character to its own div
  const character = words.split("") .forEach((char, i) => {
  function createElement(offset){
    const div= document.createElement("div");
    div.innerText = char;
    div.classList.add("character");
    div.style.animationDelay=`-${i*(ANIMATION_DURATION/16) - offset}ms`

    return div;
  }

  document.getElementById("spiral").append(createElement(0));
  });
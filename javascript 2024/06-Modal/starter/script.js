"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal"); //to print all the buttons of class name show-modal
console.log(btnsOpenModal);
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
//limitation of querry selector
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal); /*function () {
    // console.log("Button clicked");
    // modal.classList.remove("hidden"); //removes the hidden class in the modal(text)
    // overlay.classList.remove("hidden"); //removes he hidden class in the overlay
    // //modal.file.display = "block";
  });*/

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// overlay.addEventListener("click", function () {
//   modal.classList.add("hidden");
//   overlay.classList.add("hidden");
// });

document.addEventListener("keydown", function (event) {
  //   console.log("A key was pressed");
  //   console.log(event.key);
  if (event.key === "Escape" && !modal.classList.contains("hidden")) {
    // if (!modal.classList.contains("hidden")) {
    closeModal();
    // }
  }
});

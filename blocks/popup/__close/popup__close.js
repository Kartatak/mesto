function closeform() {
  let backdrop = document.querySelector(".backdrop");
  backdrop.classList.remove("backdrop_opened");
}

let buttonClose = document.querySelector(".popup__close");
buttonClose.addEventListener("click", closeform);

function openform() {
  let backdrop = document.querySelector(".backdrop");
  backdrop.classList.add("backdrop_opened");
}

let buttonEdit = document.querySelector(".button-edit");
buttonEdit.addEventListener("click", openform);

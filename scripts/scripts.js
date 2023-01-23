//____Button-edit
function openform() {
  let overlay = document.querySelector(".overlay");
  overlay.classList.add("overlay_opened");
}

let buttonEdit = document.querySelector(".button-edit");
buttonEdit.addEventListener("click", openform);

//_____Element__heart
function changecolour(heart) {
  heart.classList.toggle("element__heart_active");
}

//_____Popup__close
function closeform() {
  let overlay = document.querySelector(".overlay");
  overlay.classList.remove("overlay_opened");
}

let buttonClose = document.querySelector(".popup__close");
buttonClose.addEventListener("click", closeform);

//_____Popup__submit
let formElement = document.querySelector(".popup__submit");
let nameInput = document.querySelector(".popup__name");
let jobInput = document.querySelector(".popup__job");
let profileTitle = document.querySelector(".profile__title");
let profileText = document.querySelector(".profile__text");

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileText.textContent = jobInput.value;
  closeform();
}

formElement.addEventListener("click", handleFormSubmit);

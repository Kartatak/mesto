let popup = document.querySelector(".popup");
let formElement = document.querySelector(".popup__submit");
let nameInput = document.querySelector(".popup__name");
let jobInput = document.querySelector(".popup__job");
let profileTitle = document.querySelector(".profile__title");
let profileText = document.querySelector(".profile__text");
let buttonEdit = document.querySelector(".profile__button-edit");
let buttonClose = document.querySelector(".popup__close");

function openform() {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileText.textContent;
  popup.classList.add("popup_opened");
}

function changecolour(event) {
  event.currentTarget.classList.toggle("element__heart_active");
}

function closeform() {
  popup.classList.remove("popup_opened");
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileText.textContent = jobInput.value;
  closeform();
}

buttonEdit.addEventListener("click", openform);
formElement.addEventListener("click", handleFormSubmit);
buttonClose.addEventListener("click", closeform);
let hearts = document.querySelectorAll(".element__heart");
for (let i = 0; i < hearts.length; i++) {
  hearts[i].addEventListener("click", changecolour);
}

let popupProfile = document.querySelector("#popup_profile");
let popupPlace = document.querySelector("#popup_place");
let form = document.querySelector(".popup__form");
let nameInput = document.querySelector("#popup_name");
let jobInput = document.querySelector("#popup_job");
let profileTitle = document.querySelector(".profile__title");
let profileText = document.querySelector(".profile__text");
let buttonEdit = document.querySelector(".profile__button-edit");
let buttonClose = document.querySelector(".popup__close");
let buttonPlus = document.querySelector(".profile__button");
let textInput = document.querySelector("#popup_text");
let linkInput = document.querySelector("#popup_link");
const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

function openform() {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileText.textContent;
  popupProfile.classList.add("popup_opened");
}

function openButtonPlus() {
  textInput.value = "";
  linkInput.value = "";
  popupPlace.classList.add("popup_opened");
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
form.addEventListener("submit", handleFormSubmit);
buttonClose.addEventListener("click", closeform);
buttonPlus.addEventListener("click", openButtonPlus);

// let hearts = document.querySelectorAll(".element__heart");
// for (let i = 0; i < hearts.length; i++) {
//   hearts[i].addEventListener("click", changecolour);
// }

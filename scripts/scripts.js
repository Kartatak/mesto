let popupProfile = document.querySelector("#popup_profile");
let popupPlace = document.querySelector("#popup_place");
let form = document.querySelector(".popup__form");
let nameInput = document.querySelector("#popup_name");
let jobInput = document.querySelector("#popup_job");
let profileTitle = document.querySelector(".profile__title");
let profileText = document.querySelector(".profile__text");
let buttonOpenProfile = document.querySelector(".profile__button-edit");
let buttonCloseProfile = document.querySelector("#popupCloseProfile");
let buttonClosePlace = document.querySelector("#popupClosePlace");
let buttonOpenPlace = document.querySelector(".profile__button");
let textInput = document.querySelector("#popup_text");
let linkInput = document.querySelector("#popup_link");
let hearts = document.querySelectorAll(".element__heart");
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

function openformProfile() {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileText.textContent;
  popupProfile.classList.add("popup_opened");
}

function openformPlace() {
  textInput.value = "";
  linkInput.value = "";
  popupPlace.classList.add("popup_opened");
}

function closeformProfile() {
  popupProfile.classList.remove("popup_opened");
}

function closeformPlace() {
  popupPlace.classList.remove("popup_opened");
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileText.textContent = jobInput.value;
  closeform();
}

buttonOpenProfile.addEventListener("click", openformProfile);
form.addEventListener("submit", handleFormSubmit);
buttonCloseProfile.addEventListener("click", closeformProfile);
buttonOpenPlace.addEventListener("click", openformPlace);
buttonClosePlace.addEventListener("click", closeformPlace);

for (let i = 0; i < hearts.length; i++) {
  hearts[i].addEventListener("click", function (evt) {
    const eventTarget = evt.target;
    eventTarget.classList.toggle("element__heart_black");
  });
}

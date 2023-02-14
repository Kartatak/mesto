let popupProfile = document.querySelector("#popup_profile");
let popupPlace = document.querySelector("#popup_place");
let form = document.querySelector("#form_profile");
let formPlace = document.querySelector("#form_place");
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
let elementImage = document.querySelector(".element__image");
let buttonCloseImg = document.querySelector(".popup-img__close");
let popupImg = document.querySelector(".popup-img");

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
  closeformProfile();
}

function addcard(name, link) {
  const elem = elemTemplate.querySelector(".element").cloneNode(true);
  elem.querySelector(".element__image").src = link;
  elem.querySelector(".element__text").textContent = name;
  elementsArray.append(elem);
  let heart = elem.querySelector(".element__heart");
  heart.addEventListener("click", function (evt) {
    const eventTarget = evt.target;
    eventTarget.classList.toggle("element__heart_black");
  });
  let buttonDelete = elem.querySelector(".element__garbage");
  buttonDelete.addEventListener("click", function (evt) {
    evt.target.parentElement.parentElement.remove();
  });
  let elementImage = elem.querySelector(".element__image");
  elementImage.addEventListener("click", function () {
    popupImg.classList.add("popup-img_opened");
    popupImg.querySelector(".popup-img__img").src = link;
    popupImg.querySelector(".popup-img__title").textContent = name;
  });
}

// template

const elemTemplate = document.querySelector("#templateElement").content;
const elementsArray = document.querySelector(".elements");
for (let i = 0; i < initialCards.length; i++) {
  addcard(initialCards[i].name, initialCards[i].link);
}

// submit_mesto

function formPlaceSubmit(evt) {
  evt.preventDefault();
  const name = textInput.value;
  const link = linkInput.value;
  addcard(name, link);
  closeformPlace();
}

function closePopupImg() {
  popupImg.classList.remove("popup-img_opened");
}

buttonOpenProfile.addEventListener("click", openformProfile);
form.addEventListener("submit", handleFormSubmit);
formPlace.addEventListener("submit", formPlaceSubmit);
buttonCloseProfile.addEventListener("click", closeformProfile);
buttonOpenPlace.addEventListener("click", openformPlace);
buttonClosePlace.addEventListener("click", closeformPlace);
buttonCloseImg.addEventListener("click", closePopupImg);

const popupProfile = document.querySelector("#popup_profile");
const popupPlace = document.querySelector("#popup_place");
const popupImg = document.querySelector("#popup_img");
const popupImgImg = popupImg.querySelector(".popup-img__img");
const popupImgTitle = popupImg.querySelector(".popup-img__title");
const formProfile = document.querySelector("#form_profile");
const formPlace = document.querySelector("#form_place");
const nameInput = document.querySelector("#popup_name");
const jobInput = document.querySelector("#popup_job");
const profileTitle = document.querySelector(".profile__title");
const profileText = document.querySelector(".profile__text");
const buttonOpenProfile = document.querySelector(".profile__button-edit");
const buttonOpenPlace = document.querySelector(".profile__button");
const textInput = document.querySelector("#popup_text");
const linkInput = document.querySelector("#popup_link");
const elemTemplate = document.querySelector("#templateElement").content;
const elementsArray = document.querySelector(".elements");

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

function createCard(name, link) {
  const elem = elemTemplate.querySelector(".element").cloneNode(true);
  elem.querySelector(".element__image").src = link;
  elem.querySelector(".element__text").textContent = name;
  const heart = elem.querySelector(".element__heart");
  heart.addEventListener("click", function (evt) {
    const eventTarget = evt.target;
    eventTarget.classList.toggle("element__heart_black");
  });
  const buttonDelete = elem.querySelector(".element__garbage");
  buttonDelete.addEventListener("click", function (evt) {
    evt.target.closest(".element").remove();
  });
  const elementImage = elem.querySelector(".element__image");
  elementImage.addEventListener("click", function () {
    popupImgImg.src = link;
    popupImgTitle.textContent = name;
    openPopup(popupImg);
  });
  return elem;
}

function openPopup(popup) {
  popup.classList.add("popup_opened");
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileText.textContent = jobInput.value;
  closePopup(popupProfile);
}

function handlePlaceFormSubmit(evt) {
  evt.preventDefault();
  const name = textInput.value;
  const link = linkInput.value;
  const card = createCard(name, link);
  elementsArray.prepend(card);
  textInput.value = "";
  linkInput.value = "";
  closePopup(popupPlace);
}

// template
for (let i = 0; i < initialCards.length; i++) {
  const card = createCard(initialCards[i].name, initialCards[i].link);
  elementsArray.prepend(card);
}

nameInput.value = profileTitle.textContent;
jobInput.value = profileText.textContent;

buttonOpenProfile.addEventListener("click", function () {
  openPopup(popupProfile);
});
buttonOpenPlace.addEventListener("click", function () {
  openPopup(popupPlace);
});
Array.from(document.querySelectorAll(".popup__close")).forEach(function (
  button
) {
  const popup = button.closest(".popup");
  button.addEventListener("click", function () {
    closePopup(popup);
  });
});
formProfile.addEventListener("submit", handleProfileFormSubmit);
formPlace.addEventListener("submit", handlePlaceFormSubmit);

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
const popups = Array.from(document.querySelectorAll(".popup"));
const submitButtonPlace = document.querySelector("#submitButtonPlace");

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
  const elementImage = elem.querySelector(".element__image");
  const buttonDelete = elem.querySelector(".element__garbage");
  const heart = elem.querySelector(".element__heart");
  const elementText = elem.querySelector(".element__text");
  elementImage.src = link;
  elementImage.alt = name;
  elementText.textContent = name;
  heart.addEventListener("click", function (evt) {
    const eventTarget = evt.target;
    eventTarget.classList.toggle("element__heart_black");
  });
  buttonDelete.addEventListener("click", function (evt) {
    evt.target.closest(".element").remove();
  });
  elementImage.addEventListener("click", function () {
    popupImgImg.src = link;
    popupImgImg.alt = name;
    popupImgTitle.textContent = name;
    openPopup(popupImg);
  });
  return elem;
}

function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closeByEscape);
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closeByEscape);
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

buttonOpenProfile.addEventListener("click", function () {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileText.textContent;
  openPopup(popupProfile);
});

buttonOpenPlace.addEventListener("click", function () {
  openPopup(popupPlace);
  toggleButtonState(
    [textInput, linkInput],
    submitButtonPlace,
    "popup-form__submit_non-active"
  );
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

function closeByEscape(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
}

popups.forEach((popup) => {
  popup.addEventListener("click", (evt) => {
    if (evt.target.classList.contains("popup")) {
      closePopup(popup);
    }
  });
});

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

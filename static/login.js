import { getDataForm } from "./script.js";

const button = document.querySelector(".form__button");
button.addEventListener("click", (e) => {
  e.preventDefault();
  getDataForm(document.forms);
});

import { getDataForms } from "./script.js";

const button = document.querySelector(".form__button");
button.addEventListener("click", (e) => {
  e.preventDefault();
  getDataForms(document.forms);
});

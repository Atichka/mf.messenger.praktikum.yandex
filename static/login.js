import { getDataForm } from "./script.js";

const button = document.querySelector(".form__button");
const form = document.forms.formlogin;
button.addEventListener("click", (e) => {
  e.preventDefault();
  getDataForm(document.forms);
});

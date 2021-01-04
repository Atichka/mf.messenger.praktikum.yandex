import { getDataForm } from "./script.js";

const button = document.querySelector(".message__button-send");

button.addEventListener("click", (e) => {
  e.preventDefault();
  getDataForm(document.forms);
});

import { getDataForms } from "./script.js";

const button = document.querySelector(".button__save");

button.addEventListener("click", (e) => {
  e.preventDefault();
  getDataForms(document.forms);
});

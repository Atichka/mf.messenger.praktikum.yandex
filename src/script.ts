import { FormData } from "./contant.js";

const forms: HTMLFormElement[] = [...document.forms];

forms.forEach((form) => {
  form.addEventListener("submit", (e: Event) => {
    e.preventDefault();
    let formData = new FormData(form);
    let obj: { [key: string]: FormDataEntryValue } = {};
    for (let [name, value] of formData) {
      obj[name] = value;
    }
    console.log(obj);
  });
});

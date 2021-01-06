const form = document.forms;

export function getDataForms() {
  for (let i = 0; i < form.length; i++) {
    let formData = new FormData(form[i]);
    let obj = {};
    for (let [name, value] of formData) {
      obj[name] = value;
    }
    console.log(obj);
  }
}

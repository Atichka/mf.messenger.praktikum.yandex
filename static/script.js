export function getDataForm(forms) {
  for (let i = 0; i < forms.length; i++) {
    let formData = new FormData(forms[i]);
    let obj = {};
    for (let [name, value] of formData) {
      obj[name] = value;
    }
    console.log(obj);
  }
}

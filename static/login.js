const button = document.querySelector('.form__button');
const form = document.forms.form;

button.addEventListener('click', function() {
    let formData = new FormData(form);
    let obj = {};
    for(let [name, value] of formData) {
        obj[name] = value;
    }
    console.log(obj);
})
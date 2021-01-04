//const button = document.querySelector('.form__button');
const form = document.forms.form;
let obj = {};

// button.addEventListener('click', function() {
//     let formData = new FormData(form);
    
//     for(let [name, value] of formData) {
//         obj[name] = value;
//     }
//     console.log(obj);
// })

const button = document.querySelector('#submit');
button.addEventListener('click', function(form) {
    let formData = new FormData(form);
    
    for(let [name, value] of formData) {
        obj[name] = value;
    }
    console.log(obj);
});
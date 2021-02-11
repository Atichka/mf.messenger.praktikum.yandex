import { root } from "./contant.js";
function render(root, data) {
    root.innerHTML = data;
}
const template = `
<div class="signin">
      <div class="main">
        <div class="container">
          <h1 class="title">Регистрация</h1>
          <form class="form" name="formsignin">
            <label for="userEmail" class="form__field-name">Email</label>
            <input
              id="userEmail"
              type="email"
              name="email"
              class="form__input"
              minlength="2"
              maxlength="30"
              required
              placeholder="Почта"
            />
            <span id="error-email" class="error"
              >Неправильный формат email</span
            >
            <label for="userLogin" class="form__field-name">Логин</label>
            <input
              id="userLogin"
              type="text"
              name="login"
              class="form__input"
              minlength="2"
              maxlength="30"
              required
              placeholder="ivanivanov"
            />
            <label for="newName" class="form__field-name">Имя</label>
            <input
              id="newName"
              type="text"
              name="first_name"
              class="form__input"
              required
              placeholder="Имя"
            />
            <label for="newSecondName" class="form__field-name">Фамилия</label>
            <input
              id="newSecondName"
              type="text"
              name="second_name"
              class="form__input"
              required
              placeholder="Фамилия"
            />
            <label for="phone" class="form__field-name">Телефон</label>
            <input
              id="phone"
              class="form__input"
              type="tel"
              name="phone"
              placeholder="+7 (909) 967 30 30"
              minlength="11"
              maxlength="18"
            />
            <span class="error">телефон в формате: +7 (909) 967 30 30</span>
            <label for="userPassword" class="form__field-name">Пароль</label>
            <input
              id="userPassword"
              type="password"
              name="password"
              class="form__input"
              required
              placeholder="Пароль"
            />
            <label for="userPasswordRepeat" class="form__field-name"
              >Пароль (ещё раз)</label
            >
            <input
              id="userPasswordRepeat"
              type="password"
              name="passwordRepeat"
              class="form__input"
              required
              placeholder="Пароль"
            />
            <span id="error-password" class="error">Пароли не совпадают</span>
            <button type="submit" class="form__button form__top-signin">
              Зарегистрироваться
            </button>
            <button
              onclick="window.location.href = './login.html'"
              class="form__signup-button"
            >
              Войти
            </button>
          </form>
        </div>
      </div>
    </div>
`;
const pageTemplate = Handlebars.compile(template);
render(root, pageTemplate());

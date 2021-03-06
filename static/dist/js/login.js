import { root } from "./contant.js";
function render(root, data) {
    root.innerHTML = data;
}
const template = `
<div class="login">
      <div class="main">
        <div class="container">
          <h1 class="title">Вход</h1>
          <form id="formlogin" class="form" name="formlogin">
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
            <span id="error-login" class="error">Неверный логин</span>
            <label for="userPassword" class="form__field-name">Пароль</label>
            <input
              id="userPassword"
              type="password"
              name="password"
              class="form__input"
              required
              placeholder="Пароль"
            />
            <button type="submit" class="form__button form__top-login">
              Авторизоваться
            </button>
            <button
              onclick="window.location.href = './signin.html'"
              class="form__signup-button"
            >
              Нет аккаунта?
            </button>
            <!-- <a class="link link_button" href="./signin.html">Нет аккаунта?</a> -->
          </form>
        </div>
      </div>
    </div>
`;
const pageTemplate = Handlebars.compile(template);
render(root, pageTemplate());

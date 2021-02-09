import { root } from "./contant.js";

function render(root: any, data: object) {
  root.innerHTML = data;
}

const template = `
<div class="page">
      <div class="profile">
        <div class="profile__container">
          <button
            onclick="window.location.href = './chats.html'"
            class="profile__button-back"
          >
            &larr;
          </button>
        </div>
        <div class="main">
          <div class="profile__photo hide">
            <img src="./images/not-foto.svg" alt="" class="profile__pic" />
            <h1 class="profile__name">Иван</h1>
          </div>
          <div class="profile__info hide">
            <div class="profile__row line">
              <p class="profile__text">Почта</p>
              <p class="text__grey profile__text">pochta@yandex.ru</p>
            </div>
            <div class="profile__row line">
              <p class="profile__text">Логин</p>
              <p class="text__grey profile__text">ivanivanov</p>
            </div>
            <div class="profile__row line">
              <p class="profile__text">Имя</p>
              <p class="text__grey profile__text">Иван</p>
            </div>
            <div class="profile__row line">
              <p class="profile__text">Фамилия</p>
              <p class="text__grey profile__text">Иванов</p>
            </div>
            <div class="profile__row line">
              <p class="profile__text">Имя в чате</p>
              <p class="text__grey profile__text">Иван</p>
            </div>
            <div class="profile__row">
              <p class="profile__text">Телефон</p>
              <p class="text__grey profile__text">+7 (909) 967 30 30</p>
            </div>
          </div>
          <form id="formData" name="formData">
            <div class="profile__info">
              <button class="profile__button-pic"></button>
              <div class="profile__row line">
                <p class="profile__text">Почта</p>
                <input
                  id="userEmail"
                  type="email"
                  name="email"
                  class="profile__input text__grey profile__text"
                  minlength="2"
                  maxlength="30"
                  required
                  placeholder="pochta@yandex.ru"
                />
              </div>
              <div class="profile__row line">
                <p class="profile__text">Логин</p>
                <input
                  id="userLogin"
                  type="text"
                  name="login"
                  class="profile__input text__grey profile__text"
                  minlength="2"
                  maxlength="30"
                  required
                  placeholder="ivanivanov"
                />
              </div>
              <div class="profile__row line">
                <p class="profile__text">Имя</p>
                <input
                  id="newFirstName"
                  type="text"
                  name="first_name"
                  class="profile__input text__grey profile__text"
                  minlength="2"
                  maxlength="30"
                  required
                  placeholder="Иван"
                />
              </div>
              <div class="profile__row line">
                <p class="profile__text">Фамилия</p>
                <input
                  id="newSecondName"
                  type="text"
                  name="second_name"
                  class="profile__input text__grey profile__text"
                  minlength="2"
                  maxlength="30"
                  required
                  placeholder="Иванов"
                />
              </div>
              <div class="profile__row line">
                <p class="profile__text">Имя в чате</p>
                <input
                  id="newDisplayName"
                  type="text"
                  name="display_name"
                  class="profile__input text__grey profile__text"
                  required
                  placeholder="Иван"
                />
              </div>
              <div class="profile__row line">
                <p class="profile__text">Телефон</p>
                <input
                  class="profile__input text__grey profile__text"
                  type="tel"
                  name="phone"
                  placeholder="+79099673030"
                  minlength="11"
                  maxlength="18"
                />
              </div>
            </div>
            <div class="profile__button-container">
              <button type="submit" class="profile__button button__save">
                Сохранить
              </button>
            </div>
          </form>
          <form id="formPassword" name="formPassword">
            <div class="profile__info hide">
              <div class="profile__row line">
                <p class="profile__text">Старый пароль</p>
                <input
                  id="oldPassword"
                  type="password"
                  name="oldPassword"
                  class="profile__input text__grey profile__text"
                  required
                  placeholder="Пароль"
                />
              </div>
              <div class="profile__row line">
                <p class="profile__text">Новый пароль</p>
                <input
                  id="newPassword"
                  type="password"
                  name="newPassword"
                  class="profile__input text__grey profile__text"
                  required
                  placeholder="Пароль"
                />
              </div>
              <div class="profile__row line">
                <p class="profile__text">Повторить новый пароль</p>
                <input
                  id="newPasswordRepeat"
                  type="password"
                  name="newPasswordRepeat"
                  class="profile__input text__grey profile__text"
                  required
                  placeholder="Пароль"
                />
              </div>
              <span class="profile__error">Пароли не совпадают</span>
            </div>
            <div class="profile__button-container hide">
              <button type="submit" class="profile__button button__save">
                Сохранить
              </button>
            </div>
          </form>
          <div class="profile__setting">
            <div class="profile__info hide">
              <div class="profile__row line">
                <a href="./profile.html" class="text__blue profile__text"
                  >Изменить данные</a
                >
              </div>
              <div class="profile__row line">
                <a href="./profile.html" class="text__blue profile__text"
                  >Изменить пароль</a
                >
              </div>
              <div class="profile__row">
                <a href="./profile.html" class="text__red profile__text"
                  >Выйти</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="popup-avatar">
        <div class="popup-avatar__content">
          <p class="popup-avatar__text">Загрузите файл</p>
          <form
            id="formAddFile"
            name="formAddFile"
            enctype="multipart/form-data"
            method="post"
          >
            <input
              type="file"
              class="popup-avatar__link"
              name="avatar"
              accept="image/*,image/jpeg"
            />
          </form>
          <button type="submit" class="profile__button">Поменять</button>
          <span class="popup-avatar__error">Нужно выбрать файл</span>
        </div>
      </div>
    </div>
`;

const pageTemplate = Handlebars.compile(template);

render(root, pageTemplate());

import { root } from "./contant.js";
function render(root, data) {
    root.innerHTML = data;
}
const template = `
<div class="page">
      <div class="container-chats">
        <asade class="chats">
          <a class="profile-link" href="./profile.html">Профиль &#62;</a>
          <div class="search">
            <form id="formSearch" name="formSearch">
              <input
                type="text"
                class="search-field"
                placeholder="Поиск"
                name="search"
              />
            </form>
          </div>
          <ul class="chats-list">
            <li class="chat">
              <img
                src="./images/addPic.png"
                alt="Фотография"
                class="chat__photo"
              />
              <div class="chat__text">
                <h2 class="chat__name">Андрей</h2>
                <p class="chat__message">
                  <span class="chat__you hide">Вы: </span>Изображение
                </p>
              </div>
              <div class="chat__info">
                <time class="chat__time">10:49</time>
                <mark class="chat__counter-message">2</mark>
              </div>
            </li>
            <li class="chat">
              <img
                src="./images/addPic.png"
                alt="Фотография"
                class="chat__photo"
              />
              <div class="chat__text">
                <h2 class="chat__name">Киноклуб</h2>
                <p class="chat__message">
                  <span class="chat__you">Вы: </span>стикер
                </p>
              </div>
              <div class="chat__info">
                <time class="chat__time">12:00</time>
                <mark class="chat__counter-message hide"></mark>
              </div>
            </li>
            <li class="chat">
              <img
                src="./images/addPic.png"
                alt="Фотография"
                class="chat__photo"
              />
              <div class="chat__text">
                <h2 class="chat__name">Илья</h2>
                <p class="chat__message">
                  <span class="chat__you hide">Вы: </span>Друзья, у меня для вас
                  особенный выпуск новостей!...
                </p>
              </div>
              <div class="chat__info">
                <time class="chat__time">15:12</time>
                <mark class="chat__counter-message">4</mark>
              </div>
            </li>
            <li class="chat select-chat">
              <img
                src="./images/addPic.png"
                alt="Фотография"
                class="chat__photo"
              />
              <div class="chat__text">
                <h2 class="chat__name">Вадим</h2>
                <p class="chat__message">
                  <span class="chat__you">Вы: </span>Круто!
                </p>
              </div>
              <div class="chat__info">
                <p class="chat__time">Пт</p>
                <mark class="chat__counter-message hide"></mark>
              </div>
            </li>
            <li class="chat">
              <img
                src="./images/addPic.png"
                alt="Фотография"
                class="chat__photo"
              />
              <div class="chat__text">
                <h2 class="chat__name">тет-а-теты</h2>
                <p class="chat__message">
                  <span class="chat__you hide">Вы: </span>И Human Interface
                  Guidelines и Material Design рекомендуют...
                </p>
              </div>
              <div class="chat__info">
                <p class="chat__time">Ср</p>
                <mark class="chat__counter-message hide"></mark>
              </div>
            </li>
            <li class="chat">
              <img
                src="./images/addPic.png"
                alt="Фотография"
                class="chat__photo"
              />
              <div class="chat__text">
                <h2 class="chat__name">1, 2, 3</h2>
                <p class="chat__message">
                  <span class="chat__you hide">Вы: </span>Миллионы россиян
                  ежедневно проводят десятки часов свое...
                </p>
              </div>
              <div class="chat__info">
                <p class="chat__time">Пн</p>
                <mark class="chat__counter-message hide"></mark>
              </div>
            </li>
            <li class="chat">
              <img
                src="./images/addPic.png"
                alt="Фотография"
                class="chat__photo"
              />
              <div class="chat__text">
                <h2 class="chat__name">Design Destroyer</h2>
                <p class="chat__message">
                  <span class="chat__you hide">Вы: </span>В 2008 году художник
                  Jon Rafman начал собирать...
                </p>
              </div>
              <div class="chat__info">
                <p class="chat__time">Пн</p>
                <mark class="chat__counter-message hide"></mark>
              </div>
            </li>
            <li class="chat">
              <img
                src="./images/addPic.png"
                alt="Фотография"
                class="chat__photo"
              />
              <div class="chat__text">
                <h2 class="chat__name">Day.</h2>
                <p class="chat__message">
                  <span class="chat__you hide">Вы: </span>Так увлёкся работой по
                  курсу, что совсем забыл его анонсир...
                </p>
              </div>
              <div class="chat__info">
                <p class="chat__time">1 Мая 2020</p>
                <mark class="chat__counter-message hide"></mark>
              </div>
            </li>
            <li class="chat">
              <img
                src="./images/addPic.png"
                alt="Фотография"
                class="chat__photo"
              />
              <div class="chat__text">
                <h2 class="chat__name">Стас Рогозин</h2>
                <p class="chat__message">
                  <span class="chat__you hide">Вы: </span>Можно или сегодня или
                  завтра вечером.
                </p>
              </div>
              <div class="chat__info">
                <p class="chat__time">12 Апр 2020</p>
                <mark class="chat__counter-message hide"></mark>
              </div>
            </li>
          </ul>
        </asade>
        <div class="messages">
          <h3 class="messages__not-chat hide">
            Выберите чат чтобы отправить сообщение
          </h3>
          <header class="chat">
            <img src="" alt="" class="chat__photo" />
            <h1 class="chat__name">Вадим</h1>
            <img src="./images/menu.png" alt="" class="chat__menu" />
          </header>
          <main class="main">
            <time class="messages__data">19 июня</time>
            <div class="messages__container">
              <div class="messages__name">
                <p class="messages__message messages__background-grey">
                  Привет! Смотри, тут всплыл интересный кусок лунной космической
                  истории — НАСА в какой-то момент попросила Хассельблад
                  адаптировать модель SWC для полетов на Луну. Сейчас мы все
                  знаем что астронавты летали с моделью 500 EL — и к слову
                  говоря, все тушки этих камер все еще находятся на поверхности
                  Луны, так как астронавты с собой забрали только кассеты с
                  пленкой.
                </p>
                <p class="messages__message messages__background-grey">
                  Хассельблад в итоге адаптировал SWC для космоса, но что-то
                  пошло не так и на ракету они так никогда и не попали. Всего их
                  было произведено 25 штук, одну из них недавно продали на
                  аукционе за 45000 евро.
                </p>
                <p
                  class="messages__time-text messages__background-grey messages__color-grey"
                >
                  11:56
                </p>
                <div class="messages__container-pic">
                  <img
                    src="./images/pic.png"
                    alt="Картинка"
                    class="messages__pic"
                  />
                  <time class="messages__time-pic">11:56</time>
                </div>
              </div>
              <div class="messages__you">
                <p class="messages__message messages__background-blue">
                  Круто!
                </p>
                <p
                  class="messages__time-text messages__background-blue messages__color-blue"
                >
                  12:00
                </p>
              </div>
            </div>
          </main>
          <form id="formmessage" class="message__form" name="formmessage">
            <button type="button" class="message__button-add"></button>
            <input
              type="text"
              class="message__text"
              name="message"
              placeholder="Сообщение"
            />
            <button type="submit" class="message__button-send">&rarr;</button>
          </form>
        </div>
      </div>
    </div>
`;
const pageTemplate = Handlebars.compile(template);
render(root, pageTemplate());

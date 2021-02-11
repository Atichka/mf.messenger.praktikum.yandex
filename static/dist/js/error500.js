import { root } from "./contant.js";
function render(root, data) {
    root.innerHTML = data;
}
const template = `
<div class="page">
      <main class="main">
        <div class="error-container error-five">
          <h1 class="error-container__number">500</h1>
          <p class="error-container__message">Мы уже фиксим</p>
          <a class="error-container__link" href="./chats.html">Назад к чатам</a>
        </div>
      </main>
    </div>
`;
const pageTemplate = Handlebars.compile(template);
render(root, pageTemplate());

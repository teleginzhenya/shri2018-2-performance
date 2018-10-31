Оптимизируйте страницу, выложите на GitHub Pages. Зайдите на https://shri-performance.ru и отправьте урл своей страницы.

Срок сдачи - до 31.10.2018 включительно.

## Описание

В этой секции будет представлен список «улучшений», которые помогли и не помогли улучшить перфоманс:

[Демо и финальная версия](https://teleginzhenya.github.io/shri2018-2-performance/)
  <div align="center">
    <div>
      <sub><sup>🥉 3-ее место, когда-то был первый</sup></sub>
    </div>
      <img alt="third place" src="https://i.imgur.com/7UWvIFb.png" />
  </div>

### Помогло:

- Удалил `React` и все связанное с ним, ноду перенес в `html`
- Убрал лишние ноды из `html`, такие как `#root` и `.stats`
- Удалил ненужные стили, которые отследил через `Coverage` в дев тулзах
- Заинлайнил стили `:tada:`, инлайнил непосредстввенно перед дивкой с классом,  стили для модалки вставил в конце
- Картинки из модалок заинлайнил в `css`
- Остальные картинки подружаю через `<link rel="preload">`
- Оптимизировал `svg` через `svgo`
- `sh.webp` сначала оптимизировал `png`, потом сконвертировал в `webp`
- Оптимизировал все картинки через `image-webpack-loader`
- Минифицировал js и подгружаю через `<script src="s.js" async>`
- Удалил все остальные символы из шрифтов, кроме `Привет, Геннадий` из `PT Sans` и `+19 +23` из `PT Sans Narrow` :P
- Шрифты подгружаю через `rel="preload"`, так же добавил `crossorigin` аттрибут
- Удалил `banner` :P

### Не помогло или перфоманс упал:
- `Service Worker` для кеширования
- Асинхронная подргузка `css` для модалки через `<link rel="preload" href="./modal.css" as="style" onload="this.rel='stylesheet'">` и через `<link rel="prefetch" href="./modal.css" as="style" onload="this.rel='stylesheet'">`
- Вставка `css` через асинхронный `js`
- Вынос `css` в отдельный файл
- Танцы с бубном

Очень крутое задание :) Спасибо большое, было интересно!

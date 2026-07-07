# Как загрузить сайт в прод (переключение со старого index.html)

Прод: репозиторий `vkarasaev/vkarasaev.github.io`, домен karasaev.com. Займет 10-15 минут, откат - 2 минуты.

## Шаг 1. Залить проект в репозиторий

Вариант А (терминал, git установлен):
```
git clone https://github.com/vkarasaev/vkarasaev.github.io.git
cd vkarasaev.github.io
git checkout -b astro-v2
# удалить старые файлы, КРОМЕ .git:
rm index.html README.md
# скопировать сюда все содержимое архива karasaev-site (CNAME уже внутри, в public/)
git add -A && git commit -m "v2: Astro, фаза 1+2"
git push -u origin astro-v2
```

Вариант Б (без терминала): создать ветку astro-v2 на github.com и загрузить файлы архива через «Add file → Upload files» (кроме node_modules - его в архиве нет).

## Шаг 2. Переключить Pages на Actions

GitHub → репозиторий → Settings → Pages → Build and deployment → Source: **GitHub Actions**.

## Шаг 3. Смержить и проверить

Открыть Pull Request astro-v2 → main, смержить. Во вкладке Actions дождаться зеленого workflow «Deploy to GitHub Pages» (2-3 мин). Открыть karasaev.com - проверить главную, /blog/, /credentials/, /en/ с телефона.

## Откат (если что-то не так)

Settings → Pages → Source: обратно **Deploy from a branch** (main, /root) + `git revert` мерж-коммита. Старый одностраничник вернется, домен не пострадает: CNAME в репозитории сохраняется в обоих вариантах.

## После деплоя (разово)

1. Проверить https://karasaev.com/sitemap-index.xml
2. Добавить сайт в Google Search Console и Яндекс.Вебмастер, отправить sitemap.
3. Прогнать PageSpeed (pagespeed.web.dev) - цель 95+.

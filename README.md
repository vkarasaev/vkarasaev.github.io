# karasaev.com v2

Astro-сайт. Прод - ветка main, деплой автоматический (GitHub Actions → Pages).

- База знаний проекта: `docs/` (начать с 00-контекст-проекта.md)
- Контент и настройки: `src/data/site.ts` - все контакты и цифры только отсюда
- Фото-оригиналы: `assets/photo-src/` (см. docs/12-фото-инвентарь.md)
- Локальный запуск: `npm install && npm run dev`
- Сборка и проверка: `npm run build && npm run preview`

Как переключить прод со старого index.html: залить содержимое этого репозитория в vkarasaev/vkarasaev.github.io (ветка-PR), в настройках Pages переключить Source на GitHub Actions, смержить. Откат: вернуть Source на deploy from branch.

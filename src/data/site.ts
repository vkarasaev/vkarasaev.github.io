// Единый источник фактов и контактов. Любая цифра на страницах - только отсюда.
// Канон: docs/07-контент-и-голос.md (факт-лист) и docs/09-журнал-решений.md

export const site = {
  name: 'Валерий Карасаев',
  nameEn: 'Valeriy Karasaev',
  tagline: 'Психолог · Гештальт-терапевт · Executive коуч',
  taglineEn: 'Psychologist · Gestalt Therapist · Executive Coach',
  heroBio: '17 лет в международном бизнесе.\nСпециализируюсь на кризисах и переходах.',
  description:
    'Психолог, гештальт-терапевт, executive coach. Специализируюсь на кризисах и переходах. Практика с 2014 года.',

  domain: 'https://karasaev.com',

  // Контакты (Р1: телефон канонический)
  telegram: 'https://t.me/vkarasaev',
  telegramHandle: '@vkarasaev',
  telegramFreeCall:
    'https://t.me/vkarasaev?text=' +
    encodeURIComponent('Привет, хочу записаться на бесплатную 15-минутную встречу'),
  email: 'karasaev.valery@gmail.com',
  phone: '+7 (915) 310-71-78',
  phoneHref: 'tel:+79153107178',

  // Формат и цена (D4: курс 85, на RU - рубли, на EN - евро)
  session: {
    duration: '50 минут, онлайн / очно',
    platforms: 'Google Meet / Яндекс.Телемост',
    offline: 'Москва, м. Краснопресненская', // Р2
    schedule: 'Пн-Чт, 11:00-21:00 МСК',
    payment: 'Карта · PayPal · IBAN',
    priceRub: '5 000 ₽',
    priceEur: '60 €',
  },
  eurRate: 85,

  // Запись на сессию (основной CTA по решению 2026-07-09)
  telegramSession:
    'https://t.me/vkarasaev?text=' + encodeURIComponent('Привет, хочу записаться на сессию'),

  // EN-версия живет сама по себе: интро-звонок 30 минут, префиллы на английском,
  // расписание в CET, телефон не показываем (задача от 2026-07-12).
  en: {
    introCallMinutes: 30,
    telegramFreeCall:
      'https://t.me/vkarasaev?text=' +
      encodeURIComponent('Hi! I would like to book a free 30-minute intro call'),
    telegramSession:
      'https://t.me/vkarasaev?text=' + encodeURIComponent('Hi! I would like to book a session'),
    telegramQuestion:
      'https://t.me/vkarasaev?text=' + encodeURIComponent('Hi! I have a question'),
    // «Правки-6» п.17: WhatsApp - основной канал для EN-аудитории (Германия).
    // Номер не позиционируем как мобильный и не предлагаем звонить - только сообщения.
    whatsapp: '+49 151 140 37 118',
    whatsappHref: 'https://wa.me/4915114037118',
    // «Правки-6» п.17: часы расширены до 21:00, чтобы не отсекать обращения после рабочего дня.
    schedule: 'Mon-Thu · 9:00-21:00 CET',
  },

  // Соцсети пиктограммами (главная, контакты)
  socials: [
    { id: 'telegram', label: 'Telegram', url: 'https://t.me/valera_outloud' },
    { id: 'instagram', label: 'Instagram', url: 'https://www.instagram.com/karasaev.psy' },
    { id: 'youtube', label: 'YouTube', url: 'https://www.youtube.com/@vkarasaev' },
    { id: 'facebook', label: 'Facebook', url: 'https://www.facebook.com/valery.karasaev' },
    { id: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/karasaev/' },
    { id: 'vk', label: 'ВКонтакте', url: 'https://vk.com/vkarasaev' },
    { id: 'threads', label: 'Threads', url: 'https://www.threads.com/@karasaev.psy' },
  ],

  // Статистика главной (Р5: практика с 2014; Р4: 3 языка)
  stats: [
    { num: "с 2014", label: "в практике" },
    { num: '2500+', label: 'часов подготовки' },
    { num: '17', label: 'лет в бизнесе' },
    { num: '3', label: 'языка работы' },
  ],

  // Экосистема ссылок (Р10: без ВК; Дзен - valera_toptop)
  channels: [
    { label: 'Telegram-канал', url: 'https://t.me/valera_outloud' },
    { label: 'Статьи на B17', url: 'https://www.b17.ru/karasaev/#article' },
    { label: 'Дзен «Топ-топ»', url: 'https://dzen.ru/valera_toptop' },
    { label: 'Instagram', url: 'https://www.instagram.com/karasaev.psy' },
  ],
};

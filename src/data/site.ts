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
    encodeURIComponent('Привет, хочу записаться на бесплатную 30-минутную встречу'),
  email: 'karasaev.valery@gmail.com',
  phone: '+7 (915) 310-71-78',
  phoneHref: 'tel:+79153107178',

  // Формат и цена (D4: курс 85, на RU - рубли, на EN - евро)
  session: {
    duration: '55 минут, онлайн / очно',
    platforms: 'Google Meet / Яндекс.Телемост',
    offline: 'Москва, м. Краснопресненская', // Р2
    schedule: 'Пн-Чт, 11:00-21:00 МСК',
    payment: 'Карта · PayPal · IBAN',
    priceRub: '5 000 ₽',
    priceEur: '60 €',
  },
  eurRate: 85,

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

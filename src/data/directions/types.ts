// Модель лендинга клиентского направления.
// Один файл данных на направление (career.ts, burnout.ts, ...), один общий шаблон
// src/components/direction/DirectionLanding.astro. Тексты берутся из рабочих версий
// лендингов на Диске: «(A2-09) Контент / … / Клиентские направления / NN … / 01 Страница направления».
// В строках допустима простая разметка: <strong>, <em>, <a href>.
//
// Порядок страницы (принятая версия 10, 21.11.2026): первый экран и строка условий,
// вводный текст, «Возможно, это про вас», раскрываемые тезисы, «Как с этим работаю я»,
// «Почему эта тема мне близка», «С чего можно начать», «Почитать по теме», «Более личное»,
// затем общий блок сайта «Первый шаг - просто написать».

export type DirectionBlock =
  /** Абзац. Абзацы короткие, как в авторской версии: одна мысль, одна-три строки. */
  | { type: 'p'; html: string }
  /** Вопросы, которые человек задаёт себе: ровные плашки курсивом. */
  | { type: 'questions'; items: string[] }
  /** Различения «**Термин.** Описание»: за одинаковыми словами разные процессы. */
  | { type: 'ledger'; items: { term: string; text: string }[] };

export interface DirectionPhoto {
  src: string;
  alt: string;
  /** object-position для кадрирования, например 'center 20%'. */
  position?: string;
}

export interface Direction {
  /** Адрес страницы без слешей: 'career' -> /career/. */
  slug: string;
  /** Пока страница не утверждена и не выпущена, держим её вне индекса. */
  noindex?: boolean;
  meta: { title: string; description: string };

  /** Название направления (# в исходнике). */
  topic: string;
  hero: {
    /** Первый заголовок второго уровня в исходнике: фраза-узнавание. */
    headline: string;
    /** Тот же заголовок, разбитый на смысловые строки (слова те же): перенос идёт только между ними. */
    headlineLines?: string[];
    /** Одна фраза под заголовком первого экрана: дословное предложение из вводного абзаца. */
    sub?: string;
    /** Два вводных абзаца целиком, одной колонкой под первым экраном. */
    lead: string[];
    photo: DirectionPhoto;
    cta: string;
  };

  /** «Возможно, это про вас». Чётное число ситуаций: плашки стоят в две колонки. */
  recognition: { title: string; items: string[] };

  /** Раскрываемые тезисы под общим заголовком: «суть на виду, глубина по клику». */
  insight: { title: string; rows: { title: string; blocks: DirectionBlock[] }[] };

  /**
   * «Как я с этим работаю»: короткие абзацы, затем варианты исхода («Иногда…») ровными
   * плашками, абзац после них и итоговая фраза крупно.
   */
  work: { title: string; paragraphs: string[]; options?: string[]; after?: string[]; thesis?: string };

  /** «Почему эта тема близка моей практике». */
  author: { title: string; paragraphs: string[]; photo?: DirectionPhoto };

  /** «Почитать по теме»: только опубликованные статьи блога, по slug. */
  materials?: {
    title: string;
    /** slug статьи-цикла (format: series); части берутся из её текста. */
    series?: string;
    articles: string[];
  };

  /** «Более личное»: эссе и истории во внешних каналах, рядом личный кадр. */
  personal?: {
    title: string;
    intro: string;
    photo?: DirectionPhoto;
    /** thumb - квадратная картинка к посту. */
    items: { title: string; href: string; note: string; thumb?: string }[];
  };

  /**
   * «С чего можно начать»: закрывает страницу. note - строка под заголовком,
   * steps - первые шаги по одному предложению. Условия, третий шаг и кнопки общие, из site.ts.
   */
  start: { title: string; note: string; steps: string[]; cta: string };
}

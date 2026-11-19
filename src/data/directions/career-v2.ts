// Данные для версии 2 (три первых экрана A/B/C, ночь 19.11.2026): прежняя форма данных,
// собранная из нынешнего career.ts. Нужна только для просмотра старых версий, в выпуск не идёт.
import { career } from './career';

const r = career.insight.rows;
const p = (row: number) => r[row].blocks.flatMap((b) => (b.type === 'p' ? [b.html] : []));
const questions = r[0].blocks.find((b) => b.type === 'questions');
const ledger = r[1].blocks.find((b) => b.type === 'ledger');
const p0 = p(0);
const p1 = p(1);
const p2 = p(2);

export const careerV2 = {
  ...career,
  slug: 'career-v2',
  hero: {
    ...career.hero,
    lead: [
      'Работа может долго давать деньги, статус, окружение и понятный ответ на вопрос «что я делаю со своей жизнью». А потом что-то меняется. Вы по-прежнему хорошо работаете, но всё меньше понимаете, зачем вам следующая ступень. Или увольнение уже случилось, и вместе с должностью исчезла часть привычной жизни.',
      'Я работаю с карьерными кризисами как психолог. Мы можем разбираться с потерей интереса, трудным решением, увольнением и изменением профессиональной роли, учитывая реальные обязательства и цену перемен.',
    ],
  },
  recognition: {
    ...career.recognition,
    items: [
      ...career.recognition.items,
      'После увольнения непонятно не только где искать работу, но и кем вы теперь себя чувствуете.',
    ],
  },
  sections: [
    {
      title: career.insight.title,
      blocks: [
        { type: 'h3', text: r[0].title },
        { type: 'p', html: `${p0[0]} ${p0[1]}` },
        { type: 'p', html: p0[2] },
        questions,
        { type: 'p', html: p0[3] },
        { type: 'h3', text: r[1].title },
        { type: 'p', html: p1[0] },
        ledger,
        { type: 'p', html: p1[1] },
      ],
    },
    {
      title: r[2].title,
      blocks: [
        { type: 'p', html: p2.slice(0, 4).join(' ') },
        { type: 'p', html: p2.slice(4).join(' ') },
      ],
    },
  ],
  start: {
    title: career.start.title,
    intro: `${career.start.steps[0]} ${career.start.steps[1]} ${career.start.note}`,
    cta: career.start.cta,
  },
};

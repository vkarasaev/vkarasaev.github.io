// Сертификаты: единый источник для /credentials/ (RU) и /en/credentials/.
// Добавить сертификат = добавить объект сюда + положить файлы в public/certificates/
// (полный скан) и public/certificates/preview/ (превью до 800px, jpg).

export interface Cert {
  slug: string;
  ru: string;
  en: string;
  org: string;
  orgEn: string;
  year: string;
}

export const psyCerts: Cert[] = [
  { slug: 'hse-diploma-ru', ru: 'Магистр психологии · «Психоанализ и психоаналитическое консультирование»', en: 'MSc in Psychology · Psychoanalysis and Psychoanalytic Counselling', org: 'НИУ ВШЭ', orgEn: 'HSE University', year: '2015-2018' },
  { slug: 'hse-diploma-eu', ru: 'Master of Psychology · Diploma Supplement (EU)', en: 'MSc in Psychology · Diploma Supplement (EU)', org: 'НИУ ВШЭ', orgEn: 'HSE University', year: '2018' },
  { slug: 'mgi-gestalt-level-i', ru: 'Гештальт-терапевт · I ступень', en: 'Gestalt Therapist · Level I', org: 'Московский Гештальт Институт', orgEn: 'Moscow Gestalt Institute', year: '2017-2018' },
  { slug: 'mgi-gestalt-level-ii', ru: 'Гештальт-терапевт · II ступень, 4-летняя программа, 733 часа', en: 'Gestalt Therapist · Level II, 4-year program, 733 hours', org: 'Московский Гештальт Институт', orgEn: 'Moscow Gestalt Institute', year: '2017-2021' },
  { slug: 'miga-groupanalysis', ru: 'Групповой анализ · вводный курс, 120 часов', en: 'Group Analysis · introductory course, 120 hours', org: 'Московский институт группового анализа', orgEn: 'Moscow Institute of Group Analysis', year: '2017-2018' },
  { slug: 'mgi-intensiv-armenia-2019', ru: 'Терапевтический интенсив', en: 'Therapeutic Intensive', org: 'МГИ · Армения', orgEn: 'MGI · Armenia', year: '2019' },
  { slug: 'mgi-conference-2020', ru: 'Профессиональная конференция', en: 'Professional Conference', org: 'МГИ', orgEn: 'MGI', year: '2020' },
  { slug: 'erickson-professional-coach', ru: 'Профессиональный коуч · модули I-V, аккредитация ICF', en: 'Professional Coach · Modules I-V, ICF-accredited', org: 'Erickson International', orgEn: 'Erickson International', year: '2014-2015' },
  { slug: 'erickson-family-coaching', ru: 'Семейный коучинг', en: 'Family Coaching', org: 'Erickson International', orgEn: 'Erickson International', year: '2015' },
  { slug: 'erickson-teams-coaching', ru: 'Командный коучинг', en: 'Team Coaching', org: 'Erickson International', orgEn: 'Erickson International', year: '2015' },
  { slug: 'erickson-neg-coaching', ru: 'Коучинг переговоров', en: 'Negotiation Coaching', org: 'Erickson International', orgEn: 'Erickson International', year: '2015' },
  { slug: 'erickson-trainers-training', ru: 'Тренинг тренеров', en: 'Training of Trainers', org: 'Erickson International', orgEn: 'Erickson International', year: '2015' },
  { slug: 'ica-icf-competences', ru: 'Компетенции ICF', en: 'ICF Competences', org: 'International Coach Academy', orgEn: 'International Coach Academy', year: '' },
  { slug: 'training-academy-ttt-i', ru: 'Ведение трансформационных тренингов · ступень I', en: 'Transformational Training Facilitation · Level I', org: 'Академия тренингов', orgEn: 'Training Academy', year: '2012-2014' },
  { slug: 'training-academy-ttt-ii', ru: 'Ведение трансформационных тренингов · ступень II', en: 'Transformational Training Facilitation · Level II', org: 'Академия тренингов', orgEn: 'Training Academy', year: '2012-2014' },
];


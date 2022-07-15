import hiking from '../assets/images/slider/hiking.jpg';
import surfing from '../assets/images/slider/surfing.jpg';
import training from '../assets/images/slider/training.jpg';
import bustour from '../assets/images/slider/bustour.jpg';
import individual from '../assets/images/slider/individual.jpg';

const Cards = [
  {
    id: '1',
    title: 'Походы',
    subtitle: 'Пешие походы по горам Сочи и Красной Поляны',
    image: hiking,
    link: '/hike',
    booking: '/',
  },
  {
    id: '2',
    title: 'Автомобильные туры',
    subtitle: 'Обзорный тур по Сочи и Абхазии на комфортабельном минивене',
    image: bustour,
    link: '/bustour',
    booking: '/',
  },
  {
    id: '3',
    title: 'Индивидуальные туры',
    subtitle: 'Индивидуальные туры по спец. программе',
    image: individual,
    link: '/individual',
    booking: '/',
  },
  {
    id: '4',
    title: 'Тренировки',
    subtitle: 'Индивидуальные тренировки',
    image: training,
    link: '/training',
    booking: '/',
  },
  {
    id: '5',
    title: 'Сап-Серфинг',
    subtitle: 'Прогулки по Черному морю в сопровождении инструктора',
    image: surfing,
    link: '/surfing',
    booking: '/',
  },
];

export default Cards;

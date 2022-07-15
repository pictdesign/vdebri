import React from 'react';
import './Main.scss';
import Event from './Event.jsx';
import Benefits from './Benefits.jsx';
import logo from '../assets/images/SVG/logo1.svg';
import Review from './Review.jsx';
import Request from './Request.jsx';
import Slider from './swiper/Swiper.jsx';

const Main = () => {
  return (
    <main className="content">
      <div className="homescreen">
        <div className="homescreen__container">
          <img className="homescreen__logo" src={logo} alt="Логотип В Дебри" />
          <div></div>
          <h1 className="homescreen__title">
            В Дебри
          </h1>
          <p className="homescreen__subtitle">
            Создаем и продумываем до мелочей
            каждый наш тур, с заботой и вниманием
            к каждому гостю.
            Отправляйтесь&nbsp;в&nbsp;дебри&nbsp;с&nbsp;нами!
          </p>
        </div>
      </div>
      <blockquote className="blockquote">
        <p className="blockquote__text">
          Путешествия учат больше, чем что бы то ни&nbsp;было.
          Иногда один день, проведенный в других&nbsp;местах,
          дает больше, чем десять лет жизни дома.
        </p>
        <figcaption className="blockquote__caption">
          Анатоль Франс
        </figcaption>
      </blockquote>
      <Event />
      <Benefits />
      <Slider />
      <section className="review">
        <h2 className="review__title">
          Отзывы
        </h2>
        <Review />
      </section>
      <Request />
    </main>
  );
};

export default Main;

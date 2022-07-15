import React from 'react';
import './Event.scss';

const Event = () => {
  const nextEvent = {
    title: 'Солнечная Абхазия',
    subtitle: 'Автомобильный тур на озеро Рица',
    date: '24 мая',
  };

  return (
    <section className="event">
      <div className="event__container">
        <p className="event__subtitle">
          Ближайшее событие
          </p>
        <h2 className="event__title">
          {nextEvent.title}
        </h2>
        <p className="event__subtitle">
          {nextEvent.subtitle}
        </p>
        <h2 className="event__title event__title_date">
          {nextEvent.date}
        </h2>
        <button className="event__button">
          Принять участие
        </button>
      </div>
    </section>
  );
};

export default Event;

import React from 'react';
import './Benefits.scss';

const Benefits = () => {
  return (
    <section className="benefits">
      <h2 className="benefits__title">
        Почему мы?
      </h2>
      <ul className="benefits__list">
        <li className="benefits__item">
          <div className="benefits__icon benefits__icon_team"></div>
          <h3 className="benefits__item-title">
            Команда
          </h3>
          <p className="benefits__text">
            В нашей команде нет случайных людей, только любящие свое дело,
            те кто дорожат своей репутацией и вашим настроением
          </p>
        </li>
        <li className="benefits__item">
          <div className="benefits__icon benefits__icon_exp"></div>
          <h3 className="benefits__item-title">
            Опыт
          </h3>
          <p className="benefits__text">
          Уже больше трех лет мы успешно занимаемся нашим делом.
          Наш опыт позвоялет утверждать, что вы останетесь довольны,
          как и 98% наших гостей</p>
        </li>
        <li className="benefits__item">
          <div className="benefits__icon benefits__icon_support"></div>
          <h3 className="benefits__item-title">
            Поддержка
          </h3>
          <p className="benefits__text">
            Мы будем рядом с&nbsp;момента&nbsp;бронирования,
            до&nbsp;конца путешествия и&nbsp;даже&nbsp;после!
          </p>
        </li>
      </ul>
    </section>
  );
};

export default Benefits;

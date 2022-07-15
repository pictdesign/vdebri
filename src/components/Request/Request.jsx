import React from 'react';
import './Request.scss';

const Request = () => {
  return (
    <section className="request">
      <div className="request__container">
        <form className="request__form">
          <h2 className="request__title">
            Остались вопросы?
          </h2>
          <p className="request__subtitle">
            Заполните все поля, и мы свяжемся с вами
            для уточнения деталей путешествия
          </p>
          <fieldset className="request__input-container">
            <label className="request__field">
              <input
                className="request__input"
                type='text'
                placeholder="Имя"
                name="name"
                required
              />
            </label>
            <label className="request__field">
              <input
                className="request__input"
                type='phone'
                placeholder="Телефон"
                name="phone"
                required
              />
            </label>
            <label className="request__field">
              <input
                className="request__input"
                type='email'
                placeholder="E-mail"
                name="email"
                required
              />
            </label>
            <label className="request__field">
              <input
                className="request__input"
                type='text'
                placeholder="Ваши пожелания"
                name="wish"
              />
            </label>
          </fieldset>
          <button className="request__button" type="submit">
            Отправить
          </button>
        </form>
      </div>
    </section>
  );
};

export default Request;

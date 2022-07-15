import React from 'react';
import MenuLink from './MenuLink.jsx';
import './Footer.scss';
import Logo from './Logo.jsx';

const Footer = () => {
  return (
    <footer className="footer">
      <nav className="footer__navigation">
        <div className="footer__info">
          <Logo />
          <ul className="footer__list footer__list_contact">
            <li className="footer__item">
              <a className="footer__icon footer__icon_vk" href="https://vk.com/v.debri" target="_blank" rel="noreferrer" />
              <a className="footer__icon footer__icon_instagram" href="https://instagram.com/" target="_blank" rel="noreferrer" />
              <a className="footer__icon footer__icon_whatsapp" href="https://wa.me/79995364906" target="_blank" rel="noreferrer" />
            </li>
            <li className="footer__item">
              <a className="navigation__link footer__link" href="tel:+79995364906" title="+7 999 536 49 06 ">
                +7 999 536 49 06
              </a>
            </li>
            <li className="footer__item">
              <a className="navigation__link footer__link" href="mailto:ask@vdebri.com" title="ask@vdebri.com">
                ask@vdebri.com
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__menu">
          <ul className="footer__list">
            <li className="footer__item">
              <MenuLink link="/hike" title="Походы" props="footer__link footer__link-title">
                Походы
              </MenuLink>
            </li>
            <li className="footer__item">
              <MenuLink link="/hiking" title="Однодневные" props="footer__link">
                Однодневные
              </MenuLink>
            </li>
            <li className="footer__item">
              <MenuLink link="/trekking" title="Многодневные" props="footer__link">
                Многодневные
              </MenuLink>
            </li>
          </ul>
          <ul className="footer__list">
            <li className="footer__item">
              <MenuLink link="/bustour" title="Автомобильные туры" props="footer__link footer__link-title">
                Автомобильные туры
              </MenuLink>
            </li>
            <li className="footer__item">
              <MenuLink link="/sochi" title="Сочи" props="footer__link">
                Сочи
              </MenuLink>
            </li>
            <li className="footer__item">
              <MenuLink link="/abkhaziya" title="Абхазия" props="footer__link">
                Абхазия
              </MenuLink>
            </li>
            <li className="footer__item">
              <MenuLink link="/polyana" title="Красная Поляна" props="footer__link">
                Красная Поляна
              </MenuLink>
            </li>
          </ul>
          <ul className="footer__list">
            <li className="footer__item">
              <MenuLink link="/individual" title="Индивидуальные туры" props="footer__link footer__link-title">
                Индивидуальные туры
              </MenuLink>
            </li>
            <li className="footer__item">
              <MenuLink link="/individual-sochi" title="Сочи" props="footer__link">
                Сочи
              </MenuLink>
            </li>
            <li className="footer__item">
              <MenuLink link="/individual-abkhaziya" title="Абхазия" props="footer__link">
                Абхазия
              </MenuLink>
            </li>
            <li className="footer__item">
              <MenuLink link="/individual-polyana" title="Красная Поляна" props="footer__link">
                Красная Поляна
              </MenuLink>
            </li>
          </ul>
          <ul className="footer__list">
            <li className="footer__item">
              <MenuLink link="/training" title="Тренировки" props="footer__link footer__link-title">
                Тренировки
              </MenuLink>
            </li>
            <li className="footer__item">
              <MenuLink link="/individual-training" title="Индивидуальные" props="footer__link">
                Индивидуальные
              </MenuLink>
            </li>
            <li className="footer__item">
              <MenuLink link="/group-training" title="Групповые" props="footer__link">
                Групповые
              </MenuLink>
            </li>
          </ul>
          <ul className="footer__list">
            <li className="footer__item">
              <MenuLink link="/surfing" title="Сап-серфинг" props="footer__link footer__link-title">
                Сап-серфинг
              </MenuLink>
            </li>
          </ul>
        </div>
      </nav>
      <div className="copyright">
        <p className="copyright__text">
          Разработка сайта
        </p>
        <a className="copyright__link" href="https://pict.design" target="_blank" rel="noreferrer">
          PICT.DESIGN
        </a>
      </div>
    </footer>
  );
};

export default Footer;

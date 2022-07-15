import React from 'react';
import ThemeSwitch from './ThemeSwitch.jsx';
import MenuLink from './MenuLink.jsx';
import './Header.scss';
import Logo from './Logo.jsx';
import WinterList from '../constants/WinterList';
// import SummerList from '../constants/SummerList';

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <nav className="navigation">
        <ul className="navigation__list">
          {
            WinterList.map((item, index) => {
              return (
                <MenuLink link={item.link} title={item.title} key={index}>
                  {item.title}
                </MenuLink>
              );
            })
          }
        </ul>
        <div className="navigation__link navigation__link_weight_medium">
          <a className="navigation__link navigation__link_type_phone" href="tel:+79995364906">
            <div className="navigation__icon"></div>
            +7&nbsp;999&nbsp;536&nbsp;49&nbsp;06
          </a>
        </div>
      </nav>
      <ThemeSwitch />
    </header>
  );
};

export default Header;

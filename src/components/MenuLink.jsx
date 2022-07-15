import React from 'react';
import { NavLink } from 'react-router-dom';
import './MenuLink.scss';

const MenuLink = ({ link, title, props }) => {
  return (
    <NavLink
      title={title}
      to={link}
      className={({ isActive }) => {
        return `navigation__link  + ${props} + ${(isActive ? ' navigation__link_active' : '')}`;
      }}
    >
      {title}
    </NavLink>
  );
};

export default MenuLink;

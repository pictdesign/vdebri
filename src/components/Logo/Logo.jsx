import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import './Logo.scss';

const Logo = () => {
  return (
    <Link to="/">
      <img className="logo" src={logo} alt="Логотип в Дебри"></img>
    </Link>
  );
};

export default Logo;

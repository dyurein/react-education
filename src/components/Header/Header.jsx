import React from 'react';
import cls from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
  return (
    <header className={cls.header}>
      <img className={cls.logo} src="https://www.popsci.com/sites/popsci.com/files/styles/1000_1x_/public/images/2018/08/nasa-logo-web-rgb.png?itok=Iczdwajo&fc=50,50" />
      <div className={cls.loginBlock}>
          {props.isAuth ? props.login : <NavLink className={cls.loginLink} to={'/login'}>Login</NavLink>}
      </div>
    </header>
  )
}

export default Header;

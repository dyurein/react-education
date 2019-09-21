import React from 'react';
import cls from './Navbar.module.css'
import {NavLink} from 'react-router-dom'

const Navbar = (props) => {
    return (
        <nav className={cls.nav}>
            <ul className={cls.list}>
                <li className={cls.elem}><NavLink to="/profile" activeClassName={cls.active}>Profile</NavLink></li>
                <li className={cls.elem}><NavLink to="/dialogs" activeClassName={cls.active}>Messages</NavLink></li>
                <li className={cls.elem}><NavLink to="/users" activeClassName={cls.active}>Users</NavLink></li>
                <li className={cls.elem}><NavLink to="/news" activeClassName={cls.active}>News</NavLink></li>
                <li className={cls.elem}><NavLink to="/music" activeClassName={cls.active}>Music</NavLink></li>
                <li className={cls.elem}><NavLink to="/settings" activeClassName={cls.active}>Settings</NavLink></li>
            </ul>

        </nav>
    )
}

export default Navbar;

import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'

//TODO: элементы навигации

function NavBar() {
    return (
        <nav className="menu">
            <NavLink exact to="/" className="menu__link">Список товаров</NavLink>
            <NavLink to="/favorites" className="menu__link">Избранное</NavLink>
            <NavLink to="/aboutUs" className="menu__link">О нас</NavLink>
            <NavLink to="/personalAccount" className="menu__link menu__link_personal-account">Личный кабинет</NavLink>
        </nav>
    )
}

export default NavBar

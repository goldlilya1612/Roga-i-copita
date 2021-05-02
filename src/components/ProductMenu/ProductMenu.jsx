import React from 'react';
import './ProductMenu.css'

const ProductMenu = ({onMenuClick, isMenuOpen}) => {
 
    return (
        <div className={`product-menu ${isMenuOpen ? 'product-menu_active' : ''}`}>
            <button className={`product-menu__button product-menu__button_line ${isMenuOpen ? 'product-menu__button_is-active' : ''}`} onClick={onMenuClick}>
                <span>Menu</span>
            </button>
        </div>
    )
}


export default ProductMenu

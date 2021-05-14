import React from 'react';
import './Product.css';
import help from '../../images/products/1.jpg'

const Product = ({Favorite, onClick, onCardClick}) => {
    return (
        <section className="elements"> 
            <section className="element" onClick={onCardClick}>
                <img className="element__image" src={help}></img>
                <h3 className="element__name">Виноград</h3>
                <p className="element__category">Ягоды</p>
                <p className="element__price">500 &#8381;</p>
                <div className="element__buttons">
                    <button className="element__button element__button_basket">добавить в корзину</button>
                    <div className="element__button-wrapper">
                        <button 
                            className={`element__button-favourite ${Favorite ? 'element__button-favourite_active' : 'element__button-favourite_inactive'}`} 
                            onClick={onClick}
                        ></button>
                    </div>
                </div>    
            </section>
        </section>
    )
}

export default Product;
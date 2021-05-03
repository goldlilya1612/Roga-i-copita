import React from 'react';
import './ProductPage.css';
import help from '../../images/products/1.jpg';

const ProductPage = () => {
    return (
        <section className="product-page">
          <img className="product-page__image" src={help}></img>
          <div className="product-page__info">
              <div>
                <h2 className="product-page__title">Виноград</h2>
                <button className="product-page__favourite"></button>
              </div>
              <p className="product-page__description">ению в распространении наркотиков. Теперь он выходит на свободу движимый лишь одним желанием - отомстить тому мажору Петру, который подбросил ему наркотики и поломал жизнь. Встретившись лицом к лицу со своим обидчиком, </p>
              <div className="product-page__wrapper">
                <div>
                  <p className="product-page__amount-text">Количество:</p>
                  <input className="product-page__input" type="number"/>
                </div>
                <button type="submit" className="element__button element__button_product-page">Добавить в корзину</button>
              </div>
          </div>
        </section>
    )
}

export default ProductPage
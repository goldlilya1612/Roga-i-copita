import React from 'react';
import './Product.css';
import help from '../../images/products/1.jpg'
import favourite from '../../images/favourite.svg'
import favouriteActive from '../../images/favourite_active.svg'

const Product = ({isFavourite, onClick}) => {
    return (
        <section className="elements"> 
            <section className="element">
                <img className="element__image" src={help}></img>
                <h3 className="element__name">Виноград</h3>
                <p className="element__category">Ягоды</p>
                <p className="element__price">500 &#8381;</p>
                <div className="element__buttons">
                    <button className="element__button element__button_basket">добавить в корзину</button>
                    <div className="element__button-wrapper">
                        <img className="element__favourite" src={favourite} onClick={onClick}/>
                        <button className="element__button_favourite"></button>
                    </div>
                </div>    
            </section>

            <section className="element">
                <img className="element__image" src={help}></img>
                <h3 className="element__name">Виноград</h3>
                <p className="element__category">Ягоды</p>
                <p className="element__price">500 &#8381;</p>
                <div className="element__buttons">
                    <button className="element__button element__button_basket">добавить в корзину</button>
                    <div className="element__button-wrapper">
                        <img className="element__favourite" src={favourite}/>
                        <button className="element__button_favourite"></button>
                    </div>
                </div>    
            </section>

            <section className="element">
                <img className="element__image" src={help}></img>
                <h3 className="element__name">Виноград</h3>
                <p className="element__category">Ягоды</p>
                <p className="element__price">500 &#8381;</p>
                <div className="element__buttons">
                    <button className="element__button element__button_basket">добавить в корзину</button>
                    <div className="element__button-wrapper">
                        <img className="element__favourite" src={favourite}/>
                        <button className="element__button_favourite"></button>
                    </div>
                </div>    
            </section>
            
            <section className="element">
                <img className="element__image" src={help}></img>
                <h3 className="element__name">Виноград</h3>
                <p className="element__category">Ягоды</p>
                <p className="element__price">500 &#8381;</p>
                <div className="element__buttons">
                    <button className="element__button element__button_basket">добавить в корзину</button>
                    <div className="element__button-wrapper">
                        <img className="element__favourite" src={favourite}/>
                        <button className="element__button_favourite"></button>
                    </div>
                </div>    
            </section>
            
            <section className="element">
                <img className="element__image" src={help}></img>
                <h3 className="element__name">Виноград</h3>
                <p className="element__category">Ягоды</p>
                <p className="element__price">500 &#8381;</p>
                <div className="element__buttons">
                    <button className="element__button element__button_basket">добавить в корзину</button>
                    <div className="element__button-wrapper">
                        <img className="element__favourite" src={favourite}/>
                        <button className="element__button_favourite"></button>
                    </div>
                </div>    
            </section>
            
            <section className="element">
                <img className="element__image" src={help}></img>
                <h3 className="element__name">Виноград</h3>
                <p className="element__category">Ягоды</p>
                <p className="element__price">500 &#8381;</p>
                <div className="element__buttons">
                    <button className="element__button element__button_basket">добавить в корзину</button>
                    <div className="element__button-wrapper">
                        <img className="element__favourite" src={favourite}/>
                        <button className="element__button_favourite"></button>
                    </div>
                </div>    
            </section>
            
            <section className="element">
                <img className="element__image" src={help}></img>
                <h3 className="element__name">Виноград</h3>
                <p className="element__category">Ягоды</p>
                <p className="element__price">500 &#8381;</p>
                <div className="element__buttons">
                    <button className="element__button element__button_basket">добавить в корзину</button>
                    <div className="element__button-wrapper">
                        <img className="element__favourite" src={favourite}/>
                        <button className="element__button_favourite"></button>
                    </div>
                </div>    
            </section>
            
            <section className="element">
                <img className="element__image" src={help}></img>
                <h3 className="element__name">Виноград</h3>
                <p className="element__category">Ягоды</p>
                <p className="element__price">500 &#8381;</p>
                <div className="element__buttons">
                    <button className="element__button element__button_basket">добавить в корзину</button>
                    <div className="element__button-wrapper">
                        <img className="element__favourite" src={favourite}/>
                        <button className="element__button_favourite"></button>
                    </div>
                </div>    
            </section>
            
            <section className="element">
                <img className="element__image" src={help}></img>
                <h3 className="element__name">Виноград</h3>
                <p className="element__category">Ягоды</p>
                <p className="element__price">500 &#8381;</p>
                <div className="element__buttons">
                    <button className="element__button element__button_basket">добавить в корзину</button>
                    <div className="element__button-wrapper">
                        <img className="element__favourite" src={favourite}/>
                        <button className="element__button_favourite"></button>
                    </div>
                </div>    
            </section>

            <section className="element">
                <img className="element__image" src={help}></img>
                <h3 className="element__name">Виноград</h3>
                <p className="element__category">Ягоды</p>
                <p className="element__price">500 &#8381;</p>
                <div className="element__buttons">
                    <button className="element__button element__button_basket">добавить в корзину</button>
                    <div className="element__button-wrapper">
                        <img className="element__favourite" src={favourite}/>
                        <button className="element__button_favourite"></button>
                    </div>
                </div>    
            </section>

            <section className="element">
                <img className="element__image" src={help}></img>
                <h3 className="element__name">Виноград</h3>
                <p className="element__category">Ягоды</p>
                <p className="element__price">500 &#8381;</p>
                <div className="element__buttons">
                    <button className="element__button element__button_basket">добавить в корзину</button>
                    <div className="element__button-wrapper">
                        <img className="element__favourite" src={favourite}/>
                        <button className="element__button_favourite"></button>
                    </div>
                </div>    
            </section>

        </section>
    )
}

export default Product;
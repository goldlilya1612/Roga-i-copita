import React from 'react';
import axios from 'axios';
import './Product.css';
import help from '../../images/products/1.jpg'
import favourite from '../../images/favourite.svg'

class Product extends React.Component {
    state = {
        products:[]
    }

    componentDidMount(){
        axios.get("http://127.0.0.1:8000")
        .then(res =>{
            this.setState({
                products:res.data
            })
            console.log(res.data);
        })
    }

    render() {
        return (
            <section className="elements">
                {this.state.products.map(product => ( 
                <section className="element">
                    <img className="element__image" src={product.image}></img>
                    <h3 className="element__name">{product.title}</h3>
                    <p className="element__category">{product.category}</p>
                    <p className="element__price">{product.price} &#8381;</p>
                    <div className="element__buttons">
                        <button className="element__button element__button_basket">добавить в корзину</button>
                        <div className="element__button-wrapper">
                            <img className="element__favourite" src={favourite}/>
                            <button className="element__button_favourite"></button>
                        </div>
                    </div>    
                </section>
                ))}

               
            </section>
        )
    }
}

export default Product;
import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';
import AboutUs from '../AboutUs/AboutUs';
import Product from '../Product/Product';
import ProductMenu from '../ProductMenu/ProductMenu';
import Login from '../Login/Login';
import Registration from '../Registration/Registration';
import './App.css';

function App() {

  const [isFavourite, setIsFavourite] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);


  const handleFavouriteClick = () => {
    if (isFavourite == false) {
      setIsFavourite(true);
    } else {
      setIsFavourite(false);
      };
    }
  const handleMenuClick = () => {
    if (isMenuOpen == false) {
      setIsMenuOpen(true)
    } else {
      setIsMenuOpen(false)
    }
  };

  return (
    <div className="page">
      <Header />
      <NavBar />
      <Route exact path="/">
        <div className="product-main">
          <ProductMenu onMenuClick={handleMenuClick} isMenuOpen={isMenuOpen}/>
          <Product isMenuOpen={isMenuOpen}/>  
        </div>
      </Route> 
      <Route path="/aboutUs">
        <AboutUs />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/registration">
        <Registration />
      </Route>
    
      {/*<div>Автор иконок: <a href="https://www.flaticon.com/ru/authors/photo3idea-studio" title="photo3idea_studio">photo3idea_studio</a> from <a href="https://www.flaticon.com/ru/" title="Flaticon">www.flaticon.com</a></div>
      */}
    </div>
  );
}

export default App 
import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';
import AboutUs from '../AboutUs/AboutUs';
import Product from '../Product/Product';
import './App.css';


function App() {
  return (
    <div className="page">
      <Header />
      <NavBar />
      <Route path="/aboutUs">
        <AboutUs />
      </Route>
      <Route exact path="/">
        <Product />
      </Route> 

      {/*<div>Автор иконок: <a href="https://www.flaticon.com/ru/authors/photo3idea-studio" title="photo3idea_studio">photo3idea_studio</a> from <a href="https://www.flaticon.com/ru/" title="Flaticon">www.flaticon.com</a></div>*/}
    </div>
  );
}

export default App;

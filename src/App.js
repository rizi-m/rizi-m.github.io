import React from 'react';
import './App.css';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Nav from 'components/Nav';

import About from 'pages/About';
import Home from 'pages/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const links = [
  { key: 'home', path: '/', text: "Home", },
  { key: 'about', path: '/about', text: "About", },
];

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Nav links={links}/>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

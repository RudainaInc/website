import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import NavBar from './components/layout/NavBar';
import Home from './components/layout/Home';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <NavBar />
          <Route exact path="/" component={Home} />
          
        </div>
      </Router>
    );
  }
}

export default App;

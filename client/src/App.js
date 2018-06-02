import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Header, NavBar, Home, Mission, News, ProgramServices, Volunteer, Footer } from './Components';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <NavBar />

          <Switch>
            <Route path='/' component={Home} exact={true}/>
            <Route path='/mission' component={Mission}/>
            <Route path='/news' component={News}/>
            <Route path='/program_services' component={ProgramServices}/>
            <Route path='/volunteer' component={Volunteer}/>
          </Switch>

          <Footer />
          
        </div>
      </Router>
    );
  }
}

export default App;

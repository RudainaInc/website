import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from './store';
import { Admin } from './components';
import { Profile } from './components';
import { Header } from './components';
import { Home } from './components';
import { Login } from './components';
import { About } from './components';
import { News } from './components';
import { ProgramServices } from './components';
import { Register } from './components';
import { Volunteer } from './components';
import { Footer } from './components';
import './App.css';
import { RegisterVolunteer } from './components';
import { RegisterBenefactor } from './components';
import { ContactUs } from './components';



class App extends Component {
    render() {
        const routes = (
            <Switch>
                <Route path='/' component={Home} exact={true}/>
                <Route path='/about' component={About}/>
                <Route path='/news' component={News}/>
                <Route path='/program_services' component={ProgramServices}/>
                <Route path='/volunteer' component={Volunteer}/>
                <Route path='/login' component={Login}/>
                <Route path='/register' component={Register}/>
                <Route path='/admin' component={Admin}/>
                <Route path='/profile' component={Profile}/>
                <Route path='/register_vounteer' component={RegisterVolunteer}/>
                <Route path='/register_benefactor' component={RegisterBenefactor}/>
                <Route path='/contact_us' component={ContactUs}/>
            </Switch>
        );

        return (
            <React.Fragment>
                <Provider store={store}>
                    <Router>
                        <div className="App">
                            <Header />
                            {routes}
                            <Footer />
                        </div>
                    </Router>
                </Provider>
            </React.Fragment>
        );
    }
}

export default App;

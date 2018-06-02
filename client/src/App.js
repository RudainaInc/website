import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { 
    Header, 
    NavBar, 
    Home,
    Login,
    Mission, 
    News, 
    ProgramServices,
    Register, 
    Volunteer,
    Footer
} from './Components';

import './App.css';

class App extends Component {
    render() {
        const routes = (
            <Switch>
                <Route path='/' component={Home} exact={true}/>
                <Route path='/mission' component={Mission}/>
                <Route path='/news' component={News}/>
                <Route path='/program_services' component={ProgramServices}/>
                <Route path='/volunteer' component={Volunteer}/>
                <Route path='/login' component={Login}/>
                <Route path='/register' component={Register}/>
            </Switch>
        );

        return (
            <React.Fragment>
                <Router>
                    <div className="App">
                        <Header />
                        <NavBar />
                        {routes}
                        <Footer />
                    </div>
                </Router>
            </React.Fragment>
        );
    }
}

export default App;

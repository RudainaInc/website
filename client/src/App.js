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
import { RegisterVolunteer } from './components';
import { RegisterBenefactor } from './components';
import { ContactUs } from './components';


import './App.css';

import ScriptTag from 'react-script-tag';
class Donate extends Component {

    render() {
        return(
            <ScriptTag
                id="ch_cdn_embed" 
                src="https://www.canadahelps.org/services/wa/js/apps/donatenow/embed.min.js" 
                type="text/javascript" 
                data-cfasync="false" 
                data-formtype="1" 
                data-page-id="32254"
                dangerouslySetInnerHTML={{__html:<div></div>}}
            />
        )
    }
}
    

class App extends Component {
    render() {
        const routes = (
            <Switch>
                <Route exact={true} path='/' component={Home}/>
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
                <Route path='/donate' component={Donate}/>
            </Switch>
        );

        return (
            <React.Fragment>
                <Provider store={store}>
                    <Router>
                        <div className="App">
                            <Header />
                            {routes}
                            <div className="">
                                <div className="stickToTheRight">
                                    <button className="donateButton swing"><i className="fa fa-hand-holding-usd"/></button>
                                </div>
                            </div>
                            <Footer />
                        </div>
                    </Router>
                </Provider>
            </React.Fragment>
        );
    }
}

export default App;

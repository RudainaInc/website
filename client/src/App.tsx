import axios from 'axios';

import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { Store } from 'redux';

import About from './UI/containers/Tabs/About';
import Admin from './UI/containers/Tabs/Admin';
import Contact from './UI/containers/Tabs/Contact';
import Donate from './UI/containers/Tabs/Donate';
import Home from './UI/containers/Tabs/Home';
import News from './UI/containers/Tabs/News';
import Profile from './UI/containers/Tabs/Profile';
import ProgramServices from './UI/containers/Tabs/ProgramServices';
import RegisterBenefactor from './UI/containers/Tabs/RegisterBenefactor';
import RegisterVolunteer from './UI/containers/Tabs/RegisterVolunteer';
import Volunteer from './UI/containers/Tabs/Volunteer';


import * as jwt_decode from 'jwt-decode';
import { setCurrentUser } from '../../client/src/StateManager/actions/authActions';

import './App.css';

interface IOwnProps {
	store: Store<any>;
  }

type Props = IOwnProps;

const setAuthToken = (token: any) => {
    if(token) {
        axios.defaults.headers.common.Autherization = token;
    } else {
        delete axios.defaults.headers.common.Autherization;
    }
} 

class App extends React.Component<Props> {
	
	public render() {
		const { store } = this.props;

		if (localStorage.jwtToken) {
			setAuthToken(localStorage.jwtToken);
			const decoded = jwt_decode<any>(localStorage.jwtToken);
			store.dispatch(setCurrentUser(decoded));
		}

		const routes = (
            <Switch>
                <Route exact={true} path='/' component={Home}/>
                <Route exact={true} path='/about' component={About}/>
                <Route exact={true} path='/news' component={News}/>
                <Route exact={true} path='/program_services' component={ProgramServices}/>
                <Route exact={true} path='/volunteer' component={Volunteer}/>
                <Route exact={true} path='/admin' component={Admin}/>
                <Route exact={true} path='/profile' component={Profile}/>
                <Route exact={true} path='/register_vounteer' component={RegisterVolunteer}/>
                <Route exact={true} path='/register_benefactor' component={RegisterBenefactor}/>
                <Route exact={true} path='/contact_us' component={Contact}/>
                <Route exact={true} path='/donate' component={Donate}/>
            </Switch>
		);
		
		return (
			<React.Fragment>
				<Provider store={store}>
					<Router>
						<React.Fragment>
							{routes}
							<div className="container-fluid">
								<Link to="/donate"  className="donateButton swing"><i className="fas fa-hand-holding-usd"/></Link>
                            </div>
						</React.Fragment>
					</Router>
				</Provider>
			</React.Fragment>
		);
	}
}

export default App;

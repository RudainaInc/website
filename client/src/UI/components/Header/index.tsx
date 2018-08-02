import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';


import { connect } from 'react-redux';
import { loginUser } from '../../../StateManager/actions/authActions'

import { changeLang } from '../../../StateManager/actions/langActions'

import SideNavigation from './components/sideNav';

import Login from './Login';

import './header.css'

interface IStateProps {
    auth: any;
    errors: any,
    lang: string,
}

interface IProps {
    changeLang: (lang: string) => (dispatch: any) => void;
    loginUser: (userData: any) => (dispatch: any) => void;
}

type Props = IStateProps & IProps;

class Header extends React.Component<Props, any> {

    constructor(props: any) {
        super(props);

        this.onInputChange = this.onInputChange.bind(this);
        this.onLogin = this.onLogin.bind(this);

        this.state = {
            email: '',
            password: '',
            onInputChange: this.onInputChange,
            onLogin: this.onLogin,
        }

        this.handleLangChange = this.handleLangChange.bind(this);
    }

    public toggleSideNav = (action: any) => {
        this.setState({
            showNav : action
        })
    }

    public toggleToTrue=()=>{
        this.setState({
            showNav : true
        })
    }

    public render() {

        const { isAuthenticated } = this.props.auth;
        const { lang } = this.props;

        const login = (
            <div className="showRightBorder col-md-6">
                <a className="right" data-toggle="modal" data-target="#exampleModal">Log in</a>
            </div>
        )

        const profile = (
            <div className="showRightBorder col-md-6">
                <Link to="/profile" className="right">Account</Link>
            </div>
        )

        const test1 = () => {this.toggleSideNav(false)};
        const test2 = () => {this.toggleSideNav(true)}
 

        return (
            <div className="header">

                <SideNavigation 
                    showing={this.state.showNav}
                    onHideNav={test1}
                    onOpenNav={test2}
                    isAuthenticated={isAuthenticated}
                />
                
                <div className="mobileTopHeader willShow">
                    <i onClick={this.toggleToTrue} className="fas fa-bars"/>
                </div>

                <div className="container">
                    <div className="row">

                        <div className="imgContainer col-sm-12 col-md-10">
                            <img className="header-logo" src="img/rf-full-logo.png" alt="rudaina foundation full logo"/>
                        </div>
                        
                        <div className="col-md-2 willHide">
                            <div className="row loginFranciasbutton">
                                
                                {isAuthenticated ? profile : login }

                               

                                <div className="col-md-6">

                                    <a 
                                        className="left"
                                        onClick={this.handleLangChange} 
                                        id="fr"
                                        href="#"
                                    >
                                        { lang==='fr'?'English':'Français'}
                                    </a>

                                    {/* <Link to="/" className="left"><button id="switch-lang">Français</button></Link> */}
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="navLinks willHide">
                        <ul>
                            <li className="showLeftBorder showRightBorder ">
                                <NavLink className="navLink" exact={true} to="/">HOME</NavLink>
                            </li>
                            
                            <li className="showRightBorder">
                                <NavLink to="/about">
                                    { lang === 'fr' ? 'ABOUT' : 'FRENCHNESS'}</NavLink>
                            </li>
                            
                            <li className="showRightBorder">
                                <NavLink to="/news">NEWS</NavLink>
                            </li>
                            
                            <li className="showRightBorder">
                                <NavLink to="/program_services">PROGRAMS</NavLink>
                            </li>
                            
                            <li className="showRightBorder">
                                <NavLink to="/volunteer">VOLUNTEER</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <Login {...this.state}/>
            </div>
        )
    }

    private onLogin(e: any) {
        e.preventDefault();

        const user = {
            email: this.state.email,
            password: this.state.password
        }

        this.props.loginUser(user)
    }

    private onInputChange(e: React.FormEvent<HTMLInputElement>) {
        const name = e.currentTarget.name;
        const value = e.currentTarget.value;
        const prev = {...this.state};
        prev[name] = value;
        this.setState(prev);
    }

    private handleLangChange(e: any) {
        e.preventDefault();
        const { lang } = this.props;
        const isFr = lang==='fr'?'en':'fr' 
        this.props.changeLang(isFr);
        // tslint:disable-next-line:no-console
        console.log("hello");
        
    }



}

const mapStateToProps = (state: any): IStateProps => {
    return {
        auth: state.auth,
        errors: state.errors,
        lang: state.lang,
    };
}

export default connect(mapStateToProps, { changeLang, loginUser } )(Header);
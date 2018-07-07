import React, { Component } from 'react';
import { GenericBody } from '../common';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';

const Temp = ({a}) => {
    return(
        <div>
            This is a test {a}
        </div>
    )
}

class Profile extends Component {

    onLogoutClick(e) {
        e.preventDefualt;
        this.props.logoutUser();
    }

    componentDidMount() {
        if (!this.props.auth.isAuthenticated) {
          this.props.history.push("/login");
        }
    }

    render() {
        return (
            <div className="container">

                <GenericBody
                    logout={this.onLogoutClick.bind(this)}
                    lables={["a", "b", "c"]}
                    pages={[<Temp a='a'/>, <Temp a='b'/>, <Temp a='c'/>, <Temp a='c'/>]}
                />

            </div>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, {logoutUser})(Profile);
import * as React from 'react';
import { connect } from 'react-redux';

import { logoutUser } from '../../../../StateManager/actions/authActions';
import { getCurrentProfile } from '../../../../StateManager/actions/profileActions';

import TabSection from '../../TabSection';

import { GenericBody } from '../../../components';

import './styles.css';

import Calender from './components/Calender';
import Forum from './components/Forum';
import MyProfile from './components/MyProfile';
import Settings from './components/Settings';
import Status from './components/Status';
import TaskList from './components/TaskList';

interface IStateProps {
    auth: boolean;
}

interface IProps {
    logoutUser: () => (dispatch: any) =>  void;
    getCurrentProfile: (id: any) => (dispatch: any) => void;
    clearCurrentProfile: () => void;
}

type Props = IStateProps & IProps & any;

class Profile extends React.Component<Props, any> {

    constructor(props: Props) {
        super(props);
        this.onLogoutClick = this.onLogoutClick.bind(this);
    }

    public componentDidMount() {
        if (!this.props.auth.isAuthenticated) {
            this.props.history.push("/");
        } else {
            this.props.getCurrentProfile();
        }
    }

    public componentDidUpdate() {
        if (!this.props.auth.isAuthenticated) {
            this.props.history.push("/");
        } else {
            this.props.getCurrentProfile();
        }
    }



    public render() {

        const { user } = this.props.auth;

        const pages = [];
        const lables = [];

        lables.push("Profile");
        pages.push(<MyProfile user={user}/>);

        if (user.isBenefactor) {
            lables.push("Status");
            pages.push(<Status/>);
        }

        if (user.isVolunteer) {
            lables.push("TaskList");
            pages.push(<TaskList/>);
        }

        lables.push("Calender");
        pages.push(<Calender/>);

        if ( user.isVolunteer && (user.isRep || user.isBenefactor) ) {
            lables.push("Volunteer Message Board");
            pages.push(<Forum/>);

            lables.push("Benefactor Message Board");
            pages.push(<Forum/>);

        } else {
            lables.push("Message Board");
            pages.push(<Forum/>);
        }

        lables.push("Settings");
        pages.push(<Settings/>);

        return (
            <TabSection>
                <div className="container">

                    <GenericBody
                        logout={this.onLogoutClick}
                        labels={lables}
                        pages={pages}
                    />

                </div>
            </TabSection>
        );
    }

    private onLogoutClick(e: any) {
        e.preventDefault()
        this.props.logoutUser();
    }
}

const mapStateToProps = (state: any): IStateProps => {
    return {
        auth: state.auth,
    };
}


export default connect( mapStateToProps, { getCurrentProfile, logoutUser })(Profile);

import * as React from 'react';
import { connect } from 'react-redux';
import { registerVolunteerUser } from '../../../../StateManager/actions/authActions';

import TabSection from '../../TabSection';

import { AccountGroup } from '../../../components';
import { AddressGroup } from '../../../components';
import { TextAreaGroup } from '../../../components';

class RegisterVolunteer extends React.Component<any, any> {

    constructor(props: any) {
        super(props);

        this.state = {

            account: {
                fname: '',
                lname: '',
                email: '',
                password: '',
                password2: '',
            },

            contact: {
                addr: '', 
                unit: '',
                city: '',
                prov: '',
                pcode: '',
                phone: '',
            },

            goal: '',
            intreset: '',

            errors: {}
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onAccountChange = this.onAccountChange.bind(this);
        this.onContactChange = this.onContactChange.bind(this);
        
    }

    public render() {
       
        const { errors } = this.props;
        
        return (
            <TabSection>
                <div className="register">
                    <div className="container">
                        <div className="jumbotron col-md-10 mx-auto">

                            <h1 className="text-center">Volunteer Registration</h1>
                            <hr/>
                            
                            <form onSubmit={this.onSubmit}>

                                <AccountGroup
                                    values={this.state.account}
                                    onChange={this.onAccountChange}
                                    errors={errors}
                                />
                                <hr/>

                                <AddressGroup
                                    values={this.state.contact}
                                    onChange={this.onContactChange}
                                    errors={errors}
                                />

                                <hr/>

                                <TextAreaGroup
                                    name="goals"
                                    placeholder="Tell us about yourself and your goals as a volunteer."
                                    value={this.state.goals}
                                    error={errors.goals}
                                    onChange={this.onChange}
                                    lable="Why Do You Want To Volunteer"
                                />

                                <TextAreaGroup
                                    name="intreset"
                                    placeholder="Tell us what you're interested in working on with Rudaina! (i.e. Social Media, Fundraising, Program Development, etc.)"
                                    value={this.state.intreset}
                                    error={errors.intreset}
                                    onChange={this.onChange}
                                    lable="How Can You Help"
                                />

                                <hr/>

                                <input type="submit" className="big-font btn btn-info btn-block mt-4 "/>

                            </form>
                        </div>
                    </div>
                </div>
            </TabSection>
        );
    }

    private onChange(e: any) {
        const prev = {...this.state};
        prev[e.target.name] = e.target.value
        this.setState(prev);
    }

    private onContactChange(e: any) {
        const contact = {...this.state.contact}
        contact[e.target.name] = e.target.value
        this.setState({ contact });
    }

    private onAccountChange(e: any) {
        const account = {...this.state.account}
        account[e.target.name] = e.target.value
        this.setState({ account });
    }

    private onSubmit(e: any) {
        e.preventDefault();

        const newUser = {
            fname: this.state.account.fname,
            lname: this.state.account.lname,
            email: this.state.account.email,
            password: this.state.account.password,
            password2: this.state.account.password2,

            addr: this.state.contact.addr,
            unit: this.state.contact.unit,
            city: this.state.contact.city,
            prov: this.state.contact.prov,
            pcode: this.state.contact.pcode,
            phone: this.state.contact.phone,

        };

        this.props.registerVolunteerUser(newUser, this.props.history);
    }
}

const mapStateToProps = (state: any) => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, { registerVolunteerUser })(RegisterVolunteer);
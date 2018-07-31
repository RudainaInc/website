import * as React from 'react';
import { connect } from 'react-redux';
import { registerBenefactorUser } from '../../../../StateManager/actions/authActions';

import TabSection from '../../TabSection';

import { AccountGroup, SelectFieldGroup } from '../../../components';
import { AddressGroup } from '../../../components';
import BenefactorInfo from './components/BenefactorInfo';

class RegisterBenefactor extends React.Component<any, any> {

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

            info: {
                dietaryInfo: '',
                studentStatus: '',
                studentBirth: '',
                singleStatus: '',
                residencyStatus: '',
                exerciseCount: '',
                dietaryRequirement: '',
                smokeStatus: '',
            },

            errors: {}
        };

        
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onAccountChange = this.onAccountChange.bind(this);
        this.onContactChange = this.onContactChange.bind(this);
        this.onInfoChange = this.onInfoChange.bind(this);
    }


    public render() {
        
        const { errors } = this.props;
        
        return (
            <TabSection>
                <div className="register">

                    <div className="container">
                        <div className="jumbotron col-md-10 mx-auto">

                            <h1 className="text-center">Program Services Registration</h1>
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
                                <BenefactorInfo
                                    values={this.state.info}
                                    onChange={this.onInfoChange}
                                    errors={errors}
                                />
                                   
                                <SelectFieldGroup
                                    name="testtt"
                                    lable="By Clicking Sign up, You agree to the .Terms and Services. of Rudaina Foundation"
                                    value=""
                                    options={[
                                        ["Select One", "Select One"],
                                        ["Yes", "Yes"],
                                        ["No", "No"],
                                    ]}
                                />

                                <input type="file" />

                                <hr/>


                                <input type="submit" className="big-font btn btn-info btn-block mt-4 " />

                            </form>
                        </div>
                    </div>
                </div>
            </TabSection>
        );
    }

    private onChange(e: any) {
        const prev = {...this.state}
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

    private onInfoChange(e: any) {
        const info = {...this.state.info}
        info[e.target.name] = e.target.value
        this.setState({ info });
    }

    private onSubmit(e: any) {
        e.preventDefault();

        const newUser = {
            ...this.state.account,
            ...this.state.contact,
            ...this.state.info,
        };
        
        this.props.registerBenefactorUser(newUser, this.props.history);
    }

}

const mapStateToProps = (state: any) => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, { registerBenefactorUser })(RegisterBenefactor);

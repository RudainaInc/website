import * as React from 'react';
import { connect } from 'react-redux';
import { registerBenefactorUser } from '../../../../StateManager/actions/authActions';

import TabSection from '../../TabSection';

import { AccountGroup, SelectFieldGroup } from '../../../components';
import { AddressGroup } from '../../../components';
import { TextAreaGroup } from '../../../components';

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

            info: "",

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

                                {/* <TextAreaGroup
                                    name="info"
                                    placeholder="Is there anything your alergic to? What kind of food do you typically eat?"
                                    value={this.state.info}
                                    error={errors.info}
                                    onChange={this.onChange}
                                    lable="Nutritional Information"
                                /> */}

                                <SelectFieldGroup
                                    name="one"
                                    lable="Are you currently attending full-time school?"
                                    value=""
                                    options={[
                                        ["Please Select One", "Please Select One"],
                                        ["", ""],
                                        ["Yes", "Yes"],
                                        ["No", "No"],
                                        
                                    ]}
                                />
                                  <SelectFieldGroup
                                    name="two"
                                    lable="Will you be attending full time school when the baby is born?"
                                    value=""
                                    options={[
                                        ["Select One", "Select One"],
                                        ["Yes", "Yes"],
                                        ["No", "No"],
                                        
                                    ]}
                                />
                                   <SelectFieldGroup
                                    name="three"
                                    lable="Are you single? "
                                    value=""
                                    options={[
                                        ["Select One", "Select One"],
                                        ["Yes", "Yes"],
                                        ["No", "No"],
                                        
                                    ]}
                                />
                                    <SelectFieldGroup
                                    name="four"
                                    lable="What is your status in Canada?"
                                    value=""
                                    options={[
                                        ["Select One", "Select One"],
                                        ["Canadian Citizen", "Canadian Citizen"],
                                        ["Permanent Resident", "Permanent Resident"],
                                        ["Refugee", "Refugee"],
                                        ["Not Canadian", "Not Canadian"],
                                        
                                    ]}
                                />
                                    <SelectFieldGroup
                                    name="five"
                                    lable="How many times do you ex every week?"
                                    value=""
                                    options={[
                                        ["Select One", "Select One"],
                                        ["0", "0"],
                                        ["1", "1"],
                                        ["2", "2"],
                                        ["3", "3"],
                                        ["4", "4"],
                                        ["5", "5"],
                                        ["6", "6"],
                                        ["8", "7"],
                                        
                                        
                                    ]}
                                />
                                    <SelectFieldGroup
                                    name="six"
                                    lable="Do you have any special dietary requirement (vegetarian, vegan, allergies)?"
                                    value=""
                                    options={[
                                        ["Select One", "Select One"],
                                        ["Yes", "Yes"],
                                        ["No", "No"],
                                        
                                    ]}
                                    
                                />
                                <TextAreaGroup
                                    name="info"
                                    placeholder="If Yes, Please Specify"

                                />

                                 <SelectFieldGroup
                                    name="seven"
                                    lable="Do you smoke?"
                                    value=""
                                    options={[
                                        ["Select One", "Select One"],
                                        ["Yes", "Yes"],
                                        ["No", "No"],
                                        ["Occasionally", "Occasionally"],
                                        
                                    ]}
                                />
                                    <SelectFieldGroup
                                    name="eight"
                                    lable="Do you smoke?"
                                    value=""
                                    options={[
                                        ["Select One", "Select One"],
                                        ["Yes", "Yes"],
                                        ["No", "No"],
                                        ["Occasionally", "Occasionally"],
                                        
                                    ]}
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
        
        this.props.registerBenefactorUser(newUser, this.props.history);
    }

}

const mapStateToProps = (state: any) => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, { registerBenefactorUser })(RegisterBenefactor);

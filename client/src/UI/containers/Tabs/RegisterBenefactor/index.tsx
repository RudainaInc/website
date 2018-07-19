import * as React from 'react';
import { connect } from 'react-redux';
import { registerBenefactorUser } from '../../../../StateManager/actions/authActions';

import TabSection from '../../TabSection';

import { AccountGroup } from '../../../components';
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

                                <TextAreaGroup
                                    name="info"
                                    placeholder="Is there anything your alergic to? What kind of food do you typically eat?"
                                    value={this.state.info}
                                    error={errors.info}
                                    onChange={this.onChange}
                                    lable="Nutritional Information"
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
import * as React from 'react';
import TextFieldGroup from '../TextFieldGroup';

const AccountGroup = ({
    onChange,
    values,
    errors,
}: any) => {

    return ( 
        <div>
            <p>Account Information</p>
             <div className="form-row">
                <div className="col-md-6">
                    <TextFieldGroup
                        type="text" 
                        name="fname" 
                        placeholder="First Name"
                        value={values.fname}
                        onChange={onChange}
                        error={errors.fname}
                    />
                </div>
                <div className="col-md-6">
                    <TextFieldGroup
                        type="text"
                        name="lname" 
                        placeholder="Last Name"
                        value={values.lname}
                        onChange={onChange}
                        error={errors.lname}
                    />
                </div>
            </div>

            <TextFieldGroup
                type="text"
                name="email"
                placeholder="Email Address"
                value={values.email}
                onChange={onChange}
                error={errors.email}
            />

            <TextFieldGroup
                type="password"
                name="password" 
                placeholder="password"
                value={values.password}
                onChange={onChange}
                error={errors.password}
            />

            <TextFieldGroup
                type="password" 
                name="password2" 
                placeholder="confirm password"
                value={values.password2}
                onChange={onChange}
                error={errors.password2}
            />
        </div>
    )
}


export default AccountGroup
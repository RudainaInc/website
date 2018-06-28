import React from 'react'

import { TextFieldGroup } from './';

const AddressGroup = ({
    onChange,
    values,
    errors,
}) => {
    return (

        <div>
            <p>Contact Information</p>
            <div className="form-row">

                <div className="col-md-8">
                    <TextFieldGroup
                        type="text"
                        placeholder="Home Address"
                        name="addr"
                        value={values.addr}
                        onChange={onChange}
                        error={errors.addr}
                    />
                </div>

                <div className="col-md-4">
                    <TextFieldGroup
                        type="text"
                        placeholder="Apt./Unit"
                        name="apt"
                        value={values.apt}
                        onChange={onChange}
                        error={errors.apt}
                    />
                </div>

            </div>

            <div className="form-row">

                <div className="col-md-6">
                    <TextFieldGroup
                        type="text"
                        placeholder="City/Town"
                        onChange={onChange}
                        name="city"
                        value={values.city}
                        onChange={onChange}
                        error={errors.city}
                    />
                </div>

                <div className="form-group col-md-6" >
                    <select 
                        className="form-control" 
                        name="prov"
                        value={values.prov}
                        onChange={onChange}
                        style={{fontSize:"2.2rem", height:"100%"}}
                    >
                        <option value='' disabled selected>Province</option>


                        <option value="AB"> Alberta </option>
                        <option value="BC"> British Columbia </option>
                        <option value="MB"> Manitoba </option>
                        <option value="NB"> New Brunswick </option>
                        <option value="NL"> Newfoundland and Labrador </option>
                        <option value="NT"> Northwest Territories </option>
                        <option value="NS"> Nova Scotia </option>
                        <option value="NU"> Nunavut </option>
                        <option value="ON"> Ontario </option>
                        <option value="PE"> Prince Edward Island </option>
                        <option value="QC"> Quebec </option>
                        <option value="SK"> Saskatchewan </option>
                        <option value="YT"> Yukon </option>

                    </select>

                </div>

            </div>

            <div className="form-row">

                <div className="col-md-6">
                    <TextFieldGroup
                        type="text"
                        placeholder="Postal Code"
                        onChange={onChange}

                        name="pcode"
                        value={values.pcode}
                        onChange={onChange}
                        error={errors.pcode}
                    />
                </div>

                <div className="form-group col-md-6">
                    <select className="form-control" id="country" style={{fontSize:"2.2rem", height:"100%"}}>
                        <option>Canada</option>
                    </select>
                </div>

            </div>



            <div className="form-row">

                <div className="col-md-6">
                    <TextFieldGroup
                        type="text"
                        placeholder="Phone Number"
                        onChange={onChange}

                        name="phone"
                        value={values.phone}
                        onChange={onChange}
                        error={errors.phone}
                    />
                </div>

                <div className="form-group col-md-6">
                    <TextFieldGroup
                        type="text"
                        placeholder="Date Of Birth"
                        onChange={onChange}

                        name="dob"
                        value={values.dob}
                        onChange={onChange}
                        error={errors.dob}
                    />
                </div>

            </div>

            
        </div>
    )
}


export default AddressGroup
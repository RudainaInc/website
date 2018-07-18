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
                        name="unit"
                        value={values.unit}
                        onChange={onChange}
                        error={errors.unit}
                    />
                </div>

            </div>

            <div className="form-row">

                <div className="col-md-6">
                    <TextFieldGroup
                        type="text"
                        placeholder="City/Town"
                        name="city"
                        value={values.city}
                        onChange={onChange}
                        error={errors.city}
                    />
                </div>

                <div className="form-group col-md-6" >
                    <select 
                        className="big-font form-control" 
                        name="prov"
                        value={values.prov}
                        onChange={onChange}
                        style={{height:"4.3rem"}}
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

                        name="pcode"
                        value={values.pcode}
                        onChange={onChange}
                        error={errors.pcode}
                    />
                </div>

                <div className="form-group col-md-6">
                    <select className="big-font form-control" id="country" style={{height:"4.3rem"}}>
                        <option>Canada</option>
                    </select>
                </div>

            </div>



            <div className="form-row">

                <div className="col-md-6">
                    <TextFieldGroup
                        type="text"
                        placeholder="Phone Number"

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
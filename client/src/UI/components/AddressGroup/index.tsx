import * as React from 'react';

import SelectFieldGroup from '../SelectFieldGroup';
import TextFieldGroup from '../TextFieldGroup';

const AddressGroup = ({
    onChange,
    values,
    errors,
}: any) => {
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

                    <SelectFieldGroup
                        name="prov"
                        value={values.prov}
                        onChange={onChange}
                        options={[
                            ["", "Province"],
                            ["AB", "Alberta"],
                            ["BC", "British Columbia"],
                            ["MB", "Manitoba"],
                            ["NB", "New Brunswick"],
                            ["NL", "Newfoundland and Labrador"],
                            ["NT", "Northwest Territories"],
                            ["NS", "Nova Scotia"],
                            ["NU", "Nunavut"],
                            ["ON", "Ontario"],
                            ["PE", "Prince Edward Island"],
                            ["QC", "Quebec"],
                            ["SK", "Saskatchewan"],
                            ["YT", "Yukon"],
                        ]}
                        error={errors.prov}

                    />

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

                    <SelectFieldGroup
                        name="country"
                        value="canada"
                        options={[["canada","Canada"]]}
                    />
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


export default AddressGroup;
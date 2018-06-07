import React, { Component } from 'react';

class ProgramServices extends Component {
    render() {
        return (
            <div className="program-services">
                <div className="container">

                    <div className="jumbotron">

                        <h2 className="text-center">Program Services</h2>
                        <p>
                           lalallalalalallalal lallal llallal llal llala lall alal llalalla la lla lall all al al lal about
                           alalla l lalla la lla lla l allal all al alla la llalall al lal al all al allalalla l alla l la'
                           lalalallalal la llala l al alla ll alla la l ala l lal al
                        </p>

                        <hr/>

                        <p>Contact Information</p>

                        <form>

                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <input type="text" className="form-control" id="fname" placeholder="First Name"/>
                                </div>

                                <div className="form-group col-md-6">
                                    <input type="text" className="form-control" id="lname" placeholder="Last Name"/>
                                </div>
                            </div>

                            <div className="form-row">

                                <div className="form-group col-md-8">
                                    <input type="text" className="form-control" id="addr" placeholder="Home Address"/>
                                </div>

                                <div className="form-group col-md-4">
                                    <input type="text" className="form-control" id="unit" placeholder="Apt./Unit"/>
                                </div>

                            </div>

                            <div className="form-row">

                                <div className="form-group col-md-6">
                                    <input type="text" className="form-control" id="city" placeholder="City/Town"/>
                                </div>

                                <div className="form-group col-md-6">
                                    <select className="form-control" id="prov">
                                        <option>Province</option>


                                        <option>Alberta</option>
                                        <option>British Columbia</option>
                                        <option>Manitoba</option>
                                        <option>New Brunswick</option>
                                        <option>Newfoundland and Labrador</option>
                                        <option>Northwest Territories</option>
                                        <option>Nova Scotia</option>
                                        <option>Nunavut</option>
                                        <option>Ontario</option>
                                        <option>Prince Edward Island</option>
                                        <option>Quebec</option>
                                        <option>Saskatchewan</option>
                                        <option>Yukon</option>

                                    </select>

                                </div>

                            </div>

                            <div className="form-row">

                                <div className="form-group col-md-6">
                                    <input type="text" className="form-control" id="pcode" placeholder="Postal Code"/>
                                </div>

                                <div className="form-group col-md-6">
                                    <select className="form-control" id="country">
                                        <option>Canada</option>
                                    </select>
                                </div>

                            </div>

                            

                            <div className="form-row">

                                <div className="form-group col-md-6">
                                    <input type="text" className="form-control" id="addr" placeholder="Phone Number"/>
                                </div>

                                <div className="form-group col-md-6">
                                    <input type="text" className="form-control" id="unit" placeholder="Email Address"/>
                                </div>

                            </div>

                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Date Of Birth"
                                    name="city"
                                />
                            </div>

                            <hr/>

                            <div className="form-group">
                                <label>Nutritional Information</label>
                                    
                                <textarea 
                                    className="form-control" 
                                    rows="5" 
                                    id="comment"
                                    placeholder="Is there anything your alergic to? What kind of food do you typically eay?"
                                />
                            </div> 

                            <hr/>

                            <input type="submit" className="btn btn-info btn-block mt-4"/>


                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProgramServices;
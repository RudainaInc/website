import React, { Component } from 'react';

class Vounteer extends Component {
    render() {
        return (
            <div className="volunteer">
                <div className="container">

                    <div className="jumbotron">

                        <h2 className="text-center">Volunteer Description</h2>
                        <p>
                            If you are seeking a supportive, interactive, and a dynamic organization, then Rudaina Foundation should be your choice to volunteer. 
                            Your enthusiasm, innovative approaches and new ideas will be very valuable to us. Benefits to joining our team include ongoing and 
                            interactive work with a chance to develop a wealth of contacts and networks. Your career goals and work objectives are important to us.
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
                                <label>Why Do You Want To Volunteer</label>
                                    
                                <textarea 
                                    className="form-control" 
                                    rows="5" 
                                    id="comment"
                                    placeholder="Tell us about yourself and your goals as a volunteer."
                                />
                            </div> 

                            <hr/>

                            <div className="form-group">
                                <label>How Can You Help</label>
                                    
                                <textarea 
                                    className="form-control" 
                                    rows="5" 
                                    id="comment"
                                    placeholder="Tell us what you're interested in working on with Rudaina! (i.e. Social Media, Fundraising, Program Development, etc.)"
                                />
                            </div> 

                            <input type="submit" className="btn btn-info btn-block mt-4"/>


                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Vounteer;
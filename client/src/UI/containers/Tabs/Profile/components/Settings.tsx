import * as React from 'react';
import { TextAreaGroup, TextFieldGroup } from '../../../../components';



const Settings = () => {
    return(
        <div className="settings">
            
            <h2>Settings</h2>
            <hr/>

            <form className="">

                <h6>Manage Profile Pic :</h6>

                <div className="form-group">
                    <label>Upload Image</label>
                    <div className="input-group">
                        <span className="input-group-btn">
                            <span className="btn btn-default btn-file">
                                <p style={{fontSize:"2rem"}}>Browse…</p> <input type="file" id="imgInp"/>
                            </span>
                        </span>
                        <input type="text" className="form-control" readOnly={true}/>
                    </div>
                    <img id='img-upload'/>
                </div>

                <button type="submit" className="btn btn-primary marginAround">Update Profile Pic</button>
                <hr/>

                <h6>Edit Bio:</h6>
                <div className="form-group">
                    <TextAreaGroup
                        name="bio"
                        placeholder="Tell me about yourself"
                        value=""
                    />
                </div>

                <button type="submit" className="btn btn-primary marginAround">Update Boi</button>
                <hr/>
                
                <h6>My email :</h6>
                <div className="form-group">
                    <TextFieldGroup
                        type="text"
                        name="email"
                        placeholder="Email Address"
                        value=""
                    />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <button type="submit" className="btn btn-primary marginAround">Update Email</button>

                <hr/>
                <h6>Manage Password :</h6>
                <div className="form-group">
                    <TextFieldGroup
                        type="password"
                        name="password"
                        placeholder="Password"
                        value=""
                        lable="Current Password"
                    />
                </div>

                <hr/>
                <div className="form-group">
                    <TextFieldGroup
                        type="password"
                        name="password2"
                        placeholder="New Password"
                        value=""
                        lable="New Password"
                    />
                </div>
                <button type="submit" className="btn btn-primary marginAround">update Password</button>
                
                <hr/>
                <h6>Manage Phone Number :</h6>
                <div className="form-group">
                    <TextFieldGroup
                        type="tel"
                        name="tel"
                        placeholder="+1"
                        value=""
                        lable="Phone Number"
                    />

                    <button type="submit" className="btn btn-primary marginAround">update Phone Number</button>
                </div>
                <hr/>


            </form>

        </div>
    )
}

export default Settings;
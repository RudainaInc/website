import * as React from 'react';

import TextFieldGroup from '../TextFieldGroup';

const Login = (props: any) => {
    const { email, password, onInputChange, onLogin } = props;
    return (
        <div className="modal fade" id="loginModal" role="dialog" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header text-center">
                        
                            <h1 className="text-center w-100" style={{fontSize: "4rem"}}>Log in</h1>
                        
                        
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <div className="modal-body">

                        <form>

                            <TextFieldGroup
                                type="text" 
                                name="email"
                                placeholder="Email Address"
                                value={email}
                                onChange={onInputChange}
                            />

                            <TextFieldGroup
                                type="password" 
                                name="password" 
                                placeholder="password"
                                value={password}
                                onChange={onInputChange}
                            />

                            <hr/>
                            <div className="nav flex-column nav-pills generic-body-template-nav text-center">
                                <a 
                                    className="nav-link generic-body-template-nav-link text-center" 
                                    onClick={onLogin}
                                    href="#"
                                >
                                    Log in
                                </a>

                            </div>



                            <div className="" style={{color: "black"}}>
                                <p className="text-center" style={{color: "black"}}>Don't Have an Account?</p>
                            </div>

                            <div className="nav flex-column nav-pills generic-body-template-nav">
                                <a href='/volunteer' className="nav-link generic-body-template-nav-link text-center" data-dismiss="modal" >Become a volunteer</a>
                            </div>

                            <div className="" style={{color: "black"}}>
                                <p className="text-center" style={{color: "black"}}>or</p>
                            </div>

                            <div className="nav flex-column nav-pills generic-body-template-nav">
                                <a href='/program_services' className="nav-link generic-body-template-nav-link text-center" data-dismiss="modal" >Become a benefactor</a>
                            </div>
   

                            
                            

                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login;
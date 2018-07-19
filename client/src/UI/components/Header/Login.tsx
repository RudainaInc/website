import * as React from 'react';
import { Link } from 'react-router-dom';

import TextFieldGroup from '../TextFieldGroup';

const Login = (props: any) => {
    const { email, password, onInputChange, onLogin } = props;
    return (
        <div className="modal fade" id="exampleModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="text-center">LOGIN</h1>
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
                            <input type="submit" className="big-font btn btn-info btn-block mt-4" onClick={onLogin} data-dismiss="modal" />
                        </form>
                    </div>

                    <div className="modal-footer">
                        <div className="form-group col-md-6">
                            <Link className="big-font form-control btn btn-info btn-block mt-4" data-dismiss="modal" to='/volunteer'>Become a volunteer</Link>
                        </div>
                        <div className="form-group col-md-6">
                            <Link className="big-font form-control btn btn-info btn-block mt-4" to='/program_services' data-dismiss="modal" >Become a benefactor</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
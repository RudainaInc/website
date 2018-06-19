import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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

                        <Link className="form-control btn btn-info btn-block mt-4" to='/register_benefactor'>Become a Benefactor</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProgramServices;
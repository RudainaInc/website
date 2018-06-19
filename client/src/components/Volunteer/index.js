import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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

                        

                        <Link className="form-control btn btn-info btn-block mt-4" to='/register_vounteer'>Become a volunteer</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Vounteer;
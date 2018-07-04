import React, { Component } from 'react';
import { GenericBody } from '../common';

const Temp = ({a}) => {
    return(
        <div>
            This is a test {a}
        </div>
    )
}

class Profile extends Component {
    render() {
        return (
            <div className="container">

                <GenericBody
                    lables={["a", "b", "c", "Sign Out"]}
                    pages={[<Temp a='a'/>, <Temp a='b'/>, <Temp a='c'/>, <Temp a='c'/>]}
                />

            </div>
        );
    }
}

export default Profile;
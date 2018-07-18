import React from 'react'
import { Link } from 'react-router-dom';

const SignUpToday = () => {

    return ( 
        <div>
            
            <h2>
                Sign Up Today:
            </h2>
            <hr className="style"/>

            <p>
                By clicking sign up, you will be redirected to the application process. The
                wait time before being approved and contacted is usually 2-3 business
                days.
            </p>

            <Link to="/register_vounteer" class="big-font btn btn-primary">Become a Volunteer</Link>

            
        </div>
    )
}


export default SignUpToday;
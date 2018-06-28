import React from 'react'
import { Link } from 'react-router-dom';

const SignUpToday = () => {

    return ( 
        <div>
            
            <h2 className="news-section_name">
                Sign Up Today:
            </h2>
            <hr className="style"/>

            <p>
                Every birth is different. Sign up now to start receiving life basketstailored to your specific
                pregnancy.
                An expecting person is able to start receiving alife basketevery trimester that will provide
                tailored unique information to each woman. After completing the registration process,
                provided with proof of pregnancy via a doctor’s note, an expecting woman will be eligible to
                receive a package
                By registering, the user is making a profile account on our website. This is done so that if
                any problems occur during pregnancy, there will be an easy-to-follow procedure for an
                applicant to benefit from our supportive health care programs.
            </p>

            <Link to="/register_benefactor" class="btn btn-primary">Become a Benefactor</Link>
            
        </div>
    )
}


export default SignUpToday;
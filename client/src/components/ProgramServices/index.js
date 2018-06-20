import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProgramServices extends Component {
    render() {
        return (
            <div className="program-services">
                <div className="container">

                    <div className="jumbotron">

                        <h2 className="text-center">Program Services</h2>

                        <h2>
                            Our Life Basket Program:
                        </h2>
                        <p>
                            An expecting person will be able to register on our website to start receiving a “life
                            basket” every trimester that will provide tailored information to the individual woman. After
                            completing the registration process, provided with proof of pregnancy via a doctor’s note, an
                            expecting woman will be eligible to receive a package that is personalized to the
                            applicant’s: gestational period, age, previous pregnancies, relationship status, social and
                            dietary lifestyle, and household income.
                        </p>

                        <h2>
                            Our App:
                        </h2>

                        <p>
                            We offer two versions of our App. The app is available on all
                            platforms but here’s the catch…one version is free, the other
                            costs $2.99. The free version is for people who need to use its
                            features. The paid version is used as a new means of fundraising.
                            The money goes is strictly used for charitable purposes (after
                            paying out the developer fees).
                            Our app has three distinct features that are not utilised on our
                            website…. Tracking program, uploading medical documents,
                            flappy stork the game!...
                        </p>

                        <h2>
                            Our Community:
                        </h2>

                        <p>
                            By signing up, you get the chance to be part of a community that
                            is nation wide. Expecting women, nutritionists, registered nurses,
                            midwives, and health care practitioners are all part of the
                            conversation. The support is there for whomever seeks it.
                        </p>

                        <h2>
                            What Happens After Birth?
                        </h2>

                        <p>
                            Rudaina Foundation will provide health-related support to women and families
                            experiencing pregnancy related complications. This support deals with reducing
                            pregnancy related complication costs by providing financial assistance to women
                            fighting risk factors like lack of antenatal care, pregnancy induced hypertension,
                            prolonged second-stages of labor and delivery by use of instruments or
                            emergency caesarian section. Rudaina will also cover the post-pregnancy
                            treatments of the complications listed in our mission. Example treatments Rudaina
                            is expecting to provide financial support for are:

                            Hypothermia therapy;
                            Surgical interventions and medications for cerebral palsy;
                            Speech and language pathology;
                            Physical, behavioural and emotional therapy;
                            Occupational therapy for developing life skills;
                            Massage therapy;
                            Stem cell therapy; and
                            Technologies used for assistance.
                            While some of these treatments are covered under provincial health care, Rudaina
                            will ensure that any costs that exceed insurance coverage is covered on behalf of
                            the applicant.
                            Rudaina will conduct in depth verification regarding the applicant’s private
                            insurance benefits. This will be done by requesting a copy of their insurance policy
                        </p>

                        <h2>
                            Sign Up Today:
                        </h2>

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

                        <hr/>

                        <Link className="form-control btn btn-info btn-block mt-4" to='/register_benefactor'>Become a Benefactor</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProgramServices;
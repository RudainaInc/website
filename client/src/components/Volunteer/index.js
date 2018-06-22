import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Vounteer extends Component {
    render() {
        return (
            <div className="volunteer">
                <div className="container">

                    <div className="container-fluid " data-spy="scroll" data-target="#myScrollspy" data-offset="1">
                        <div className="row">
                            <nav className="col-sm-2" id="myScrollspy">
                                <ul className="nav nav-pills flex-column test2">
                                    
                                    <li className="nav-item">
                                        <a className="nav-link" href="#section1">Section 1</a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link" href="#section2">Section 2</a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link" href="#section3">Section 3</a>
                                    </li>
                                    
                                </ul>
                            </nav>

                            <div className="col-sm-10">
                                <div id="section1" className="test">

                                    <h2 className="text-center news-section_name">
                                        Volunteer Today!
                                    </h2>
                                    <hr className="style"/>
                                    
                                    <p>
                                        If you are seeking a supportive, interactive, and a dynamic workplace, then Rudaina
                                        Foundation should be your choice of to where you will volunteer. Your enthusiasm,
                                        innovative approaches and new ideas will be very valuable to us. Benefits to joining our
                                        team include ongoing and interactive work with a chance to develop a wealth of contacts
                                        and networks. Your life goals and work objectives are important to us.

                                        With our online system, all you need to do is fill out the sign up application and wait to be
                                        approved. Once approved, you will be able to see an interface only available to the
                                        volunteers.
                                    </p>

                                </div>

                                <div id="section2" className="test">

                                    <h2 className="news-section_name">
                                        Why we NEED You! (Any one of these and you’re in!)
                                    </h2>
                                    <hr className="style"/>
                                    

                                    <p>
                                        You have good analysis and decision making skills, project management, excellent written and communication skills and a passion for enhancing patron experience
                                        You are able to manage multiple projects and work collaboratively with others to deliver results
                                        You are a self-starter who can take ownership for projects in a fast-changing, growth-oriented environment
                                        You understand popular B2B Social Media channels to be leveraged within client projects
                                        Must be fluent in English and familiar with marketing concepts and communication flows
                                        You have excellent organizational, written and verbal skills
                                        You are detail oriented and committed to meeting deadlines
                                        You have good interpersonal skills
                                        You can work well independently and as part of a team
                                        You have the ability to adapt to shifting priorities and manage multiple deadlines
                                        You have the ability to problem-solve in a fast paced work environment
                                        You have Knowledge of Microsoft Office programs, including Outlook, Word, and Excel

                                    </p>

                                </div>

                                <div id="section3" className="test">

                                    <h2 className="news-section_name">
                                        Why You might NEED Us! (Any one of these and you’re welcome!)
                                    </h2>
                                    <hr className="style"/>
                                    

                                    <p>
                                        You will gain a unique opportunity to work with a good cause and impact other people’s lives
                                        You will undertake research in a number of areas pertaining to health and development
                                        You will have the opportunity to contribute your opinions and inputs to your work unit
                                        You will have the benefit of enhancing your learning experience by interacting with supportive staff and volunteers
                                        You will gain job experience and develop your knowledge base in many different areas related to research, pregnancy, mental health, charitable organizations, any more..
                                        You will make use of your creativity in developing new and innovative approaches to the project at hand
                                        You will have a chance to participate in many internal courses about conflict resolution and public speaking

                                    </p>

                                    <p>
                                        By clicking sign up, you will be redirected to the application process. The
                                        wait time before being approved and contacted is usually 2-3 business
                                        days.
                                    </p>
                                </div>
                            </div>
                        </div>    
                    </div>

                        <hr/>

                        

                        

                        <Link className="form-control btn btn-info btn-block mt-4" to='/register_vounteer'>Become a volunteer</Link>
                    </div>
            </div>
        );
    }
}

export default Vounteer;
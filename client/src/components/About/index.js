import React, { Component } from 'react';
import './about.css'


class About extends Component {
    render() {
        return (
            <div className="container" >

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

                                <h2 className="news-section_name">
                                        Our mission is to
                                </h2>
                                <hr className="style"/>


                                <p>
                                    promote health by providing supportive health care to vulnerable or low
                                    income pregnant women. This is done by providing information and
                                    materials every trimester that will enable them to take action or adopt
                                    specific behaviours that will ensure the safe birth of the child.
                                </p>

                                <p>
                                    While on this program, women who experience pregnancy related
                                    complications specific to Cerebral Palsy, Infant Hypoxic-Ischemic
                                    Encephalopathy (HIE), Anemia, and Pre-Term Births can qualify to receive
                                    financial assistance that is to be used directly for doctor approved therapy
                                    treatments and healthcare modalities.
                                </p>

                            </div>

                            <div id="section2" className="test">
                                <h2 className="news-section_name">
                                    Out long term goal
                                </h2>
                                <hr className="style"/>

                                <p>
                                    Provide life baskets every trimester to the over 350,000 persons who are
                                    expecting a baby this year, and to repeat it the following year, and so on
                                </p>
                            </div>

                            <div id="section3" className="test">         
                                <h2 className="news-section_name">
                                    Our Story
                                </h2>
                                <hr className="style"/>

                                <p>
                                    A message from the CEO
                                </p>

                                <p>
                                    I wanted to take a minute and explain the name of this foundation and the meaning
                                    that it signifies. Rudaina was the name of my cousin. She suffered from Infant
                                    Hypoxic Ischemic Encephalopathy (HIE) as a result of pregnancy related
                                    complications. The doctors gave her a life expectancy of just a few years. In 2017,
                                    she passed away at the age of 20. After she passed, I was inspired by the pain it
                                    brought me that I made it my mission to try and help other families that are going
                                    through something similar. The Rudaina Foundation will not just focus on HIE cases,
                                    it will develop and grow to help anyone that is going through something so emotional
                                    and painful. Whether that help comes from financial resources or through a
                                    foundation that can provide support, Rudaina will always be in my heart and will
                                    forever fuel my fire to help and contribute all my potential to someone in need.
                                </p>

                            </div>
                            
                        </div>
                    </div>
                </div> 
                {/* <div className="bd-example bd-example-tabs">
                    <div class="row">
                        <div class="col-3">
                            <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                <a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Our mission</a>
                                <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">long term</a>
                                <a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Our Story</a>
                            </div>
                        </div>
                        <div class="col-9">
                            <div class="tab-content" id="v-pills-tabContent">
                                <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">

                                    <h2 className="news-section_name text-center">
                                        Our mission is to
                                    </h2>
                                    <hr className="style"/>


                                    <p>
                                        promote health by providing supportive health care to vulnerable or low
                                        income pregnant women. This is done by providing information and
                                        materials every trimester that will enable them to take action or adopt
                                        specific behaviours that will ensure the safe birth of the child.
                                    </p>

                                    <p>
                                        While on this program, women who experience pregnancy related
                                        complications specific to Cerebral Palsy, Infant Hypoxic-Ischemic
                                        Encephalopathy (HIE), Anemia, and Pre-Term Births can qualify to receive
                                        financial assistance that is to be used directly for doctor approved therapy
                                        treatments and healthcare modalities.
                                    </p>
                                    
                                </div>
                                <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">

                                    <h2 className="news-section_name">
                                        Out long term goal
                                    </h2>
                                    <hr className="style"/>

                                    <p>
                                        Provide life baskets every trimester to the over 350,000 persons who are
                                        expecting a baby this year, and to repeat it the following year, and so on
                                    </p>
                                
                                </div>
                                <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                                    
                                    <h2 className="news-section_name">
                                        Our Story
                                    </h2>
                                    <hr className="style"/>

                                    <p>
                                        A message from the CEO
                                    </p>

                                    <p>
                                        I wanted to take a minute and explain the name of this foundation and the meaning
                                        that it signifies. Rudaina was the name of my cousin. She suffered from Infant
                                        Hypoxic Ischemic Encephalopathy (HIE) as a result of pregnancy related
                                        complications. The doctors gave her a life expectancy of just a few years. In 2017,
                                        she passed away at the age of 20. After she passed, I was inspired by the pain it
                                        brought me that I made it my mission to try and help other families that are going
                                        through something similar. The Rudaina Foundation will not just focus on HIE cases,
                                        it will develop and grow to help anyone that is going through something so emotional
                                        and painful. Whether that help comes from financial resources or through a
                                        foundation that can provide support, Rudaina will always be in my heart and will
                                        forever fuel my fire to help and contribute all my potential to someone in need.
                                    </p>
                                    
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div> */}

                
            </div>
        );
    }
}

export default About;
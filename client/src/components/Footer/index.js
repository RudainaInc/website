import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
    render() {
        return (
            <div>
                
                <div class="footer--blackShade_color">
                    <div class="container">
                        <div class="row">
                            <div class="col-7 footer--center">
                                <span class="left">
                                    <img class="footer--logo_bird" src="img/Rudiana_Logo_footer-bird.png" alt=""/>
                                </span>
                                <span class="footer--text_subtext blue">
                                    <span class="righ">
                                            <h3 class="footer--logo_text ">Rudaina Foundation</h3>
                                            <h6 class="footer--logo_text_num ">registered Foundation ... <a href="#">4562 345 4323</a></h6>
                                    </span>
                                </span>
                            </div>

                            <div class="col-5">
                                <div class="footer--follow_us">
                                    <p>CONNECT WITH US :</p>
                                    <p/>
                                    <div class="">
                                            <a href="#" class="fa fa-facebook"></a>
                                            <a href="#" class="fa fa-twitter"></a>
                                            <a href="#" class="fa fa-google"></a>
                                            <a href="#" class="fa fa-linkedin"></a>
                                            <a href="#" class="fa fa-instagram"></a>
                                        </div>
                                    <p/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class=" footer footer--blackShade_color">
                    <div class="container">
                        <div class=" footer--center">
                            <ul class="ul_top_hypers ">
                                <li>Copyright © 2018 Rudaina Foundation. All Rights Reserved.</li>
                                <li><a href="#">Privacy</a></li>
                                <li><a href="#">Terms</a></li>
                                <li><a href="#">Accesibility</a></li>
                                <li><a href="#">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default Footer;

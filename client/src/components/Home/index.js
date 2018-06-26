import React, { Component } from 'react';
import './home.css'

import Basket from './Basket';
import Stats from './Stats';
import OurSponsors from './OurSponsors';

class Home extends Component {

    constructor() {
        super();
        this.state = {
            currdeg: 0,
            img: "",
            text: "",
            imgarr: []
        }

        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        let currdeg = this.state.currdeg;
        console.log(currdeg, e.target)
        if(e.target.id === "n"){
            currdeg = currdeg - 120;
        }
        if(e.target.id === "p"){
            currdeg = currdeg + 120;
        }
        this.setState({currdeg});
    }

    render() {
        return (
            <div className="home">
                <div className="container">

                    <div>
                        <div className="section-header">
                            <span className="text" >The Various Baskets We Offer</span>
                        </div>
                        
                        <div className="basket-section">
                                
                            <div className="basketContainer">
                                <div id="carousel" style={{transform: "rotateY("+this.state.currdeg+"deg)" }}>
                                    <div className="item a"><img src="img/basket.jpeg" alt=""/></div>
                                    <div className="item b"><img src="img/basket2.jpeg" alt=""/></div>
                                    <div className="item c"><img src="img/basket3.jpeg" alt=""/></div>
                                </div>
                            </div>

                            <div id='n' onClick={this.onChange} className="nextButton"><i id='n' className="fa fa-angle-double-right"></i></div>
                            <div id='p' onClick={this.onChange} className="prevButton"><i id='p' className="fa fa-angle-double-left"></i></div>

                        </div>
                    </div>
                </div>
                    
                <OurSponsors/>
                <Stats/>
            </div>
        );
    }
}



export default Home;
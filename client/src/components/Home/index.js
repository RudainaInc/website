import React, { Component } from 'react';
import './home.css'

import Stats from './Stats';
import OurSponsors from './OurSponsors';
import NewsFeed from './NewsFeed';
import Subscribe from './Subscribe';

class Home extends Component {

    constructor() {
        super();
        this.state = {
            currdeg: 0,
            img: "https://wallpaperbrowse.com/media/images/soap-bubble-1958650_960_720.jpg",
            text: "Our New Website and App have Officially Launched!",
            imgarr: [
                {
                    img: "https://wallpaperbrowse.com/media/images/soap-bubble-1958650_960_720.jpg",
                    text: "Our New Website and App have Officially Launched"
                },{
                    img: "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350",
                    text: "Something else Happened"
                },{
                    img: "https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
                    text: "Rudaina kicks Abortions ass"
                }
            ],
            i: 0,
        }

        this.onChange = this.onChange.bind(this);
        // this.slide = this.slide.bind(this);
    }

    // componentDidMount() {
    //     const a = (b, c) => {
    //         setTimeout(function(){ c.slide(); return b(b, c)},5000)
    //     }
    //     a(a,this);
    // }

    onChange(e) {
        let currdeg = this.state.currdeg;
        if(e.target.id === "n") currdeg = currdeg - 120;
        if(e.target.id === "p") currdeg = currdeg + 120;
        this.setState({currdeg});
    }

    // slide() {
    //     const prev = {...this.state};
    //     prev.i = (prev.i+1)%(prev.imgarr.length);
    //     prev.img = prev.imgarr[prev.i].img;
    //     prev.text = prev.imgarr[prev.i].text;
    //     this.setState(prev);
    // }

    render() {
        return (
            <div className="home">


                <div className="">

                
                    <div className="container">

                        <div>
                            <div className="section-header">
                                <span className="text" >The Various Baskets We Offer</span>
                            </div>
                            
                            <div className="basket-section">
                                    
                                <div className="basket-container">
                                    <div id="carousel" style={{transform: "rotateY("+this.state.currdeg+"deg)" }}>
                                        <div className="basket-container-item a"><img src="img/basket.jpeg" alt=""/></div>
                                        <div className="basket-container-item b"><img src="img/basket2.jpeg" alt=""/></div>
                                        <div className="basket-container-item c"><img src="img/basket3.jpeg" alt=""/></div>
                                    </div>
                                </div>

                                <div id='n' onClick={this.onChange} className="basket-next-button"><i id='n' className="fa fa-angle-double-right"></i></div>
                                <div id='p' onClick={this.onChange} className="basket-prev-button"><i id='p' className="fa fa-angle-double-left"></i></div>

                            </div>
                        </div>
                    </div>
                </div>

                <NewsFeed
                    img={this.state.img}
                    text={this.state.text}
                />
                
                
                <OurSponsors/>
                <Stats/>
                <Subscribe/>

            </div>
        );
    }
}



export default Home;
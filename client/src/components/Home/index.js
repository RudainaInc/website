import React, { Component } from 'react';
import './home.css'

import NewsFeed from './NewsFeed';

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
        console.log(currdeg)
        if(e.target.name =="n"){
            currdeg = currdeg - 120;
        }
        if(e.target.name=="p"){
            currdeg = currdeg + 120;
        }
        this.setState({currdeg});
    }

    render() {
        return (
            <div className="home">
                <div className="container">
                    <div className="basket-section">

                        <div className="basketContainer">

                            <div id="carousel" style={{transform: "rotateY("+this.state.currdeg+"deg)" }}>
                                <div className="item a"><img src="../img/basket-remake.png" alt=""/></div>
                                <div className="item b"><img src="../img/basket-remake.png" alt=""/></div>
                                <div className="item c"><img src="../img/basket-remake.png" alt=""/></div>
                            </div>

                        </div>

                        <input type="submit" style={{marginRight: 300+'px'}} name='n' onClick={this.onChange} className="nextButton" value="&raquo" />
                        <input type="submit" style={{marginLeft: 300+'px'}} name='p' onClick={this.onChange} className="prevButton" value="&laquo" />
                    </div>

                    <NewsFeed text={this.state.text} img={this.state.img} />

                </div>
            </div>
        );
    }
}



export default Home;
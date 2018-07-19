import * as React from 'react';
import { connect } from 'react-redux';
import TabSection from '../../TabSection';

import './home.css'

import OurSponsors from './components/OurSponsors';
import Stats from './components/Stats';
import Subscribe from './components/Subscribe';

import NewsFeed from './components/NewsFeed';

interface IState {
    currdeg: number;
}

interface IStateProps {
    isOffline: boolean;
}

type Props = IStateProps;

type State = IState;

class Funding extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            currdeg: 0
        }

        this.onChange = this.onChange.bind(this);
    }
    
    public render() {
        return (
            <TabSection>
                <div className="home">

                    <div className="willHide">

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

                                    <div className="willHide">
                                        <div id='n' onClick={this.onChange} className="basket-next-button"><i id='n' className="fa fa-angle-double-right"/></div>
                                        <div id='p' onClick={this.onChange} className="basket-prev-button"><i id='p' className="fa fa-angle-double-left"/></div>
                                    </div>

                                    <div className="willShow ">
                                        <div className="row ">
                                            <div className="col-6 ">
                                                <i id='n' onClick={this.onChange} className="fas fa-arrow-circle-left right"/>
                                            </div>
                                            <div className="col-6 ">
                                                <i id='p' onClick={this.onChange} className="fas fa-arrow-circle-right left"/>
                                            </div>
                                        </div>
                                    </div>
                                    

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="willShow">
                        <div className="section-header">
                            <span className="text" >The Various Baskets We Offer</span>
                        </div>
                        
                    </div>

                    <NewsFeed/>
                    <OurSponsors/>
                    <Stats/>
                    <Subscribe/>
                </div>

            </TabSection>
        )
    }

    private onChange(e: any) {
        let currdeg = this.state.currdeg;
        if(e.target.id === "n") {currdeg = currdeg - 120};
        if(e.target.id === "p") {currdeg = currdeg + 120};
        this.setState({currdeg});
    }
}


const mapStateToProps = (state: any): IStateProps => {
    return {
        ...state,
        isOffline: true,
    };
}

export default connect(mapStateToProps)(Funding);
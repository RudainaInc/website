import * as React from 'react';
import { connect } from 'react-redux';
import TabSection from '../../TabSection';

import axios from 'axios';

import './home.css'

import OurSponsors from './components/OurSponsors';
import Stats from './components/Stats';
import Subscribe from './components/Subscribe';

import NewsFeed from './components/NewsFeed';

import { Carousel, CarouselCaption, CarouselItem }  from 'reactstrap';

interface IState {
    currdeg: number;
}

interface IStateProps {
    isOffline: boolean;
}

type Props = IStateProps ;

type State = IState & any;

class Funding extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            currdeg: 0,
            a: {
                image: "",
                title: "",
                content: "",
                source: "",
            },
            b: {
                image: "",
                title: "",
                content: "",
                source: "",
            },
            c: {
                image: "",
                title: "",
                content: "",
                source: "",
            },
            animating: false,
            items: [
                {
                    src : "../img/basket.jpeg",
                    altText: 'Slide 1',
                    caption: 'Slide 1',
                    header: 'Slide 1 Header'
                },
                {
                    src : "../img/basket2.jpeg",
                    altText: 'Slide 2',
                    caption: 'Slide 2',
                    header: 'Slide 2 Header'
                },
                {
                    src : "../img/basket3.jpeg",
                    altText: 'Slide 3',
                    caption: 'Slide 3',
                    header: 'Slide 3 Header'
                }
            ],
            activeIndex: 0,
        }

        axios
        .get('/api/news/getLatestNews')
        .then( (res: any) => {
            const a = res.data[0];
            const b = res.data[1];
            const c = res.data[2];

            const prev = {...this.state};
            prev.a = a;
            prev.b = b;
            prev.c = c;
            this.setState(prev);
        });

        this.onChange = this.onChange.bind(this);

        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);

        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }
    
    public render() {

        const { items } = this.state

        const slides = items.map( (x: any) => {
            return (
                <CarouselItem 
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={x.src}
                >
                    <img src={x.src} alt="test" />
                    <CarouselCaption captionText={x.caption} captionHeader={x.caption} />
                </CarouselItem>
            )
        })

        return (
            <TabSection>
                <div className="home">

                    <div className="willHide">

                        <div className="container">

                         <Carousel
                            next={this.next}
                            previous={this.previous}
                            className="resizeImage"
                        >
                            {slides}
                                
                        </Carousel>

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

                        
                        <Carousel
                            next={this.next}
                            previous={this.previous}
                            className="resizeImage"
                        >
                            {slides}
                                
                        </Carousel>
                        
                    </div>

                    <NewsFeed a={this.state.a} b={this.state.b} c={this.state.c}/>
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

    private next() {
        const { animating, items, activeIndex } = this.state;
        if (animating) {return;}
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }
    
    private previous() {
        const { animating, items, activeIndex } = this.state;
        if (animating) {return;}
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    private onExiting() {
        this.setState({animating: true});
    }
    
    private onExited() {
        this.setState({animating: false});
    }
}


const mapStateToProps = (state: any): IStateProps => {
    return {
        ...state,
        isOffline: true,
    };
}

export default connect(mapStateToProps)(Funding);
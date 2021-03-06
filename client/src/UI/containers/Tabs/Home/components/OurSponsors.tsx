import * as React from 'react';
import Slider from "react-slick";

function SamplePrevArrow(props: any) {
    const { onClick } = props;
    return (
        <div className="sponsor-feed-prev" onClick={onClick}>
            <span className="fa fa-chevron-left" aria-hidden="true"/>
        </div>
    );
  }
  
  function SampleNextArrow(props: any) {
    const { onClick } = props;
    return (
        <div className="sponsor-feed-next" onClick={onClick}>
            <span className="fa fa-chevron-right" aria-hidden="true"/>
        </div>
    );
  }

const OurSponsors = () => {

    const settings = {
        dots: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        speed: 300,
        slidesToScroll: 4,
        slidesToShow: 4,
        infinite: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return ( 
        <div className="sponsor">
            <div className="container">
                <div className="section-header">
                    <span className="text" >Our Support</span>
                </div>
                <div className="row">
                    <div className="col-md-12 heroSlider-fixed">
                        <div className="overlay"/>

                        <Slider {...settings}>
                            <div>
                                <img src="img/tcclogo.png" alt="" />
                            </div>
                            <div>
                                <img src="img/wk.png" alt="" />
                            </div>
                            <div>
                                <img src="img/wi.png" alt="" />
                            </div>
                            <div>
                                <img src="img/cs.png" alt="" />
                            </div>
                            <div>
                                <img src="img/green_energy.png" alt="" />
                            </div>
                           
                        </Slider>
                        

                    </div>
                </div>
            </div>
        </div>
    )
}


export default OurSponsors;
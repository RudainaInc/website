import React from 'react'


const Lalal = ({lable, classname, count}) => {
    return (
        <div className="col-md-3 col-sm-6">
            <div className="stats-item">
                <i className={classname}></i>
                <h2><span className="counter"> {count} </span><span>+</span></h2>
                <p>{lable}</p>
            </div>
        </div>
    )
}

const Stats = () => {

    return ( 
        <div id="stats">
            <div id="stats-cover" className="bg-parallax">
                <div className="content-box">
                    <div className="content-title content-title-white wow animated fadeInDown" data-wow-duration="1s" data-wow-delay=".5s">
                        <div className="section-header">
                            <span className="text white" >We Never Stop Helping!</span>
                        </div>
                        <div className="content-title-underline"></div>
                    </div>

                    <div className="container">
                        <div className="row text-center wow animated bounceInLeft" data-wow-duration="1s" data-wow-delay=".5s">
                            <Lalal lable="Packages Delivered" classname="fa fa-gift fa-5x" count={0}/>
                            <Lalal lable="PEOPLE HELPED" classname="fas fa-handshake fa-5x" count={0}/>
                            <Lalal lable="VOLUNTEERS" classname="fa fa-users fa-5x" count={13}/>
                            <Lalal lable="Apps Downloaded" classname="fa fa-download fa-5x" count={0}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Stats
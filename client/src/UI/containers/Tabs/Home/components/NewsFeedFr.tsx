import * as React from 'react';



import { NewsElm } from '../../../../../Types/News';

const CardElm = (props: NewsElm) => {
    const { image, title, content, source } = props;
    return (

        <div className="card" style={{ backgroundColor: "#f0f0f0", borderRadius: "10px", minWidth: "200px" }}>
            <img className="card-img-top" src={image} alt="Card" style={{ width: "100%" }}/>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className="card-text">{content}</p>
                <a href={source} target="_blank" className="btn btn-primary">Read More</a>
            </div>
        </div>
    )

}


const NewsFeedFr = (props: any) => {
    const { a, b, c } = props;


    return (
        <div>

            <div className="news-feed">
                <div className="section-header" style={{ padding: "0px" }}>
                    <span className="text white" >News Feed french</span>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-12">
                            <CardElm
                                {...a}
                                />
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <CardElm
                                {...b}
                                />
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <CardElm
                                {...c}
                                />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}


export default NewsFeedFr;
import * as React from 'react';
import { Link } from 'react-router-dom';

import { NewsElm } from '../../../../../Types/News';

const CardElm = (props: NewsElm) => {
    const { image, title, content, source } = props;
    return(

        <div className="card" style={{width:"400px", backgroundColor: "#f0f0f0"}}>
            <img className="card-img-top" src={image} alt="Card" style={{width:"100%"}}/>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className="card-text">{content}</p>
                <Link to={source} target="_blank" className="btn btn-primary">Read More</Link>
            </div>
        </div>
    )

}

const NewsModel = (props: any) => {
    const { data } = props;
    return (
        <div>
            <div className="row">
                {
                    data.map( (x: NewsElm, i: number) => {
                        return [
                            <CardElm {...x} key={i}/>
                        ]
                    })
                }
            </div>
        </div>
    )
}

export default NewsModel;
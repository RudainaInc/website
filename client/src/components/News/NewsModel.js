import React from 'react'
import CardElm from "./CardElm";

const NewsModel = ({data}) => {
    return ( 
        <div>
            <div className="row">
                {
                    data.map( (x, i) => {
                        return [
                            <CardElm {...x}/>
                        ]
                    })
                }
            </div>
        </div>
    )
}


export default NewsModel;
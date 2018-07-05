import React from 'react'
import { Link } from 'react-router-dom';


const CardElm = ({
    image,
    title,
    content,
    source
}) => {

    return(

        <div class="card" style={{width:"400px"}}>
            <img class="card-img-top" src={image} alt="Card" style={{width:"100%"}}/>
            <div class="card-body">
                <h2 class="card-title">{title}</h2>
                <p class="card-text">{content}</p>
                <Link to={source} target="_blank" class="btn btn-primary">Read More</Link>
            </div>
        </div>

        // <div className="col-md-4 grey news-border">
        //     <div className="">
        //         <div className="news-image">
        //             <img src={img} alt="news-image"/>
        //         </div>
        //         <div className="news-title ">
        //             <p>{title}</p>
        //         </div>
        //         <div>
        //             <p>{content}</p>
        //         </div>
        //         <div className="news-button">
        //             <button type="button" className="btn btn-primary"> 
        //                 <Link target="_blank" to={url}>READ MORE</Link>
        //             </button>
        //         </div>
        //     </div>
        // </div>
    )

}

export default CardElm;
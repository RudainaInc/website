import React from 'react'

const GenericBody = ({
    lables,
    pages
}) => {

    return (

        <div className="generic-body-template" style={{height:"350px"}}>
            <div className="row">
                

                <div className="col-8" style={{width: "100%", height:"350px", padding:"0px"}}>
                    <div className="tab-content" id="v-pills-tabContent">

                        {
                            pages.map( (x, i) => {
                                const a = i===0 ? "tab-pane fade show active" : "tab-pane fade";
                                return[<div 
                                    className={a} 
                                    role="tabpanel" 
                                    id={"v-pills-"+i}
                                    aria-labelledby={"v-pills-"+i+"-tab"}
                                    key={i}
                                >
                                    {x}
                                </div>]

                            })
                        }

                    </div>
                </div>

                <div className="col-4" style={{width: "100%", height:"350px", padding:"0px"}}>
                    <div 
                        className="nav flex-column nav-pills generic-body-template-nav news-feed-comp-height" 
                        id="v-pills-tab" 
                        role="tablist" s
                        aria-orientation="vertical"
                    >
                        
                        {
                            lables.map( (x, i) => {
                                const a = i===0 ?  "nav-link generic-body-template-nav-link active" : "nav-link generic-body-template-nav-link";
                                return[
                                    <div className="" style={{height:"33.3%"}}>
                                        
                                        <a 
                                            className={"news-feed-comp-height " + a}
                                            role="tab"
                                            data-toggle="pill"
                                            aria-selected="true"

                                            id={"v-pills-"+i+"-tab"}
                                            href={"#v-pills-"+i} 
                                            aria-controls={"v-pills-"+i} 
                                            
                                            key={i}
                                        >
                                        {x}
                                        </a>
                                    </div>
                                ]
                            })
                        }

                    </div>
                </div>

            </div>
        </div>
    )
}

const Temp = ({text}) => {
    console.log({text});
    return(<div><p>{text}</p></div>)
};
const TempImg = ({img}) => {
    return (
        <div className="news-feed-comp-img">
            <img id="image1" align="middle" border="5" className="news-feed-comp-img" src={img} style={{width: "100%", height:"350px", padding:"0px"}} alt="test"/>
        </div>
    )
}

const NewsFeed = ({
    text,
    img
}) => {

    return(
        <div className="news-feed">
            <div className="container">
                <GenericBody 
                    lables= {[
                        <Temp text={text}/>, 
                        <Temp text={text}/>,
                        <Temp text={text}/>
                    ]}
                    pages={[
                        <TempImg img={img}/>,
                        <TempImg img={img}/>,
                        <TempImg img={img}/>
                    ]}
                />
            </div>
        </div>
    )

}

export default NewsFeed;
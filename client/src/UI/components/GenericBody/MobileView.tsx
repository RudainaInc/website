import * as React from 'react'

type Props = any;

const MobileView = (props: Props) => {
    
    const { labelButtons, label, page } = props;

    return (

        <div>
            <div className="willShow">
                <div style={{backgroundColor : "#f0f0f0"}} className="row">
                    <div className="col-2">
                        <div className="dropdown content">
                            <i style={{backgroundColor : "red"}} className="fas dropbtn fa-sort-amount-down"/>
                            <div 
                                className="dropdown-content"  
                                id="v-pills-tab" 
                                role="tablist" 
                                aria-orientation="vertical"
                            >

                                {labelButtons}

                            </div>
                        </div>
                    </div>

                    <div className="col-10">
                        <p>{label}</p>
                    </div>

                </div>
                
            </div>

            <div className=" generic-body-template jumbotron ">
                {page}
            </div>

        </div>
    )
}

export default MobileView;
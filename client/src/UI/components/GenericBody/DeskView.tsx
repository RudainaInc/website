import * as React from 'react'

type Props = any;

const DeskView = (props: Props) => {
    
    const { labelButtons, page } = props;

    return (
        <div>
            <div className=" generic-body-template jumbotron ">
                <div className="row">
                    <div className="col-3 generic-body-template-nav">
                        <div className="nav flex-column nav-pills generic-body-template-nav">
                            {labelButtons}
                        </div>                        
                    </div>
                    <div className="col-9">
                        {page}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeskView;
import * as classnames from "classnames";
import * as React from 'react';

import DeskView from './DeskView';
import MobileView from './MobileView';

class GenericBody extends React.Component<any, any> {

    constructor(props: any) {
        super(props);

        this.state = {
            width: window.innerWidth,
            pageIdx: 0,
        }

        this.handlePageChange = this.handlePageChange.bind(this);
    }

    public componentWillMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
    }

    public componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    public render() {

        const { pages, labels, logout } = this.props;
        const { width, pageIdx } = this.state;
        const isMobile = width <= 1026;

        const page = pages ? pages[pageIdx]: <div>loading</div>;
        const label = labels ? labels[pageIdx]: "loading";

        const labelButtons = (labels? labels : ["loading"]).map(
            (lab: any ,i: any)=>{
                const la = !((i as number)-pageIdx);
                const classA = classnames("nav-link generic-body-template-nav-link", {active: la});
                return( 
                    <a 
                        className={classA}
                        onClick={this.handlePageChange} 
                        key={i}
                        id={i}
                        href="#"
                    >
                        {lab}
                    </a>
                )   
            }
        )

        if (logout) {
            labelButtons.push(
                <a
                    className="nav-link generic-body-template-nav-link"
                    onClick={logout}
                    key="logout"
                    
                >
                    logout
                </a>
            )
        }

        if (isMobile) {
            return(
                <div>
                    <MobileView
                        labelButtons={labelButtons}
                        label={label}
                        page={page}
                    />
                </div>
            )
        } else {
            return(
                <div>
                    <DeskView
                        labelButtons={labelButtons}
                        page={page}
                    />
                </div>
            )
        }
    }

    private handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
    };

    private handlePageChange = (e: any) => {
        const prev = {...this.state};
        prev.pageIdx = e.currentTarget.id;
        this.setState(prev);
    }
}

export default GenericBody;
import * as React from 'react';
import { connect } from 'react-redux';

import { Footer, Header } from '../../components';

interface IStateProps {
    isOffline: boolean;
}

type Props = IStateProps;


class WebTemplate extends React.Component<Props, {}> {
    public render() {
        const { children } = this.props;
        return (
            <div className="WebTemplate">
                <Header/>
                
                { children}
                
                <Footer/>
            </div>
        )
    }
}


const mapStateToProps = (state: any): IStateProps => {
    return {
        isOffline: true,
    };
}

export default connect(mapStateToProps, {})(WebTemplate);
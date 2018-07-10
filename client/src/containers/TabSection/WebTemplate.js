import React, { Component } from 'react';
import { connect } from 'react-redux';

class WebTemplate extends Component {
    render() {
        const { children } = this.props;
        return (
            <div className="WebTemplate">
                {/* <Header/> */}
                <div className="Tab container">
                    { children}
                </div>
                {/* <Footer/> */}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ...state,
    };
}

export default connect(mapStateToProps, {})(WebTemplate);
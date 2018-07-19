import * as React from 'react';
import { connect } from 'react-redux';

import { getCharityNews, getPregnancyNews, getRelevantNews } from '../../../../StateManager/actions/newsActions';

import { NewsState } from '../../../../Types/News';

import TabSection from '../../TabSection';

import { GenericBody } from '../../../components';

import NewsModel from './components/NewsModel';

interface IState {
    getCharityNews: () => (dispatch: any) => void,
    getPregnancyNews: () => (dispatch: any) => void, 
    getRelevantNews: () => (dispatch: any) => void,
}

type Props = IState & NewsState;

class News extends React.Component<Props> {

    public componentDidMount() {
        this.props.getRelevantNews();
        
        this.props.getCharityNews();
        
        this.props.getPregnancyNews();
        
    }

    public render() {
        const { relevantNews, pregnancyNews, charityNews } = this.props;

        return (
            <TabSection>
                <div className="container">

                    <GenericBody
                        labels={["Relevant News", "Pregnancy News", "Charity News"]}
                        pages={[
                            <NewsModel
                                data={relevantNews}
                                key={0}
                            />,
                            <NewsModel
                                data={pregnancyNews}
                                key={1}
                            />,
                            <NewsModel
                                data={charityNews}
                                key={2}
                            />,
                        ]}
                    />

                </div>
            </TabSection>
        );
    }
}

const mapStateToProps = (state: any): NewsState =>  {
    return {
        ...state.news
    }
}

export default connect( mapStateToProps, { getCharityNews, getPregnancyNews, getRelevantNews })(News);
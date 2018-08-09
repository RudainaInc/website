import * as React from 'react';
import TabSection from '../../TabSection';

import { GenericBody } from '../../../components';

type Props = any ;

type State = any;

const exp1 = (
    <div>
        hello
    </div>
)

const exp2 = (
    <div>
        world
    </div>
)

class Example extends React.Component<Props, State> {

    
    public render() {

        return(
            <TabSection>

                <div className="container">
                    <GenericBody
                        labels={['exp1', 'exp2']}
                        pages={[exp1, exp2]}
                    />
                </div>
            </TabSection>
        )

    }
}

export default Example;
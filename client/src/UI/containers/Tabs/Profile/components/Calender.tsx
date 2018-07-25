import * as React from 'react';

// import myModule = require('./temp');
import { feedPets } from './temp'; 

class Calender extends React.Component {
    public componentDidMount() {
        const a = new feedPets('#map', [
            { eventName: 'Web Launch', calendar: 'Events', color: 'orange', date: '2018-07-08' },
            { eventName: 'Rudaina Volunteer Party', calendar: 'Events', color: 'orange', date: '2018-07-08' },
            { eventName: 'Rudaina Music for Charity Event', calendar: 'Events', color: 'orange', date: '2018-07-13' },
            { eventName: 'Shareholders Dinner w/ Marketing', calendar: 'Events', color: 'orange', date: '2018-07-19' },
        
            { eventName: 'Parenting 101', calendar: 'Classes', color: 'blue', date: '2018-07-28' },
            { eventName: 'Giving Birth Like a Pro', calendar: 'Classes', color: 'blue', date: '2018-07-19' },
            { eventName: 'Being a Single Mother', calendar: 'Classes', color: 'blue', date: '2018-07-04' },
            { eventName: 'Its Time!!', calendar: 'Classes', color: 'blue', date: '2018-07-01' }
          ]);
        // tslint:disable-next-line:no-console
        console.log(a);
    }

    public render() {
        return <div id="map"/>
    }
}

export default Calender;


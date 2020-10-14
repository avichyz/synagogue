import React from 'react';
import {HebrewCalendar, HDate, Location, Event, Locale} from '@hebcal/core';

export default class HebcalCoreTest extends React.Component {
    testInLogs() {
        const options = {
            // year: (new Date()).getFullYear(),
            // month: 1,
            // numYears: 1,
            start: (new Date),
            end: (new Date),
            isHebrewYear: false,
            candlelighting: true,
            location: Location.lookup('Beer Sheva'),
            noHolidays: false,
            locale: 'he',
            sedrot: true,
            omer: true,
          };
          const events = HebrewCalendar.calendar(options);
          console.log("holidays:"); 
          
          console.log("Event:");
          for (const ev of events) {
            console.log("An event:");
            const hd = ev.getDate();
            const date = hd.greg();
            console.log(`date.toLocaleDateString(): ${date.toLocaleDateString(null,"weekday")}`);
            console.log(`ev.render(): ${ev.render()}`);
            console.log(`hd.toString(): ${Locale.gettext(hd.toString(), 'he')}`);           }
    }
    componentDidMount() {
        this.testInLogs();
    }
    render() {
        return(<div>

        </div>);
    }
}

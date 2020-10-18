import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { HebrewCalendar, HDate, Location, Event, Locale, Zmanim } from '@hebcal/core';
import timesEnum from '../../timesEnum';
import moment from 'moment'
//import Moment from 'react-moment';
import styles from './times.scss';

const oneSecond = 100;
const oneMinute = oneSecond * 60;
const oneHour = oneMinute*60;

const propTypes = {
}
class Times extends Component {
    constructor(props) {
        super();
        this.startDate = this.startDate.bind(this);
        this.startTime = this.startTime.bind(this);
        this.setEvents = this.setEvents.bind(this);
        this.loadZmanim = this.loadZmanim.bind(this);

        const options = {
            start: (props.startDate || props.date || new Date()),
            end: (props.endDate || props.date || new Date()),
            isHebrewYear: false,
            candlelighting: true,
            location: Location.lookup('Beer Sheva'),
            noHolidays: false,
            locale: 'he',
            sedrot: true,
            omer: true,
        };
        this.state = {
            currentTime: (new Date()).toDateString(),
            options: options
        };
    }
    startDate() {
        // Regular today
        const hebDate = new HDate();
        this.setState({todayHebDateString: hebDate.renderGematriya()});
        
        // refresh every hour
        const t = setTimeout(this.startDate, oneHour);
    }
    startTime() {
        const checkTime = (i) => {
            // add zero in front of numbers < 10
            if (i < 10) { i = "0" + i };  
            return i;
        }
        const today = new Date();
        let h = today.getHours();
        let m = today.getMinutes();
        let s = today.getSeconds();
        m = checkTime(m);
        s = checkTime(s);
        const currentTime = `${h}:${m}:${s}`;
        if (this.state.currentTime !== currentTime) {
            this.setState({ currentTime: currentTime });
        }
        const t = setTimeout(this.startTime, 500);
    }
    loadZmanim() {
        this.setState({zmanim: new Zmanim(new Date(), Location.lookup('Beer Sheva').getLatitude(), Location.lookup('Beer Sheva').getLongitude())});
    }
    
//     setTimes() {
//         const zmanim = new Zmanim();
//         .suntime() ⇒ ZmanimTimesResult
// .sunrise() ⇒ Date
// .sunset() ⇒ Date
// .hour() ⇒ number
// .hourMins() ⇒ number
// .gregEve() ⇒ Date
// .nightHour() ⇒ number
// .nightHourMins() ⇒ number
// .hourOffset(hours) ⇒ Date
// .chatzot() ⇒ Date
// .chatzotNight() ⇒ Date
// .alotHaShachar() ⇒ Date
// .misheyakir() ⇒ Date
// .misheyakirMachmir() ⇒ Date
// .sofZmanShma() ⇒ Date
// .sofZmanTfilla() ⇒ Date
// .minchaGedola() ⇒ Date
// .minchaKetana() ⇒ Date
// .plagHaMincha() ⇒ Date
// .tzeit() ⇒ Date
// .neitzHaChama() ⇒ Date
// .shkiah() ⇒ Date
//     }
    setEvents() {
        //Events
        const events = HebrewCalendar.calendar(this.state.options);
        
        events.forEach(event => {
            switch (event.constructor.name) {
                case 'CandleLightingEvent':
                    this.setState({ candleLightingEvent: event });
                    break;
                case 'DafYomiEvent':
                    this.setState({ dafYomiEvent: event });
                    break;
                case 'HavdalahEvent':
                    this.setState({ havdalahEvent: event });
                    break;
                case 'HebrewDateEvent':
                    this.setState({ hebrewDateEvent: event });
                    break;
                case 'HolidayEvent':
                    this.setState({ holidayEvent: event });
                    break;
                case 'MevarchimChodeshEvent':
                    this.setState({ mevarchimChodeshEvent: event });
                    break;
                case 'MoladEvent':
                    this.setState({ moladEvent: event });
                    break;
                case 'OmerEvent':
                    this.setState({ pmerEvent: event });
                    break;
                case 'ParshaEvent':
                    this.setState({ parshaEvent: event });
                    break;
                case 'RoshChodeshEvent':
                    this.setState({ roshChodeshEvent: event });
                    break;
            }
        });
        // const hd = todaysEvent.getDate();
        // const date = hd.greg();
    }
    getSaturday() {
        let saturday = new Date();
        if (saturday.getDay() === 5) {
            saturday.setDate(saturday.getDate() + 1);
            return saturday;
        } else if (saturday.getDay() === 6) {
            return saturday;
        } else {
            return null;
        }
    }
    getFriday() {
        let friday = new Date();
        if (friday.getDay() === 6) {
            friday.setDate(friday.getDate() - 1);
            return friday;
        } else if (friday.getDay() === 5) {
            return friday;
        } else {
            return null;
        }
    }
    componentDidMount() {
        this.loadZmanim();

        if (this.props.get === timesEnum.shabbatEntrence) {
            let options = this.state.options;
            options.start = this.getFriday();
            options.end = this.getFriday();
            this.setState({options:options});
        } else if (this.props.get === timesEnum.shabbatExit) {
            let options = this.state.options;
            options.start = this.getSaturday();
            options.end = this.getSaturday();
            this.setState({options:options});
        }

        if(this.props.get === timesEnum.currentTime) {
            this.startTime();
        } else if (this.props.get === timesEnum.todaysDate) {
            this.startDate();
        } 
        else {
            this.setEvents();
        }
    }
    render() {
        
        if((!this.props.options || (!this.props.options.start && !this.props.options.end)) &&
        [timesEnum.shabbatEntrence, timesEnum.shabbatExit].includes(this.props.get)) {
            return(<div></div>);
        }
                
        return (
            <div className={this.props.className}>
            {
                this.state.zmanim && this.props.get === timesEnum.sunrise && 
                `זריחה: ${moment(this.state.zmanim.sunrise()).format('HH:mm')}`
                ||
                this.state.zmanim && this.props.get === timesEnum.sunset && 
                `שקיעה: ${moment(this.state.zmanim.sunset()).format('HH:mm')}`
                ||
                this.props.get === timesEnum.currentTime && 
                this.state.currentTime
                ||
                this.props.get === timesEnum.todaysDate &&
                this.state.todayHebDateString
                ||
                this.props.get === timesEnum.shabbatEntrence && this.state.candleLightingEvent &&
                `כניסת השבת: ${this.state.candleLightingEvent.eventTimeStr}`
                ||
                this.props.get === timesEnum.shabbatExit && this.state.havdalahEvent &&
                `צאת השבת: ${this.state.havdalahEvent.eventTimeStr}`
            }
            </div>
        )
    }
}

Times.propTypes = propTypes;
export default Times;


import React, { Component } from 'react';
import ImgView from '../../components/imgView/ImgView';
import Times from '../../components/times/Times';
import MessagesNew from '../../components/messages/MessagesNew';
import PropTypes from 'prop-types';
import styles from './viewScreen.scss';
import { Segment, Button } from 'semantic-ui-react'
import CenterBoxContainer from './centerBox/CenterBoxContainer';
import timesEnum from '../../timesEnum';


const proptypes = {
}
class ViewScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            leftMessages: [{
                id: 'l1',
                value: 'הודעה בצד שמאל'
            }, {
                id: 'l2',
                value: 'הודעה מעניינת בצד שמאל'
            }, {
                id: 'l3',
                value: 'הודעה חשובה בצד שמאל'
            }],
            centerMessages: [{
                id: 'c1',
                value: 'הודעה באמצע'
            }, {
                id: 'c2',
                value: 'הודעה מעניינת באמצע'
            }, {
                id: 'c3',
                value: 'הודעה חשובה באמצע'
            }],
            rightMessages: [{
                id: 'r1',
                value: 'הודעה בצד ימין'
            }, {
                id: 'r2',
                value: 'הודעה מעניינת בצד ימין'
            }, {
                id: 'r3',
                value: 'הודעה חשובה בצד ימין'
            },
            ]
        };
    }

    render() {
        const { selectedImageSrc } = this.props;

        return (
            <div className={styles.container}>
                <div className={styles.header}>
                    <Segment className={styles.segmentContainer}>
                        <Times className={styles.currentDate} get={timesEnum.todaysDate} />
                    </Segment>
                    <Segment className={styles.segmentContainer}>
                        <Times className={styles.currentDate} get={timesEnum.todaysDate} />
                    </Segment>
                    <Segment className={styles.segmentContainer}>
                        <Times className={styles.currentDate} get={timesEnum.todaysDate} />
                    </Segment>
                </div>
                <div className={styles.centerRow}>
                    <MessagesNew speed="stop" className={styles.rightSidePanel}>
                        <Times get={timesEnum.shabbatEntrence} />
                        <Times get={timesEnum.shabbatExit} />
                    </MessagesNew>
                    <CenterBoxContainer className={styles.centerPanel} editMode={this.props.editMode} />
                    <MessagesNew speed="stop" className={styles.leftSidePanel}>
                        <div className={styles.todaysTimesContainer}>
                            <div className={styles.todaysTimesTitle}>זמני היום</div>
                            <Times get={timesEnum.sunrise} />
                            <Times get={timesEnum.sunset} />
                            <Times get={timesEnum.chatzot} />
                            <Times get={timesEnum.chatzotNight} />
                            <Times get={timesEnum.alotHaShachar} />
                            <Times get={timesEnum.sofZmanShma} />
                            <Times get={timesEnum.sofZmanTfilla} />
                            <Times get={timesEnum.minchaGedola} />
                            <Times get={timesEnum.minchaKetana} />
                            <Times get={timesEnum.plagHaMincha} />
                            <Times get={timesEnum.tzeit} />
                        </div>
                    </MessagesNew>
                </div>
                <div className={styles.footer}>
                    <MessagesNew className={styles.messageContainer} speed="superSlow" stop={this.props.editMode}>
                        {
                            this.props.editMode &&
                            <Button secondary>ערוך הודעות</Button>
                        }
                        {this.state.leftMessages.map((message, index) => {
                            return <li key={index}>{message.value}</li>
                        })}
                    </MessagesNew>
                    <MessagesNew className={styles.messageContainer} speed="superSlow" stop={this.props.editMode}>
                        {
                            this.props.editMode &&
                            <Button secondary>ערוך הודעות</Button>
                        }
                        {this.state.centerMessages.map((message, index) => {
                            return <li key={index}>{message.value}</li>
                        })}
                    </MessagesNew>
                    <MessagesNew className={styles.messageContainer} speed="superSlow" stop={this.props.editMode}>
                        {
                            this.props.editMode &&
                            <Button secondary>ערוך הודעות</Button>
                        }
                        {this.state.rightMessages.map((message, index) => {
                            return <li key={index}>{message.value}</li>
                        })}
                    </MessagesNew>
                </div>
            </div>
        )
    }
}

ViewScreen.propTypes = proptypes;
export default ViewScreen;
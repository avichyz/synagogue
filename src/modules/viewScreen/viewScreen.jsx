import React, { Component } from 'react';
import ImgView from '../../view/imgView/ImgView';
import Times from '../../view/times/Times';
import MessagesNew from '../../view/messages/MessagesNew';
import PropTypes from 'prop-types';
import styles from './viewScreen.scss';
import { Segment } from 'semantic-ui-react'
import timesEnum from '../../timesEnum';


const proptypes = {
    selectedImageSrc: PropTypes.string.isRequired
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
                        <div>
                            <Times get={timesEnum.currentTime} />
                        </div>
                        <div>
                            <Times get={timesEnum.todaysDate} />
                        </div>
                    </Segment>
                    <Segment className={styles.segmentContainer}>
                        <Times get={timesEnum.todaysDate} />
                    </Segment>
                    <Segment className={styles.segmentContainer}>
                        <Times get={timesEnum.todaysDate} />
                    </Segment>
                </div>
                <div className={styles.centerRow}>
                    <MessagesNew speed="superSlow" className={styles.rightSidePanel}>
                        <div>
                            <Times get={timesEnum.shabbatEntrence} />
                        </div>
                        <div>
                            <Times get={timesEnum.shabbatExit} />
                        </div>
                    </MessagesNew>
                    <Segment className={styles.centerPanel}>
                        <ImgView selectedImageSrc={selectedImageSrc} />
                    </Segment>
                    <MessagesNew speed="superSlow" className={styles.leftSidePanel}>
                        <div>
                            <Times get={timesEnum.shabbatEntrence} />
                        </div>
                        <div>
                            <Times get={timesEnum.shabbatExit} />
                        </div>
                    </MessagesNew>
                </div>
                <div className={styles.footer}>
                    <MessagesNew className={styles.messageContainer}>
                        {this.state.leftMessages.map((message, index) => {
                            return <li key={index}>{message.value}</li>
                        })}
                    </MessagesNew>
                    <MessagesNew className={styles.messageContainer}>
                        {this.state.centerMessages.map((message, index) => {
                            return <li key={index}>{message.value}</li>
                        })}
                    </MessagesNew>
                    <MessagesNew className={styles.messageContainer}>
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
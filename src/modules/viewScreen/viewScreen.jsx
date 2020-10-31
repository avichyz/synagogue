import React, { Component } from 'react';
import ImgView from '../../components/imgView/ImgView';
import Times from '../../components/times/Times';
import MessagesNew from '../../components/messages/MessagesNew';
import PropTypes from 'prop-types';
import styles from './viewScreen.scss';
import { Segment, Button } from 'semantic-ui-react'
import CenterBoxContainer from './centerBox/CenterBoxContainer';
import timesEnum from '../../timesEnum';
import { download } from '../../utils/fileSaver';

class ViewScreen extends Component {
    componentDidMount() {
        const fileSelector = document.getElementById('file-selector');
        fileSelector.addEventListener('change', (event) => {this.props.loadDataSource(event)});
    }
    render() {
        const {dataStore} = this.props;
        return (
            !dataStore &&
            <div>no data Store
                <input type="file" id="file-selector"></input>
            </div>
            ||
            <div className={styles.container}>
                <div className={styles.header}>
                    <Segment className={styles.segmentContainer}>
                        {
                            this.props.editMode &&
                            <Button onClick={this.props.gotoViewScreen}>Go to view screen</Button>
                            ||
                            <Button onClick={this.props.gotoEditScreen}>Go to edit screen</Button>
                        }
                        <Button onClick={() => { download(JSON.stringify(dataStore), "export", "txt") }}>Download</Button>
                        <input type="file" id="file-selector"></input>
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
                    <CenterBoxContainer 
                        className={styles.centerPanel} 
                        editMode={this.props.editMode}
                        texts={this.props.dataStore.texts}
                        images={this.props.dataStore.images}
                        onSaveText={this.props.onSaveText}
                        onAddNewText={this.props.onAddNewText}
                        onDeleteText={this.props.onDeleteText}
                        onAddNewImage={this.props.onAddNewImage}
                        onDeleteImage={this.props.onDeleteImage}
                        onEditImageClick={this.props.onEditImageClick}
                    />
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
                        {dataStore.leftMessages.map((message, index) => {
                            return <li key={index}>{message.value}</li>
                        })}
                    </MessagesNew>
                    <MessagesNew className={styles.messageContainer} speed="superSlow" stop={this.props.editMode}>
                        {
                            this.props.editMode &&
                            <Button secondary>ערוך הודעות</Button>
                        }
                        {dataStore.centerMessages.map((message, index) => {
                            return <li key={index}>{message.value}</li>
                        })}
                    </MessagesNew>
                    <MessagesNew className={styles.messageContainer} speed="superSlow" stop={this.props.editMode}>
                        {
                            this.props.editMode &&
                            <Button secondary>ערוך הודעות</Button>
                        }
                        {dataStore.rightMessages.map((message, index) => {
                            return <li key={index}>{message.value}</li>
                        })}
                    </MessagesNew>
                </div>
            </div>
        )
    }
}

export default ViewScreen;
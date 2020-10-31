import React, { Component, Fragment } from 'react';
import ImgView from '../../../components/imgView/ImgView';
import Times from '../../../components/times/Times';
import MessagesNew from '../../../components/messages/MessagesNew';
import PropTypes from 'prop-types';
import styles from './centerBox.scss';
import { Segment, Button } from 'semantic-ui-react'
import timesEnum from '../../../timesEnum';
import TextEditor from '../../textEditor/TextEditor';
import TextAreaContainer from '../../../components/textArea/TextAreaContainer';


const proptypes = {
}
class CenterBox extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { textContent, imgUrl,onAddNewText, onDeleteText, onAddNewImage, onDeleteImage, onSave, className } = this.props;

        return (<Fragment>
            {
                this.props.editMode &&
                <div className={styles.nextPrevContainer}>
                    <Button secondary className={styles.nextPrevButton} onClick={this.props.onPrevImage}>התמונה הקודמת</Button>
                    <Button secondary className={styles.nextPrevButton} onClick={this.props.onPrevText}>הטקסט הקודם</Button>
                </div>
            }
            {
                textContent &&
                <TextEditor
                    onSave={onSave}
                    onAddNewText={onAddNewText}
                    onDeleteText={onDeleteText}
                    editMode={this.props.editMode}
                    data={textContent}
                    index={this.props.index}
                    hebItemTypeName={this.props.hebItemTypeName} />
                ||
                imgUrl &&
                <Segment className={`${this.props.className} ${styles.imageContainer}`} style={{ backgroundImage: `url(${imgUrl})`}}>
                    {
                        this.props.editMode &&
                        <div className={styles.indexContainer}>
                            <Button secondary onClick={onDeleteImage} className={styles.innerButton}>מחק תמונה</Button>
                            <div className={styles.indexText}>
                                {`${this.props.hebItemTypeName}: ${this.props.index}`}
                            </div>
                            <Button secondary onClick={onAddNewImage} className={styles.innerButton}>הוסף תמונה</Button>
                        </div>
                    }
                </Segment>
            }
            {
                this.props.editMode &&
                <div className={styles.nextPrevContainer}>
                    <Button secondary className={styles.nextPrevButton} onClick={this.props.onNextImage}>התמונה הבאה</Button>
                    <Button secondary className={styles.nextPrevButton} onClick={this.props.onNextText}>הטקסט הבא</Button>
                </div>
            }
        </Fragment>
        )
    }
}

CenterBox.propTypes = proptypes;
export default CenterBox;
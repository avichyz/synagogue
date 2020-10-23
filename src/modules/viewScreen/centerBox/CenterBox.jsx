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
        const { textContent, imgUrl,onAddNewText, onSave, className } = this.props;

        return (<Fragment>
            {
                this.props.editMode &&
                <Button secondary onClick={this.props.onPrevItem}>הפריט הקודם</Button>
            }
            {
                textContent &&
                <TextEditor
                    onSave={onSave}
                    onAddNewText={onAddNewText}
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
                            <Button secondary className={styles.nextPrevButton}>ערוך תמונה</Button>
                            <div className={styles.indexText}>
                                {`${this.props.hebItemTypeName}: ${this.props.index}`}
                            </div>
                            <Button secondary className={styles.nextPrevButton}>הוסף תמונה</Button>
                        </div>
                    }
                </Segment>
            }
            {
                this.props.editMode &&
                <Button secondary onClick={this.props.onNextItem}>הפריט הבא</Button>
            }
        </Fragment>
        )
    }
}

CenterBox.propTypes = proptypes;
export default CenterBox;
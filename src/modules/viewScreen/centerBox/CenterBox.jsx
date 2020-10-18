import React, { Component, Fragment } from 'react';
import ImgView from '../../../components/imgView/ImgView';
import Times from '../../../components/times/Times';
import MessagesNew from '../../../components/messages/MessagesNew';
import PropTypes from 'prop-types';
import styles from './centerBox.scss';
import { Segment } from 'semantic-ui-react'
import timesEnum from '../../../timesEnum';
import TextAreaContainer from '../../../components/textArea/TextAreaContainer';


const proptypes = {
}
class CenterBox extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { textContent, imgUrl, className } = this.props;

        return (<Fragment>
            {
                textContent &&
                <Segment className={this.props.className}>
                    <TextAreaContainer 
                    onSave={this.props.onSave} 
                    content={textContent}/>
                </Segment>
                ||
                imgUrl &&
                <Segment className={this.props.className} 
                style={{backgroundImage: `url(${imgUrl})`, backgroundRepeat:'round'}}/>
            }
            </Fragment>
        )
    }
}

CenterBox.propTypes = proptypes;
export default CenterBox;
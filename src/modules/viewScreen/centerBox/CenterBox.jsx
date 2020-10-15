import React, { Component, Fragment } from 'react';
import ImgView from '../../../components/imgView/ImgView';
import Times from '../../../components/times/Times';
import MessagesNew from '../../../components/messages/MessagesNew';
import PropTypes from 'prop-types';
import styles from './centerBox.scss';
import { Segment } from 'semantic-ui-react'
import timesEnum from '../../../timesEnum';


const proptypes = {
    selectedImageSrc: PropTypes.string.isRequired
}
class CenterBox extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { selectedImageSrc } = this.props;

        return (<Fragment>
            {
                selectedImageSrc &&
                <Segment className={this.props.className} style={{backgroundImage: `url(${selectedImageSrc})`}}>
                </Segment>
                ||
                <Segment className={this.props.className}>
                <ImgView selectedImageSrc={selectedImageSrc} />
                </Segment>
            }
            </Fragment>
        )
    }
}

CenterBox.propTypes = proptypes;
export default CenterBox;
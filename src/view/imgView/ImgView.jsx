import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Segment, Image } from 'semantic-ui-react'
import styles from './imgView.scss';

const propTypes = {
    selectedImageSrc: PropTypes.string
}
class ImgView extends Component {
    render() {
        const { selectedImageSrc } = this.props;
        return (
            <Segment className={styles.container}>
                <Image src={selectedImageSrc}
                    centered size='huge' />
            </Segment>
        )
    }
}

ImgView.propTypes = propTypes;
export default ImgView;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Segment, Image } from 'semantic-ui-react'

const propTypes = {
    selectedImageSrc: PropTypes.string
}
class ImgView extends Component {
    render() {
        const { selectedImageSrc } = this.props;
        return (
            <Segment>
                <Image src={selectedImageSrc}
                    centered size='huge' />
            </Segment>
        )
    }
}

ImgView.propTypes = propTypes;
export default ImgView;

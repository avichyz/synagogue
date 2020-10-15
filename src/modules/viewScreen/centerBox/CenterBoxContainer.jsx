import React, { Component } from 'react';
import CenterBox from './CenterBox';

class CenterBoxContainer extends Component {
    render() {
        return (
                <CenterBox 
                    className={this.props.className}
                    selectedImageSrc='https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png'
                />
                
        )
    }
}

export default CenterBoxContainer;
import React, { Component } from 'react';
import ImgView from '../../view/imgView/ImgView';
import Times from '../../view/times/Times';
import PropTypes from 'prop-types';
import styles from './viewScreen.scss';

const proptypes = {
    selectedImageSrc: PropTypes.string.isRequired
}
class ViewScreen extends Component {
    render() {
        const {  selectedImageSrc } = this.props;
        return (
            <div className={styles.container}>
                <div className={styles.content}>
                    <Times/>
                    <ImgView selectedImageSrc={selectedImageSrc}/>
                    <Times/>
                </div>
                <div className={styles.footer}>
                <Times/>
                <Times/>
                <Times/>
                </div>
            </div>
        )
    }
}

ViewScreen.propTypes = proptypes;
export default ViewScreen;
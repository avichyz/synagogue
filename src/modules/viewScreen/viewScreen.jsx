import React, { Component } from 'react';
import ImgView from '../../view/imgView/ImgView';
import Times from '../../view/times/Times';
import MessagesNew from '../../view/messages/MessagesNew';
import PropTypes from 'prop-types';
import styles from './viewScreen.scss';

const proptypes = {
    selectedImageSrc: PropTypes.string.isRequired
}
class ViewScreen extends Component {
    render() {
        const { selectedImageSrc } = this.props;
        return (
            <div className={styles.container}>
                <div className={styles.content}>
                    <Times />
                    <ImgView selectedImageSrc={selectedImageSrc} />
                    <Times />
                </div>
                <div className={styles.footer}>
                    <MessagesNew className={styles.message}/>
                    <MessagesNew className={styles.message}>
                    <div>
                        יופי
    אחלה
    כיף מגניב 
    סבהה                    יופי
אחלה
כיף מגניב 
סבהה                    יופי
אחלה
כיף מגניב 
סבהה                    יופי
אחלה
כיף מגניב 
סבהה                    יופי
אחלה
כיף מגניב 
סבהה
    
                    </div>
                    </MessagesNew>
                    <MessagesNew className={styles.message}/>
                </div>
            </div>
        )
    }
}

ViewScreen.propTypes = proptypes;
export default ViewScreen;
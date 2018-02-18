import React, { Component } from 'react';
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ViewScreen from './viewScreen';
import styles from './viewScreenContainer.scss';

class ViewScreenContainer extends Component {
    render() {
        return (
            <div className={styles.container}>
                <ViewScreen 
                selectedImageSrc='http://www.arvelodesigns.com/media/img/amazing-of-contemporary-modern-furniture-modest-modern-furnitures-on-furniture-contemporary-modern-sofa-402.jpg'
                />
            </div>
        )
    }
}

{/* <Button onClick={() => this.props.changePage()}></Button> */}

const mapDispatchToProps = dispatch => bindActionCreators({
    changePage: () => push('/EditScreen')
}, dispatch)

export default connect(
    null,
    mapDispatchToProps
)(ViewScreenContainer)

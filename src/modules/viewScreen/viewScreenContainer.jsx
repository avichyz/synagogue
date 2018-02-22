import React, { Component } from 'react';
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ViewScreen from './viewScreen';

class ViewScreenContainer extends Component {
    render() {
        return (
                <ViewScreen 
                selectedImageSrc='http://www.arvelodesigns.com/media/img/amazing-of-contemporary-modern-furniture-modest-modern-furnitures-on-furniture-contemporary-modern-sofa-402.jpg'
                />
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

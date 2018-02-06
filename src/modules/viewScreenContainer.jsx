import React, { Component } from 'react';
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'

class ViewScreenContainer extends Component {
    render() {
        return (
            <div >
                <div>
                View
                </div>
                <div>
                <Button onClick={() => this.props.changePage()}></Button>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    changePage: () => push('/EditScreen')
}, dispatch)

export default connect(
    null,
    mapDispatchToProps
)(ViewScreenContainer)

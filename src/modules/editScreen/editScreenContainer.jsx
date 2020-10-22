import React, { Component } from 'react';
import ViewScreenContainer from '../viewScreen/viewScreenContainer';
// import { Button } from 'semantic-ui-react'

class EditScreenContainer extends Component {
    render() {
        return (
            <ViewScreenContainer editMode={true}/>
        )
    }
}

export default EditScreenContainer;

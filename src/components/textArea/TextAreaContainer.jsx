import React, { Component } from 'react';
import TextArea from './TextArea';

class TextAreaContainer extends Component {
    constructor(props) {
        super(props);
        this.onSave=this.onSave.bind(this);
        this.state = {content:null, id: `main-text-area-${Math.random()}`};
    }
    onSave() {
        this.props.onSave &&
        this.props.onSave(document.getElementById(this.state.id).innerHTML);
    }
    render() {
        return (
            <div>
                <TextArea 
                id={this.state.id} 
                className={this.props.className} 
                content={this.props.content}
                onSave={this.onSave}/>
            </div>
        )
    }
}

export default TextAreaContainer;

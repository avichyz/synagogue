import React, { Component, Fragment } from 'react';
import { Segment, Button } from 'semantic-ui-react'
import PropTypes from 'prop-types';
import styles from './textArea.scss';

const propTypes = {
}
class TextArea extends Component {
    render() {
        return (
            <Fragment>
            {
                <div className={styles.codeContainer}>
                    <code 
                        id={this.props.id}
                        contentEditable={true}
                        className={this.props.className} 
                        style={{direction: this.props.content.direction}}
                        dangerouslySetInnerHTML={{ __html:this.props.content.content}}>
                    </code>
                    <button onClick={this.props.onSave}>save</button>
                </div>
            }
            </Fragment>
        )
    }
}

TextArea.propTypes = propTypes;
export default TextArea;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Segment } from 'semantic-ui-react';
import classNames from 'classnames';
import styles from './messagesNew.scss';

const propTypes = {
}
class MessagesNew extends Component {
    render() {
        const { className } = this.props;
        const segmentClasses = classNames(className, styles.container)
        return (
            <Segment className={segmentClasses}>
                <div className="microsoft container">
                    <div className={`marquee ${this.props.speed}`}>
                        {this.props.children}
                    </div>
                </div>
            </Segment>
        )
    }
}

MessagesNew.propTypes = propTypes;
export default MessagesNew;

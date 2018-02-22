import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Segment } from 'semantic-ui-react'
import styles from './times.scss';

const propTypes = {
}
class Times extends Component {
    render() {
        return (
            <Segment className={styles.container}>
                Times
            </Segment>
        )
    }
}

Times.propTypes = propTypes;
export default Times;

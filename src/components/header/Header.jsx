import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './header.scss';

const propTypes = {
    headerText: PropTypes.String,
    headerIcon: PropTypes.object
}
class Header extends Component {
    render() {
        const { headerText, headerIcon } = this.props;
        return (
            <div className={styles.content}>
                <div>{headerText}</div>
                <div>{headerIcon}</div>
            </div>
        );
    }
}

Header.prototypes = propTypes;
export default Header;
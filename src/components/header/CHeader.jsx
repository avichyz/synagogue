import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Header } from 'semantic-ui-react';
import styles from './header.scss';

const propTypes = {
    headerText: PropTypes.String,
    headerIcon: PropTypes.object
}
class CHeader extends Component {
    render() {
        const { headerText, headerIcon } = this.props;
        return (
            <Header textAlign='center' className={`${styles.header} ${this.props.className}`}>
                <div>{headerText}</div>
                <div>{headerIcon}</div>
            </Header>
        );
    }
}

CHeader.prototypes = propTypes;
export default CHeader;
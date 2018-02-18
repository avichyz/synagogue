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
            <Header as='h1' textAlign='center'>
                <div>{headerText}</div>
                <div>{headerIcon}</div>
            </Header>
        );
    }
}

{/* <div className={styles.content}>
</div> */}
CHeader.prototypes = propTypes;
export default CHeader;
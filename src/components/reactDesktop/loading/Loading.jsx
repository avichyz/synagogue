import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ProgressCircle } from 'react-desktop/windows';
import styles from './loading.scss';

export default class Loading extends Component {
  static props = {
  children: PropTypes.object,
  hidden: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.number
  }
  static defaultProps = {
    hidden: false,
    color: '#000aaa',
    size: 100
  };

  render() {
    return (
        this.props.hidden &&
        this.props.children ||
        <div className={styles.container}>
        <ProgressCircle
        hidden={this.props.hidden}
        color={this.props.color}
        size={this.props.size}/>
        </div>
    );
  }
}

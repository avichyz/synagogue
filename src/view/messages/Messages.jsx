import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Segment } from 'semantic-ui-react'
import Slider from 'react-slick';
import styles from './messages.scss';

const propTypes = {
}
class Messages extends Component {
    render() {
        let settings = {
            autoplay: true,
            dots: false,
            infinite: true,
            speed: 100,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <Segment className={styles.container}>
                <Slider {...settings}>
                    <div><h3>1</h3></div>
                    <div><h3>2</h3></div>
                    <div><h3>3</h3></div>
                    <div><h3>4</h3></div>
                    <div><h3>5</h3></div>
                    <div><h3>6</h3></div>
                </Slider>
            </Segment>
        )
    }
}

Messages.propTypes = propTypes;
export default Messages;

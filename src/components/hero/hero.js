import React, { Component } from 'react'
import PropTypes from 'prop-types'

import compStyles from './hero.module.css'

class Hero extends Component {

    render() {
    
    return (
        <div
            className={compStyles.cont}
            style={{
                backgroundColor: this.props.backgroundColor,
                backgroundImage: `url(${this.props.backgroundImage})`
            }}
        />
    );
    }
}

export default Hero;

Hero.propTypes = {
    backgroundColor: PropTypes.string,
    backgroundImage: PropTypes.string,
  };

Hero.defaultProps = {
    backgroundColor: 'rgb(242, 242, 242)',
    backgroundImage: 'none'
};
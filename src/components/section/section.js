import React, { Component } from 'react'
import PropTypes from 'prop-types'

import compStyles from './section.module.css'

class Section extends Component {

    render() {
    
    return (
        <div 
            className={compStyles.cont}
            style={{
                backgroundColor: this.props.backgroundColor,
                color: this.props.color,
                flexDirection: this.props.reverse ? 'row-reverse' : 'row'
            }}
        >
            {this.props.children}
        </div>

    );
    }
}

export default Section;

Section.propTypes = {
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
    reverse: PropTypes.bool,
  };

Section.defaultProps = {
    backgroundColor: 'rgb(255, 255, 255)',
    color: 'rgb(51, 51, 51),',
    reverse: false,
};
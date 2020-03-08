import React, { Component } from 'react'
import PropTypes from 'prop-types'

import compStyles from './sectionparallax.module.scss'

class Section extends Component {
    css
    render() {
    
    return (
        <div 
            className={compStyles.cont}
            style={{
                backgroundImage: `url(${this.props.backgroundImage})`,
            }}
        >
            {this.props.children}
        </div>

    );
    }
}

export default Section;

Section.propTypes = {
    backgroundImage: PropTypes.string,
  };

Section.defaultProps = {
    backgroundImage: 'none',
};
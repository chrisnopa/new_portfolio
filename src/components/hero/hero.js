import React, { Component } from 'react'
import PropTypes from 'prop-types'

import compStyles from './hero.module.css'

class Hero extends Component {

    render() {
    
    return (
        <div className={compStyles.cont}>
            <div className={compStyles.sticky}>
                <div
                    className={compStyles.bgmobile}
                    style={{
                        backgroundColor: this.props.backgroundColor,
                    }}
                >
                    <img className={compStyles.mobileimg} src={this.props.backgroundMobileImage} alt='header'/>
                </div>
                <div
                    className={compStyles.bg}
                    style={{
                        backgroundColor: this.props.backgroundColor,
                        backgroundImage: `url(${this.props.backgroundImage})`
                    }}
                />
            </div>
            <div className={compStyles.info}>
                <div className={compStyles.title}>
                    UX Architect
                    <span className={compStyles.date} >
                        / Aug 2017
                    </span>
                </div>
                <div className={compStyles.tags}>
                    #ux  #ui #workexample
                </div>
            </div>
        </div>

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
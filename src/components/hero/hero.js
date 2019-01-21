import React, { Component } from 'react'
import PropTypes from 'prop-types'

import compStyles from './hero.module.css'

class Hero extends Component {

    render() {
    
    return (
        <div className={compStyles.cont}>
            <div className={compStyles.bg}
            style={{
                backgroundColor: this.props.backgroundColor,
                backgroundImage: `url(${this.props.backgroundImage})`,
            }}
            />
            <div className={compStyles.bgmobile}
                style={{
                    backgroundColor: this.props.backgroundColor,
                    backgroundImage: `url(${this.props.backgroundMobileImage})`,
                }}
            />
            <div className={compStyles.info}>
                <div className={compStyles.title}>
                    {this.props.title}
                    <span className={compStyles.date} >
                        / {this.props.date}
                    </span>
                </div>
                <div className={compStyles.tags}>
                    {this.props.tags}
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
    title: PropTypes.string,
    date: PropTypes.string,
    tags: PropTypes.string
  };

Hero.defaultProps = {
    backgroundColor: 'rgb(242, 242, 242)',
    backgroundImage: 'none',
    title: '',
    date: '',
    tags: ''
};
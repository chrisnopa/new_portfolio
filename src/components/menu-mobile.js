import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'

import './hamburger.scss'
import Link from 'gatsby-link'

class Menu extends Component {

    constructor() {
        super();
        this.state = {
          open: ''
        }
      }
 
      onHamburger = () => {
        if (this.state.open === 'is-active'){
          this.setState({ open: '' });
        }else {
          this.setState({ open: 'is-active' });
        }
      }

    render() {

    const styles = StyleSheet.create({
        cont: {
            position: 'fixed',
            zIndex: '999',
            '@media (min-width: 961px)': {
                display: 'none',
            },
        },
        hamburger: {
            position: 'fixed',
            zIndex: '2',
            top: '36px',
            right: '24px',
        },
        menu: {
            position: 'fixed',
            zIndex: '1',
            top: '0',
            right: '0',
            bottom: '0',
            left: '0',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            backgroundColor: 'rgba(26, 26, 26, .97)'
        },
        initials: {
            display: 'flex',
            justifyContent: 'center',
            flexGrow: '0',
            alignItems: 'center',
            textAlign: 'center',
            width: '96px',
            height: '96px',
            backgroundColor: 'rgba(26, 26, 26, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            fontSize: '32px',
            color: 'rgba(255, 255, 255, 0.9)',
            textDecoration: 'none',
            margin: '-96px 0 48px 0'
        },
        link: {
            fontSize: '24px',
            fontWeight: '300',
            color: 'rgba(252, 252, 252, .9)',
            textDecoration: 'none',
            padding: '24px 0 24px 0',
        },
    });
    
    return (
        <div className={css(styles.cont)}>
            <div className={css(styles.hamburger)}>
                <button 
                    className={'hamburger hamburger--squeeze ' +  this.state.open} type='button'
                    onClick={this.onHamburger}
                >
                    <span className='hamburger-box'>
                        <span 
                            className='hamburger-inner'
                            style={{backgroundColor: this.state.open === 'is-active' ? 'rgb(128, 128, 128)' : 'rgb(128, 128, 128)' }}
                        >
                        </span>
                    </span>
                </button>
            </div>
            {this.state.open &&
                <div className={css(styles.menu)}>
                    <Link to="/" ><div className={css(styles.initials)}>MN</div></Link>
                    <Link to="/" >
                        <div className={css(styles.link)}>HOME</div>
                    </Link>
                    <Link to="/about" >
                        <div className={css(styles.link)}>ABOUT ME</div>
                    </Link>
                    <Link to="/work" >
                        <div className={css(styles.link)}>WORK</div>
                        </Link>
                    <Link to="/blog" >
                        <div className={css(styles.link)}>BLOG</div>
                    </Link>
                </div>
            }
        </div>
    );
    }
}

export default Menu;

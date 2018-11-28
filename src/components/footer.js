import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'

import Menu from '../components/menu';

class Footer extends Component {

    render() {

    const styles = StyleSheet.create({
        cont: {
          backgroundColor: 'rgba(26, 26, 26, 0.9)',
          display: 'flex',
          padding: '48px 128px 48px 256px',
          color: 'rgba(255, 255, 255, 0.6)'
        },
        info: {
            
        },
        links: {
            flexGrow: '1',
        },
        pageLinks: {
            display: 'flex',
            justifyContent: 'flex-end',
            listStyle: 'none',
            margin: '0',
        },
        link: {
            color: 'rgba(255, 255, 255, 0.9)',
            padding: '8px 32px 8px 32px',
            margin: '0 12px 0 0',
            border: '1px solid rgba(255, 255, 255, .3)',
            borderRadius: '128px',
            fontSize: '14px',
            transition: 'all 0.2s',
            ':hover':{
                backgroundColor: 'rgba(255, 255, 255, .3)'
            }
        },
        social: {
            display: 'flex',
            justifyContent: 'flex-end',
            flexGrow: '1',
            padding: '32px 0 0 0'
        },
        icon: {
            padding: '0 24px 0 24px',
            fontSize: '24px'
        },
        infoTitle: {
            fontSize: '12px',
            margin: '0 0 0 0'
        },
        infoText: {
            margin: '-8px 0 12px 0',
            fontSize: '14px',
            color: 'rgba(255, 255, 255, 1)'
        }
    });
    
    return (
        <div className={css(styles.cont)}>
            <div className={css(styles.info)}>
                <p className={css(styles.infoTitle)}>Email</p>
                <p className={css(styles.infoText)}>contact@mikenichols.me</p>
                <p className={css(styles.infoTitle)}>Phone</p>
                <p className={css(styles.infoText)}>407.460.8633</p>
            </div>
            <div className={css(styles.links)}>
                <Menu />
                <div className={css(styles.social)}>
                    <div className={css(styles.icon)}><i className="fab fa-youtube"></i></div>
                    <div className={css(styles.icon)}><i className="fab fa-behance"></i></div>
                    <div className={css(styles.icon)}><i className="fab fa-dribbble"></i></div>
                    <div className={css(styles.icon)}><i className="fab fa-linkedin-in"></i></div>
                </div>
            </div>
        </div>
    );
    }
}

export default Footer;
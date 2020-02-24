import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'

import Menu from '../components/menu';
import { relative } from 'path';

class Footer extends Component {

    render() {

    const styles = StyleSheet.create({
        cont: {
            position: relative,
        },
        wrap: {
            position: 'absolute',
            right: 0,
            left: 0,
            zIndex: '99',
            backgroundColor: 'rgb(52, 52, 52)',
        },
        contents: {
            display: 'block',
            width: '100%',
            color: 'rgba(255, 255, 255, 0.6)', 
            padding: '48px',
            '@media (min-width: 961px)': {
                display: 'flex',
                maxWidth: '1200px',
                margin: '0 auto 0 auto',
              }, 
        },
        links: {
            flexGrow: '1',
        },
        menu: {
            display: 'none',
            '@media (min-width: 961px)': {
                display: 'block',
              },
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
            justifyContent: 'flex-start',
            flexGrow: '1',
            padding: '32px 0 24px 0',
            '@media (min-width: 961px)': {
                justifyContent: 'flex-end',
                padding: '32px 0 0 0'
              },
        },
        icon: {
            padding: '0 48px 0 0',
            fontSize: '24px',
            '@media (min-width: 961px)': {
                padding: '0 24px 0 24px'
              },
        },
        infoTitle: {
            fontSize: '12px',
            margin: '0 0 0 0'
        },
        infoText: {
            margin: '-8px 0 12px 0',
            fontSize: '14px',
            color: 'rgba(255, 255, 255, 1)'
        },
        copywrite: {
            margin: '24px 0 12px 0',
            fontSize: '14px',
        }
    });
    
    return (
        <div className={css(styles.cont)}>
            <div className={css(styles.wrap)}>
                <div className={css(styles.contents)}>
                    <div className={css(styles.info)}>
                        <p className={css(styles.infoTitle)}>Email</p>
                        <p className={css(styles.infoText)}>contact@chrispanon.me</p>
                        <p className={css(styles.copywrite)}>© Christophe Panon</p>
                    </div>
                    <div className={css(styles.links)}>
                        <div className={css(styles.menu)}><Menu /></div>
                        <div className={css(styles.social)}>
                            <div className={css(styles.icon)}>
                                <a href='https://linkedin.com/in/uxuimike/'>
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    }
}

export default Footer;
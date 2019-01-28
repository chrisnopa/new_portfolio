import React, { Component } from 'react'
import Link from 'gatsby-link'
import { StyleSheet, css } from 'aphrodite'

class Menu extends Component {

    render() {

    const styles = StyleSheet.create({
        pageLinks: {
            display: 'flex',
            justifyContent: 'flex-end',
            listStyle: 'none',
            margin: '0',
        },
        link: {
            color: 'rgba(255, 255, 255, 0.9)',
            padding: '8px 0 8px 32px',
            margin: '0 12px 0 0',
            fontSize: '14px',
            transition: 'all 0.2s',
        },

    });
    
    return (
        <ul className={css(styles.pageLinks)}>
            <li><Link to="/" className={css(styles.link)}>Home</Link></li>
            <li><Link to="/about" className={css(styles.link)}>About</Link></li>
            <li><Link to="/portfolio" className={css(styles.link)}>Portfolio</Link></li>
            <li><Link to="/contact" className={css(styles.link)}>Contact</Link></li>
        </ul>
    );
    }
}

export default Menu;
import React, { Component } from 'react'
import Link from 'gatsby-link'
import { StyleSheet, css } from 'aphrodite'

class Menu extends Component {
  constructor(props) {
    super(props);
  }
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

    });
    
    return (
        <ul className={css(styles.pageLinks)}>
            <li><Link to="/" className={css(styles.link)}>Home</Link></li>
            <li><Link to="/about" className={css(styles.link)}>About</Link></li>
            <li><Link to="/work" className={css(styles.link)}>Work</Link></li>
            <li><Link to="/blog" className={css(styles.link)}>Blog</Link></li>
        </ul>
    );
    }
}

export default Menu;
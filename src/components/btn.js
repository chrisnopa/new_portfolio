import React, { Component } from 'react'
import Link from 'gatsby-link'
import { StyleSheet, css } from 'aphrodite'

class Btn extends Component {

    render() {

    const styles = StyleSheet.create({
        cont: {
          backgroundColor: 'rgba(26, 26, 26, .9)',
          border: '1px solid rgba(26, 26, 26, .6)',
          borderRadius: '128px',
          padding: '8px 24px 8px 24px',
          width: '100%',
          color: 'rgba(252, 252, 252, 1)',
          fontSize: '18px',
          textAlign: 'center',
          margin:  '24px 0 24px 0',
          transition: 'all 0.2s',
          ':hover':{
            backgroundColor: 'rgba(128, 128, 128, .05)'
            },
          '@media (min-width: 961px)': {
            fontSize: '16px',
            color: 'rgba(26, 26, 26, 1)',
            backgroundColor: 'rgba(252, 252, 252, 1)',
            width: 'fit-content',
            margin: this.props.margin ? this.props.margin : '0 0 0 0',
          },
        },
        link: {
          color: 'inherit',
        }
    });
    
    return (
      <Link to={this.props.to} className={css(styles.link)}>  
        <div className={css(styles.cont)}>
            {this.props.children}
        </div>
      </Link>
    );
    }
}

export default Btn;
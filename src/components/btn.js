import React, { Component } from 'react'
import Link from 'gatsby-link'
import { StyleSheet, css } from 'aphrodite'

class Btn extends Component {
  constructor(props) {
    super(props);
  }
    render() {

    const styles = StyleSheet.create({
        cont: {
          backgroundColor: 'rgba(252, 252, 252, 1)',
          border: '1px solid',
          borderRadius: '128px',
          padding: '8px 24px 8px 24px',
          width: 'fit-content',
          color: 'rgba(26, 26, 26, 1)',
          fontSize: '16px',
          margin: this.props.margin ? this.props.margin : '0 0 0 0'
        },
        link: {
          color: 'inherit',
        }
    });
    
    return (
        <div className={css(styles.cont)}>
            <Link to={this.props.to} className={css(styles.link)}>{this.props.children}</Link>
        </div>
    );
    }
}

export default Btn;
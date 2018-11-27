import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'

import { Link } from "gatsby"

class BlogRow extends Component {

    render() {

    const styles = StyleSheet.create({
        cont: {
          backgroundColor: 'rgba(26, 26, 26, 0.9)',
          display: 'flex',
          padding: '48px 128px 48px 256px',
          color: 'rgba(255, 255, 255, 0.6)'
        },
    });
    
    return (
        <Link to={`/blog/`}>
            <div className={css(styles.cont)}>
                <div>Nov 27 2018</div>
                <div>{this.props.title}</div>
            </div>
        </Link>
    );
    }
}

export default BlogRow;
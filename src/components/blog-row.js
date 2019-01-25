import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'

import { Link } from "gatsby"

class BlogRow extends Component {

    render() {
    const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
    "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
    ];
      
    const d = new Date(this.props.date);
    const dateFormated = monthNames[d.getMonth()] + " " + d.getDate() + " " + d.getFullYear()

    const styles = StyleSheet.create({
        bg: {
            backgroundImage: 'none',
            '@media (min-width: 961px)': {
                backgroundImage: 'url(/static/' + this.props.bg + ')'
              },
        },
        cont: {
            backgroundColor: 'rgba(252, 252, 252, 1)',
          padding: this.props.featured ? '32px 32px 32px 96px' : '32px',
          borderBottom: '1px solid rgba(128, 128, 128, 0.1)',
          borderTop: this.props.featured ? '1px solid rgba(128, 128, 128, 0.1)' : 'none',
          transition: 'all 0.4s',
          color: 'rgba(26, 26, 26, 0.8)',
          ':hover': {
            backgroundColor: 'rgba(102, 102, 102, 0.85)',
            color: 'rgba(255, 255, 255, 1)',
          },
        },
        date: {
            fontSize: '12px',
            opacity: '0.6'
        },
        title: {
            display: 'flex',
            alignItems: 'center',
            fontSize: '20px',
            margin: '-4px 0 0 0'
        },
        icon: {
            padding: '0 0 0 12px',
            color: 'rgb(204, 204, 204)'
        },
        tags: {
            fontSize: '12px',
            opacity: '0.6'
        },
    });
    
    return (
        <Link to={this.props.link}>
            <div className={css(styles.bg)}>
                <div className={css(styles.cont)}>
                    <div className={css(styles.date)}>{this.props.featured? "Featured" : dateFormated}</div>
                    <div className={css(styles.title)}>
                        {this.props.title}
                        <div className={css(styles.icon)}>
                            <i className="fas fa-long-arrow-alt-right"></i>
                        </div>
                    </div>
                    <div className={css(styles.tags)}>{this.props.tags}</div>
                </div>
            </div>
        </Link>
    );
    }
}

export default BlogRow;
import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'

class Pill extends Component {

    tagClick = () => {
        this.props.click(this.props.value);
    }

    render() {

    const styles = StyleSheet.create({
        cont: {
          backgroundColor: this.props.active ? 'rgba(26, 26, 26, .8)' : 'rgba(252, 252, 252, 1)',
          border: '1px solid rgba(26, 26, 26, .6)',
          borderRadius: '128px',
          padding: '2px 24px 2px 24px',
          width: 'fit-content',
          color: this.props.active ? 'rgba(252, 252, 252, 1)' : 'rgba(26, 26, 26, 1)',
          fontSize: '14px',
          margin: '0 8px 12px 0',
          cursor: 'pointer',
          transition: 'all 0.2s',
        }
    });
    
    return (
        <div className={css(styles.cont)} onClick={this.tagClick}>
            {this.props.value}
        </div>
    );
    }
}

export default Pill;
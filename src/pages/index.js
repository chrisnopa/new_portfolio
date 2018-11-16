import React, { Component } from 'react'
import Link from 'gatsby-link'
import { StyleSheet, css } from 'aphrodite'
import Layout from '../components/layout'
import Background from '../images/office.jpg';

class IndexPage extends Component {
    constructor(props) {
        super(props);
        this.state = {showModal: false};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            showModal: !prevState.showModal
        }));
    }

    render() {

    const styles = StyleSheet.create({
        cont: {
          padding: '256px 0 0 128px',
          color: 'rgba(255, 255, 255, 0.9)'
        },
        bg: {
            zIndex: '-1',
            position: 'fixed',
            top: '0px',
            right: '0px',
            bottom: '0px',
            left: '0px',
            backgroundImage: `url(${Background})`,
        },
    });
    
    return (
      <Layout>
        <div className={css(styles.cont)}>
          <div className={css(styles.bg)} />
          <h1>Mike Nichols</h1>
          <h2>User Experience/Product Development</h2>
        </div>
      </Layout>
    );
    }
}

export default IndexPage;




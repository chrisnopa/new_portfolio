import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'
import Layout from '../components/layout/layout'

import Menu from '../components/menu';
import IntroBGMobile from '../images/office-mobile.jpg';
import IntroBG from '../images/office.jpg';
import AboutBG from '../images/about-work.jpg';
import AboutBGMobile from '../images/about-work-mobile.jpg';
import Btn from '../components/btn'

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
        color: 'rgba(255, 255, 255, 0.9)',
      },
      intro: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '500px',
        height: '100vh',
        backgroundImage: `url(${IntroBGMobile})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
        '@media (min-width: 961px)': {
          backgroundImage: `url(${IntroBG})`,
        },
      },
      menu: {
        display: 'none',
        position: 'absolute',
        top: '48px',
        right: '48px',
        '@media (min-width: 961px)': {
            display: 'block',
        },
      },
      center: {
        width: '100%',
        padding: '0 32px 48px 32px',
        '@media (min-width: 961px)': {
          display: 'block',
          padding: '0 128px 48px 256px',
        },
      },
      name: {
        fontSize: '42px',
        fontWeight: '300',
        margin: '0 0 0 0',
        '@media (min-width: 961px)': {
          fontSize: '64px',
        },
      },
      about: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0 0 0 0',
        backgroundColor: 'rgba(252, 252, 252, 1)',
        color: 'rgba(51, 51, 51, 1)',
        '@media (min-width: 961px)': {
          padding: '128px 128px 128px 256px',
        },
      },
      aboutText: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        minHeight: '780px',
        padding: '0 32px 0 32px',
        backgroundImage: `url(${AboutBGMobile})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center right',
        '@media (min-width: 961px)': {
          padding: '0 400px 0 0',
          backgroundImage: `url(${AboutBG})`,
        },
      },
      cta: {
        display: 'block',
        alignItems: 'center',
        margin: '12px 0 0 0',
        '@media (min-width: 961px)': {
          display: 'flex',
        },
      }
    });
    
    return (
      <Layout>
        <div className={css(styles.cont)}>

          <div className={css(styles.intro)} >
            <div className={css(styles.menu)}>
              <Menu />
            </div>
            <div className={css(styles.center)}>
              <h1 className={css(styles.name)}>Mike Nichols</h1>
              <div className="accent-bar" />
              <h2 className="titles">User Experience / Product Development</h2>
            </div>
          </div>

          <div className={css(styles.about)} >
            <div className={css(styles.aboutText)}>
              <div>
                <h2 className="titles">Building better experiences</h2>
                <div className="accent-bar" />
                <p>Over the past 16 years of my professional career, I have worked with many different clients, companies, and corporations. 
                I’ve sketched, wireframed, prototyped, and tested. I’ve coded, integrated, debugged, and deployed. I’ve been a one-man show, 
                a team leader, and have built a practice. In all of these endeavors, the common goal has been simply: to build better user experiences.  
                This site is here to show some of what I have done (The Work) and share some of what I have learned (The Blog).</p> 
              </div>
              <div className={css(styles.cta)}>
                <Btn to="/work" margin="0 12px 0 0">See the work</Btn>
                <Btn to="/blog">Read the blog</Btn>
              </div>
            </div>
          </div>
          
        </div>
      </Layout>
    );
    }
}

export default IndexPage;




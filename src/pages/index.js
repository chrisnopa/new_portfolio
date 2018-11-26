import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'
import Layout from '../components/layout'
import Btn from '../components/btn'
import IntroBG from '../images/office.jpg';
import AboutBG from '../images/aboutWork.jpg';

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
        backgroundImage: `url(${IntroBG})`,
      },
      center: {
        width: '100%',
        padding: '0 128px 48px 256px',
      },
      name: {
        fontSize: '64px',
        fontWeight: '300',
        margin: '0 0 0 0'
      },
      title: {
        fontSize: '32px',
        fontWeight: '400',
        margin: '0 0 0 0'
      },
      accent: {
        width: '64px',
        height: '2px',
        backgroundColor: 'rgba(128, 128, 128, 0.6)',
        margin: '16px 0 16px 0'
      },
      about: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '128px 128px 128px 256px',
        backgroundColor: 'rgba(252, 252, 252, 1)',
        color: 'rgba(51, 51, 51, 1)',
      },
      aboutText: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        minHeight: '780px',
        padding: '0 400px 0 0',
        backgroundImage: `url(${AboutBG})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center right',
      },
      aboutImg: {
        height: '600px',
        width: "40%",
        backgroundColor: 'rgba(52, 0, 52, 1)', 
        margin: '0 0 0 -300px',
      },
      cta: {
        display: 'flex',
        alignItems: 'center',
        margin: '12px 0 0 0'
      }
    });
    
    return (
      <Layout>
        <div className={css(styles.cont)}>

          <div className={css(styles.intro)} >
            <div className={css(styles.center)}>
              <h1 className={css(styles.name)}>Mike Nichols</h1>
              <div className={css(styles.accent)}/>
              <h2 className={css(styles.title)}>User Experience / Product Development</h2>
            </div>
          </div>

          <div className={css(styles.about)} >
            <div className={css(styles.aboutText)}>
              <div>
                <h2 className={css(styles.title)}>Building better experiences</h2>
                <div className={css(styles.accent)}/>
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




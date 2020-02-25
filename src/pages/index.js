import React, { Component } from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout/layout'
import compStyles from "./css/home.module.css"

import IntroBG from '../images/DSC_0415.jpg';
import ContactIcon from '../images/icons/mail(1).png'
import WorkIcon from '../images/icons/pencil(1).png'
import AboutIcon from '../images/icons/sunglasses(1).png'

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
    
    return (
      <Layout>
        <section className={compStyles.intro}>
          <div className='section-content'>
            <h1>Christophe Panon</h1>
            <h2>User Experience / Product Development</h2>
            <p>
              Over the past 16 years of my career, I have worked with many different clients, companies, and corporations. 
              I’ve sketched, wireframed, prototyped, and tested. I’ve coded, integrated, and debugged. I’ve been a one-man show, 
              a team leader, and have built a practice. In all of these endeavors, the common goal has been simply: to build better user experiences.
            </p>
            </div>
            <div className='section-img'>
            <img src={IntroBG} alt="Mike Nichols User Experience - Product Development" />
          </div>
        </section>
        <div className={compStyles.todo}>
          <Link to="/portfolio" >
            <div className={compStyles.block}>
              <img src={WorkIcon} alt="Portfolio Icon" />
              <h3>Portfolio</h3>
              See some of my work, projects, and designs.
            </div>
          </Link>
          <Link to="/about" >
            <div className={compStyles.block}>
              <img src={AboutIcon} alt="Blog Icon" />
              <h3>A propos</h3>
                Read about me, my career, and my approach to design.
            </div>
          </Link>
          <Link to="/contact" >
            <div className={compStyles.block}>
              <img src={ContactIcon} alt="Contact Icon" />
              <h3>Contact</h3>
              Interested in working together? Let's connect.
            </div>
          </Link>
        </div>
      </Layout>
    );
    }
}

export default IndexPage;




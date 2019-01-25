import React, { Component } from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout/layout'
import compStyles from "./css/home.module.css"

import IntroBG from '../images/office.jpg';
import ContactIcon from '../images/icons/contact.jpg'
import WorkIcon from '../images/icons/work.jpg'
import BlogIcon from '../images/icons/blog.jpg'

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
            <h1>Mike Nichols</h1>
            <h2>User Experience / Product Development</h2>
            <p>
              Over the past 16 years of my career, I have worked with many different clients, companies, and corporations. 
              I’ve sketched, wireframed, prototyped, and tested. I’ve coded, integrated, and debugged. I’ve been a one-man show, 
              a team leader, and have built a practice. In all of these endeavors, the common goal has been simply: to build better user experiences.
            </p>
            </div>
            <div className='section-img'>
            <img src={IntroBG} alt="Nielsen Screen" />
          </div>
        </section>
        <div className={compStyles.todo}>
          <Link to="/work" >
            <div className={compStyles.block}>
              <img src={WorkIcon} alt="Nielsen Screen" />
              <h3>See the work</h3>
              Explore microtransactions like never before and monetize any digital interaction.
            </div>
          </Link>
          <Link to="/blog" >
            <div className={compStyles.block}>
              <img src={BlogIcon} alt="Nielsen Screen" />
              <h3>Read the blog</h3>
              Explore microtransactions like never before and monetize any digital interaction.
            </div>
          </Link>
          <Link to="/contact" >
            <div className={compStyles.block}>
              <img src={ContactIcon} alt="Nielsen Screen" />
              <h3>Get in touch</h3>
              Explore microtransactions like never before and monetize any digital interaction.
            </div>
          </Link>
        </div>
      </Layout>
    );
    }
}

export default IndexPage;




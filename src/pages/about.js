import React from 'react'

import Layout from '../components/layout/layout'

import SecImg1 from '../images/about/sticky.jpg'
import SecImg2 from '../images/about/uxui.jpg'

const About = () => (
  <Layout>
    <section className='section-double'>
      <div className='section-content'>
        <h3>About Me</h3>
        <h2>Creative Problem Solving</h2>
        <p>
        I love the challenge of taking something complex, breaking it down into digestible parts, understanding the variables in play, and 
        working through the solution.  The big variable early in my career was always what problems should I try and solve.  I had a brief 
        life as a mechanical engineer and found out pretty quickly those are not the kinds of problems I am interested in. Following that, 
        I went into graphic/web design.  While it was closer to what I was looking for, it was still missing something.  The turning point 
        came when I discovered UX; I knew these were the kinds of problems I wanted to solve.  By taking the creative skills I had developed 
        and putting them into the structured process of user-centered design, I was able to make both side of my brain happy, and find my 
        calling in life.  
        </p>
      </div>
      <div className='section-img'>
        <img src={SecImg1} alt="UX/UI" />  
      </div>
    </section>
    <section className='section-double section-reverse'>
      <div className='section-content'>
        <h3>Design Approach</h3>
        <h2>Understand The Problem</h2>
        <p>
        I believe the more time you spend examining the problem, the better chance you have of solving it.  In design, asking ‘what do you need it to do’ 
        is not enough.  You need to understand what, when, how and most importantly why.  I believe design is measured on how well it serves its 
        purpose.  You have to walk a mile in the shoes of the users before you can truly understand what they really need. 
        </p>
      </div>
      <div className='section-img'>
        <img src={SecImg2} alt="UX/UI" />  
      </div>
    </section>
  </Layout>
)

export default About
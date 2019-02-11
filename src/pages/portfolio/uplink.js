import React from 'react'

import Layout from '../../components/layout/layout'

import IntroImg from '../../images/uplink/intro.jpg'
import SecImg1 from '../../images/uplink/assignment.jpg'
import SecImg2 from '../../images/uplink/drop.gif'
import SecImg3 from '../../images/uplink/messages.jpg'
import SecImg4 from '../../images/uplink/filters.jpg'
import SecImg5 from '../../images/uplink/activity.jpg'
import SecImg6 from '../../images/uplink/chart.gif'

const Blog3 = () => (
  <Layout>
    <section className='section-double section-intro'>
      <div className='section-content'>
        <h3>Lunar</h3>
        <h2>Uplink</h2>
        <p>
        Uplink is a messaging platform.  This was a completely new product and my role was a design of the entire experience from the ground 
        up.  Being part of the Lunar suite, it leverages design elements from Shuttle.  
        </p>
      </div>
      <div className='section-img'>
        <img src={IntroImg} alt="Headbutt Trivia" />
      </div>
    </section>
    <section className='section-double section-reverse'>
      <div className='section-content'>
        <h3>Approach</h3>
        <h2>Stand Out</h2>
        <p>
        The web app portion of Uplink exists to manage users, manage numbers, view messages, and monitor activity.  With this being a brand new product 
        and a relatively simple UI the approach tended more towards making the design stand out.   This was important for demos and to gain attention 
        for the product.
        </p>
      </div>
      <div className='section-img'>
        <img src={SecImg1} alt="Shuttle Flowmap" />
      </div>
    </section>
    <section className='section-double'>
      <div className='section-content'>
        <h3>Design</h3>
        <h2>Motion</h2>
        <p>
        Hover effects and an animated response to drag and drop operations serve to guide and reinforce user behavior.  
        </p>
      </div>
      <div className='section-img'>
        <img src={SecImg2} alt="Uplink Messages" />
      </div>
    </section>
    <section className='section-double section-reverse'>
      <div className='section-content'>
        <h3>Messages</h3>
        <h2>User Expectation</h2>
        <p>
        Through the design process of the message viewer section of the application, it became clear users have well-defined expectations 
        on how the behavior should be.   An example of this is the scroll direction of the message window.   Testing showed users preferred 
        the scroll to be the reverse of normal page scroll. This direction is consistent with mobile messaging applications. 
        </p>
      </div>
      <div className='section-img'>
        <img src={SecImg3} alt="Uplink Messages" />
      </div>
    </section>
    <section className='section-double'>
      <div className='section-content'>
        <h3>Feature</h3>
        <h2>Filters</h2>
        <p>
        The message screen utilizes filters to narrow the list of conversations.  Selecting from the conversation list will display the conversation 
        in the right-hand panel.
        </p>
      </div>
      <div className='section-img'>
        <img src={SecImg4} alt="Uplink Filters" />
      </div>
    </section>
    <section className='section-double section-reverse'>
      <div className='section-content'>
        <h3>Feature</h3>
        <h2>Activity</h2>
        <p>
        A filterable activity graph allows a user to see utilization quickly for a given range of time and set of employees.
        </p>
      </div>
      <div className='section-img'>
        <img src={SecImg5} alt="Uplink Messages" />
      </div>
    </section>
    <section className='section-double'>
      <div className='section-content'>
        <h3>Feature</h3>
        <h2>Stacked Area Graph</h2>
        <p>
        The stacked area graph is color coordinated with selected employees.   This allows for both a comparative view between employees 
        and also to see how each is contributing to the total.
        </p>
      </div>
      <div className='section-img'>
        <img src={SecImg6} alt="Uplink Graph" />
      </div>
    </section>
  </Layout>
)

export default Blog3

export const frontmatter = {
  title: "Uplink",
  written: "10/12/2018",
  layoutType: "portfolio",
  category: "#ui #ux #development",
  path: 'p-uplink.jpg'
}
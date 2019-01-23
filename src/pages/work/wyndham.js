import React from 'react'

import Layout from '../../components/layout/layout'
import Hero from '../../components/hero/hero'
import Section from '../../components/section/section'
import SectionPara from '../../components/section-parallax/section-parallax'

import HeaderImg from '../../images/wyndham/wyndham-header.jpg'
import HeaderMobileImg from '../../images/wyndham/wyndham-header-mobile.jpg'
import SecImg1 from '../../images/wyndham/wyndham-screens.jpg'
import SecImg2 from '../../images/wyndham/trip-parallax.jpg'
import SecImg3 from '../../images/wyndham/cui-parallax.jpg'
import SecImg4 from '../../images/wyndham/sdlc.jpg'
import SecImg5 from '../../images/wyndham/react.jpg'

const Blog3 = () => (
  <Layout>
    <Hero 
      backgroundColor='rgb(242, 242, 242)'
      backgroundImage={HeaderImg}
      backgroundMobileImage={HeaderMobileImg}
      title='Senior UX/UI'
      date='Sep 2015'
      tags='#ux #job'
    />
    <Section >
      <div>
        <h2>Wyndham</h2>
        <div className='accent-bar' />
        <p>
          I was brought in to Wyndham to drive the UX design, lead the UI construction, and establish a UX/UI practice. I joined the company 
          as they were undertaking one of their largest IT projects to date: Voyager. Voyager is a new platform to replace existing systems 
          including a booking engine, customer management tools, an inventory management system, and various support applications. The project 
          had some infrastructure and back-end pieces in place, but was just beginning the bulk of the design/build phase.
          <br/><br/>
          The project was split into 2 main tracks, a customer facing website (CUI) and an internal web app (TRIP). Both have similar functionality, 
          but very different experiences tailored to the target audience.
        </p>
      </div>
      <img src={SecImg1} alt="Wyndham Screens" />
    </Section>
    <Section backgroundColor='rgb(242, 242, 242)'>
      <div>
        <h2>TRIP</h2>
        <div className='accent-bar' />
        <p>
        TRIP’s main goal is speed. With millions of calls taken each year, a call center agent’s success is directly linked to call times. We were able to 
        deliver a platform that not only reduces average agent call times, but lowered required training time, and improved employee morale. Our approach 
        was heavily dependent on working sessions including both business stakeholders and a group of call center agents. We would elicit “what the application 
        needs to do” from the business stakeholders and combine it with “how would you want it to do it” from the agents resulting in a an application that is 
        both functional and usable.
        <br/><br/>
        As Senior UX/UI, my responsibilities included:
        <br/><br/>
        </p>
        <ul>
          <li>Oversaw, reviewed, approved all design artifacts</li>
          <li>Participated in working sessions</li>
          <li>Lead review sessions</li>
          <li>Produced wireframes/creative comps</li>
          <li>Ensured UX during construction phase</li>
          <li>Drove UI code design</li>
          <li>Delivered HTML/CSS/JS</li>
          <li>Reviewed and approved all UI code</li>
        </ul>
        <br/><br/>
      </div>
    </Section>
    <SectionPara backgroundImage={SecImg2} />
    <Section >
      <div>
        <h2>CUI</h2>
        <div className='accent-bar' />
        <p>
          CUI’s main goal is to get owners on vacations. With strong imagery, clean visual design, and simple navigation, CUI succeeds at putting owners 
          in the vacation mindset while performing many of the same tasks as in TRIP. We worked with business stakeholders, marketing, and brand departments 
          to deliver the necessary functionality in an experience that appeals to a wide demographic of target users.
          <br/><br/>
          As Senior UX/UI, my responsibilities included:
          <br/><br/>
        </p>
        <ul>
          <li>Participated in working sessions</li>
          <li>Produced wireframes/creative comps</li>
          <li>Ensured UX during construction phase</li>
          <li>Participated in construction, code reviews, and bug fixing</li>
        </ul>
        <br/><br/>
      </div>
    </Section>
    <SectionPara backgroundImage={SecImg3} />
    <Section backgroundColor='rgb(35, 96, 159)' color='rgb(255, 255, 255)'>
      <div>
        <h2>Establish a practice</h2>
        <div className='accent-bar' />
        <p>
          Wyndham, specifically Wyndham Vacation Ownership, as an organization has been around for a long time, but as an IT organization, 
          they are relatively young. The IT department prior to Voyager operated primarily as a “run” organization, keeping the systems up and 
          making small improvements along the way. While the company was successful in this, it needed a culture shift to accomplish a project 
          with the scale of Voyager. I was brought in as an integral part of this shift to not only work on the Voyager project, but also lead 
          the transition in the UX/UI spaces.
        </p>
        <br/>
      </div>
    </Section>
    <Section reverse>
      <div>
        <h2>SDLC</h2>
        <div className='accent-bar' />
        <p>
          Before I arrived, there was no formal UX/UI practice. Many business units had never been through UX design before and lacked the parameters 
          of how to utilize the UX and UI teams. To solve this, I created a document outlining the activities and deliverables the UX and UI teams 
          would perform/deliver during each phase of the SDLC. This allowed other departments to understand how, when, and why to engage our team 
          during the design/development process.
        </p>
      </div>
      <img src={SecImg4} alt="SDLC" />
    </Section>
    <Section backgroundColor='rgb(242, 242, 242)'>
      <div>
        <h2>UX Standards</h2>
        <div className='accent-bar' />
        <p>
          I promoted UX standards focused on user centered designs in order to raise the level of the business’ expectations as well as what is to be expected
           of the UX/UI Team. Drove to enterprise UX solutions through Shared libraries, Standard UX and visual design across applications, Tooling Standards, 
           Documentation Standards, Process Standards, and coordination between Teams.
        </p>
      </div>
    </Section>
    <Section >
      <div>
        <h2>UI</h2>
        <div className='accent-bar' />
        <p>
          I elevated the quality of code through teaching, implementing coding standards, and code review. I brought in new technologies to develop standardized, 
          modularized, and reusable code. Based on the evaluations of new technologies, we became a React practice.
        </p>
      </div>
      <img src={SecImg5} alt="SDLC" />
    </Section>
    <Section backgroundColor='rgb(242, 242, 242)' >
      <div>
        <h2>Built a Team</h2>
        <div className='accent-bar' />
        <p>
          I took an active role in building a great team. From the interview and hiring of employees, through the mentorship and development of their potential 
          into skilled resources, I cultivated a team culture of learning and innovation with a true motivation to succeed
        </p>
      </div>
    </Section>
    <Section >
      <div>
        <h2>A Shift in Company Culture</h2>
        <div className='accent-bar' />
        <p>
          My experience from Nielsen & SquirrelMedia pushed me to be a catalyst for change at Wyndham. Lessons learned motivated me to shift the company culture 
          to work like an internal design agency: design focus as a priority, not as an afterthought. Collaborators, such as the business, needed to understand 
          that good UX did not come with added cost or time and could be and should be implemented from the start to demonstrate a higher expectation of 
          “standard.”  Every application deserves to have good design. This shift became the realization that good design was possible and validated the need to continue to 
          improve design company-wide.
        </p>
      </div>
    </Section>
  </Layout>
)

export default Blog3

export const frontmatter = {
  title: "Wyndham - Senior UX/UI",
  written: "09/05/2015",
  layoutType: "portfolio",
  category: "#ux #job",
  path: "https://uxuimike.files.wordpress.com/2017/04/nielsen012.png?w=1180&h=300"
}
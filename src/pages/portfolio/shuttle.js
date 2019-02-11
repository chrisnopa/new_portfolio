import React from 'react'

import Layout from '../../components/layout/layout'

import IntroImg from '../../images/shuttle/intro.jpg'
import SecImg1 from '../../images/shuttle/flowmap.jpg'
import SecImg2 from '../../images/shuttle/layout.jpg'
import SecImg3 from '../../images/shuttle/slide.gif'
import SecImg4 from '../../images/shuttle/screens.jpg'
import SecImg5 from '../../images/shuttle/filters.jpg'
import SecImg6 from '../../images/shuttle/components.jpg'

const Blog3 = () => (
  <Layout>
    <section className='section-double section-intro'>
      <div className='section-content'>
        <h3>Lunar</h3>
        <h2>Shuttle</h2>
        <p>
        Shuttle collects and distributes data.  It began as an internal tool and was being transformed into a SAAS product.  When 
        I began on the project it had a very simple user interface but was mostly a back-end tool.  My role was a complete redesign 
        of the existing experience and create new flows for new features.
        </p>
      </div>
      <div className='section-img'>
        <img src={IntroImg} alt="Headbutt Trivia" />
      </div>
    </section>
    <section className='section-double section-reverse'>
      <div className='section-content'>
        <h3>Approach</h3>
        <h2>Information Architecture</h2>
        <p>
        By far the biggest challenge of Shuttle was its information architecture.  Early testing showed the organizational structure made it difficult to 
        understand.   Via extensive whiteboard sessions, prototyping, and additional testing the concept was simplified to sources, destinations, and 
        leads.  From that point, features could be designed around those concepts.  
        </p>
      </div>
      <div className='section-img'>
        <img src={SecImg1} alt="Shuttle Flowmap" />
      </div>
    </section>
    <section className='section-double'>
      <div className='section-content'>
        <h3>Design</h3>
        <h2>Page Structure</h2>
        <p>
        Page layouts were designed around a contextual informational section on the left and a main work area on the right.  Navigational bar on the far 
        left and header bar with contextual buttons provide consistent interactions throughout the application. 
        </p>
      </div>
      <div className='section-img'>
        <img src={SecImg2} alt="Shuttle Layout" />
      </div>
    </section>
    <section className='section-double section-reverse'>
      <div className='section-content'>
        <h3>Feature</h3>
        <h2>Sidebar</h2>
        <p>
        Page workflows were designed with a drag-and-drop interface via a collapsible side panel.  When opening a sidebar the informational section 
        of the page collapses to maximize available workspace.
        </p>
      </div>
      <div className='section-img'>
        <img src={SecImg3} alt="Shuttle Layout" />
      </div>
    </section>
    <section className='section-double'>
      <div className='section-content'>
        <h3>Feature</h3>
        <h2>Materialish</h2>
        <p>
        Material design and flat design were combined to provide the visual inspiration for the UI.  
        </p>
      </div>
      <div className='section-img'>
        <img src={SecImg4} alt="Shuttle Layout" />
      </div>
    </section>
    <section className='section-double section-reverse'>
      <div className='section-content'>
        <h3>Feature</h3>
        <h2>Tags & Filters</h2>
        <p>
        For list pages, the informational section utilize grouped filters and tags.  Tags are used throughout the system to allow each user to organize 
        their assets according to their use case. 
        </p>
      </div>
      <div className='section-img'>
        <img src={SecImg5} alt="Shuttle Filters" />
      </div>
    </section>
    <section className='section-double'>
      <div className='section-content'>
        <h3>Process</h3>
        <h2>Components</h2>
        <p>
        By leveraging Sketch elements, components, and pages, we were able to speed up the design process,  deliver more consistent UI and be more agile 
        in our response as changes were needed.  Working in a component driven method also aided in the handoff to the React development team.
        </p>
      </div>
      <div className='section-img'>
        <img src={SecImg6} alt="Shuttle Components" />
      </div>
    </section>


  </Layout>
)

export default Blog3

export const frontmatter = {
  title: "Shuttle",
  written: "05/18/2018",
  layoutType: "portfolio",
  category: "#ui #ux #development",
  path: 'p-shuttle.jpg'
}
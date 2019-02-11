import React from 'react'

//import compStyle from './css/nielsen.module.css'
import Layout from '../../components/layout/layout'

import HeaderImg from '../../images/teebox/teebox-intro.jpg'
import SecImg1 from '../../images/teebox/teebox-swipe.gif'
import SecImg2 from '../../images/teebox/teebox-block.jpg'
import SecImg3 from '../../images/teebox/teebox-floating.jpg'

const Blog3 = () => (
  <Layout>
    <section className='section-double section-intro'>
      <div className='section-content'>
        <h3>Teebox</h3>
        <h2>App Design</h2>
        <p>
        Teebox is a mobile application to find and book golf tee times.   My role was to completely redesign the search/browse experience 
        from the ground up.  Competitor apps have very similar experiences to each other so I looked for ways I could differentiate 
        Teebox while still maintaining usability.
        </p>
      </div>
      <div className='section-img'>
        <img src={HeaderImg} alt="Nielsen Screen" />
      </div>
    </section>
    <section className='section-double section-reverse'>
      <div className='section-content'>
        <h3>Approach</h3>
        <h2>Two Way Scroll</h2>
        <p>
        User testing made it pretty clear that users preferred tee times to be grouped by course.  But to accomplish this you either needed 
        to have very long lists or to force users to jump in and out of course ‘detail’ pages.  Neither of these options tested very 
        well.   The solution came from having a ‘two-way’ scroll.   Vertical scrolls between courses and horizontal scrolls between tee 
        times within a given course.   Traditionally horizontal scrolls can be frustrating, so flipbook style animation was added to provide 
        interest and an easy way to do a stepped scroll.
        </p>
      </div>
      <div className='section-img'>
        <img src={SecImg1} alt="Bishop one button" />  
      </div>
    </section>
    <section className='section-double'>
      <div className='section-content'>
        <h3>Design</h3>
        <h2>List</h2>
        <p>
        After some testing information was laid out and given weight based on its importance.  A responsive price graph provides a quick way to 
        scan prices for a given course throughout the day as well as provides a navigational cue when scrolling horizontally.  
        </p>
      </div>
      <div className='section-img'>
        <img src={SecImg2} alt="Nielsen UX Design" /> 
      </div>
    </section>
    <section className='section-double section-reverse'>
      <div className='section-content'>
        <h3>Design</h3>
        <h2>Features</h2>
        <p>
        A type-ahead location search, filters,  and favorites allow a search to be refined.  A scrollable date select allows quick access but 
        can be extended out to a full calendar if needed.
        </p>
      </div>
      <div className='section-img'>
        <img src={SecImg3} alt="Nielsen UX Design" /> 
      </div>
    </section>


  </Layout>
)

export default Blog3

export const frontmatter = {
  title: "Teebox - App Design",
  written: "09/27/2017",
  layoutType: "portfolio",
  category: "#ux #ui #design #project",
  path: 'p-teebox.jpg'
}
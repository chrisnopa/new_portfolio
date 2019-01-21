import React from 'react'

import compStyle from './css/nielsen.module.css'
import Layout from '../../components/layout/layout'
import Hero from '../../components/hero/hero'
import HeaderImg from '../../images/nielsen-header.jpg'
import HeaderMobileImg from '../../images/nielsen-header-mobile.jpg'

const Blog3 = () => (
  <Layout>
    <Hero 
      backgroundColor='rgb(242, 242, 242)'
      backgroundImage={HeaderImg}
      backgroundMobileImage={HeaderMobileImg}
      title='UX Architect'
      date='Aug 2014'
      tags='#ux #job'
    />
    <div className={compStyle.blueguy}>
      <h2>A little bit about Nielsen</h2>
      <div className="accent-bar" />
      <p className={'cozy'}>When I tell people I worked at Nielsen, the response I usually get is, “oh the TV ratings people.” While it is true that they 
      are the “TV ratings people,” a more accurate description of them would probably be the consumer data people. If you need help
      deciding where the best location to open a new store is, or what demographics might be interested in your product Nielsen has
      the data to help answer those questions. But data doesn’t do you any good unless you can interpret it. And that is where I
      came in. I worked as part of the team tasked with developing the tools to allow users to analyze and understand data.
      The team I joined was part of a mature user experience design practice, one that I would describe as ‘doing it the right way.” 
      With data being at the core of Nielsen’s business, it was naturally a driving force in the practice as well. The design process 
      was heavily dependent on user testing and feedback. It wasn’t enough to think we improved the user experience, we needed to prove 
      it with data. As a UX Architect, it was my primary responsibility to translate the business needs into designs that could then be 
      user tested, interpret those tests, and use them to deliver better designs.
      </p>
    </div>
  </Layout>
)

export default Blog3

export const frontmatter = {
  title: "Nielsen - UX Architect",
  written: "12/04/2014",
  layoutType: "portfolio",
  category: "#ux #job",
  path: "https://uxuimike.files.wordpress.com/2017/04/nielsen012.png?w=1180&h=300"
}
import React from 'react'

import compStyle from './css/nielsen.module.css'
import Layout from '../../components/layout/layout'
import Hero from '../../components/hero/hero'
import Headerimg from '../../images/nielsen-header.jpg'

const Blog3 = () => (
  <Layout>
    <Hero 
      backgroundColor='rgb(242, 242, 242)'
      backgroundImage={Headerimg}
    >
      <img src={Headerimg} alt="Nielsen" /> 
    </Hero>
    <div className={compStyle.blueguy}>
      
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
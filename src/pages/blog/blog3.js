import React from 'react'
import { Link } from 'gatsby'

import Layout from '../../components/layout'

const Blog3 = () => (
  <Layout>
    <h1>Blog</h1>
    <p>Blog me up Three</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Blog3

export const frontmatter = {
  title: "The three blind mice!",
  written: "09/28/2018",
  layoutType: "blog",
  category: "#ux #ui #winner",
  path: "https://uxuimike.files.wordpress.com/2017/04/nielsen012.png?w=1180&h=300"
}